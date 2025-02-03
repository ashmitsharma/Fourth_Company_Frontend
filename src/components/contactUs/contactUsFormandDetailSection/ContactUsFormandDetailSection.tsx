import Section from "../../common/Section/Section";
import ContactUsDetails from "../details/ContactUsDetails";
import ContactUsForm from "../form/ContactUsForm";
import './ContactUsFormandDetailSection.css';

const ContactUSFormandDetailSection = () => {
    return (
        <Section 
        backgroundColor="#EAEAEA"
            className="contact-us-form-and-detail-section"
    >
            <div className="contact-us-form-and-detail-section-container">
                <ContactUsForm />
                <ContactUsDetails />
            </div>
        </Section>
    );
};

export default ContactUSFormandDetailSection;