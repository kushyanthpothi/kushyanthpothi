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
        "C", "Java", "Python", "HTML", "CSS", "JavaScript", "SQL", "MongoDB", "Firebase", "React", "Django"
    ];

    const education = [
        {
            school: "KKR & KSR Institute of Technology and Sciences",
            degree: "Bachelor of Technology Computer Science",
            period: "2021 - Present",
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
                        I'm a driven <span className="highlight">Full Stack Developer</span> with expertise in both frontend and backend development. I specialize in building complete web applications from the ground up - from designing responsive user interfaces to implementing robust server-side logic and database architectures.
                    </p>
                    <p>
                        On the frontend, I excel in <span className="highlight">React.js, JavaScript, and modern CSS</span> to create intuitive user experiences. For backend development, I'm proficient with <span className="highlight">Node.js, Express, and Python Django</span>, implementing RESTful APIs and microservices. I have extensive experience with both SQL and NoSQL databases.
                    </p>
                    <p>
                        Beyond my technical skills, I'm passionate about <span className="highlight">continuous learning</span> and staying current with emerging technologies. I've completed several certifications, including Responsive Web Design from FreeCodeCamp and Java Full Stack Development from Wipro, demonstrating my commitment to professional growth. My diverse project portfolio, from Event Mania to Pro Reader, showcases my ability to tackle various development challenges.
                    </p>
                    <p>
                        I thrive in collaborative environments and have experience working on team projects. Whether it's <span className="highlight">developing new features</span>, optimizing performance, or solving complex technical challenges, I approach each task with enthusiasm and dedication. I'm always eager to take on new challenges and contribute to innovative solutions that make a real impact.
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