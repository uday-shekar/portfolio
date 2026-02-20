import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'YummyDosa',
      subtitle: 'Real-Time Food Ordering Platform',
      description: 'A full-stack food ordering platform with real-time user interactions. Features user authentication, menu browsing, cart functionality, and order placement. Built with React.js, Node.js/FastAPI, and MongoDB.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'REST APIs', 'JWT Auth'],
      class: 'project-yummy',
    },
    {
      title: 'XMail',
      subtitle: 'AI Voice-Based Email Application',
      description: 'An AI-powered, voice-controlled email application enabling hands-free email management. Features intelligent voice bot for composing and sending emails, built with FastAPI/Node.js backend and modern frontend.',
      tags: ['AI', 'Voice Control', 'FastAPI', 'React.js', 'JWT Auth'],
      class: 'project-xmail',
    },
  ];

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-container">
        {/* Section Heading */}
        <div className="projects-header animate-on-scroll">
          <h2 className="projects-title-box">PORTFOLIO</h2>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-inner">
                <div className="project-grid">
                  
                  {/* Project Visual Side */}
                  <div className={`project-visual ${project.class}`}>
                    <div className="visual-overlay"></div>
                    <div className="visual-content">
                      <div className="project-logo-box">
                        <span className="logo-initials">{project.title.substring(0, 2)}</span>
                      </div>
                      <h3 className="visual-title">{project.title}</h3>
                    </div>
                  </div>

                  {/* Project Details Side */}
                  <div className="project-details">
                    <div className="details-top">
                      <p className="project-subtitle">{project.subtitle}</p>
                      <p className="project-desc">{project.description}</p>

                      <div className="tag-cloud">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tech-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="project-actions">
                      <button className="btn-view">
                        <span>VIEW PROJECT</span>
                        <ExternalLink size={16} />
                      </button>
                      <button className="btn-github" aria-label="GitHub Repository">
                        <Github size={20} />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer animate-on-scroll delay-3">
          <p className="footer-text">And many more to come!</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;