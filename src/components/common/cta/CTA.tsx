import Button from '../Button/Button';
import './CTA.css';

const CTA = () => {
    return (
        <div className="cta-container">
            <p className='cta-heading'>Ready to Accelerate Your Career?</p>
            <p className='cta-description'>Whether you're looking for expert resume advice, interview prep, or job search strategies, we're here to help. Join countless professionals who have transformed their careers with our personalized solutions.</p>
            <p className='cta-sub-heading'>Take the First Step Today!</p>
            <Button text='Get Started' to='/contact-us' />
        </div>
    );
};

export default CTA;