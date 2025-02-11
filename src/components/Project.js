import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Project.css';

const Project = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  

  const projects = [
    {
      name: "Event Mania",
      image: "https://i.ibb.co/gJQKjNK/Event-Mania-Design.png",
      description: "Event Mania is a web platform designed to connect students with college events. It acts as a middleware to facilitate event registrations and provide seamless services for both students and colleges.",
      caseStudyLink: "/project/event-mania"
    },
    {
      name: "YouTube Video and Audio Downloader",
      image: "https://i.ibb.co/FB9hXK8/Laptop-Design-edit.png",
      description: "A Django-based project that allows users to download YouTube videos and audio in their desired formats and resolutions. It includes features like video resolution selection and audio conversion.",
      caseStudyLink: "/project/youtube-downloader"
    },
    {
      name: "Pro Reader",
      image: "https://i.ibb.co/sQYYbks/Pro-Reader-Banner-web-1.png",
      description: "Pro Reader is a productivity tool that enhances reading experiences by providing advanced features like text-to-speech, annotation, and customizable reading modes.",
      caseStudyLink: "/project/pro-reader"
    },
    {
      name: "Pin Noter",
      image: "https://i.ibb.co/zNYpwtk/Untitled-design.png",
      description: "Pin Noter is a powerful React-based note-taking app with rich text formatting, offline mode, and cloud sync for seamless accessibility.",
      caseStudyLink: "/project/pin-noter"
    }
  ];  

  const handleCaseStudyClick = (link, e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate(link);
  };

  const handleViewMore = () => {
    setShowAll(true);
    // Smooth scroll to the next hidden project
    setTimeout(() => {
      const hiddenProjects = document.querySelector('.hidden-project');
      if (hiddenProjects) {
        hiddenProjects.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">PROJECTS</h1>
      <div className="title-underline"></div>
      <p className="projects-subtitle">
        Here you will find some of the personal and client projects that I created, with each project containing its own case study.
      </p>
      
      <div className="projects-content">
        {projects.map((project, index) => (
          <div 
            className={`project-item ${index >= 3 ? 'hidden-project' : ''} ${
              showAll ? 'visible' : ''
            }`}
            key={index}
            style={{ display: index >= 3 && !showAll ? 'none' : 'flex' }}
          >
            <div className="project-img">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <Link 
                to={project.caseStudyLink} 
                className="case-study-btn"
                onClick={(e) => handleCaseStudyClick(project.caseStudyLink, e)}
              >
                CASE STUDY
              </Link>
            </div>
          </div>
        ))}
      </div>

      {!showAll && projects.length > 3 && (
        <button className="view-more-btn" onClick={handleViewMore}>
          View More <span className="arrow-down">↓</span>
        </button>
      )}
    </div>
  );
};

export default Project;