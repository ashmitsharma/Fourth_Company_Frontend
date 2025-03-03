import React, { useState, useEffect } from "react";
import axios from "axios";
import Section from "../../common/Section/Section";
import "./BootcampTestimonialSection.css";

interface Testimonial {
    id: number;        
    full_name: string;  
    designation: string;
    comment: string;    
    image_url: string;  
}

const BootcampTestimonial: React.FC<Testimonial> = ({id, full_name, designation, comment, image_url }) => {
    const getCompleteImageUrl = (baseUrl: string, id: number) => {
        return `${import.meta.env.VITE_BACKEND_URL}${baseUrl}${id}.webp`;
    };
    
    return (
        <div className="bootcamp-testimonial">
            <div className="bootcamp-testimonial-image">
                <img src={getCompleteImageUrl(image_url, id)} alt={full_name} />
            </div>
            <div className="bootcamp-testimonial-description">
                <span>{full_name}</span>
                <span>{designation}</span>
                <p className="testimonial-detail">{comment}</p>
            </div>
        </div>
    );
};

const BootcampTestimonialSection = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}`, {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
                    }
                });
                setTestimonials(response.data);
            } catch (err) {
                setError("Failed to fetch testimonials");
                console.error("Error fetching testimonials:", err);
            }
        };

        fetchTestimonials();
    }, []);

    return (
        <Section
            backgroundColor="#EAEAEA"
            className="bootcamp-testimonial-section"
        >
            <div className="container bootcamp-testimonial-container">
                <h1 className="bootcamp-testimonial-title">
                    Hear it from our <span>Students</span>
                </h1>
                {error && <p className="error-message">{error}</p>}
                <div className="bootcamp-testimonials">
                    {testimonials.map((testimonial) => (
                        <BootcampTestimonial
                            key={testimonial.id}
                            {...testimonial}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default BootcampTestimonialSection;