import React from 'react';
import './ServiceCard.css';

interface ServiceCardProps {
  imageUrl: string;
  title: string;
  altText?: string;
  flipText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  imageUrl, 
  title, 
  altText,
  flipText 
}) => {
  return (
    <div className="service-card-container">
      <div className="service-card shadow">
        <div className="service-card-front d-flex flex-column align-items-center justify-content-center">
          <img src={imageUrl} alt={altText || title} className="img-fluid" />
          <h3 className="service-card-title">{title}</h3>
        </div>
        <div className="service-card-back d-flex flex-column align-items-center justify-content-center">
          <img src={imageUrl} alt={altText || title} className="img-fluid" />
          <p className="flip-text mb-0">{flipText}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;