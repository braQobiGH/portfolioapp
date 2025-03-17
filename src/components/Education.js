import React, { useEffect } from 'react';
import './Education.css';

const Education = () => {
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

  const certifications = [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "AZ-900",
      skills: ["Cloud Computing", "Azure Services", "Cloud Security"],
      icon: "fab fa-microsoft"
    },
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "SAA-C03",
      skills: ["AWS Services", "Cloud Architecture", "Infrastructure Design"],
      icon: "fab fa-aws"
    },
    {
      title: "Certified Scrum Master",
      issuer: "Scrum Alliance",
      date: "2023",
      credentialId: "CSM-123456",
      skills: ["Agile", "Scrum", "Project Management"],
      icon: "fas fa-tasks"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google",
      date: "2023",
      credentialId: "GCP-456789",
      skills: ["GCP", "Cloud Development", "DevOps"],
      icon: "fab fa-google"
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Education & Certifications</h2>
        
        <div className="education-content">
          <div className="academic-section animate-on-scroll">
            <h3 className="section-subtitle">Academic Background</h3>
            <div className="academic-card">
              <div className="academic-header">
                <div className="academic-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="academic-info">
                  <h4>Bachelor of Science in Computer Science</h4>
                  <p className="institution">University of Ghana</p>
                  <p className="period">2018 - 2022</p>
                </div>
              </div>
              <div className="academic-details">
                <p className="description">
                  Graduated with First Class Honours, specializing in Software Engineering and Cloud Computing.
                </p>
                <div className="achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    <li>First Class Honours</li>
                    <li>Best Final Year Project Award</li>
                    <li>Dean's List (All Semesters)</li>
                    <li>Student Representative Council Member</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="certifications-section animate-on-scroll">
            <h3 className="section-subtitle">Professional Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="certification-header">
                    <div className="certification-icon">
                      <i className={cert.icon}></i>
                    </div>
                    <div className="certification-info">
                      <h4>{cert.title}</h4>
                      <p className="issuer">{cert.issuer}</p>
                      <p className="date">{cert.date}</p>
                    </div>
                  </div>
                  <div className="certification-details">
                    <div className="credential-id">
                      <span className="label">Credential ID:</span>
                      <span className="value">{cert.credentialId}</span>
                    </div>
                    <div className="certification-skills">
                      {cert.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="certification-actions">
                    <a href="#" className="btn btn-secondary">
                      <i className="fas fa-certificate"></i> View Certificate
                    </a>
                    <a href="#" className="btn btn-primary">
                      <i className="fas fa-share-alt"></i> Share
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 