import React, { useState, useEffect } from 'react';
import './footer.css';
import { FaGithub, FaLinkedinIn, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { MdLocalPhone } from "react-icons/md";

const Footer = () => {
  const [showPhoneBanner, setShowPhoneBanner] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handlePhoneClick = () => {
    if (window.innerWidth >= 768) {
      setShowPhoneBanner(true);
      setTimeout(() => setShowPhoneBanner(false), 3000); // Hide after 3 seconds
    } else {
      window.location.href = "tel:8125144235";
    }
  };

  const handleMailClick = () => {
    if (window.innerWidth >= 768) {
      const gmailComposeURL = `https://mail.google.com/mail/?view=cm&fs=1&to=kushyanthpothineni2003@gmail.com`;
      window.open(gmailComposeURL, '_blank');
    } else {
      window.location.href = "mailto:kushyanthpothineni2003@gmail.com";
    }
  };

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScrollVisibility);
    return () => {
      window.removeEventListener('scroll', handleScrollVisibility);
    };
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-main">
          <h2 className="footer-name">Kushyanth Pothineni</h2>
          <p className="footer-description">

I am a passionate and dedicated tech enthusiast with a strong foundation in web and app development. I enjoy creating user-friendly solutions that simplify complex tasks and enhance productivity. With hands-on experience in diverse projects, I continuously seek opportunities to learn, grow, and contribute meaningfully to the tech community.
          </p>
        </div>

        {showPhoneBanner && (
          <div className="phone-banner-1">
            <p>Phone: 8125144235</p>
          </div>
        )}

        <div className="footer-social">
          <h2>CONNECT WITH ME</h2>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/kushyanth-pothineni/" 
               target="_blank" 
               className="social-link"
               aria-label="LinkedIn Profile">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://github.com/kushyanthpothi" 
               target="_blank" 
               className="social-link"
               aria-label="GitHub Profile">
              <FaGithub size={24} />
            </a>
            <a href="https://www.instagram.com/kushyanthpothineni.21" 
               target="_blank" 
               className="social-link" 
               rel="noreferrer"
               aria-label="Instagram Profile">
              <FaInstagram size={24} />
            </a>
            <a onClick={handleMailClick} 
               className="social-link"
               aria-label="Email Contact">
              <SiGmail size={24} />
            </a>
            <a onClick={handlePhoneClick} 
               className="social-link"
               aria-label="Phone Contact">
              <MdLocalPhone size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>
            © Copyright {new Date().getFullYear()}. Developed By {' '}
            <a href="https://github.com/kushyanthpothi" target='_blank'>Kushyanth Pothineni 💻</a>
          </p>
        </div>
        {showScrollButton && (
          <div className="scroll-to-top" 
               onClick={handleScroll}
               aria-label="Scroll to top">
            <FaArrowUp size={24} className='logo-mark'/>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;