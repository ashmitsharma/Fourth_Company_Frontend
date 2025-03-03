import React from 'react';
import './ServiceCard.css';

interface ServiceCardProps {
  id: number;
  imageUrl: string;
  title: string;
  URL: string;
  altText?: string;
  flipText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  imageUrl,
  title,
  URL,
  altText,
  flipText
}) => {
  const getCompleteImageUrl = (baseUrl: string, id: number) => {
    return `${import.meta.env.VITE_BACKEND_URL}${baseUrl}${id}.svg`;
  };

  return (
    <a href={URL} className="service-card-link">
      <div className="service-card-container">
        <div className="service-card shadow">
          <div className="service-card-front d-flex flex-column align-items-center justify-content-center">
            <img src={getCompleteImageUrl(imageUrl, id)} alt={altText || title} className="img-fluid" />
            <h3 className="service-card-title">{title}</h3>
          </div>
          <div className="service-card-back d-flex flex-column align-items-center justify-content-center">
            <img src={getCompleteImageUrl(imageUrl, id)} alt={altText || title} className="img-fluid" />
            <p className="flip-text mb-0">{flipText}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ServiceCard;