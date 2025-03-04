import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // For showing success/error messages

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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Replace these with your EmailJS credentials
    emailjs.send(
      'service_x5k65um', // Create from EmailJS dashboard
      'template_uqgy2wo', // Create from EmailJS dashboard
      {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        to_email: 'yahea.dev@gmail.com', // Your email address
      },
      'PehluIY4UtYqJtI0E' // Get from EmailJS dashboard
    )
    .then((response) => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form
      setTimeout(() => setStatus(''), 5000); // Clear message after 5s
    })
    .catch((err) => {
      setStatus('Failed to send message. Please try again.');
      console.error('Failed to send email:', err);
    });
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
            href="https://github.com/yaheaalani0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link linkedin"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a 
            href="https://github.com/yaheaalani0?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link github"
          >
            <i className="fab fa-github"></i>
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
          <button type="submit">Send Message</button>
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
