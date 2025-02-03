import Section from "../../common/Section/Section";
import BackgroundImage from "../../../assets/images/backgroundImage.webp";
import './ServicesHeroSection.css';
import ServicesHeroImage from '../../../assets/images/servicesHeroImage.webp';
const ServicesHeroSection = () => {
    return (
        <Section
            backgroundImage={BackgroundImage}
            backgroundColor="#EAEAEA"
            className="services-hero-section"
        >
            <div className="container services-hero-container">
                <div className="services-hero-content">
                    <h1 className="services-hero-title">
                    Our <span>Commitment</span> to Your Career
                    </h1>
                    <p className="services-hero-description">
                    At HashTech Info, we are dedicated to bridging the gap between ambitious talent and their dream careers. Our tailored approach helps clients navigate the complexities of today’s job market, turning challenges into opportunities. Our multi-step process guides you from application to acceptance, making your career journey smoother and more successful.
                    </p>
                </div>
                <div className="services-hero-images">
                    <img
                        src={ServicesHeroImage}
                        alt="Services Hero Image"
                        className="services-hero-image"
                    />
                </div>
                
            </div>
            
        </Section>
        
    );
};

export default ServicesHeroSection;