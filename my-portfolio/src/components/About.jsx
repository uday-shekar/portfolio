import React, { useEffect, useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container" ref={sectionRef}>
        
        {/* Section Heading */}
        <div className="about-header animate-on-scroll">
          <h2 className="about-title-box">ABOUT ME</h2>
        </div>

        <div className="about-content-wrapper">
          
          {/* Main Intro */}
          <div className="about-intro-card animate-on-scroll delay-1">
            <div className="accent-line"></div>
            <div className="intro-text-content">
              <h3 className="intro-heading">Full Stack Developer</h3>
              <p className="intro-paragraph">
                I'm a Full Stack Web Developer with hands-on experience in building scalable, 
                real-time web applications using React.js, JavaScript, Node.js, and FastAPI. 
                I focus on creating responsive, user-friendly interfaces using Bootstrap and 
                Tailwind CSS, along with developing secure and efficient backend APIs.
              </p>
              <p className="intro-paragraph">
                Experienced in RESTful architecture, JWT-based authentication, email OTP systems, 
                and clean modular code design. Passionate about solving real-world problems and 
                delivering production-ready solutions.
              </p>
            </div>
          </div>

          {/* Service Grid */}
          <div className="services-grid">
            <div className="service-card animate-on-scroll delay-2">
              <div className="card-inner">
                <h4 className="card-title">DESIGN</h4>
                <p className="card-desc">
                  I can design the site based on your needs and suggestions. I can also design 
                  the site from scratch consulting with you during work.
                </p>
              </div>
            </div>

            <div className="service-card animate-on-scroll delay-3">
              <div className="card-inner">
                <h4 className="card-title">DEVELOPMENT</h4>
                <p className="card-desc">
                  Building scalable web applications with modern technologies. Specializing in 
                  React.js, Node.js, and creating seamless user experiences.
                </p>
              </div>
            </div>

            <div className="service-card animate-on-scroll delay-4">
              <div className="card-inner">
                <h4 className="card-title">MAINTENANCE</h4>
                <p className="card-desc">
                  I can maintain your site if you want. I can add new features to the website 
                  as your needs change and provide technical support.
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="education-divider animate-on-scroll delay-5">
            <div className="divider-content">
              <div className="divider-line"></div>
              <div className="edu-info">
                <p className="edu-label">Education</p>
                <h4 className="edu-degree">Bachelor of Technology</h4>
                <p className="edu-specialization">Computer Science - AI</p>
                <p className="edu-college">KKR & KSR Institute of Technology and Sciences</p>
              </div>
              <div className="divider-line"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;