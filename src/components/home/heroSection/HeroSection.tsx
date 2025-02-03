import React from 'react';
import background from '../../../assets/images/backgroundImage.webp';
import heroImage from '../../../assets/images/hero-image.webp';
import Section from '../../common/Section/Section';
import './Hero.css';
import Button from '../../common/Button/Button';

const HeroSection = () => {
  return (
    <Section 
      backgroundImage={background}
      designRight={heroImage}
      className="hero-section"
    >
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transform Your <span>Career</span>
              <br />
              with Expert Staffing and Development Solutions
            </h1>
            <p className="hero-description">
              Your gateway to career success, from job search strategies to mock interviews and everything in between.
            </p>
            <Button text='Explore' to='/contact-us' className='hero-button'/>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
