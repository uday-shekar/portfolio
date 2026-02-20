import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Hero.css';
import mying from'../assets/myimg.jpg';

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-pattern"></div>

      <div className="hero-container">
        <div className="hero-grid">
          
          <div ref={textRef} className="hero-text-content">
            <p className="hero-subtitle">Hi, I am</p>
            <h1 className="hero-name">
              Uday Shekar
              <br />
              <span className="hero-surname">Nallamolu</span>
            </h1>
            <p className="hero-tagline">Full Stack Developer / UI Designer</p>

            <div className="hero-socials">
              <a href="https://github.com/uday-shekar" target="_blank" rel="noopener noreferrer" className="hero-social-icon">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/udayshekarnallamolu/" target="_blank" rel="noopener noreferrer" className="hero-social-icon">
                <Linkedin size={20} />
              </a>
              <a href="mailto:udayshekarnallamolu@gmail.com" className="hero-social-icon">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-visual-side">
            <div className="profile-card-container group">
              <div className="card-accent-bg"></div>
              <div className="profile-card-main">
                {/* If image exists, it shows here */}
                <img src={mying} alt="Uday Shekar" className="profile-image" />
                
                {/* Fallback overlay (optional, removes if you want image only) */}
                <div className="image-overlay">
                   <span className="initials-mini">UN</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="scroll-indicator">
          <div className="mouse-frame">
            <div className="mouse-wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;