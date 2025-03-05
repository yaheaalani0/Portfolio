import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // For showing success/error messages
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact');
      if (element) {
        const position = element.getBoundingClientRect();
        setIsVisible(position.top < window.innerHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsCollapsed(true);

    try {
      await emailjs.send(
        'service_x5k65um',
        'template_uqgy2wo',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_email: 'yahea.dev@gmail.com',
        },
        'PehluIY4UtYqJtI0E'
      );
      
      setStatus('Message sent successfully!');
      setIsSuccess(true); // Show checkmark
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsCollapsed(false);
        setIsSuccess(false);
      }, 3000); // Increased timeout to show loading animation
    } catch (err) {
      setStatus('Failed to send message. Please try again.');
      setIsCollapsed(false);
      console.error('Failed to send email:', err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={`contact-section ${isVisible ? 'visible' : ''}`}>
      <h2><span>Let's Connect</span> 🤝</h2>
      
      <div className="contact-container">
        <div className="social-links">
          <a 
            href="https://www.linkedin.com/in/yahea-alani-18b69b225/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link linkedin"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a 
            href="https://github.com/yaheaalani0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link github"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="/assets/Yahea_Alani_CV.pdf"
            download="Yahea_Alani_CV.pdf"
            className="social-link cv-link"
            title="Download CV"
          >
            <i className="fas fa-file-pdf"></i>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="What would you like to collaborate on?"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className={`submit-button ${isCollapsed ? 'collapsed' : ''} ${isSuccess ? 'success' : ''}`}
            disabled={isCollapsed}
          >
            {isCollapsed ? (
              isSuccess ? '✓' : <div className="loading-spinner"></div>
            ) : (
              'Connect'
            )}
          </button>
          {status && (
            <div className={`status-message ${status.includes('Failed') ? 'error' : 'success'}`}>
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
