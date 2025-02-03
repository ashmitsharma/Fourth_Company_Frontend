import Section from "../../common/Section/Section";
import "./BootcampTestimonialSection.css";

interface Testimonial {
    image: string;
    description: string[];
}

const testimonialData: Testimonial[] = [
    {
        image: "https://randomuser.me/api/portraits/women/40.jpg",
        description: [
            "Sarah Johnson",
            "Full Stack Developer at TechCorp Solutions | Graduated from Advanced Web Development Bootcamp",
            "The bootcamp transformed my career from a marketing specialist to a full-stack developer. The hands-on projects and mentoring were invaluable."
        ]
    },
    {
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        description: [
            "Michael Chen",
            "Data Scientist at DataMinds Analytics | AI & Machine Learning Bootcamp Alumni",
            "Coming from a mathematics background, this bootcamp gave me the practical skills I needed. Now I'm leading AI projects at my company."
        ]
    }
];

const BootcampTestimonial: React.FC<Testimonial> = ({ image, description }) => {
    return (
        <div className="bootcamp-testimonial">
            <div className="bootcamp-testimonial-image">
                <img src={image} alt={description[0]} />
            </div>
            <div className="bootcamp-testimonial-description">
                <span>{description[0]}</span>
                <span>{description[1]}</span>
                <p className="testimonial-detail">{description[2]}</p>
            </div>
        </div>
    );
};

const BootcampTestimonialSection = () => {
    return (
        <Section
            backgroundColor="#EAEAEA"
            className="bootcamp-testimonial-section"
        >
            <div className="container bootcamp-testimonial-container">
                <h1 className="bootcamp-testimonial-title">
                    Hear it from our <span>Students</span>
                </h1>
                <div className="bootcamp-testimonials">
                    {testimonialData.map((testimonial, index) => (
                        <BootcampTestimonial
                            key={index}
                            image={testimonial.image}
                            description={testimonial.description}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default BootcampTestimonialSection;