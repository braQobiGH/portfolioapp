import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C#", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "VB.net", level: 75 },
        { name: "VBScript", level: 75 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "ASP.NET", level: 85 },
        { name: "ASP.NET Core MVC", level: 85 },
        { name: "Blazor", level: 80 }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "SQL Server", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "Oracle", level: 80 },
        { name: "Git", level: 85 }
      ]
    }
  ];

  const otherSkills = [
    {
      category: "Development",
      skills: [
        "Agile Methodologies",
        "REST API Design",
        "Software Architecture",
        "Test-Driven Development"
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        "Problem Solving",
        "Team Leadership",
        "Communication",
        "Project Management"
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-container">
          <div className="technical-skills">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h3>{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                          data-level={skill.level}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="other-skills">
            {otherSkills.map((category, index) => (
              <div key={index} className="other-skill-category">
                <h3>{category.category}</h3>
                <div className="tag-cloud">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 