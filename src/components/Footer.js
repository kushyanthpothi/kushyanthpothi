'use client';
import { useState, useEffect } from 'react';
import { themeClass, loadDarkMode } from '../utils/theme';

// Data constants that would typically come from a config file or CMS
const userData = {
  socialLinks: {
    github: "https://github.com/kushyanthpothi/",
    linkedin: "https://www.linkedin.com/in/kushyanth-pothineni/",
    twitter: "https://x.com/KushyanthPothi1"
  }
};

const navItems = [
  { name: 'HOME', section: 'home' },
  { name: 'ABOUT', section: 'about' },
  { name: 'EXPERIENCE', section: 'experience' },
  { name: 'SKILLS', section: 'skills' },
  { name: 'PROJECTS', section: 'projects' },
  { name: 'CERTIFICATIONS', section: 'certifications' },
  { name: 'CONTACT', section: 'contact' },
];

export default function Footer({ showQuickLinks = true }) {
  const [currentTheme, setCurrentTheme] = useState('blue');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load theme from localStorage on component mount
    const savedTheme = localStorage.getItem('siteTheme');
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }

    // Load dark mode state
    const darkMode = loadDarkMode();
    setIsDarkMode(darkMode);

    // Listen for dark mode changes from other components
    const handleStorageChange = () => {
      const newDarkMode = localStorage.getItem('darkMode') === 'true';
      setIsDarkMode(newDarkMode);
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    // For pages that don't have sections, redirect to home page with section
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kushyanth Pothineni</h3>
            <p className="text-gray-600 dark:text-gray-400">Building digital experiences with code and creativity.</p>
          </div>
          
          {showQuickLinks && (
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.section)}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className={showQuickLinks ? '' : 'md:col-start-2'}>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {Object.entries(userData.socialLinks).map(([platform, link]) => (
                <a
                  key={platform}
                  href={link}
                  className={`transition-colors ${themeClass('text', currentTheme)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform}
                >
                  {platform === 'twitter' ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ) : (
                    <i className={`fab fa-${platform} text-2xl`}></i>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Kushyanth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
