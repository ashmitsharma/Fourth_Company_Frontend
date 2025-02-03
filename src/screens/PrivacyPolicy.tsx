import PrivacyPolicyContent from '../components/privacyPolicy/PrivacyPolicyContent';
import GradientBar from '../components/common/Gradient/GradientBar';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/footer/Footer';
import SEOMetaTags from '../components/common/SEO/SEOMetaTags';

const PrivacyPolicy = () => {
  return (
    <>
      <SEOMetaTags 
        title="Privacy Policy - HashTech Info"
        description="Learn about HashTech Info's privacy policy, data collection practices, and how we protect your personal information while providing career development and staffing services."
        keywords="privacy policy, data protection, personal information, career services privacy"
        canonical="https://hashtechinfo.com/privacy-policy"
      />
      <GradientBar />
      <Header />
      <PrivacyPolicyContent />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
