import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Software Systems Analyst/Developer",
      company: "Spagad Technologies Limited",
      location: "Accra",
      period: "2022 - PRESENT",
      type: "Full-time",
      icon: "💻",
      responsibilities: [
        "Developed and maintained software applications using JavaScript, VBScript, C#, and Asp.net framework",
        "Collaborated with cross-functional teams to design and implement new features",
        "Troubleshot and resolved complex technical issues to ensure smooth operation of software"
      ],
      technologies: ["C#", "JavaScript", "ASP.NET", "SQL Server", "Git"]
    },
    {
      title: "System Administrator",
      company: "Drivers Licensing Authority",
      location: "Accra",
      period: "NOVEMBER 2021 - NOVEMBER 2022",
      type: "National Service",
      icon: "🔧",
      responsibilities: [
        "Creating and printing of roadworthy renewal stickers",
        "Help fix all I.T related problems",
        "Maintained and optimized system performance",
        "Provided technical support to staff members"
      ],
      technologies: ["Windows Server", "Network Administration", "IT Support", "System Maintenance"]
    }
  ];

  const projects = [
    {
      title: "Mini Banking Management System",
      description: "A comprehensive banking solution for savings and loans institutions, featuring account management, transaction processing, and reporting tools.",
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&auto=format&fit=crop&q=80",
      technologies: ["C#", "SQL Server", "ASP.NET"],
      features: [
        "Account Management",
        "Transaction Processing",
        "Financial Reporting",
        "User Authentication"
      ],
      link: "#"
    },
    {
      title: "POS and Inventory Management",
      description: "An integrated point-of-sale system with real-time inventory tracking, sales analytics, and employee management capabilities.",
      image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800&auto=format&fit=crop&q=80",
      technologies: ["JavaScript", "Node.js", "MySQL"],
      features: [
        "Real-time Inventory Tracking",
        "Sales Analytics",
        "Employee Management",
        "Report Generation"
      ],
      link: "#"
    },
    {
      title: "Pharmacy Management System",
      description: "A complete pharmacy management solution with inventory control, prescription management, and sales tracking features.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&auto=format&fit=crop&q=80",
      technologies: ["C#", "SQL Server", "Windows Forms"],
      features: [
        "Inventory Management",
        "Prescription Tracking",
        "Sales Management",
        "Customer Database"
      ],
      link: "#"
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-icon">{exp.icon}</div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <span className="experience-type">{exp.type}</span>
                </div>
                <div className="experience-company">
                  <span className="company-name">{exp.company}</span>
                  <span className="location">{exp.location}</span>
                </div>
                <p className="period">{exp.period}</p>
                <div className="responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
                <div className="technologies-used">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-section">
          <h3 className="projects-title">Notable Projects</h3>
          <div className="project-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-overlay">
                    <a href={project.link} className="btn btn-secondary">View Project</a>
                  </div>
                </div>
                <div className="project-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-features">
                    <h5>Key Features:</h5>
                    <ul>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 