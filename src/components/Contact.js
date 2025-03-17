import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = {
    email: "frankoasare1@gmail.com",
    phone: ["+233-(0)24-6819493", "+233-(0)24-4621360"],
    address: "P.O. Box GP 2920 Odorkor – Accra",
    nationality: "Ghanaian"
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto URL with form data
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
`Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`
    )}`;

    // Open default email client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </div>
            
            <div className="contact-item">
              <h3>Phone</h3>
              {contactInfo.phone.map((number, index) => (
                <a key={index} href={`tel:${number}`}>{number}</a>
              ))}
            </div>
            
            <div className="contact-item">
              <h3>Address</h3>
              <p>{contactInfo.address}</p>
            </div>
            
            <div className="contact-item">
              <h3>Nationality</h3>
              <p>{contactInfo.nationality}</p>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send me a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  rows="5" 
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary"
              >
                Send Message
              </button>
              <p className="form-note">
                *This will open your default email client
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 