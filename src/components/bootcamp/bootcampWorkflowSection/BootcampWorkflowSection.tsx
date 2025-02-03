import Section from "../../common/Section/Section";
import Design2 from "../../../assets/images/backgroundDesign2.webp";
import TabularStructure from "../../common/tabularStructure/TabularStructure";
import './BootcampWorkflowSection.css';

const BootcampWorkflowSection = () => {
    const steps = [
        {
          title: "1. Initial Consultation",
          description: [
            "Discuss career goals, skills, and preferences.",
            "Provide a clear overview of services and fees.",
          ],
        },
        {
          title: "2. Profile Enhancement",
          description: [
            "Optimize your resume and LinkedIn profile to highlight strengths.",
            "Conduct mock interviews with personalized feedback.",
          ],
        },
        {
          title: "3. Job Matching & Applications",
          description: [
            "Identify job opportunities aligned with your skills and goals.",
            "Offer tailored cover letter and application support.",
          ],
        },
        {
          title: "4. Interview Coordination",
          description: [
            "Schedule interviews that fit your availability.",
            "Provide ongoing guidance through the process.",
          ],
        },
        {
          title: "5. Offer Negotiation",
          description: [
            "Assist with evaluating offers and negotiating terms.",
          ],
        },
        {
          title: "6. Post-Placement Support",
          description: [
            "Help with transitioning into your new role.",
            "Follow up to ensure satisfaction and resolve concerns.",
          ],
        },
        {
          title: "7. Visa Assistance",
          description: [
            "Guide international candidates through visa options and documentation.",
          ],
        },
      ];

    return (
        <Section
            backgroundColor="#EAEAEA"
            designRight={Design2}
            className="bootcamp-workflow-section"
        >
            <div className="container bootcamp-workflow-container">
                <h1>Workflow</h1>
                <TabularStructure steps={steps} />
            </div>
        </Section>
    );
};

export default BootcampWorkflowSection;