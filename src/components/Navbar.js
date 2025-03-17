import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Handle section visibility and active state
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset for better trigger point

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
          if (sectionId !== 'home') {
            section.classList.add('visible');
          }
        }
      });
    };

    // Handle smooth scrolling
    const handleNavClick = (e) => {
      if (e.target.hash) {
        e.preventDefault();
        const targetId = e.target.hash.slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          const targetPosition = targetId === 'home' ? 0 : targetSection.offsetTop - 80; // Special handling for home section
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          setIsOpen(false); // Close mobile menu after click
        }
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    // Initial check for visible sections
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#home" className={`logo ${activeSection === 'home' ? 'active' : ''}`}>Frank Asare</a>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </div>
        <button className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 