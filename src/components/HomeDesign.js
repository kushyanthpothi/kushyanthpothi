import React, { useState } from 'react';
import './HomeDesign.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { MdLocalPhone } from "react-icons/md";

const HomeDesign = () => {
    const [showPhoneBanner, setShowPhoneBanner] = useState(false);

    const handlePhoneClick = () => {
        if (window.innerWidth >= 768) {
            setShowPhoneBanner(true);
            setTimeout(() => setShowPhoneBanner(false), 3000); // Hide after 3 seconds
        } else {
            window.location.href = "tel:8125144235";
        }
    };

    const handleMailClick = () => {
        const gmailComposeURL = `https://mail.google.com/mail/?view=cm&fs=1&to=kushyanthpothineni2003@gmail.com`;
        window.open(gmailComposeURL, '_blank');
    };

    return (
        <div className="home-container">
            {/* Background Diamonds */}
            <div className="background-pattern">
                {[...Array(100)].map((_, index) => (
                    <div key={index} className="diamond"></div>
                ))}
            </div>

            {/* Social Media Sidebar */}
            <div className="social-sidebar">
                <a href="https://www.linkedin.com/in/kushyanth-pothineni/" target="_blank" className="social-link-1" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a onClick={handleMailClick} className="social-link-1">
                    <SiGmail />
                </a>
                <a onClick={handlePhoneClick} className="social-link-1">
                    <MdLocalPhone />
                </a>
                <a href="https://github.com/kushyanthpothi" target="_blank" className="social-link-1" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/kushyanthpothineni.21" target="_blank" className="social-link-1" rel="noreferrer">
                    <FaInstagram />
                </a>
            </div>

            {/* Phone Banner */}
            {showPhoneBanner && (
                <div className="phone-banner-1">
                    <p>Phone: 8125144235</p>
                </div>
            )}

            {/* Main Content */}
            <div className="main-content">
                <h1 className="main-title">HEY, I'M KUSHYANTH POTHINENI</h1>
                <p className="description">
                    A Full Stack Developer crafting seamless web experiences from frontend to backend. Specialized in building scalable applications that transform ideas into powerful digital solutions.
                </p>
                <div
                    className="projects-button-wrapper"
                    onClick={() => {
                        window.location.href = "https://drive.google.com/uc?export=download&id=1luv7KqmqxwdHLqGH6oKeJ8FP7HcJPmMR";
                    }}
                >
                    <button className="projects-button">Download Resume</button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <div className="scroll-dot"></div>
            </div>
        </div>
    );
};

export default HomeDesign;