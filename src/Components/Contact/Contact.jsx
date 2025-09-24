// Contact.jsx with debugging
import React, { useState, useRef } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
      when: "beforeChildren",
      staggerChildren: 0.2
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // Initialize EmailJS with your public key
  React.useEffect(() => {
    emailjs.init('ff8fWszDkzCSx-XBq');
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear message when user starts typing
    if (message.text) {
      setMessage({ text: '', type: '' });
    }
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    
    if (!name.trim()) {
      showMessage('Please enter your name', 'error');
      return false;
    }
    
    if (!email.trim()) {
      showMessage('Please enter your email', 'error');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showMessage('Please enter a valid email address', 'error');
      return false;
    }
    
    if (!message.trim()) {
      showMessage('Please enter your message', 'error');
      return false;
    }
    
    return true;
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Debug: Log the form data being sent
      console.log('Sending form data:', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: 'lumbinitechnologies01@gmail.com' // This should be in your template
      });
      
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        'service_alyb4ni',      // Your service ID
        'template_roai3bb',     // Your template ID
        form.current,           // Form reference
        'ff8fWszDkzCSx-XBq'    // Your public key
      );
      
      console.log('✅ Email sent successfully:', result.text);
      console.log('📧 Email should arrive at: lumbinitechnologies01@gmail.com');
      
      showMessage('Message sent successfully! We\'ll get back to you soon.', 'success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
    } catch (error) {
      console.error('❌ Email sending failed:', error);
      
      // More detailed error logging
      if (error.text) {
        console.error('Error details:', error.text);
      }
      
      showMessage('Failed to send message. Please try again or contact us directly.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="contact-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="contact-heading" variants={childVariants}>
        Contact Us
      </motion.h1>

      {/* Message Display */}
      {message.text && (
        <motion.div 
          className={`message-display ${message.type}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          variants={childVariants}
        >
          {message.text}
        </motion.div>
      )}

      <motion.form 
        ref={form}
        className="contact-form" 
        variants={childVariants}
        onSubmit={handleSubmit}
      >
        <input 
          type="text" 
          name="name"
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleInputChange}
          required 
        />
        <input 
          type="email" 
          name="email"
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleInputChange}
          required 
        />
        <textarea 
          rows="5" 
          name="message"
          placeholder="Your Message" 
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        
        {/* Hidden field to ensure recipient email is sent to template */}
        <input 
          type="hidden" 
          name="to_email" 
          value="lumbinitechnologies01@gmail.com" 
        />
        
        <button 
          type="submit" 
          disabled={isLoading}
          className={isLoading ? 'loading' : ''}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </motion.form>

      <motion.div className="contact-info" variants={childVariants}>
        <p>Email: lumbini.technologies01@gmail.com</p>
        <p>Phone: +91 9848294006</p>
        <p>
          Address: Flat No. 9, 3rd Floor, A Block, Sarvani Towers, <br />
          Siddhartha Nagar, Vijayawada - 520010
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Contact;