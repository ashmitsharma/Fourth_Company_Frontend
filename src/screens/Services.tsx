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
                title="Services & Plans - HashTech Info | From Application to Acceptance"
                description="Comprehensive career development services including initial consultation, profile enhancement, interview preparation, job matching, offer negotiation, and visa support. Choose from Basic, Standard, Premium, and specialized plans."
                keywords="career services, profile enhancement, resume makeover, LinkedIn optimization, interview preparation, job matching, offer negotiation, visa support, career consultation, mock interviews, career plans, career development process"
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