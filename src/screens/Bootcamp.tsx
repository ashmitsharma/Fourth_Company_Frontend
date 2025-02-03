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

const Bootcamp = () => {
    return (
        <>
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