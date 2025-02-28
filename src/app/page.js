'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import WaveEffect from '../components/WaveEffect';
import emailjs from '@emailjs/browser';
import Head from 'next/head';

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClickAnimating, setIsClickAnimating] = useState(false);
  const [waves, setWaves] = useState([]);
  const waveIdCounter = useRef(0);
  const colors = [
    '#FF0000', '#FF7F00', '#FFFF00', '#00FF00', 
    '#0000FF', '#4B0082', '#8B00FF'
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [touchedCertId, setTouchedCertId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_ab1oioq',
        'template_xwyd7xc',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'oYcBPdEZe66HUibML'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const triggerAnimation = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      // Only prevent horizontal scrolling
      document.body.style.overflowX = 'hidden';
      setTimeout(() => {
        setIsAnimating(false);
      }, 2000);
    }
  };

  const triggerClickAnimation = () => {
    // If animation is already running, return early
    if (isClickAnimating) return;
    
    setIsClickAnimating(true);
    setTimeout(() => {
      setIsClickAnimating(false);
    }, 2000); // Match this with the animation duration in CSS
  };

  useEffect(() => {
    // Initial animation when component mounts
    triggerAnimation();
  }, []);

  const createWaveGroup = () => {
    // Only create waves if screen width is larger than 768px (desktop)
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      const currentId = waveIdCounter.current;
      waveIdCounter.current += 1;
      
      const newWaves = Array.from({ length: 7 }, (_, i) => ({
        id: `wave-${currentId}-${i}`,
        color: colors[i],
        delay: i * 100,
        createdAt: Date.now()
      }));
      
      setWaves(prev => [...prev, ...newWaves]);
      
      setTimeout(() => {
        setWaves(prev => prev.filter(wave => !newWaves.includes(wave)));
      }, 2000);
    }
  };

  useEffect(() => {
    // Initial animation
    createWaveGroup();
  }, []);

  const userData = {
    name: "Kushyanth Pothineni",
    title: "Full Stack Developer",
    about: "I am a passionate Full Stack Developer with expertise in building modern web applications. I specialize in React.js, Next.js, and Django, creating responsive and user-friendly interfaces.",
    skills: [
      { name: "Django", level: 85 },
      { name: "JavaScript", level: 92 },
      { name: "HTML/CSS", level: 95 },
      { name: "MongoDB", level: 80 },
      { name: "SQL", level: 82 },
      { name: "Java", level: 78 },
      { name: "API Design", level: 86 },
      { name: "Next.js", level: 85 }
    ],
    projects: [
      {
        title: "Event Mania",
        description: "Event Mania is a one-stop platform designed to simplify event management for colleges and students. Whether you're a student looking for exciting events to join or a college representative organizing events, Event Mania bridges the gap and creates a seamless experience.",
        techStack: ["React", "Firebase", "HTML/CSS", "Authentication"],
        image: "https://i.ibb.co/gJQKjNK/Event-Mania-Design.png",
        slug: "event-mania",
        viewSiteLink: "https://ap-event-mania.web.app/"
      },
      {
        title: "YouTube Video and Audio Downloader",
        description: "This Django-based project empowers you to download YouTube videos and audio in your preferred format and resolution. Select quality options and extract audio with just a few clicks.",
        techStack: ["Django", "Python", "HTML/CSS", "ffmpeg", "pytube"],
        image: "https://i.ibb.co/FB9hXK8/Laptop-Design-edit.png",
        slug: "youtube-downloader"
      },
      {
        title: "Pro Reader",
        description: "Pro Reader is a feature-packed Android application that empowers you to handle QR codes, speech, and text with ease. Whether it's scanning, generating, converting, or extracting text, Pro Reader is your ultimate tool.",
        techStack: ["Java/Kotlin", "Firebase", "ML Kit", "Android"],
        image: "https://i.ibb.co/sQYYbks/Pro-Reader-Banner-web-1.png",
        slug: "pro-reader"
      },
      {
        title: "Pin Noter",
        description: "Pin Noter is a React-based note-taking application offering rich text formatting options like bold, underline, and lists. It supports offline caching for seamless note-taking without logging in and automatically syncs notes to the cloud upon login.",
        techStack: ["React.js", "Firebase", "CSS3", "React-dom"],
        image: "https://i.ibb.co/zNYpwtk/Untitled-design.png",
        slug: "pin-noter",
        viewSiteLink: "https://pin-noter.web.app/"
      }
    ],
    certifications: [
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
    ],
    socialLinks: {
      github: "https://github.com/kushyanthpothi/",
      linkedin: "https://www.linkedin.com/in/kushyanth-pothineni/",
      twitter: "https://x.com/KushyanthPothi1"
    }
  };

  const navItems = [
    { name: 'HOME', section: 'home' },
    { name: 'ABOUT', section: 'about' },
    { name: 'SKILLS', section: 'skills' },
    { name: 'PROJECTS', section: 'projects' },
    { name: 'CERTIFICATIONS', section: 'certifications' },
    { name: 'CONTACT', section: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
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
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCertTouchStart = (index) => {
    setTouchedCertId(index);
  };

  const handleCertTouchEnd = () => {
    setTouchedCertId(null);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://kushyanthpothineni.vercel.app" />
        
        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kushyanth Pothineni",
              "url": "https://kushyanthpothineni.vercel.app",
              "image": "https://i.ibb.co/CpW4rW5s/picofme-2.png",
              "jobTitle": "Full Stack Developer",
              "description": "Full Stack Developer specializing in React.js, Next.js, and Django",
              "knowsAbout": ["React.js", "Next.js", "Django", "JavaScript", "Python", "Web Development"],
              "alumniOf": {
                "@type": "Organization",
                "name": "Wipro Talent Next"
              },
              "sameAs": [
                "https://github.com/kushyanthpothi/",
                "https://www.linkedin.com/in/kushyanth-pothineni/",
                "https://x.com/KushyanthPothi1"
              ]
            })
          }}
        />
      </Head>

      <main className="relative w-full overflow-x-hidden">
        <WaveEffect className="w-full">
          <div className="w-full bg-slate-50 dark:bg-gray-900">
            {/* Navigation */}
            <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                  <div className="flex items-center overflow-hidden">
                    <MotionDiv 
                      className="overflow-hidden flex items-center"
                      initial={false}
                      animate={{ width: 'auto' }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <div className="flex items-center whitespace-nowrap">
                        <span className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">K</span>
                        <MotionDiv
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: scrolled ? 'auto' : 0, opacity: scrolled ? 1 : 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <span className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">ushyanth</span>
                        </MotionDiv>
                        <span className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400 ml-1">P</span>
                        <MotionDiv
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: scrolled ? 'auto' : 0, opacity: scrolled ? 1 : 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <span className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">othineni</span>
                        </MotionDiv>
                      </div>
                    </MotionDiv>
                  </div>
                  
                  {/* Desktop Navigation */}
                  <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.section)}
                        className="text-sm font-medium tracking-wider hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>

                  {/* Mobile Navigation Button */}
                  <button
                    className="md:hidden bg-blue-100 bg-opacity-70 p-1.5 rounded-md text-blue-700 dark:bg-blue-800 dark:bg-opacity-30 dark:text-blue-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              {isMenuOpen && (
                <MotionDiv 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
                >
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.section)}
                        className="block w-full px-3 py-2 text-center rounded-md bg-blue-100 bg-opacity-70 hover:bg-blue-200 text-blue-700 dark:bg-blue-800 dark:bg-opacity-30 dark:hover:bg-opacity-40 dark:text-blue-300 transition-colors cursor-pointer"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </MotionDiv>
              )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 md:py-0">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center md:text-left order-2 md:order-1"
                  >
                    <h2 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">Hello, I'm</h2>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                      {userData.name}
                    </h1>
                    <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mb-6 mx-auto md:mx-0"></div>
                    <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 mb-8">
                      {userData.title}
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4 mb-8">
                      {Object.entries(userData.socialLinks).map(([platform, link]) => (
                        <a 
                          key={platform} 
                          href={link} 
                          className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={platform}
                        >
                          <i className={`fab fa-${platform} text-2xl`}></i>
                        </a>
                      ))}
                      {/* Add Resume Icon */}
                      <a 
                        href="https://bit.ly/kushyanthpothineni"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                        aria-label="Resume"
                      >
                        <i className="fas fa-file-alt text-2xl"></i>
                      </a>
                    </div>
                    <div className="flex justify-center md:justify-start">
                      <a 
                        onClick={scrollToContact}
                        className="inline-block px-8 py-3 bg-blue-100 bg-opacity-70 hover:bg-blue-200 text-blue-700 dark:bg-blue-800 dark:bg-opacity-30 dark:hover:bg-opacity-40 dark:text-blue-300 font-medium rounded-md transition-colors cursor-pointer"
                      >
                        Get In Touch
                      </a>
                    </div>
                  </MotionDiv>
                  
                  <MotionDiv
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center order-1 md:order-2"
                  >
                    <div 
                      className="relative w-48 h-48 md:w-80 md:h-80 cursor-pointer md:cursor-pointer"
                      onClick={createWaveGroup}
                    >
                      {/* Only render waves on desktop */}
                      {typeof window !== 'undefined' && window.innerWidth >= 768 && waves.map((wave) => (
                        <div
                          key={wave.id}
                          className="absolute inset-0 rounded-full border-2 animate-wave-circle hidden md:block"
                          style={{
                            borderColor: wave.color,
                            animationDelay: `${wave.delay}ms`,
                            opacity: 0.7,
                            zIndex: 0
                          }}
                        ></div>
                      ))}
                      
                      {/* Profile image */}
                      <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl z-10">
                        <Image
                          src="https://i.ibb.co/CpW4rW5s/picofme-2.png"
                          alt="Kushyanth Pothineni"
                          layout="fill"
                          objectFit="cover"
                          priority
                        />
                      </div>
                    </div>
                  </MotionDiv>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="pt-20 py-20 bg-white dark:bg-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* About Me title and content - full width */}
                <div className="mb-16">
                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-5xl"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-blue-600 dark:text-blue-400">Me</span></h2>
                    <div className="h-1 w-20 bg-blue-600 mb-6"></div>
                    <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                      {userData.about}
                    </p>
                  </MotionDiv>
                </div>
                
                {/* Cards below */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <span className="inline-block p-4 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Web Design</h3>
                    <p className="text-gray-600 dark:text-gray-300">Creating beautiful, responsive user interfaces with modern design principles.</p>
                  </MotionDiv>

                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <span className="inline-block p-4 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Full Stack Development</h3>
                    <p className="text-gray-600 dark:text-gray-300">Building robust, scalable applications with modern frameworks like React.js and Django.</p>
                  </MotionDiv>

                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <span className="inline-block p-4 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Database Management</h3>
                    <p className="text-gray-600 dark:text-gray-300">Working with SQL and NoSQL databases like MongoDB to ensure efficient data storage and retrieval.</p>
                  </MotionDiv>

                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <span className="inline-block p-4 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">API Optimization</h3>
                    <p className="text-gray-600 dark:text-gray-300">Designing and optimizing APIs for better performance and user experience.</p>
                  </MotionDiv>

                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <span className="inline-block p-4 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Role-based Access Control</h3>
                    <p className="text-gray-600 dark:text-gray-300">Implementing secure authentication and authorization systems for applications.</p>
                  </MotionDiv>

                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <span className="inline-block p-4 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">User Experience Design</h3>
                    <p className="text-gray-600 dark:text-gray-300">Creating intuitive and engaging user interfaces focused on delivering excellent user experiences.</p>
                  </MotionDiv>
                </div>

                {/* Education Section - Moved below cards */}
                <div className="mb-16">
                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-8" // Removed text-center class
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">My <span className="text-blue-600 dark:text-blue-400">Education</span></h3>
                    <div className="h-1 w-20 bg-blue-600 mb-6"></div>
                  </MotionDiv>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="mb-4">
                        <i className="fas fa-university text-3xl text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <h4 className="text-xl font-bold mb-2">Bachelor of Technology</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">KKR & KSR Institute of Technology and Sciences</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Computer Science</p>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-600 dark:text-blue-400 font-medium">GPA: 7.89</span>
                        <span className="text-gray-500 dark:text-gray-400">2021 - 2025</span>
                      </div>
                    </MotionDiv>

                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="mb-4">
                        <i className="fas fa-school text-3xl text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <h4 className="text-xl font-bold mb-2">Higher Secondary</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">Narayana Junior College</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">State Board of Intermediate Education</p>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-600 dark:text-blue-400 font-medium">GPA: 8.0</span>
                        <span className="text-gray-500 dark:text-gray-400">2019 - 2021</span>
                      </div>
                    </MotionDiv>

                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="mb-4">
                        <i className="fas fa-graduation-cap text-3xl text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <h4 className="text-xl font-bold mb-2">Secondary School</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">Viveka High School</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">SSC</p>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-600 dark:text-blue-400 font-medium">GPA: 9.5</span>
                        <span className="text-gray-500 dark:text-gray-400">2018 - 2019</span>
                      </div>
                    </MotionDiv>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="pt-20 py-20 bg-gray-50 dark:bg-gray-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-blue-600 dark:text-blue-400">Skills</span></h2>
                  <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
                  <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    I've worked with a variety of technologies and frameworks to create robust applications.
                  </p>
                </MotionDiv>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                  {userData.skills.map((skill, index) => (
                    <MotionDiv 
                      key={index} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="mb-4"
                    >
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </MotionDiv>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="pt-20 py-20 bg-white dark:bg-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-blue-600 dark:text-blue-400">Projects</span></h2>
                  <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
                  <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    Here are some of my recent projects. Each one was built to solve real-world problems.
                  </p>
                </MotionDiv>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {userData.projects.map((project, index) => (
                    <MotionDiv
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="relative h-48 md:h-64">
                        <Image
                          src={project.image}
                          alt={project.title}
                          layout="fill"
                          className="object-contain bg-gray-50 dark:bg-gray-700"
                        />
                      </div>
                      <div className="p-4 md:p-6">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 h-[72px]">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.techStack.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-100/50 dark:bg-blue-800/50 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <a 
                            href={`/project/${project.slug}`} 
                            className="inline-flex items-center px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-700 dark:bg-blue-600/20 dark:hover:bg-blue-600/30 dark:text-blue-300 rounded-md transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2"
                          >
                            <span>View Details</span>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                          {project.viewSiteLink && (
                            <a 
                              href={project.viewSiteLink}
                              target="_blank"
                              rel="noopener noreferrer" 
                              className="inline-flex items-center px-4 py-2 bg-gray-200/50 dark:bg-gray-600/30 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300/50 dark:hover:bg-gray-500/40 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400/50 focus:ring-offset-2"
                            >
                              <span>Live Demo</span>
                              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </MotionDiv>
                  ))}
                </div>
              </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="pt-20 py-20 bg-gray-50 dark:bg-gray-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-blue-600 dark:text-blue-400">Certifications</span></h2>
                  <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
                  <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    Professional certifications that validate my expertise and commitment to quality.
                  </p>
                </MotionDiv>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userData.certifications.map((cert, index) => (
                    <MotionDiv
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      className={`certificate-card shadow-lg ${touchedCertId === index ? 'touched' : ''}`}
                      onTouchStart={() => handleCertTouchStart(index)}
                      onTouchEnd={handleCertTouchEnd}
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={cert.image}
                          alt={cert.name}
                          fill
                          className="object-cover"
                        />
                        <div className="certificate-overlay">
                          <h3 className="text-white text-xl font-bold text-center px-4 mb-4">{cert.name}</h3>
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-2 bg-blue-600/30 hover:bg-blue-600/50 text-white font-medium rounded-md transition-all duration-300 backdrop-blur-sm"
                          >
                            <svg 
                              className="w-5 h-5 mr-2"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 15a7 7 0 100-14 7 7 0 000 14z" />
                              <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                              <circle cx="12" cy="8" r="3" />
                            </svg>
                            View Certificate
                          </a>
                        </div>
                      </div>
                    </MotionDiv>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="pt-20 py-20 bg-white dark:bg-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-blue-600 dark:text-blue-400">Touch</span></h2>
                  <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
                  <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    Have a project in mind? Let's discuss how we can work together.
                  </p>
                </MotionDiv>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                  <MotionDiv
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">Feel free to reach out to me using any of the following methods.</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Email</p>
                          <p className="text-gray-600 dark:text-gray-300">pothineni.kushyanth@gmail.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Phone</p>
                          <p className="text-gray-600 dark:text-gray-300">8125144235</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Location</p>
                          <p className="text-gray-600 dark:text-gray-300">Guntur, Andra Pradesh</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex space-x-6">
                      {Object.entries(userData.socialLinks).map(([platform, link]) => (
                        <a 
                          key={platform} 
                          href={link} 
                          className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <i className={`fab fa-${platform} text-2xl`}></i>
                        </a>
                      ))}
                    </div>
                  </MotionDiv>

                  <MotionDiv
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 md:p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                      <div className="space-y-4 md:space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="block w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-200"
                            placeholder="John Doe"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="block w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-200"
                            placeholder="you@example.com"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Your Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            className="block w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-200 min-h-[150px] resize-none"
                            placeholder="Write your message here..."
                          ></textarea>
                        </div>

                        {submitStatus === 'success' && (
                          <div className="p-4 bg-green-100 text-green-700 rounded-md">
                            Message sent successfully!
                          </div>
                        )}

                        {submitStatus === 'error' && (
                          <div className="p-4 bg-red-100 text-red-700 rounded-md">
                            Failed to send message. Please try again.
                          </div>
                        )}
                        
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <div className="flex items-center justify-center gap-2">
                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                            {!isSubmitting && (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            )}
                          </div>
                        </button>
                      </div>
                    </form>
                  </MotionDiv>
                </div>
              </div>
            </section>

            {/* Fix the footer section */}
            <footer className="bg-gray-900 text-white py-12">
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Kushyanth Pothineni</h3>
                    <p className="text-gray-400">Building digital experiences with code and creativity.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      {navItems.map((item) => (
                        <li key={item.name}>
                          <button
                            onClick={() => scrollToSection(item.section)}
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            {item.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Connect</h3>
                    <div className="flex space-x-4">
                      {Object.entries(userData.socialLinks).map(([platform, link]) => (
                        <a 
                          key={platform} 
                          href={link} 
                          className="text-gray-400 hover:text-white transition-colors" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <i className={`fab fa-${platform} text-2xl`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                  <p>© {new Date().getFullYear()} Kushyanth. All rights reserved.</p>
                </div>
              </div>
            </footer>

            {/* Clean closing tags */}
          </div>
        </WaveEffect>
      </main>
    </>
  );
}
