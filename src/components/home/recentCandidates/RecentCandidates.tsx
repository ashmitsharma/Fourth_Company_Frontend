import Section from "../../common/Section/Section";
import BackgroundImage from "../../../assets/images/backgroundImage.webp";
import RecentCompaniesDesktop from "../../../assets/images/recentCompaniesDesktop.webp";
import RecentCompaniesMobile from "../../../assets/images/recentCompaniesMobile.webp";
import './RecentCandidates.css';

const RecentCandidates = () => {
    return (
        <Section
            backgroundColor="#EAEAEA"
            backgroundImage={BackgroundImage}
            className="recent-candidates"
        >
            <div className="recent-candidates-container">
                <h3 className="recent-candidates-title">Our most <span>recent</span> candidates work for the following <span>companies</span></h3>
                <img src={RecentCompaniesDesktop} alt="Recent Companies" className="recent-companies-desktop" />
                <img src={RecentCompaniesMobile} alt="Recent Companies Mobile" className="recent-companies-mobile" />
            </div>
        </Section>
    );
};

export default RecentCandidates;