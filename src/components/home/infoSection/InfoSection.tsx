import { useState, useEffect } from 'react';
import axios from 'axios';
import Section from '../../common/Section/Section';
import rectangle11 from '../../../assets/images/backgroundDesign1.webp';
import './InfoSection.css';
import ServiceCard from '../../common/ServiceCard/ServiceCard';
import Button from '../../common/Button/Button';

interface Service {
    ID: number;
    Service_name: string;
    URL: string;
    logoImage: string;
    smallDescription: string;
}

const InfoSection = () => {
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

  // Filter services based on Service_name
  const jobSearchService = services.find(service => 
    service.Service_name.toLowerCase().includes('job matching')
  );
  
  const resumeService = services.find(service => 
    service.Service_name.toLowerCase().includes('resume optimization')
  );
  
  const interviewService = services.find(service => 
    service.Service_name.toLowerCase().includes('mock interview')
  );

  return (
    <Section
      backgroundColor="#EAEAEA"
      designLeft={rectangle11}
      className="info-section"
    >
      <div className="container">
        <div className="info-content">
          <div className='cards-container'>
            {error && <p className="error-message">{error}</p>}
            <div className='single-card'>
              {jobSearchService && (
                <ServiceCard 
                  id={jobSearchService.ID}
                  imageUrl={jobSearchService.logoImage} 
                  title={jobSearchService.Service_name} 
                  URL={jobSearchService.URL} 
                  altText={jobSearchService.Service_name} 
                  flipText={jobSearchService.smallDescription} 
                />
              )}
            </div>
            <div className='stacked-cards'>
              {resumeService && (
                <ServiceCard 
                  id={resumeService.ID}
                  imageUrl={resumeService.logoImage} 
                  title={resumeService.Service_name} 
                  URL={resumeService.URL} 
                  altText={resumeService.Service_name} 
                  flipText={resumeService.smallDescription} 
                />
              )}
              {interviewService && (
                <ServiceCard 
                  id={interviewService.ID}
                  imageUrl={interviewService.logoImage} 
                  title={interviewService.Service_name} 
                  URL={interviewService.URL} 
                  altText={interviewService.Service_name} 
                  flipText={interviewService.smallDescription} 
                />
              )}
            </div>
          </div>

          <div className="info-text">
            <h1 className='info-title'>
              Unlock <span>Career Success</span> with Our Expertise
            </h1>
            <p className='info-description'>
              Comprehensive services that guide you every step of the way. Empower your career with expert job search strategies, customized resume optimization, and personalized interview preparation—designed to help you land your dream job with confidence.
            </p>
            <Button text='Get Started' to='/contact-us' />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default InfoSection;
