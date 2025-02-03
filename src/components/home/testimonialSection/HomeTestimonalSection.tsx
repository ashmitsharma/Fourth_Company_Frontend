import React, { useState, useEffect } from "react";
import Section from "../../common/Section/Section";
import BackgroundImage from "../../../assets/images/testimonalBackground.webp";
import './HomeTestimonalSection.css';
import Button from "../../common/Button/Button";
import SampleTestimonialImage from "../../../assets/images/sampleTestimonialImage.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Testimonial {
    name: string;
    position: string;
    description: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        name: "John Doe",
        position: "UI/UX Designer",
        description: "HashTech's training program was transformative. Their personalized approach and industry-focused curriculum helped me secure my dream role. The mentors provided exceptional guidance throughout.",
        image: SampleTestimonialImage
    },
    {
        name: "Sarah Smith",
        position: "Full Stack Developer",
        description: "The support from HashTech goes beyond technical training. Their career guidance and interview preparation were instrumental in my success. I'm now working at a top tech company.",
        image: SampleTestimonialImage
    },
    {
        name: "Michael Chen",
        position: "Data Engineer",
        description: "I can't thank HashTech enough for their comprehensive training. The hands-on projects and real-world experience were exactly what I needed. Within weeks of completing the program, I received multiple offers.",
        image: SampleTestimonialImage
    }
];

const TestimonialCard: React.FC<Testimonial> = ({ name, position, description, image }) => {
    return (
        <div className="home-testimonial-card">
            <div className="home-testimonial-card-content">
                <span>{name}</span>
                <span>{position}</span>
                <p>{description}</p>
            </div>
            <div className="home-testimonial-card-image">
                <img src={image} alt={name} />
            </div>
        </div>
    );
};

const HomeTestimonalSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

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
                <h3>We've helped <span>2,000+</span> candidates of all <br/> sorts of backgrounds land great jobs</h3>
                <Button text='Join the Network' to='/contact-us' />
                
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
                                key={index}
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

                {/* <div className="home-testimonial-indicators">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`home-testimonial-indicator ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div> */}
            </div>
        </Section>
    );
};

export default HomeTestimonalSection;