import React from 'react';
import Section from '../../common/Section/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGraduationCap, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import './BootcampStepsSection.css';

interface StepProps {
    icon: any;
    title: string;
    isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ icon, title, isLast }) => {
    return (
        <div className="bootcamp-step">
            <div className="step-circle">
                <FontAwesomeIcon icon={icon} className="step-icon" />
            </div>
            {!isLast && <div className="step-connector" />}
            <div className="bootcamp-step-title">{title}</div>
        </div>
    );
};

const BootcampStepsSection = () => {
    const steps = [
        { icon: faUsers, title: "Join Us" },
        { icon: faGraduationCap, title: "Learn & Grow" },
        { icon: faHandHoldingDollar, title: "Get Placed" }
    ];

    return (
        <Section 
        backgroundColor="#EAEAEA"
        className="bootcamp-steps-section">
            <div className="container bootcamp-steps-container">
                {/* <h2 className="bootcamp-steps-title">How It Works</h2> */}
                <div className="bootcamp-steps">
                    {steps.map((step, index) => (
                        <Step 
                            key={index}
                            icon={step.icon}
                            title={step.title}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default BootcampStepsSection;