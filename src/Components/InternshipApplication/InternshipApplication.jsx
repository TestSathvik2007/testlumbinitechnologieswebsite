// InternshipApplication.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './InternshipApplication.css';

const InternshipApplication = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    university: '',
    degree: '',
    graduationYear: '',
    gpa: '',
    skills: '',
    experience: '',
    motivation: '',
    startDate: '',
    duration: '',
    department: '',
    resume: null
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate form completion percentage
  const calculateProgress = () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'university', 'degree', 'graduationYear', 'skills', 'motivation', 'startDate', 'duration', 'department', 'resume'];
    const filledFields = requiredFields.filter(field => {
      if (field === 'resume') return form[field] !== null;
      return form[field] !== '';
    });
    return Math.round((filledFields.length / requiredFields.length) * 100);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleFileClick = () => {
    document.getElementById('resume').click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create FormData to handle file upload
    const formData = new FormData();
    Object.keys(form).forEach(key => {
      if (form[key] !== null && form[key] !== '') {
        formData.append(key, form[key]);
      }
    });

    try {
      // Replace this with your actual API endpoint
      console.log('Internship Application Submitted:', form);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  if (submitted) {
    return (
      <div className="application-container">
        <motion.div
          className="success-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="success-icon">✓</div>
          <h2>Application Submitted Successfully!</h2>
          <p>Thank you for applying for an internship at Lumbini Technologies.</p>
          <p>We have received your application and will review it shortly.</p>
          <p>You can expect to hear from us within 5-7 business days.</p>
          <button onClick={handleBackToHome} className="back-home-btn">
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="application-container">
      <motion.div
        className="application-form-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="form-header">
          <button onClick={handleBackToHome} className="back-btn">
            ← Back
          </button>
          <h1>Internship Application</h1>
          <p>Join Lumbini Technologies and launch your career with us!</p>
          
          {/* Progress Bar */}
          <div className="progress-container">
            <div className="progress-label">Form Completion: {calculateProgress()}%</div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="application-form">
          {/* Personal Information */}
          <div className="form-section">
            <h3>Personal Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.address}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="zipCode">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={form.zipCode}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Educational Information */}
          <div className="form-section">
            <h3>Educational Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="university">University/College *</label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  value={form.university}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="degree">Degree/Major *</label>
                <input
                  type="text"
                  id="degree"
                  name="degree"
                  value={form.degree}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="graduationYear">Expected Graduation Year *</label>
                <select
                  id="graduationYear"
                  name="graduationYear"
                  value={form.graduationYear}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="gpa">GPA (Optional)</label>
                <input
                  type="number"
                  id="gpa"
                  name="gpa"
                  step="0.01"
                  min="0"
                  max="4"
                  value={form.gpa}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Internship Details */}
          <div className="form-section">
            <h3>Internship Details</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="department">Preferred Department *</label>
                <select
                  id="department"
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Department</option>
                  <option value="software-development">Software Development</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-development">Mobile Development</option>
                  <option value="data-science">Data Science</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="quality-assurance">Quality Assurance</option>
                  <option value="project-management">Project Management</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="duration">Internship Duration *</label>
                <select
                  id="duration"
                  name="duration"
                  value={form.duration}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Duration</option>
                  <option value="3-months">3 Months</option>
                  <option value="6-months">6 Months</option>
                  <option value="12-months">12 Months</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="startDate">Preferred Start Date *</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Skills and Experience */}
          <div className="form-section">
            <h3>Skills and Experience</h3>
            <div className="form-group">
              <label htmlFor="skills">Technical Skills *</label>
              <textarea
                id="skills"
                name="skills"
                value={form.skills}
                onChange={handleChange}
                rows={3}
                placeholder="List your programming languages, frameworks, tools, etc."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="experience">Relevant Experience</label>
              <textarea
                id="experience"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                rows={3}
                placeholder="Describe any relevant projects, work experience, or achievements"
              />
            </div>

            <div className="form-group">
              <label htmlFor="motivation">Why do you want to intern with Lumbini Technologies? *</label>
              <textarea
                id="motivation"
                name="motivation"
                value={form.motivation}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your motivation and what you hope to achieve during this internship"
                required
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div className="form-section">
            <h3>Resume</h3>
            <div className="form-group">
              <label htmlFor="resume">Upload Your Resume *</label>
              <div className="file-upload-wrapper">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                  className="file-input"
                  style={{ display: 'none' }}
                />
                <div className="file-upload-display" onClick={handleFileClick}>
                  {form.resume ? (
                    <span className="file-selected">
                      📄 {form.resume.name}
                    </span>
                  ) : (
                    <span className="file-placeholder">
                      Click to choose file (PDF, DOC, DOCX)
                    </span>
                  )}
                </div>
              </div>
              <p className="file-info">Maximum file size: 5MB</p>
            </div>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default InternshipApplication;