import BootcampAndCourcesSection from "../components/bootcamp/bootcampAndCourcesSection/BootcampAndCourcesSection";
import BootcampCandidateSuccessSection from "../components/bootcamp/bootcampCandidateSuccessSection/BootcampCandidateSuccessSection";
import BootcampHeroSection from "../components/bootcamp/bootcampHeroSection/BootcampHeroSection";
import BootcampJoinSection from "../components/bootcamp/bootcampJoinSection/BootcampJoinSection";
import BootcampStepsSection from "../components/bootcamp/bootcampStepsSection/BootcampStepsSection";
import BootcampTestimonialSection from "../components/bootcamp/bootcampTestimonialSection/BootcampTestimonialSection";
import BootcampWorkflowSection from "../components/bootcamp/bootcampWorkflowSection/BootcampWorkflowSection";
import GradientBar from "../components/common/Gradient/GradientBar";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/footer/Footer";
import SEOMetaTags from "../components/common/SEO/SEOMetaTags";

const Bootcamp = () => {
    return (
        <>
            <SEOMetaTags 
                title="Bootcamps - HashTech Info | Industry-Focused Skills Development"
                description="Empower your career with HashTech Info's targeted training programs and bootcamps. Get hands-on learning, expert guidance, and develop in-demand skills for the dynamic job market."
                keywords="training programs, bootcamps, skills development, hands-on learning, career advancement, industry skills, expert guidance, job market skills, career training, professional development"
                canonical="https://hashtechinfo.com/bootcamp"
            />
            <GradientBar />
            <Header />
            <BootcampHeroSection />
            <BootcampStepsSection />
            <BootcampAndCourcesSection />
            <BootcampWorkflowSection />
            <BootcampCandidateSuccessSection />
            <BootcampTestimonialSection />
            <BootcampJoinSection />
            <Footer />
        </>
    );
};

export default Bootcamp;