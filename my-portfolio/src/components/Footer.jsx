import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-content">
          {/* Identity Section */}
          <div className="footer-info">
            <h2 className="footer-name">Uday Shekar Nallamolu</h2>
            <p className="footer-role">Full Stack Developer</p>
          </div>

          {/* Social Links Section */}
          <div className="footer-social-links">
            <a
              href="https://github.com/udayshekar"
              target="_blank"
              rel="noopener noreferrer"
              className="social-footer-icon"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/uday-shekar-nallamolu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-footer-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:udayshekarnallamolu@gmail.com"
              className="social-footer-icon"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-notice">
            &copy; {currentYear} Uday Shekar Nallamolu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;