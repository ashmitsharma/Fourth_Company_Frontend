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
                title="HashTech Info"
                description="Transform your career with HashTech Info's expert staffing and development solutions. Get personalized job search strategies, resume optimization, and interview preparation to accelerate your professional growth."
                keywords="career transformation, staffing solutions, job search strategies, resume optimization, interview preparation, mock interviews, career coaching, professional development, career success"
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