import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h3>About Us</h3>
                    <p className="footer-description">At HashTech Info, we empower businesses with innovative technology solutions. Guided by our core values of integrity, customer focus, & continuous improvement, we deliver high-quality services and build lasting, trust-based relationships.</p>
                </div>
                <div className="footer-links">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/bootcamp">Bootcamp</Link></li>
                        <li><Link to="/contact-us#faq-section">FAQs</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p><span className="footer-contact-icon"><FontAwesomeIcon icon={faEnvelope} /></span> info@hashtechinfo.com</p>
                    <p><span className="footer-contact-icon"><FontAwesomeIcon icon={faPhone} /></span> +1 6699991087</p>
                    <p><span className="footer-contact-icon"><FontAwesomeIcon icon={faMapLocationDot} /></span> 1005 Merrywood Dr, Edison, NJ 08817</p>
                    <div>
                    <SocialIcon url="https://www.linkedin.com/company/hashtech-info/"
                        target="_blank"      // This opens in new tab
                        bgColor="transparent" // This removes the background
                        fgColor="#ffffff"    // This makes the icon black
                        className='footer-social-icon'
                        style={{ height: 30, width: 30, padding: 0 }}
                    />
                    <SocialIcon url="https://www.instagram.com/hashtech_info/"
                        target="_blank"      // This opens in new tab
                        bgColor="transparent" // This removes the background
                        fgColor="#ffffff"    // This makes the icon black
                        className='footer-social-icon'
                        style={{ height: 30, width: 30, padding: 0 }}
                    />
                    <SocialIcon url="https://x.com/hashtech_info/"
                        target="_blank"      // This opens in new tab
                        bgColor="transparent" // This removes the background
                        fgColor="#ffffff"    // This makes the icon black
                        className='footer-social-icon'
                        style={{ height: 30, width: 30, padding: 0 }}

                    />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                © Copyright {currentYear}. Powered by HashTech Info.
            </div>
        </div>
    );
};

export default Footer;