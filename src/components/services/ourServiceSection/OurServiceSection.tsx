import Section from "../../common/Section/Section";
import BackgroundDesign from "../../../assets/images/backgroundDesign1.webp";
import './OurServiceSection.css';
import OSResumeIcon from '../../../assets/icons/osResumeIcon.webp';
import OSProfileIcon from '../../../assets/icons/osProfileIcon.webp';
import OSJobIcon from '../../../assets/icons/osJobIcon.webp';
import OSPassportIcon from '../../../assets/icons/osPassportIcon.webp';
import OSCommunicationIcon from '../../../assets/icons/osCommunicationIcon.webp';
import OSOfferIcon from '../../../assets/icons/osOfferIcon.webp';
import ServiceCard from "../../common/ServiceCard/ServiceCard";

const services = [
    { icon: OSResumeIcon, title: "Resume Optimization" },
    { icon: OSProfileIcon, title: "Profile Enhancement" },
    { icon: OSJobIcon, title: "Job Matching" },
    { icon: OSPassportIcon, title: "Mock Interview Support" },
    { icon: OSCommunicationIcon, title: "Communication Skills Enhancement" },
    { icon: OSOfferIcon, title: "Offer Negotiation" },
  ];

const OurServiceSection = () => {
    return (
        <Section
            backgroundColor="#EAEAEA"
            designLeft={BackgroundDesign}
            className="our-service-section"
        >
            <div className="our-service-container">
                <h1 className="our-service-title">Our Services</h1>
                <div className="service-cards">
                    {services.map((service) => (
                        <ServiceCard 
                        imageUrl={service.icon} 
                        title={service.title} 
                        altText={service.title} 
                        flipText={service.title}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default OurServiceSection;