import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './error404.css';

const Error404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const letters = document.querySelectorAll('.glitch-text span');
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  const handleReturn = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Small delay to allow smooth scroll before navigation
    setTimeout(() => {
      navigate('/');
    }, 300);
  };

  return (
    <div className="error-wrapper">
      <div className="glitch-container">
        <div className="glitch-text">
          {'404'.split('').map((letter, index) => (
            <span key={index} className="glitch-letter">{letter}</span>
          ))}
        </div>
        
        <div className="error-content">
          <div className="error-stack">
            <div className="stack-item"></div>
            <div className="stack-item"></div>
            <div className="stack-item"></div>
          </div>
          
          <h1 className="error-heading">Page Not Found</h1>
          <p className="error-description">
            Oops! Looks like you've ventured into the void of my portfolio.
            This page is still in development or doesn't exist.
          </p>
          
          <div className="code-snippet">
            <div className="code-line"><span className="code-number">1</span> <span className="code-keyword">const</span> page = <span className="code-string">"requested_page"</span>;</div>
            <div className="code-line"><span className="code-number">2</span> <span className="code-keyword">if</span> (page === <span className="code-string">"404"</span>) {'{'}</div>
            <div className="code-line"><span className="code-number">3</span>   <span className="code-function">redirect</span>(<span className="code-string">"home"</span>);</div>
            <div className="code-line"><span className="code-number">4</span> {'}'}</div>
          </div>

          <a href="/" className="return-button" onClick={handleReturn}>
            <span className="button-text">Return to Homepage</span>
            <svg className="button-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error404;