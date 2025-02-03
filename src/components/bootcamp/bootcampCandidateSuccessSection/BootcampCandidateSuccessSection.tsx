import Section from "../../common/Section/Section";
import Design1 from "../../../assets/images/backgroundDesign1.webp"
import RecentCompaniesDesktop from "../../../assets/images/recentCompaniesDesktop.webp";
import RecentCompaniesMobile from "../../../assets/images/recentCompaniesMobile.webp";
import './BootcampCandidateSuccessSection.css';

const BootcampCandidateSuccessSection = () => {
    return (
        <Section
        backgroundColor="#EAEAEA"
        designLeft={Design1}
        className="candidate-success-section"
    >
        <div className="candidates-success-container">
            <h1 className="candidates-success-title">Many Students Have Successfully Launched Their Careers At</h1>
            <img src={RecentCompaniesDesktop} alt="Recent Companies" className="recent-companies-desktop" />
            <img src={RecentCompaniesMobile} alt="Recent Companies Mobile" className="recent-companies-mobile" />
        </div>
    </Section>
    );
};

export default BootcampCandidateSuccessSection;