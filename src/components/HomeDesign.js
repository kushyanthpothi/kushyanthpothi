import React, { useEffect, useState } from 'react';
import './HomeDesign.css';
import { FaLinkedin, FaGithub, FaInstagram, FaFileDownload } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { MdLocalPhone } from "react-icons/md";

const HomeDesign = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const roles = ["Full Stack Developer", "AI Developer"];
    const [displayedRole, setDisplayedRole] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        const typeRole = () => {
            if (isTyping) {
                if (displayedRole.length < roles[roleIndex].length) {
                    setDisplayedRole(roles[roleIndex].substring(0, displayedRole.length + 1));
                } else {
                    setTimeout(() => setIsTyping(false), 2000);
                }
            } else {
                if (displayedRole.length > 0) {
                    setDisplayedRole(roles[roleIndex].substring(0, displayedRole.length - 1));
                } else {
                    setIsTyping(true);
                    setRoleIndex((roleIndex + 1) % roles.length);
                }
            }
        };

        const typingTimeout = setTimeout(typeRole, isTyping ? 100 : 50);
        return () => clearTimeout(typingTimeout);
    }, [displayedRole, isTyping, roleIndex, roles]);

    useEffect(() => {
        const canvas = document.getElementById("dotCanvas");
        const ctx = canvas.getContext("2d");
        const particles = [];
        let maxParticles = 100;
        let maxDistance = 100;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            if (window.innerWidth <= 768) {
                maxParticles = 50;
                maxDistance = 80;
            } else if (window.innerWidth <= 480) {
                maxParticles = 30;
                maxDistance = 60;
            } else {
                maxParticles = 100;
                maxDistance = 100;
            }
        };

        setCanvasSize();

        window.addEventListener("resize", setCanvasSize);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
                this.radius = 2 + Math.random() * 2;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = "#7843e9";
                ctx.fill();
                ctx.closePath();
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                this.draw();
            }
        }

        function connectParticles() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = "rgba(120, 67, 233, 0.2)";
                        ctx.lineWidth = 1;
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => particle.update());
            connectParticles();

            requestAnimationFrame(animate);
        }

        while (particles.length < maxParticles) {
            particles.push(new Particle());
        }

        animate();

        return () => window.removeEventListener("resize", setCanvasSize);
    }, []);

    const handlePhoneClick = () => {
        if (window.innerWidth > 768) {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
        } else {
            window.location.href = "tel:8125144235";
        }
    };

    return (
        <div className="home-container">
            <canvas id="dotCanvas"></canvas>

            <div className="main-content">
                <h1 className="main-title">HEY, I'M KUSHYANTH POTHINENI</h1>
                <p className="role">
                    {displayedRole}
                    <span className="cursor">|</span>
                </p>

                {/* Social Media Icons */}
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/kushyanth-pothineni/" target="_blank" className="social-link-1" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                    <a 
                        onClick={() =>
                            window.open(
                                "https://mail.google.com/mail/?view=cm&fs=1&to=kushyanthpothineni2003@gmail.com",
                                "_blank"
                            )
                        }
                        className="social-link-1"
                    >
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

                {/* Download Resume Button */}
                <div
                    className="projects-button-wrapper"
                    onClick={() => {
                        window.location.href = "https://drive.google.com/uc?export=download&id=1luv7KqmqxwdHLqGH6oKeJ8FP7HcJPmMR";
                    }}
                >
                    <button className="resume-button-1">
                        <FaFileDownload className="resume-icon" /> Download Resume
                    </button>
                </div>
            </div>

            {/* Toast Notification */}
            {showToast && (
                <div className="toast">
                    <span>Phone: 8125144235</span>
                </div>
            )}

            <div className="scroll-indicator">
                <div className="scroll-dot"></div>
            </div>
        </div>
    );
};

export default HomeDesign;