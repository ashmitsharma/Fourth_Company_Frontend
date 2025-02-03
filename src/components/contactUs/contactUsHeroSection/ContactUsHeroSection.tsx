import Section from "../../common/Section/Section";
import "./ContactUsHeroSection.css";
import NewyYorkBackground from "../../../assets/images/new-york-background.webp";

const ContactUsHeroSection = () => {
    return (
        <Section
            backgroundImage={NewyYorkBackground}
            className="contact-us-hero-section">
            <div className="container contact-us-hero-container">
                <h1>Contact Us</h1>
                <div className="contact-us-hero-description">
                    <p>
                        Hashtech Info is here to provide tailored solutions to meet your needs. Let’s connect and explore how we can assist you.                    </p>
                </div>
            </div>
        </Section>
    );
};

export default ContactUsHeroSection;