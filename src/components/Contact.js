import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace these with your EmailJS credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        'service_jisaass', // Replace with your EmailJS service ID
        'template_skaeagf', // Replace with your EmailJS template ID
        templateParams,
        'gz176caruxRj9mkve' // Replace with your EmailJS public key
      );

      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Show success message
      toast.success('Thank you for your message! We will contact you soon.');
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <Toaster position="top-right" />
      <div className="contact-content">
        <h1 className="contact-title">
          CONTACT
          <span className="title-underline"></span>
        </h1>
        <p className="contact-subtitle">
          Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
        </p>
        
        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
                className="message-input"
                disabled={isSubmitting}
              />
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'SENDING...' : 'SUBMIT'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;