import GradientBar from "../components/common/Gradient/GradientBar";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/footer/Footer";
import ServicesHeroSection from "../components/services/servicesHeroSection/ServicesHeroSection";
import OurServiceSection from "../components/services/ourServiceSection/OurServiceSection";
import CTA from "../components/common/cta/CTA";
import OurPlans from "../components/services/ourPlansSection/OurPlansSection";
import OurProcessSection from "../components/services/ourProcessSection/OurProcessSection";
import StatsCounter from "../components/services/statsCounter/StatsCounter";
import SEOMetaTags from "../components/common/SEO/SEOMetaTags";

const Services = () => {
    return (
        <>
            <SEOMetaTags 
                title="Our Services - HashTech Info | Career Development Solutions"
                description="Explore HashTech Info's comprehensive career services including resume optimization, interview preparation, job placement, and visa support services for IT and engineering professionals."
                keywords="career services, resume writing, interview preparation, job placement services, visa support, IT careers, engineering jobs"
                canonical="https://hashtechinfo.com/services"
            />
            <GradientBar />
            <Header />
            <ServicesHeroSection />
            <StatsCounter />
            <OurServiceSection />
            <OurPlans />
            <OurProcessSection />
            <CTA />
            <Footer />
        </>
    );
};

export default Services;