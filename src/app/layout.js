import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
});

export const metadata = {
  metadataBase: new URL("https://kushyanth-portfolio.web.app"),
  title: {
    default: "Kushyanth Pothineni | Software Developer Portfolio",
    template: "%s | Kushyanth Pothineni - Software Developer"
  },
  description: {
    default: "Portfolio of Kushyanth Pothineni, a Software Developer with expertise in Full Stack, Frontend, and Backend development using React.js, Next.js, Django, and more technologies.",
  },
  keywords: [
    "Kushyanth Pothineni",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer", 
    "Django Developer",
    "Mobile App Developer",
    "UI/UX Developer",
    "DevOps Engineer",
    "Cloud Developer",
    "JavaScript Developer",
    "Python Developer",
    "Java Developer",
    "Web Development",
    "Portfolio",
    "Software Engineer",
    "AWS Certified",
    "Firebase",
    "MongoDB",
    "Professional Portfolio",
    "Event Mania",
    "Pro Reader",
    "Pin Noter",
    "YouTube Downloader",
    "ServiceNow Certified",
    "Machine Learning",
    "API Development",
    "Database Design",
    "Responsive Design",
    "Mobile Development",
    "Android Development",
    "REST API",
    "Git",
    "Agile Development",
    "Software Engineering",
    "Computer Science",
    "Tech Portfolio",
    "Coding Projects",
    "Programming Portfolio",
    "Developer Resume",
    "Tech Skills"
  ],
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Kushyanth Pothineni | Software Developer Portfolio',
    description: "Portfolio of Kushyanth Pothineni, a Software Developer with expertise in Full Stack, Frontend, and Backend development using React.js, Next.js, Django, and more technologies.",
    url: 'https://kushyanth-portfolio.web.app',
    siteName: 'Kushyanth Pothineni Portfolio',
    images: [
      {
        url: 'https://i.ibb.co/CpW4rW5s/picofme-2.png',
        width: 800,
        height: 600,
        alt: 'Kushyanth Pothineni - Software Developer',
      },
      {
        url: 'https://i.ibb.co/mFFtB0B/AWS-Academy-Machine-Learning-Foundations-page-0001.jpg',
        width: 800,
        height: 600,
        alt: 'AWS Academy Machine Learning Foundations Certificate - Kushyanth Pothineni',
      },
      {
        url: 'https://i.ibb.co/vPfStSV/Wipro-Certificate.png',
        width: 800,
        height: 600,
        alt: 'Wipro Talent Next Java Full Stack Certificate - Kushyanth Pothineni',
      },
      {
        url: 'https://i.ibb.co/rdvfGyY/image.png',
        width: 800,
        height: 600,
        alt: 'Responsive Web Designer Certificate - Kushyanth Pothineni',
      },
      {
        url: 'https://i.ibb.co/gjkdXfn/NPTEL-Introduction-To-Internet-Of-Things-page-0001.jpg',
        width: 800,
        height: 600,
        alt: 'NPTEL Introduction To Internet Of Things Certificate - Kushyanth Pothineni',
      },
      {
        url: 'https://i.ibb.co/6nzykQ3/1735105593467-page-0001.jpg',
        width: 800,
        height: 600,
        alt: 'Junior Software Developer Certificate - Kushyanth Pothineni',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kushyanth Pothineni | Software Developer Portfolio',
    description: "Portfolio of Kushyanth Pothineni, a Software Developer with expertise in Full Stack, Frontend, and Backend development using React.js, Next.js, Django, and more technologies.",
    creator: '@KushyanthPothi1',
    images: [
      {
        url: 'https://i.ibb.co/CpW4rW5s/picofme-2.png',
        alt: 'Kushyanth Pothineni - Software Developer',
      }
    ]
  },
  verification: {
    google: "HOxjOBPh1Ql-_wTVd1jeYAetMmoBBv80DCVeeCxCVKE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="author" content="Kushyanth Pothineni" />
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Guntur, Andhra Pradesh" />
        <meta name="geo.position" content="16.2973;80.4370" />
        <meta name="ICBM" content="16.2973, 80.4370" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="canonical" href="https://kushyanth-portfolio.web.app" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://kushyanth-portfolio.web.app/#website",
                  "url": "https://kushyanth-portfolio.web.app",
                  "name": "Kushyanth Pothineni Portfolio",
                  "description": "Portfolio of Kushyanth Pothineni, a Software Developer specializing in various technologies including React.js, Next.js, Django, and more.",
                  "publisher": {"@id": "https://kushyanth-portfolio.web.app/#person"},
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://kushyanth-portfolio.web.app/?search={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ],
                  "mainEntity": {"@id": "https://kushyanth-portfolio.web.app/#person"}
                },
                {
                  "@type": "Organization",
                  "@id": "https://kushyanth-portfolio.web.app/#organization",
                  "name": "Kushyanth Pothineni Software Development",
                  "url": "https://kushyanth-portfolio.web.app",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://i.ibb.co/CpW4rW5s/picofme-2.png",
                    "width": 800,
                    "height": 600
                  },
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+91-8125144235",
                      "contactType": "customer service",
                      "email": "pothineni.kushyanth@gmail.com",
                      "areaServed": "IN",
                      "availableLanguage": ["English", "Telugu", "Hindi"]
                    }
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Guntur",
                    "addressRegion": "Andhra Pradesh",
                    "addressCountry": "IN"
                  },
                  "founder": {"@id": "https://kushyanth-portfolio.web.app/#person"}
                },
                {
                  "@type": "Person",
                  "@id": "https://kushyanth-portfolio.web.app/#person",
                  "name": "Kushyanth Pothineni",
                  "alternateName": ["Kushyanth", "Kushyanth P", "K Pothineni"],
                  "url": "https://kushyanth-portfolio.web.app",
                  "image": {
                    "@type": "ImageObject",
                    "@id": "https://kushyanth-portfolio.web.app/#personImage",
                    "url": "https://i.ibb.co/CpW4rW5s/picofme-2.png",
                    "caption": "Kushyanth Pothineni - Software Developer",
                    "width": 800,
                    "height": 600
                  },
                  "jobTitle": ["Software Developer", "Full Stack Developer", "Frontend Developer", "Backend Developer"],
                  "description": "Software Developer with expertise in Full Stack, Frontend, and Backend development, specializing in building responsive, scalable, and user-friendly web and mobile applications using modern technologies like React.js, Next.js, Django, and more.",
                  "birthPlace": {
                    "@type": "Place",
                    "name": "Guntur, Andhra Pradesh, India"
                  },
                  "nationality": "Indian",
                  "email": "pothineni.kushyanth@gmail.com",
                  "telephone": "+91-8125144235",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Guntur",
                    "addressRegion": "Andhra Pradesh",
                    "addressCountry": "IN"
                  },
                  "sameAs": [
                    "https://github.com/kushyanthpothi/",
                    "https://www.linkedin.com/in/kushyanth-pothineni/",
                    "https://x.com/KushyanthPothi1",
                    "https://drive.google.com/file/d/1QdWYq6ditLGmzjzqcEITSwpAC9x-ZXUN/view?usp=sharing"
                  ],
                  "knowsAbout": [
                    "React.js", "Next.js", "Django", "Java", "Python", "JavaScript",
                    "Firebase", "MongoDB", "PostgreSQL", "MySQL", "AWS", "HTML5", "CSS3",
                    "Frontend Development", "Backend Development", "Full Stack Development", 
                    "Web Applications", "Mobile Applications", "UI/UX Development",
                    "API Development", "Database Design", "Software Architecture",
                    "Agile Development", "Git Version Control", "DevOps", "Cloud Computing",
                    "Machine Learning", "Internet of Things", "ServiceNow Administration",
                    "Responsive Web Design", "Android Development", "REST APIs"
                  ],
                  "alumniOf": [
                    {
                      "@type": "EducationalOrganization",
                      "name": "KKR & KSR Institute of Technology and Sciences",
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Guntur",
                        "addressRegion": "Andhra Pradesh",
                        "addressCountry": "IN"
                      }
                    },
                    {
                      "@type": "EducationalOrganization",
                      "name": "Wipro Talent Next",
                      "description": "Java Full Stack Development Program"
                    }
                  ],
                  "worksFor": [
                    {
                      "@type": "Organization",
                      "name": "NinjaCart",
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Bangalore",
                        "addressRegion": "Karnataka",
                        "addressCountry": "IN"
                      },
                      "description": "Software Developer Intern - API Development and Optimization"
                    }
                  ],
                  "hasCredential": [
                    {
                      "@type": "EducationalOccupationalCredential",
                      "@id": "https://kushyanth-portfolio.web.app/#servicenow-cert",
                      "name": "ServiceNow Certified System Administrator",
                      "description": "Professional certification in ServiceNow platform administration, workflow design, and system configuration.",
                      "url": "https://drive.google.com/file/d/1QdWYq6ditLGmzjzqcEITSwpAC9x-ZXUN/view?usp=sharing",
                      "validFrom": "2024-01-15",
                      "educationalLevel": "Professional Certificate",
                      "competencyRequired": ["ServiceNow", "System Administration", "Workflow Design"],
                      "image": {
                        "@type": "ImageObject",
                        "url": "https://i.ibb.co/5WRM8C76/Service-Now-CSA-page-0001.jpg",
                        "width": 800,
                        "height": 600,
                        "caption": "ServiceNow Certified System Administrator - Kushyanth Pothineni"
                      },
                      "recognizedBy": {
                        "@type": "Organization",
                        "name": "ServiceNow"
                      }
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      "@id": "https://kushyanth-portfolio.web.app/#aws-cert",
                      "name": "AWS Academy Machine Learning Foundations",
                      "description": "Certification in machine learning fundamentals, deep learning, and data analysis with AWS services.",
                      "url": "https://www.credly.com/badges/446553a7-d24b-4955-889e-55eec636f750/linked_in_profile",
                      "validFrom": "2023-01-15",
                      "educationalLevel": "Professional Certificate",
                      "competencyRequired": ["Machine Learning", "AWS", "Data Analysis", "Deep Learning"],
                      "image": {
                        "@type": "ImageObject",
                        "url": "https://i.ibb.co/mFFtB0B/AWS-Academy-Machine-Learning-Foundations-page-0001.jpg",
                        "width": 800,
                        "height": 600,
                        "caption": "AWS Academy Machine Learning Foundations Certificate - Kushyanth Pothineni"
                      },
                      "recognizedBy": {
                        "@type": "Organization",
                        "name": "Amazon Web Services"
                      }
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      "@id": "https://kushyanth-portfolio.web.app/#wipro-cert",
                      "name": "Wipro Talent Next Java Full Stack Certification",
                      "description": "Professional certification in Java Full Stack development, including Spring Boot, Hibernate, and frontend technologies.",
                      "url": "https://cert.diceid.com/cid/xNkRt2LMUe",
                      "validFrom": "2022-08-20",
                      "educationalLevel": "Professional Certificate",
                      "competencyRequired": ["Java", "Spring Boot", "Full Stack Development", "Hibernate"],
                      "image": {
                        "@type": "ImageObject",
                        "url": "https://i.ibb.co/vPfStSV/Wipro-Certificate.png",
                        "width": 800,
                        "height": 600,
                        "caption": "Wipro Talent Next Java Full Stack Certificate - Kushyanth Pothineni"
                      },
                      "recognizedBy": {
                        "@type": "Organization",
                        "name": "Wipro"
                      }
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      "@id": "https://kushyanth-portfolio.web.app/#responsive-cert",
                      "name": "Responsive Web Designer Certification",
                      "description": "Certification in responsive web design principles, HTML5, CSS3, and modern web development techniques.",
                      "url": "https://www.freecodecamp.org/certification/Kushyanthpothi/responsive-web-design",
                      "validFrom": "2021-09-15",
                      "educationalLevel": "Professional Certificate",
                      "competencyRequired": ["Responsive Web Design", "HTML5", "CSS3", "Flexbox", "CSS Grid"],
                      "image": {
                        "@type": "ImageObject",
                        "url": "https://i.ibb.co/rdvfGyY/image.png",
                        "width": 800,
                        "height": 600,
                        "caption": "Responsive Web Designer Certificate - Kushyanth Pothineni"
                      },
                      "recognizedBy": {
                        "@type": "Organization",
                        "name": "freeCodeCamp"
                      }
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      "@id": "https://kushyanth-portfolio.web.app/#nptel-cert",
                      "name": "NPTEL Introduction To Internet Of Things",
                      "description": "Certification in IoT fundamentals, sensors, connectivity, and IoT system design from NPTEL.",
                      "url": "https://nptel.ac.in/noc/E_Certificate/NPTEL24CS35S65630220730556258",
                      "validFrom": "2021-11-30",
                      "educationalLevel": "Professional Certificate",
                      "competencyRequired": ["Internet of Things", "Embedded Systems", "Sensors", "IoT Architecture"],
                      "image": {
                        "@type": "ImageObject",
                        "url": "https://i.ibb.co/gjkdXfn/NPTEL-Introduction-To-Internet-Of-Things-page-0001.jpg",
                        "width": 800,
                        "height": 600,
                        "caption": "NPTEL Introduction To Internet Of Things Certificate - Kushyanth Pothineni"
                      },
                      "recognizedBy": {
                        "@type": "Organization",
                        "name": "NPTEL"
                      }
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      "@id": "https://kushyanth-portfolio.web.app/#jsd-cert",
                      "name": "Junior Software Developer",
                      "description": "Certification validating skills in software development methodologies, programming, and industry best practices.",
                      "url": "https://drive.google.com/file/d/1q3-3-lYH3mm08gcnGXN66SIFSRwyQm0u/view?usp=sharing",
                      "validFrom": "2024-12-25",
                      "educationalLevel": "Professional Certificate",
                      "competencyRequired": ["Software Development", "Programming", "Problem Solving", "SDLC"],
                      "image": {
                        "@type": "ImageObject",
                        "url": "https://i.ibb.co/6nzykQ3/1735105593467-page-0001.jpg",
                        "width": 800,
                        "height": 600,
                        "caption": "Junior Software Developer Certificate - Kushyanth Pothineni"
                      }
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      "@id": "https://kushyanth-portfolio.web.app/#digital-marketing-cert",
                      "name": "The Fundamentals of Digital Marketing",
                      "description": "Google certification covering digital marketing fundamentals, SEO, SEM, and online marketing strategies.",
                      "url": "https://learndigital.withgoogle.com/link/1qsdpcedm9s",
                      "validFrom": "2023-06-10",
                      "educationalLevel": "Professional Certificate",
                      "competencyRequired": ["Digital Marketing", "SEO", "SEM", "Online Advertising"],
                      "image": {
                        "@type": "ImageObject",
                        "url": "https://i.ibb.co/8gqNBvR/Google-Digital-Garage-The-fundamentals-of-digital-marketing-page-0001.jpg",
                        "width": 800,
                        "height": 600,
                        "caption": "Google Digital Marketing Certificate - Kushyanth Pothineni"
                      },
                      "recognizedBy": {
                        "@type": "Organization",
                        "name": "Google"
                      }
                    }
                  ],
                  "workExample": [
                    {
                      "@type": "SoftwareSourceCode",
                      "@id": "https://kushyanth-portfolio.web.app/#event-mania",
                      "name": "Event Mania",
                      "codeRepository": "https://github.com/kushyanthpothi/EventMania",
                      "description": "A comprehensive event management platform for colleges and students with real-time updates and multiple user roles.",
                      "programmingLanguage": ["React.js", "Firebase", "JavaScript", "HTML5", "CSS3"],
                      "image": "https://i.ibb.co/gJQKjNK/Event-Mania-Design.png",
                      "url": "https://kushyanth-portfolio.web.app/projects/event-mania",
                      "author": {"@id": "https://kushyanth-portfolio.web.app/#person"},
                      "dateCreated": "2023-08-15",
                      "dateModified": "2024-01-20",
                      "keywords": ["Event Management", "React.js", "Firebase", "Real-time", "Authentication"],
                      "mainEntity": {
                        "@type": "SoftwareApplication",
                        "name": "Event Mania",
                        "description": "Event Mania is a one-stop platform designed to simplify event management for colleges and students with real-time updates, secure authentication, and multiple user roles.",
                        "applicationCategory": "WebApplication",
                        "operatingSystem": "Web Browser",
                        "url": "https://ap-event-mania.web.app/",
                        "softwareVersion": "1.0",
                        "featureList": ["Event Creation", "User Registration", "Real-time Updates", "Multi-role Support"],
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "USD"
                        }
                      }
                    },
                    {
                      "@type": "SoftwareSourceCode",
                      "@id": "https://kushyanth-portfolio.web.app/#pro-reader",
                      "name": "Pro Reader",
                      "codeRepository": "https://github.com/kushyanthpothi/ProReader",
                      "description": "Feature-rich Android application for QR code scanning, speech-to-text conversion, and text extraction with offline capabilities.",
                      "programmingLanguage": ["Java", "Kotlin", "Android SDK", "ML Kit"],
                      "image": "https://i.ibb.co/sQYYbks/Pro-Reader-Banner-web-1.png",
                      "url": "https://kushyanth-portfolio.web.app/projects/pro-reader",
                      "author": {"@id": "https://kushyanth-portfolio.web.app/#person"},
                      "dateCreated": "2023-06-10",
                      "dateModified": "2023-12-15",
                      "keywords": ["Android", "QR Code", "Speech Recognition", "Text Extraction", "ML Kit"],
                      "mainEntity": {
                        "@type": "SoftwareApplication",
                        "name": "Pro Reader",
                        "description": "Pro Reader is a feature-packed Android application that empowers users to handle QR codes, speech recognition, and text extraction with offline capabilities and ML Kit integration.",
                        "applicationCategory": "MobileApplication",
                        "operatingSystem": "Android",
                        "softwareVersion": "1.0",
                        "featureList": ["QR Code Scanning", "Speech-to-Text", "Text Extraction", "Offline Support"],
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "USD"
                        }
                      }
                    },
                    {
                      "@type": "SoftwareSourceCode",
                      "@id": "https://kushyanth-portfolio.web.app/#pin-noter",
                      "name": "Pin Noter",
                      "codeRepository": "https://github.com/kushyanthpothi/pin-noter",
                      "description": "React-based note-taking application with rich text formatting, offline caching, and cloud synchronization capabilities.",
                      "programmingLanguage": ["React.js", "JavaScript", "Firebase", "HTML5", "CSS3"],
                      "image": "https://i.ibb.co/zNYpwtk/Untitled-design.png",
                      "url": "https://kushyanth-portfolio.web.app/projects/pin-noter",
                      "author": {"@id": "https://kushyanth-portfolio.web.app/#person"},
                      "dateCreated": "2023-04-20",
                      "dateModified": "2024-02-10",
                      "keywords": ["Note Taking", "React.js", "Offline Support", "Cloud Sync", "Rich Text"],
                      "mainEntity": {
                        "@type": "SoftwareApplication",
                        "name": "Pin Noter",
                        "description": "Pin Noter is a React-based note-taking application offering rich text formatting, offline caching for seamless note-taking, and automatic cloud synchronization with user authentication.",
                        "applicationCategory": "WebApplication",
                        "operatingSystem": "Web Browser",
                        "url": "https://pin-noter.web.app/",
                        "softwareVersion": "1.0",
                        "featureList": ["Rich Text Formatting", "Offline Caching", "Cloud Synchronization", "Note Pinning"],
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "USD"
                        }
                      }
                    },
                    {
                      "@type": "SoftwareSourceCode",
                      "@id": "https://kushyanth-portfolio.web.app/#youtube-downloader",
                      "name": "YouTube Video and Audio Downloader",
                      "codeRepository": "https://github.com/kushyanthpothi/ytdownloader",
                      "description": "Django-based application for downloading YouTube videos and audio with customizable quality options and format selection.",
                      "programmingLanguage": ["Python", "Django", "HTML5", "CSS3"],
                      "image": "https://i.ibb.co/FB9hXK8/Laptop-Design-edit.png",
                      "url": "https://kushyanth-portfolio.web.app/projects/youtube-downloader",
                      "author": {"@id": "https://kushyanth-portfolio.web.app/#person"},
                      "dateCreated": "2023-02-15",
                      "dateModified": "2023-10-20",
                      "keywords": ["YouTube Downloader", "Django", "Video Download", "Audio Extraction", "Python"],
                      "mainEntity": {
                        "@type": "SoftwareApplication",
                        "name": "YouTube Video and Audio Downloader",
                        "description": "A Django-based application that enables downloading YouTube videos and audio in various formats and resolutions with quality options and audio extraction capabilities.",
                        "applicationCategory": "WebApplication",
                        "operatingSystem": "Web Browser",
                        "softwareVersion": "1.0",
                        "featureList": ["Video Download", "Audio Extraction", "Quality Selection", "Format Options"],
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "USD"
                        }
                      }
                    }
                  ]
                },
                {
                  "@type": "ItemList",
                  "@id": "https://kushyanth-portfolio.web.app/#projectlist",
                  "name": "Kushyanth Pothineni's Projects",
                  "description": "A collection of software projects developed by Kushyanth Pothineni",
                  "numberOfItems": 4,
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "item": {"@id": "https://kushyanth-portfolio.web.app/#event-mania"}
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "item": {"@id": "https://kushyanth-portfolio.web.app/#pro-reader"}
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "item": {"@id": "https://kushyanth-portfolio.web.app/#pin-noter"}
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "item": {"@id": "https://kushyanth-portfolio.web.app/#youtube-downloader"}
                    }
                  ]
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://kushyanth-portfolio.web.app/#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://kushyanth-portfolio.web.app"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "About",
                      "item": "https://kushyanth-portfolio.web.app#about"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Experience",
                      "item": "https://kushyanth-portfolio.web.app#experience"
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "name": "Skills",
                      "item": "https://kushyanth-portfolio.web.app#skills"
                    },
                    {
                      "@type": "ListItem",
                      "position": 5,
                      "name": "Projects",
                      "item": "https://kushyanth-portfolio.web.app#projects"
                    },
                    {
                      "@type": "ListItem",
                      "position": 6,
                      "name": "Event Mania Project",
                      "item": "https://kushyanth-portfolio.web.app/projects/event-mania"
                    },
                    {
                      "@type": "ListItem",
                      "position": 7,
                      "name": "Pro Reader Project",
                      "item": "https://kushyanth-portfolio.web.app/projects/pro-reader"
                    },
                    {
                      "@type": "ListItem",
                      "position": 8,
                      "name": "Pin Noter Project",
                      "item": "https://kushyanth-portfolio.web.app/projects/pin-noter"
                    },
                    {
                      "@type": "ListItem",
                      "position": 9,
                      "name": "YouTube Downloader Project",
                      "item": "https://kushyanth-portfolio.web.app/projects/youtube-downloader"
                    },
                    {
                      "@type": "ListItem",
                      "position": 10,
                      "name": "Certifications",
                      "item": "https://kushyanth-portfolio.web.app#certifications"
                    },
                    {
                      "@type": "ListItem",
                      "position": 11,
                      "name": "Contact",
                      "item": "https://kushyanth-portfolio.web.app#contact"
                    }
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": "https://kushyanth-portfolio.web.app/#webpage",
                  "url": "https://kushyanth-portfolio.web.app",
                  "name": "Kushyanth Pothineni | Software Developer Portfolio",
                  "description": "Portfolio of Kushyanth Pothineni, a Software Developer with expertise in Full Stack, Frontend, and Backend development using React.js, Next.js, Django, and more technologies.",
                  "isPartOf": {"@id": "https://kushyanth-portfolio.web.app/#website"},
                  "about": {"@id": "https://kushyanth-portfolio.web.app/#person"},
                  "breadcrumb": {"@id": "https://kushyanth-portfolio.web.app/#breadcrumb"},
                  "mainEntity": {"@id": "https://kushyanth-portfolio.web.app/#person"},
                  "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", "h2", ".main-content"]
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://kushyanth-portfolio.web.app/#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What technologies does Kushyanth Pothineni specialize in?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Kushyanth specializes in React.js, Next.js, Django, Python, JavaScript, Java, Firebase, MongoDB, and various other modern web development technologies."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What type of projects has Kushyanth Pothineni built?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Kushyanth has built various projects including Event Mania (event management platform), Pro Reader (Android QR code app), Pin Noter (note-taking app), and YouTube Downloader (media download tool)."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What certifications does Kushyanth Pothineni have?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Kushyanth holds certifications including ServiceNow Certified System Administrator, AWS Academy Machine Learning Foundations, Wipro Talent Next Java Full Stack, and several others."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${nunitoSans.variable} font-nunito antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
