import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Coffee, 
  Award,
  Users,
  X
} from 'lucide-react';
import './Career.css';

const Career = () => {
  const [showApplication, setShowApplication] = useState(false);

  const internship = {
    id: 1,
    title: "Student Internship Application",
    description: "We're currently accepting applications for student internships. If you're passionate about learning and building real-world projects with us, submit your application using the form.",
  };

  // No departments or locations for internships-only page

  const benefits = [
    { 
      icon: <Heart className="w-8 h-8" />, 
      title: "Health & Wellness", 
      description: "Comprehensive health insurance, mental health support, and wellness programs for you and your family" 
    },
    { 
      icon: <Coffee className="w-8 h-8" />, 
      title: "Work-Life Balance", 
      description: "Flexible working hours, remote work options, unlimited PTO, and a supportive work environment" 
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      title: "Growth & Learning", 
      description: "Learning budget, conference attendance, certification support, and clear career development paths" 
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      title: "Great Culture", 
      description: "Collaborative environment, team events, innovation time, and work with amazing colleagues" 
    }
  ];

  // Single internship card, no filtering needed

  const JobCard = ({ job }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="job-card"
    >
      <div className="job-card-header">
        <div className="job-info">
          <h3 className="job-title">{job.title}</h3>
        </div>
      </div>
      
      <p className="job-description">{job.description}</p>
      
      <div className="modal-actions">
        <button 
          onClick={() => setShowApplication(job)}
          className="btn btn-primary"
        >
          Apply Now
        </button>
      </div>
    </motion.div>
  );

  // Removed job details modal; we go straight to application form

  const ApplicationModal = ({ job, onClose }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Application submitted successfully!');
        onClose();
      } catch (error) {
        alert('Error submitting application. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-overlay"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="application-modal"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <h2 className="modal-title">Apply for {job.title}</h2>
            <button onClick={onClose} className="modal-close-btn">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="application-form">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                required
                className="form-input"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                required
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                required
                className="form-input"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Resume (PDF, DOC, DOCX)</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="form-input"
                onChange={(e) => setFormData({...formData, resume: e.target.files[0]})}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Cover Letter</label>
              <textarea
                rows="4"
                className="form-textarea"
                value={formData.coverLetter}
                onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                placeholder="Tell us why you're perfect for this role..."
              />
            </div>
            
            <div className="modal-actions">
              <button 
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
              <button 
                type="button"
                onClick={onClose}
                className="btn btn-secondary"
                disabled={isSubmitting}
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-title"
          >
            Join Our <span className="text-highlight">Innovation</span> Journey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero-subtitle"
          >
            Build the future with cutting-edge technology and an amazing team
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-stats"
          >
            <div className="stat-card">
              <span className="stat-number">20+</span>
              <p className="stat-label">Team Members</p>
            </div>
            <div className="stat-card">
              <span className="stat-number">1</span>
              <p className="stat-label">Active Internship</p>
            </div>
            <div className="stat-card">
              <span className="stat-number">Bengaluru</span>
              <p className="stat-label">Workspace Coming Soon</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="info-banner"
          >
            <p className="info-text">
              We are currently offering <strong>internships for students</strong> only. Our team has
              <strong> 20+ members</strong>, and one workspace is <strong>coming soon in Bengaluru</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="section-container">
          <h2 className="section-title">Why Work With Us?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="benefit-card"
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Application */}
      <section className="jobs-section">
        <div className="section-container">
          <h2 className="section-title">Internship Application</h2>

          <div className="jobs-grid">
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <JobCard job={internship} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {showApplication && (
          <ApplicationModal 
            job={showApplication} 
            onClose={() => setShowApplication(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Career;