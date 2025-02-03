import React from 'react';
import Section from '../../common/Section/Section';
import rectangle11 from '../../../assets/images/backgroundDesign1.webp';
import './InfoSection.css';
import ServiceCard from '../../common/ServiceCard/ServiceCard';
import JobSearchIcon from '../../../assets/icons/job_icon.png';
import ResumeIcon from '../../../assets/icons/resume_icon.png';
import InterviewIcon from '../../../assets/icons/interview_icon.png';
import Button from '../../common/Button/Button';

const InfoSection = () => {
  return (
    <Section
      backgroundColor="#EAEAEA"
      designLeft={rectangle11}
      className="info-section"
    >
      <div className="container">
        <div className="info-content">
          <div className='cards-container'>
            <div className='single-card'>
              <ServiceCard imageUrl={JobSearchIcon} title='Job Search Stategies' altText='Job Search' flipText='Find your dream job' />

            </div>
            <div className='stacked-cards'>
              <ServiceCard imageUrl={ResumeIcon} title='Resume Optimization' altText='Resume' flipText='Create a standout resume' />
              <ServiceCard imageUrl={InterviewIcon} title='Mock Interviews' altText='Mock Interview' flipText='Prepare for interviews' />
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
