import React from "react";
import './OurPlansSection.css';
import Section from "../../common/Section/Section";
import BackgroundImage from "../../../assets/images/backgroundImage.webp";
import PlanCard from "../planCard/PlanCard";

const OurPlans: React.FC = () => {
    const plans = [
        {
            title: "Basic Plan",
            info: `Includes:
• Initial Consultation
• Profile Enhancement (Resume and LinkedIn makeover)
• Job Matching and Applications`
        },
        {
            title: "Standard Plan",
            info: `Includes everything in the Basic Plan, plus:
• Interview Preparation (Training, mock interviews, and feedback)
• Interview Coordination (Arranging interviews and ongoing support)
• Offer Negotiation
• Post-Placement Follow-up
• Visa Procedure Guidance`
        },
        {
            title: "Premium Plan",
            info: `Includes everything in the Standard Plan, plus:
• Dedicated Recruiters for highly targeted job applications
• Enhanced Job Matching with exclusive opportunities
• Priority Support with expedited responses and personalized check-ins`
        },
        {
            title: "Essentials Plan",
            info: `Includes:
• Initial Consultation
• Profile Enhancement (Resume and LinkedIn makeover) only`
        },
        {
            title: "Interview Prep Plan",
            info: `Includes:
• Initial Consultation
• Interview Preparation (Mock interviews, feedback sessions, and customized coaching)
• Tips on managing interview anxiety and enhancing communication skills`
        },
        {
            title: "Customized Plan",
            info: `Design your perfect plan by selecting services that match your specific needs:
• Mix and match services from any plan
• Flexible options to suit your career goals
• Personalized combination of services
• Pay only for what you need`
        }
    ];
    return (
        <Section
            backgroundColor="#EAEAEA"
            backgroundImage={BackgroundImage}
            className="our-plans-section"
        >
            <div className="container our-plans-container">
                <h1 className="our-plan-title">Our Plans</h1>
                <div className="our-plan-grid">
                    {plans.map((plan, index) => (
                        <PlanCard key={index} title={plan.title} info={plan.info} />
                    ))}
                </div>

            </div>
        </Section>
    );
};

export default OurPlans;