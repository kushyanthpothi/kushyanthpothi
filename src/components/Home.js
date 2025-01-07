import React from 'react';
import HomeDesign from './HomeDesign';
import AboutPage from './AboutPage';
import Project from './Project';
import Contact from './Contact';
import Certificate from './Certificate';
import './Home.css';

const Home = () => {
  return (
    <>
      <section id="home">
        <HomeDesign />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="certificate">
        <Certificate />
      </section>
      <section id="contact">
        <Contact />
      </section>
      
    </>
  );
};

export default Home;
