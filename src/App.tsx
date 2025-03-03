import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css';
import Home from './screens/Home'
import Services from './screens/Services'
import Bootcamp from './screens/Bootcamp'
import ContactUs from './screens/ContactUs'
import PrivacyPolicy from './screens/PrivacyPolicy'
// import ChatBot from './components/chatbot/ChatBot';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  
  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        {/* <ChatBot /> */}
      </div>
    </Router>
  );
}

export default App;
