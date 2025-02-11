import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (path, sectionId, e) => {
    e.preventDefault();
    setIsSidebarOpen(false);

    // If we're already on the home page, scroll to the section
    if (location.pathname === '/' || location.pathname === '') {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If we're on a different page, first navigate to home then scroll
      navigate('/');
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navHeight = document.querySelector('.navbar').offsetHeight;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-left">
          <div className="profile-image">
            <img 
              src="https://i.ibb.co/5kKhz6T/Passport-Photo.jpg"
              alt="Profile"
            />
          </div>
          <Link to="/" className='title-logo' onClick={(e) => handleNavigation('/', 'home', e)}><h1 className="navbar-title">Kushyanth Pothineni</h1></Link>
        </div>
        
        <div className="nav-links desktop-nav">
          <Link to="/" className="nav-link" onClick={(e) => handleNavigation('/', 'home', e)}>HOME</Link>
          <Link to="/" className="nav-link" onClick={(e) => handleNavigation('/', 'about', e)}>ABOUT</Link>
          <Link to="/" className="nav-link" onClick={(e) => handleNavigation('/', 'projects', e)}>PROJECTS</Link>
          <Link to="/" className="nav-link" onClick={(e) => handleNavigation('/', 'certificate', e)}>CERTIFICATIONS</Link>
          <Link to="/" className="nav-link" onClick={(e) => handleNavigation('/', 'contact', e)}>CONTACT</Link>
        </div>

        <button 
          className="menu-button"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-links">
          <Link to="/" className="sidebar-link" onClick={(e) => handleNavigation('/', 'home', e)}>HOME</Link>
          <Link to="/" className="sidebar-link" onClick={(e) => handleNavigation('/', 'about', e)}>ABOUT</Link>
          <Link to="/" className="sidebar-link" onClick={(e) => handleNavigation('/', 'projects', e)}>PROJECTS</Link>
          <Link to="/" className="sidebar-link" onClick={(e) => handleNavigation('/', 'certificate', e)}>CERTIFICATIONS</Link>
          <Link to="/" className="sidebar-link" onClick={(e) => handleNavigation('/', 'contact', e)}>CONTACT</Link>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="overlay" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Navbar;