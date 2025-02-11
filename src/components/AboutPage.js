import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const skills = [
        "C", "Java", "Python", "HTML", "CSS", "JavaScript", "SQL", "MongoDB", "Firebase", "React", "Django","Figma","Excel"
    ];

    const education = [
        {
            school: "KKR & KSR Institute of Technology and Sciences",
            degree: "Bachelor of Technology Computer Science",
            period: "2021 - 2025",
            gpa: "7.89"
        },
        {
            school: "Narayana Junior College",
            degree: "Higher Secondary School Certificate",
            period: "2019 - 2021",
            gpa: "8.0"
        },
        {
            school: "Viveka High School",
            degree: "Secondary School Certificate",
            period: "2019",
            gpa: "9.5"
        }
    ];

    return (
        <div className="about-container">
            <h2 className="about-title">ABOUT ME</h2>
            <div className="title-underline"></div>
            <p className="about-description">
                Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
            </p>
            <div className="about-content">
                <div className="about-section about-left">
                    <h3>Get to know me!</h3>
                    <p>
                    I am a motivated and results-driven individual passionate about leveraging technology to create <span className="highlight">impactful solutions.</span> My journey in the tech world is built on a foundation of continuous learning and hands-on experience in <span className="highlight">developing innovative applications.</span> I take pride in my ability to approach challenges with a problem-solving mindset and a commitment to delivering high-quality results.
                    </p>
                    <p>
                    With a <span className="highlight">strong academic background</span> and certifications in modern development technologies, I have honed my skills to contribute effectively to dynamic teams. <span className="highlight">My experiences</span> include designing user-friendly web applications, enhancing user engagement, and optimizing application performance. I believe in staying current with <span className="highlight">emerging trends</span> to ensure the solutions I develop remain relevant and effective.
                    </p>
                    <p>
                        Beyond my technical skills, I'm passionate about <span className="highlight">continuous learning</span> and staying current with emerging technologies. I've completed several certifications, including <span className="highlight">Responsive Web Design</span> from FreeCodeCamp and <span className="highlight">Java Full Stack Development</span> from Wipro, demonstrating my commitment to professional growth. My diverse project portfolio, from <span className="highlight">Event Mania to Pro Reader</span>, showcases my ability to tackle various development challenges.
                    </p>
                    <p>
                    Over the years, I have worked on diverse projects that highlight my adaptability and dedication to <span className="highlight">achieving excellence.</span> From creating tools that improve productivity to building platforms that simplify complex tasks, I have consistently demonstrated <span className="highlight">a passion for innovation.</span> My projects are a testament to my ability to blend technical expertise with creativity.
                    </p>
                    <button className="contact-button" onClick={handleContactClick}>CONTACT</button>
                </div>

                <div className="about-section about-right">
                    <h3>My Skills</h3>
                    <div className="skills">
                        {skills.map((skill, index) => (
                            <span key={index} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                    
                    <h3 className="education-title">Education</h3>
                    <div className="education-section">
                        {education.map((edu, index) => (
                            <div key={index} className="education-item">
                                <h4 className="school-name">{edu.school}</h4>
                                <p className="degree">{edu.degree}</p>
                                <div className="education-details">
                                    <span className="period">{edu.period}</span>
                                    <span className="gpa">GPA: {edu.gpa}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;