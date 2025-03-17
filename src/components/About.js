import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    // Add animation class after component mounts
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title animate-on-scroll">About Me</h2>
        
        <div className="about-content">
          <div className="about-image-container animate-on-scroll">
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80" 
                alt="Frank Asare" 
                className="profile-image" 
              />
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="mailto:your.email@example.com" className="social-link">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="about-details">
            <div className="about-text animate-on-scroll">
              <h3>Software Developer & System Administrator</h3>
              <p>
                Passionate software developer with expertise in building robust applications
                and managing system infrastructure. Committed to creating efficient and
                user-friendly solutions that drive business success.
              </p>
            </div>

            <div className="personal-info animate-on-scroll">
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">Frank Asare</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location:</span>
                  <span className="info-value">Accra, Ghana</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">your.email@example.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Availability:</span>
                  <span className="info-value">Full-time</span>
                </div>
              </div>
            </div>

            <div className="interests animate-on-scroll">
              <h4>Interests & Hobbies</h4>
              <div className="interest-tags">
                <span className="interest-tag">Web Development</span>
                <span className="interest-tag">System Architecture</span>
                <span className="interest-tag">Cloud Computing</span>
                <span className="interest-tag">AI & Machine Learning</span>
                <span className="interest-tag">Open Source</span>
              </div>
            </div>

            <div className="cta-buttons animate-on-scroll">
              <a href="/resume.pdf" className="btn btn-primary" download>
                <i className="fas fa-download"></i> Download CV
              </a>
              <a href="#contact" className="btn btn-secondary">
                <i className="fas fa-paper-plane"></i> Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 