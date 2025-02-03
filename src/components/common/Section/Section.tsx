import React from 'react';
import './Section.css';

interface SectionProps {
  children: React.ReactNode;
  backgroundColor?: string;
  backgroundImage?: string;
  designLeft?: string;
  designRight?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  backgroundColor,
  backgroundImage,
  designLeft,
  designRight,
  className = ''
}) => {
  const sectionStyle = {
    backgroundColor,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
  };

  return (
    <section 
      className={`custom-section ${className}`}
      style={sectionStyle}
    >
      {designLeft && (
        <img 
          src={designLeft} 
          alt="" 
          className="section-design section-design-left" 
        />
      )}
      {designRight && (
        <img 
          src={designRight} 
          alt="" 
          className="section-design section-design-right" 
        />
      )}
      {children}
    </section>
  );
};

export default Section;
