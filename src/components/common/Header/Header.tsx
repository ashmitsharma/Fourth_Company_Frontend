import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from '../../../assets/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveRoute = (path: string) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    return path !== '/' && location.pathname.startsWith(path);
  };

  return (
    <header className="header-main">
      <div className="header-container">
        <div className="logo-section">
          <Link to="/" className="logo-link">
          <img src={Logo} alt="Hashtech Info Logo" className="logo" />
          <span className="brand-name">Hashtech Info</span>
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button className="hamburger-button" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <nav className="nav-links">
            <Link to="/" className={`nav-link ${isActiveRoute('/') ? 'active' : ''}`}>Home</Link>
            <Link to="/services" className={`nav-link ${isActiveRoute('/services') ? 'active' : ''}`}>Services</Link>
            <Link to="/bootcamp" className={`nav-link ${isActiveRoute('/bootcamp') ? 'active' : ''}`}>Bootcamp</Link>
            {/* <Link to="/contact-us" className={`nav-link ${isActiveRoute('/contact-us') ? 'active' : ''}`}>Contact Us</Link> */}
            <Link to="/contact-us" className="mobile-join">
              <button className="join-button">
                Join Us
              </button>
            </Link>
          </nav>
        </div>
        <Link to="/contact-us" className="desktop-join">
          <button className="join-button">
            Join Us
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
