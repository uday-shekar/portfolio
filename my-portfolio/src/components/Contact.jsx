import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:udayshekarnallamolu@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-container">
        {/* Section Heading */}
        <div className="contact-header animate-on-scroll">
          <h2 className="section-title-box">CONTACT</h2>
        </div>

        <div className="contact-grid">
          {/* Left Side: Contact Info */}
          <div className="contact-info-panel animate-on-scroll delay-1">
            <h3 className="info-heading">Let's work together</h3>
            <p className="info-description">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="contact-methods">
              <div className="method-item group">
                <div className="method-icon-box">
                  <Mail size={20} />
                </div>
                <div className="method-text">
                  <p className="method-label">Email</p>
                  <a href="mailto:udayshekarnallamolu@gmail.com" className="method-link">
                    udayshekarnallamolu@gmail.com
                  </a>
                </div>
              </div>

              <div className="method-item group">
                <div className="method-icon-box">
                  <Phone size={20} />
                </div>
                <div className="method-text">
                  <p className="method-label">Phone</p>
                  <a href="tel:+919014979640" className="method-link">
                    +91 9014979640
                  </a>
                </div>
              </div>

              <div className="method-item group">
                <div className="method-icon-box">
                  <Linkedin size={20} />
                </div>
                <div className="method-text">
                  <p className="method-label">LinkedIn</p>
                  <a href="https://linkedin.com/in/uday-shekar-nallamolu" target="_blank" rel="noopener noreferrer" className="method-link">
                    uday-shekar-nallamolu
                  </a>
                </div>
              </div>

              <div className="method-item group">
                <div className="method-icon-box">
                  <Github size={20} />
                </div>
                <div className="method-text">
                  <p className="method-label">GitHub</p>
                  <a href="https://github.com/udayshekar" target="_blank" rel="noopener noreferrer" className="method-link">
                    github.com/udayshekar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-panel animate-on-scroll delay-2">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="ENTER YOUR NAME"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="ENTER YOUR EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="ENTER MESSAGE SUBJECT"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="YOUR MESSAGE"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="contact-textarea"
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                <span>SUBMIT</span>
                <Send size={18} className="send-icon" />
              </button>
            </form>
          </div>
        </div>

        {/* Back to Top */}
        <div className="back-to-top-container animate-on-scroll delay-3">
          <div className="divider-line"></div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="back-to-top-btn"
          >
            BACK TO TOP
          </button>
          <div className="divider-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;