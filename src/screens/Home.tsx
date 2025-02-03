import GradientBar from "../components/common/Gradient/GradientBar";
import Header from "../components/common/Header/Header";
import HeroSection from "../components/home/heroSection/HeroSection";
import InfoSection from "../components/home/infoSection/InfoSection";
import RecentCandidates from "../components/home/recentCandidates/RecentCandidates";
import CTA from "../components/common/cta/CTA";
import Footer from "../components/common/footer/Footer";
import SEOMetaTags from "../components/common/SEO/SEOMetaTags";
import HomeTestimonalSection from "../components/home/testimonialSection/HomeTestimonalSection";

const Home = () => {
    return (
        <>
            <SEOMetaTags 
                title="HashTech Info - Career Development & Staffing Solutions"
                description="Transform your career with HashTech Info's expert services in job placement, resume optimization, interview coaching, and visa support for IT, engineering, and digital marketing professionals."
                keywords="career development, job placement, resume optimization, interview coaching, IT jobs, engineering careers, digital marketing jobs, visa support"
                canonical="https://hashtechinfo.com/"
            />
            <GradientBar />
            <Header />
            <HeroSection />
            <InfoSection />
            <HomeTestimonalSection />
            <RecentCandidates />
            <CTA />
            <Footer />
        </>
    );
};

export default Home;