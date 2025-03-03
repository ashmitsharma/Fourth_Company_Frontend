import { useState, useEffect } from "react";
import axios from "axios";
import Section from "../../common/Section/Section";
import BackgroundDesign from "../../../assets/images/backgroundDesign1.webp";
import './OurServiceSection.css';
import ServiceCard from "../../common/ServiceCard/ServiceCard";

interface Service {
    ID: number;
    Service_name: string;
    URL: string;
    logoImage: string;
    smallDescription: string;
}

const OurServiceSection = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/Domains_url`, {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
                    }
                });
                setServices(response.data);
            } catch (err) {
                setError("Failed to fetch services");
                console.error("Error fetching services:", err);
            }
        };

        fetchServices();
    }, []);

    return (
        <Section
            backgroundColor="#EAEAEA"
            designLeft={BackgroundDesign}
            className="our-service-section"
        >
            <div className="our-service-container">
                <h1 className="our-service-title">Our Services</h1>
                {error && <p className="error-message">{error}</p>}
                <div className="service-cards">
                    {services.map((service) => (
                        <ServiceCard 
                            key={service.ID}
                            id={service.ID}
                            imageUrl={service.logoImage} 
                            title={service.Service_name} 
                            URL={service.URL}
                            altText={service.Service_name} 
                            flipText={service.smallDescription}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default OurServiceSection;