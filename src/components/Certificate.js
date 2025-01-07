import React, { useState } from 'react';
import './Certificate.css';
import { PiCertificateBold } from "react-icons/pi";

const Certificate = () => {
    const [activeCertIndex, setActiveCertIndex] = useState(null);
    
    const certificates = [
        {
            name: "AWS Academy Machine Learning Foundations",
            image: "https://i.ibb.co/mFFtB0B/AWS-Academy-Machine-Learning-Foundations-page-0001.jpg",
            link: "https://www.credly.com/badges/446553a7-d24b-4955-889e-55eec636f750/linked_in_profile"
        },
        {
            name: "Wipro Talent Next Java Full Stack Certification",
            image: "https://i.ibb.co/vPfStSV/Wipro-Certificate.png",
            link: "https://cert.diceid.com/cid/xNkRt2LMUe"
        },
        {
            name: "Responsive Web Designer Certification",
            image: "https://i.ibb.co/rdvfGyY/image.png",
            link: "https://www.freecodecamp.org/certification/Kushyanthpothi/responsive-web-design"
        },
        {
            name: "Introduction to Internet of Things",
            image: "https://i.ibb.co/gjkdXfn/NPTEL-Introduction-To-Internet-Of-Things-page-0001.jpg",
            link: "https://nptel.ac.in/noc/E_Certificate/NPTEL24CS35S65630220730556258"
        },
        {
            name: "Junior Software Developer",
            image: "https://i.ibb.co/6nzykQ3/1735105593467-page-0001.jpg",
            link: "https://drive.google.com/file/d/1q3-3-lYH3mm08gcnGXN66SIFSRwyQm0u/view?usp=sharing"
        },
        {
            name: "The Fundamentals of Digital Marketing",
            image: "https://i.ibb.co/8gqNBvR/Google-Digital-Garage-The-fundamentals-of-digital-marketing-page-0001.jpg",
            link: "https://learndigital.withgoogle.com/link/1qsdpcedm9s"
        }
    ];

    const handleCertificateClick = (event, index) => {
        // Prevent opening the link when clicking the card
        event.stopPropagation();
        setActiveCertIndex(index === activeCertIndex ? null : index);
    };

    const handleButtonClick = (event, link) => {
        // Prevent triggering the card click when clicking the button
        event.stopPropagation();
        window.open(link, '_blank', 'noopener noreferrer');
    };

    return (
        <div className="certificate-container">
            <h1 className="certificate-title">MY CERTIFICATIONS</h1>
            <div className="title-underline"></div>
            <p className="certificate-subtitle">
                Here are my professional certifications and achievements.
            </p>
            
            <div className="certificate-grid">
                {certificates.map((cert, index) => (
                    <div 
                        key={index} 
                        className={`certificate-card ${index === activeCertIndex ? 'active' : ''}`}
                        onClick={(e) => handleCertificateClick(e, index)}
                    >
                        <div className="certificate-content">
                            <img 
                                src={cert.image} 
                                alt={cert.name}
                                className="certificate-image"
                            />
                            <div className="certificate-overlay">
                                <h3 className="certificate-name">{cert.name}</h3>
                                <button 
                                    className="certificate-button"
                                    onClick={(e) => handleButtonClick(e, cert.link)}
                                >
                                    <span className="button-content">
                                        <PiCertificateBold className="certificate-icon" />
                                        <span>View Certificate</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificate;