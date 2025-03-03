import React, { useState, useEffect } from "react";
import axios from "axios";
import Section from "../../common/Section/Section";
import BackgroundImage from "../../../assets/images/testimonalBackground.webp";
import './HomeTestimonalSection.css';
import Button from "../../common/Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Testimonial {
    id: number;
    full_name: string;
    designation: string;
    comment: string;
    image_url: string;
}

const TestimonialCard: React.FC<Testimonial> = ({ id, full_name, designation, comment, image_url }) => {
    const getCompleteImageUrl = (baseUrl: string, id: number) => {
        return `${import.meta.env.VITE_BACKEND_URL}${baseUrl}${id}.webp`;
    };

    return (
        <div className="home-testimonial-card">
            <div className="home-testimonial-card-content">
                <span>{full_name}</span>
                <span>{designation}</span>
                <p>{comment}</p>
            </div>
            <div className="home-testimonial-card-image">
                <img src={getCompleteImageUrl(image_url, id)} alt={full_name} />
            </div>
        </div>
    );
};

const HomeTestimonalSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
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

    useEffect(() => {
        if (testimonials.length === 0) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [testimonials]);

    const handlePrevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) =>
            (prev + 1) % testimonials.length
        );
    };

    return (
        <Section
            backgroundImage={BackgroundImage}
            backgroundColor="#EAEAEA"
            className="home-testimonial-section"
        >
            <div className="home-testimonial-section-container">
                <h1>Hear it from our <span>Candidates</span></h1>
                <h3>We've helped <span>2,000+</span> candidates of all <br /> sorts of backgrounds land great jobs</h3>
                <Button text='Join the Network' to='/contact-us' />

                {error && <p className="error-message">{error}</p>}

                {testimonials.length > 0 && (
                    <div className="home-testimonial-carousel">
                        <button
                            className="home-testimonial-nav-button prev"
                            onClick={handlePrevSlide}
                            aria-label="Previous testimonial"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>

                        <div className="home-testimonial-cards">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className={`home-testimonial-slide ${index === currentSlide ? 'active' : ''}`}
                                >
                                    <TestimonialCard {...testimonial} />
                                </div>
                            ))}
                        </div>

                        <button
                            className="home-testimonial-nav-button next"
                            onClick={handleNextSlide}
                            aria-label="Next testimonial"
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                )}
            </div>
        </Section>
    );
};

export default HomeTestimonalSection;