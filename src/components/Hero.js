import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const roles = ["Software Developer", "System Administrator", "Problem Solver", "Tech Enthusiast"];

  useEffect(() => {
    // Trigger initial animations
    setIsLoaded(true);

    // Setup word rotation
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    // Setup parallax effect
    const handleParallax = (e) => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleParallax);

    return () => {
      clearInterval(wordInterval);
      document.removeEventListener('mousemove', handleParallax);
    };
  }, []);

  return (
    <section id="home" className={`hero ${isLoaded ? 'loaded' : ''}`}>
      {/* Animated background elements */}
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="pattern-overlay"></div>
        <div className="animated-shapes">
          <div className="shape shape-1 parallax" data-speed="2"></div>
          <div className="shape shape-2 parallax" data-speed="3"></div>
          <div className="shape shape-3 parallax" data-speed="4"></div>
          <div className="shape shape-4 parallax" data-speed="5"></div>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-text-container">
          <div className="hero-intro slide-in">
            <span className="greeting">👋 Hello, I'm</span>
            <h1 className="name">Frank O Asare</h1>
            <div className="title-container">
              <span className="title-prefix">A </span>
              <div className="title-animation">
                <span className="animated-title">{roles[currentWordIndex]}</span>
              </div>
            </div>
          </div>

          <p className="description fade-in">
            Crafting elegant solutions through code. Passionate about building innovative
            software that makes a difference. Transforming ideas into reality with
            clean, efficient, and scalable solutions.
          </p>

          <div className="cta-container fade-in">
            <div className="primary-cta">
              <a href="#projects" className="btn btn-primary">
                <span className="btn-content">
                  <span className="btn-text">Explore My Work</span>
                  <span className="btn-icon">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </span>
              </a>
            </div>

            <div className="secondary-cta">
              <a href="#contact" className="btn btn-secondary">
                <span className="btn-content">
                  <span className="btn-text">Let's Connect</span>
                  <span className="btn-icon">
                    <i className="fas fa-paper-plane"></i>
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="tech-stack fade-in">
            <span className="tech-stack-label">Tech Stack</span>
            <div className="tech-icons">
              <div className="tech-icon" data-tooltip="React">
                <i className="fab fa-react"></i>
              </div>
              <div className="tech-icon" data-tooltip="JavaScript">
                <i className="fab fa-js"></i>
              </div>
              <div className="tech-icon" data-tooltip="Node.js">
                <i className="fab fa-node"></i>
              </div>
              <div className="tech-icon" data-tooltip="HTML5">
                <i className="fab fa-html5"></i>
              </div>
              <div className="tech-icon" data-tooltip="CSS3">
                <i className="fab fa-css3-alt"></i>
              </div>
              <div className="tech-icon" data-tooltip="Git">
                <i className="fab fa-git-alt"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual fade-in">
          <div className="code-window">
            <div className="window-header">
              <div className="window-buttons">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="window-title">developer.js</div>
            </div>
            <div className="window-content">
              <pre>
                <code>
                  {`const developer = {
  name: 'Frank Asare',
  role: 'Software Developer',
  location: 'Accra, Ghana',
  skills: ['JavaScript', 'React', 
    'Node.js', 'C#', 'SQL'],
  passion: 'Building amazing apps'
};

while (true) {
  developer.learnNewTech();
  developer.buildCoolStuff();
  developer.solve(problems);
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator fade-in">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="scroll-text">Scroll to explore</div>
      </div>
    </section>
  );
};

export default Hero; 