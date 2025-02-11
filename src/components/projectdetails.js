import React from 'react';
import { useNavigate } from 'react-router-dom';
import './projectdetails.css';
import { Github, Globe } from 'lucide-react';

const projectsData = {
    eventMania: {
        title: "Event Mania",
        description: "Event Mania is a one-stop platform designed to simplify event management for colleges and students. Whether you’re a student looking for exciting events to join or a college representative organizing events, Event Mania bridges the gap and creates a seamless experience.",
        overview: [
            "Event Mania is a comprehensive platform that bridges the gap between students and college events, providing a centralized solution for event management. It allows students to discover and register for exciting events across multiple colleges with ease. The platform also empowers college representatives to create and manage events, making it a seamless experience for all stakeholders involved.",
            "Designed with modern UI/UX principles, Event Mania features real-time event updates, secure authentication, and robust backend support using Firebase. The platform caters to diverse user roles, including superusers who oversee all events and accounts, ensuring smooth operations and high user satisfaction."
        ],
        tools: ["React.js", "Firebase Realtime Database", "HTML5", "CSS3", "Firebase Auth"],
        projectLink: "https://github.com/kushyanthpothi/EventMania",
        image: "https://i.ibb.co/gJQKjNK/Event-Mania-Design.png",
        viewSiteLink: "https://ap-event-mania.web.app/"
    },
    youtubeDownloader: {
        title: "YouTube Video and Audio Downloader",
        description: "This Django-based project empowers you to download YouTube videos and audio in your preferred format and resolution.",
        overview: [
            "The YouTube Video and Audio Downloader is a Django-based application that simplifies downloading YouTube content in various formats and resolutions. Users can extract audio or download videos effortlessly while selecting their preferred quality. This intuitive tool caters to those seeking offline access to YouTube content.",
            "The backend leverages Django for robust functionality, complemented by `ffmpeg` for seamless audio conversion. The app’s modern interface ensures a smooth user experience, making it ideal for video and audio enthusiasts. With tools like `pytube` and `yt-dlp`, the downloader guarantees reliable performance and efficiency."
        ],
        tools: ["Django", "Python", "HTML", "CSS", "ffmpeg", "pytube", "yt-dlp"],
        projectLink: "https://github.com/kushyanthpothi/ytdownloader",
        image: "https://i.ibb.co/FB9hXK8/Laptop-Design-edit.png"
    },
    proReader: {
        title: "Pro Reader",
        description: "Pro Reader is a feature-packed Android application that empowers you to handle QR codes, speech, and text with ease. Whether it's scanning, generating, converting, or extracting text, Pro Reader is your ultimate tool.",
        overview: [
            "Pro Reader is an all-in-one Android application that simplifies text-related tasks through innovative features. It supports QR code scanning and generation, enabling users to decode or share information instantly. The app also provides real-time speech-to-text conversion, ideal for note-taking and transcription.",
            "Additionally, Pro Reader offers text-to-speech functionality for a hands-free reading experience and allows users to extract text from images. Powered by Firebase and ML Kit, the app delivers a seamless and efficient experience. Its user-friendly design and multi-functional tools make it a valuable companion for productivity."
        ],
        tools: ["Java/Kotlin", "Firebase", "ML Kit", "Android"],
        projectLink: "https://github.com/kushyanthpothi/ProReader",
        image: "https://i.ibb.co/sQYYbks/Pro-Reader-Banner-web-1.png"
    },
    pinNoter: {
        title: "Pin Noter",
        description: "Pin Noter is a React-based note-taking application offering rich text formatting options like bold, underline, and lists. It supports offline caching for seamless note-taking without logging in and automatically syncs notes to the cloud upon login. Users can pin, delete, and access their notes from anywhere with ease.",
        overview: [
            "Pin Noter offers a feature-rich platform for managing notes effectively. Users can format their notes with bold, underline, strikethrough, and list options (bullet and numbered), pin important notes, and delete unwanted ones. The app is designed to enhance productivity with its user-friendly interface and efficient features.",
            "One of the key highlights is its offline mode, where notes are stored in cache memory without logging in. Upon logging into an account, the notes are automatically synced to the cloud, ensuring data safety and accessibility. With secure cloud storage, users can access their notes from anywhere, anytime."
        ],
        tools: ["React.js", "Firebase", "CSS3","React-dom"],
        projectLink: "https://github.com/kushyanthpothi/pin-noter",
        image: "https://i.ibb.co/zNYpwtk/Untitled-design.png",
        viewSiteLink: "https://pin-noter.web.app/",
    }
};



const ProjectDetails = ({ projectKey }) => {
    const navigate = useNavigate();
    const project = projectsData[projectKey];

    if (!project) {
        return (
            <div className="error-container">
                <h1>Project Not Found</h1>
                <button onClick={() => navigate('/')} className="go-back-button">
                    Return to Home
                </button>
            </div>
        );
    }

    return (
        <div className="projectdetails">
            <div className="home-container">
                <div className="background-pattern">
                    {[...Array(100)].map((_, index) => (
                        <div key={index} className="diamond"></div>
                    ))}
                </div>
                <div className="main-content-1">
                    <h1 className="main-title">{project.title}</h1>
                    <p className="description">{project.description}</p>
                    <div className="button-group-1">
                        <a
                            href={project.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-button"
                        >
                            <Github size={20} />
                            <span>View on GitHub</span>
                        </a>
                        {project.viewSiteLink && (
                            <a
                                href={project.viewSiteLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="demo-button"
                            >
                                <Globe size={20} />
                                <span>View Demo</span>
                            </a>
                        )}
                    </div>
                </div>
                <div className="scroll-indicator">
                    <div className="scroll-dot"></div>
                </div>
            </div>

            <div className="laptop-banner">
                <img src={project.image} alt="Project Screenshot" className="laptop-image" />
            </div>

            <div className="project-overview">
                <h2 className="section-title">Project Overview</h2>
                <div className="overview-content">
                    {project.overview.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            </div>

            <div className="tools-section">
                <h2 className="section-title">Tools Used</h2>
                <div className="tools-grid">
                    {project.tools.map((tool, index) => (
                        <span key={index} className="tool-tag">{tool}</span>
                    ))}
                </div>
            </div>

            <div className="see-live">
                <h2 className="section-title">See Live</h2>
                <div className="button-group">
                    <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-button"
                    >
                        <Github size={20} />
                        <span>View on GitHub</span>
                    </a>
                    {project.viewSiteLink && (
                        <a
                            href={project.viewSiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="demo-button"
                        >
                            <Globe size={20} />
                            <span>View Demo</span>
                        </a>
                    )}
                    <button
                        className="go-back-button"
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            });
                            navigate('/');
                        }}
                    >
                        GO BACK
                    </button>
                </div>
            </div>
        </div>
    );
};


export default ProjectDetails;