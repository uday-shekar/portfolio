import React, { useEffect, useRef } from 'react';
import '../styles/Skills.css';

const Skills = () => {
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

  const skillData = {
    'USING NOW': [
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'React', icon: '⚛️' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'Tailwind CSS', icon: '💨' },
      { name: 'Bootstrap', icon: '🅱️' },
      { name: 'Git', icon: '📦' },
    ],
    'LEARNING': [
      { name: 'TypeScript', icon: '📘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'FastAPI', icon: '⚡' },
      { name: 'Express.js', icon: '🚂' },
    ],
    'OTHER SKILLS': [
      { name: 'Python', icon: '🐍' },
      { name: 'C/C++', icon: '💻' },
      { name: 'REST APIs', icon: '🔌' },
      { name: 'JWT Auth', icon: '🔐' },
    ],
  };

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-container">
        
        {/* Section Heading */}
        <div className="skills-header animate-on-scroll">
          <h2 className="skills-title-box">SKILLS</h2>
        </div>

        <div className="skills-content-wrapper">
          {Object.entries(skillData).map(([category, skillList], categoryIndex) => (
            <div 
              key={category} 
              className="skill-category-block animate-on-scroll" 
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="category-label">{category}:</h3>
              
              <div className="skills-grid">
                {skillList.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-card-wrapper"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (index * 0.1)}s` }}
                  >
                    {/* The Shadow Box Effect */}
                    <div className="skill-card">
                      <div className="skill-icon">{skill.icon}</div>
                      <p className="skill-name">{skill.name}</p>
                    </div>
                    <div className="skill-card-shadow"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="skills-footer animate-on-scroll delay-4">
          <div className="footer-divider-row">
            <div className="horizontal-line"></div>
            <div className="footer-tag">MORE TO COME</div>
            <div className="horizontal-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;