import GradientBar from "../components/common/Gradient/GradientBar";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/footer/Footer";
import ContactUSFormandDetailSection from "../components/contactUs/contactUsFormandDetailSection/ContactUsFormandDetailSection";
import ContactUsHeaderSection from "../components/contactUs/contactUsHeaderSection/ContactUsHeaderSection";
import ContactUsHeroSection from "../components/contactUs/contactUsHeroSection/ContactUsHeroSection";
import FAQAccordion from "../components/contactUs/faqSection/FAQAccordion";
import OtherWaysToConnectSection from "../components/contactUs/otherWaysToConnectSection/OtherWaysToConnectSection";
import SEOMetaTags from "../components/common/SEO/SEOMetaTags";

const ContactUs = () => {
  return (
    <>
      <SEOMetaTags 
        title="Contact Us - HashTech Info | Get Career Support"
        description="Get in touch with HashTech Info for expert career guidance, job placement services, and visa support. Contact our team for personalized assistance with your career goals."
        keywords="contact HashTech Info, career support, job placement assistance, career guidance, visa support contact"
        canonical="https://hashtechinfo.com/contact-us"
      />
      <GradientBar />
      <Header />
      <ContactUsHeaderSection />
      <ContactUsHeroSection />
      <ContactUSFormandDetailSection />
      <OtherWaysToConnectSection />
      <FAQAccordion />
      <Footer />
    </>
  );
};

export default ContactUs;