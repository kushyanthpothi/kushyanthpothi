import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
});

export const metadata = {
  title: {
    default: "Kushyanth Pothineni || A Developers Portfolio",
    template: "%s | Kushyanth Pothineni"
  },
  description: "I'm Kushyanth, and I'm passionate about using technology to build useful and efficient solutions. I'm dedicated to creating high-quality work that's easy to use and works smoothly. I'm always learning and adapting to new trends and technologies. I'm detail-oriented and focused on results, and I want to make a positive difference with everything I do.",
  keywords: [
    "Kushyanth Pothineni",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Django Developer",
    "Web Development",
    "Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Kushyanth Pothineni || A Developers Portfolio',
    description: "I'm Kushyanth, and I'm passionate about using technology to build useful and efficient solutions. I'm dedicated to creating high-quality work that's easy to use and works smoothly. I'm always learning and adapting to new trends and technologies. I'm detail-oriented and focused on results, and I want to make a positive difference with everything I do.",
    url: 'https://kushyanth-portfolio.web.app',
    siteName: 'Kushyanth Pothineni Portfolio',
    images: [
      {
        url: 'https://i.ibb.co/CpW4rW5s/picofme-2.png',
        width: 800,
        height: 600,
        alt: 'Kushyanth Pothineni Profile'
      },
      {
        url: 'https://i.ibb.co/mFFtB0B/AWS-Academy-Machine-Learning-Foundations-page-0001.jpg',
        width: 800,
        height: 600,
        alt: 'AWS Academy Machine Learning Foundations Certificate'
      },
      {
        url: 'https://i.ibb.co/vPfStSV/Wipro-Certificate.png',
        width: 800,
        height: 600,
        alt: 'Wipro Talent Next Java Full Stack Certificate'
      },
      {
        url: 'https://i.ibb.co/rdvfGyY/image.png',
        width: 800,
        height: 600,
        alt: 'Responsive Web Designer Certificate'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kushyanth Pothineni || A Developers Portfolio',
    description: "I'm Kushyanth, and I'm passionate about using technology to build useful and efficient solutions. I'm dedicated to creating high-quality work that's easy to use and works smoothly. I'm always learning and adapting to new trends and technologies. I'm detail-oriented and focused on results, and I want to make a positive difference with everything I do.",
    creator: '@KushyanthPothi1',
    images: ['https://i.ibb.co/CpW4rW5s/picofme-2.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="HOxjOBPh1Ql-_wTVd1jeYAetMmoBBv80DCVeeCxCVKE" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kushyanth Pothineni",
              url: "https://kushyanth-portfolio.web.app",
              image: "https://i.ibb.co/CpW4rW5s/picofme-2.png",
              jobTitle: "Full Stack Developer",
              description: "Full Stack Developer specializing in React.js, Next.js, and Django",
              sameAs: [
                "https://github.com/kushyanthpothi/",
                "https://www.linkedin.com/in/kushyanth-pothineni/",
                "https://x.com/KushyanthPothi1"
              ],
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "AWS Academy Machine Learning Foundations",
                  url: "https://www.credly.com/badges/446553a7-d24b-4955-889e-55eec636f750/linked_in_profile",
                  image: "https://i.ibb.co/mFFtB0B/AWS-Academy-Machine-Learning-Foundations-page-0001.jpg"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "Wipro Talent Next Java Full Stack Certification",
                  url: "https://cert.diceid.com/cid/xNkRt2LMUe",
                  image: "https://i.ibb.co/vPfStSV/Wipro-Certificate.png"
                }
              ],
              mainEntity: [
                {
                  "@type": "SoftwareApplication",
                  name: "Event Mania",
                  applicationCategory: "WebApplication",
                  url: "https://kushyanth-portfolio.web.app/project/event-mania",
                  image: "https://i.ibb.co/gJQKjNK/Event-Mania-Design.png"
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Pro Reader",
                  applicationCategory: "MobileApplication",
                  url: "https://kushyanth-portfolio.web.app/project/pro-reader",
                  image: "https://i.ibb.co/sQYYbks/Pro-Reader-Banner-web-1.png"
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Pin Noter",
                  applicationCategory: "WebApplication",
                  url: "https://kushyanth-portfolio.web.app/project/pin-noter",
                  image: "https://i.ibb.co/zNYpwtk/Untitled-design.png"
                },
                {
                  "@type": "SoftwareApplication",
                  name: "YouTube Video and Audio Downloader",
                  applicationCategory: "WebApplication",
                  url: "https://kushyanth-portfolio.web.app/project/youtube-downloader",
                  image: "https://i.ibb.co/FB9hXK8/Laptop-Design-edit.png"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${nunitoSans.variable} font-nunito antialiased`}>
        {children}
      </body>
    </html>
  );
}
