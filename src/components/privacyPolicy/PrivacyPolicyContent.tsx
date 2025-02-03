import Section from '../common/Section/Section';
import './PrivacyPolicyContent.css';

const PrivacyPolicyContent = () => {
  return (
    <Section backgroundColor="#EAEAEA">
      <div className='privacy-policy-header-section'>

      </div>
      <div className="privacy-policy-container">
        <h1>Privacy Policy - HashTech Info</h1>

        <div className="policy-section">
          <h2>1. Introduction</h2>
          <p>HashTech Info is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you interact with our services.</p>
        </div>

        <div className="policy-section">
          <h2>2. Information We Collect</h2>
          <p>We may collect the following data:</p>
          <ul>
            <li>Personal Information: Name, email, phone number, resume, LinkedIn profile, and job preferences</li>
            <li>Educational & Work History: Degrees, work experience, and skills</li>
            <li>Visa Status & Nationality: For candidates requiring visa support</li>
            <li>Payment & Billing Information: If you enroll in our services</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>Job matching and career coaching</li>
            <li>Resume and LinkedIn optimization</li>
            <li>Interview training and coordination</li>
            <li>Visa and documentation assistance</li>
            <li>Communicating updates, service changes, and offers</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>4. Data Sharing Policy</h2>
          <p>We do not sell your data. However, we may share it with:</p>
          <ul>
            <li>Potential employers for job placement</li>
            <li>Third-party service providers (e.g., resume consultants, payment processors)</li>
            <li>Legal authorities if required by law</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>5. Data Security</h2>
          <p>We implement security measures such as encryption, restricted access, and secure servers to protect your data.</p>
        </div>

        <div className="policy-section">
          <h2>6. User Rights & Choices</h2>
          <ul className="checkmark-list">
            <li>✔ Access and update your data</li>
            <li>✔ Request data deletion</li>
            <li>✔ Opt-out of marketing communications</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>7. Cookies & Tracking</h2>
          <p>Our website may use cookies and analytics tools to improve user experience and track website activity.</p>
        </div>

        <div className="policy-section">
          <h2>8. Third-Party Links</h2>
          <p>Our website may contain links to third-party platforms. We are not responsible for their privacy policies.</p>
        </div>

        <div className="policy-section">
          <h2>9. Contact for Privacy Concerns</h2>
          <p>If you have any questions, contact us at:</p>
          <p className="contact-email">📧 info@hashtechinfo.com</p>
        </div>
      </div>
    </Section>
  );
};

export default PrivacyPolicyContent;
