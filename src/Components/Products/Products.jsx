import React, { useState } from 'react';
import './Products.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import lmsImage from '../../assets/skillarc.png'; 

const ProductsComponent = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('overview'); 
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "SkillArc  ( Learning Management System )",
      description: "An all-in-one next-generation LMS designed to revolutionize digital learning. Our platform combines scalability, interactivity, and analytics to deliver impactful education experiences.",
      features: ["Admin & Instructor Dashboards", "Interactive Quizzes & Assignments", "Mobile-First Design", "AI-Powered Progress Tracking", "Secure & Scalable Cloud Hosting"],
      image: lmsImage, 
      detailedInfo: {
        overview: "Our Learning Management System – SkillArc is designed to transform the way educational institutions, training providers, and enterprises deliver knowledge. With an intuitive interface, scalable architecture, and built-in analytics, SkillArc ensures a seamless experience for both instructors and learners.",
        keyBenefits: [
          "Cut Administrative Workload by 60% - Automate scheduling, grading, and reporting—freeing educators to focus on teaching.",
          "Boost Student Engagement by 2x - Keep learners motivated with gamified quizzes, interactive modules, and personalized learning paths.",
          "Real-Time Analytics & Insights - Track learner progress, identify skill gaps, and measure outcomes with AI-driven dashboards.",
          "Multi-Format Learning Support - Deliver courses across video, text, live sessions, and interactive simulations—all in one platform.",
          "Smart Automation & Feedback - AI-powered grading, instant feedback, and adaptive assessments tailored to each learner.",
          "Enterprise-Grade Security - Built with cloud-native infrastructure ensuring compliance (GDPR, FERPA, SOC2) and reliable data protection."
        ],
        technicalSpecs: [
          "Cloud-Native Infrastructure – 99.9% uptime, auto-scaling servers, and enterprise-grade reliability.",
          "Mobile-Responsive & App-Ready – Optimized for web, iOS, and Android for seamless learning anywhere.",
          "Third-Party Integrations – Ready for Zoom, Google Workspace, Microsoft Teams, Slack, and HR/ERP systems.",
          "SCORM, xAPI & LTI Compliant – Supports industry standards for e-learning interoperability",
          "Multi-Language & Localization Support – Deliver content globally in native languages.",
          "AI-Powered Recommendations – Personalized learning paths for every student.",
          "Advanced Security – SOC 2, GDPR, FERPA compliance with role-based access control and data encryption.",
          "API-First Architecture – Easily extend and integrate into enterprise ecosystems."
        ],
        pricing: {
          starter: "Coming Soon - Contact us for details",
          professional: "Coming Soon - Contact us for details",
          enterprise: "Coming Soon - Contact us for details"
        }
      }
    }
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setActiveTab('overview');
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleContactUsClick = () => {
    navigate('/contact');
  };

  const handleScheduleDemoClick = () => {
    navigate('/demo');
  };

  const handleGetStartedClick = (productId) => {
    navigate(`/get-started/${productId}`);
  };

  return (
    <motion.div
      className="products-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-content">
          <h1>Our Products</h1>
          <p>Innovative solutions tailored to transform your business and drive growth</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="product-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="product-image">
              <img className="product-thumb" src={product.image} alt={product.title} />
              <div className="product-overlay">
                <button 
                  className="view-details-btn"
                  onClick={() => openModal(product)}
                >
                  View Details
                </button>
              </div>
            </div>
            <div className="product-content">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="product-features">
                {product.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">{feature}</span>
                ))}
              </div>
              <div className="product-actions">
                <button 
                  className="btn-primary"
                  onClick={() => handleGetStartedClick(product.id)}
                >
                  Get Started
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => openModal(product)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>{selectedProduct.title}</h2>
                <button className="close-btn" onClick={closeModal}>
                  ✕
                </button>
              </div>

              <div className="modal-body">
                <div className="modal-image">
                  <img className="product-large" src={selectedProduct.image} alt={selectedProduct.title} />
                </div>

                {/* Tabs */}
                <div className="modal-tabs">
                  <button
                    className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    Overview
                  </button>
                  <button
                    className={`tab-button ${activeTab === 'benefits' ? 'active' : ''}`}
                    onClick={() => setActiveTab('benefits')}
                  >
                    Benefits
                  </button>
                  <button
                    className={`tab-button ${activeTab === 'techSpecs' ? 'active' : ''}`}
                    onClick={() => setActiveTab('techSpecs')}
                  >
                    Tech Specs
                  </button>
                  <button
                    className={`tab-button ${activeTab === 'pricing' ? 'active' : ''}`}
                    onClick={() => setActiveTab('pricing')}
                  >
                    Pricing
                  </button>
                </div>

                <div className="tab-content-container">
                  <AnimatePresence mode="wait">
                    {activeTab === 'overview' && (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="modal-section"
                      >
                        <h3>Overview</h3>
                        <p>{selectedProduct.detailedInfo.overview}</p>
                      </motion.div>
                    )}
                    {activeTab === 'benefits' && (
                      <motion.div
                        key="benefits"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="modal-section"
                      >
                        <h3>Key Benefits</h3>
                        <ul>
                          {selectedProduct.detailedInfo.keyBenefits.map((benefit, idx) => (
                            <li key={idx}>{benefit}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                    {activeTab === 'techSpecs' && (
                      <motion.div
                        key="techSpecs"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="modal-section"
                      >
                        <h3>Technical Specifications</h3>
                        <ul>
                          {selectedProduct.detailedInfo.technicalSpecs.map((spec, idx) => (
                            <li key={idx}>⚙ {spec}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                    {activeTab === 'pricing' && (
                      <motion.div
                        key="pricing"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="modal-section"
                      >
                        <h3>Pricing Plans</h3>
                        <div className="pricing-grid">
                          <div className="pricing-card">
                            <h4>Starter</h4>
                            <p>{selectedProduct.detailedInfo.pricing.starter}</p>
                          </div>
                          <div className="pricing-card">
                            <h4>Professional</h4>
                            <p>{selectedProduct.detailedInfo.pricing.professional}</p>
                          </div>
                          <div className="pricing-card">
                            <h4>Enterprise</h4>
                            <p>{selectedProduct.detailedInfo.pricing.enterprise}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="modal-footer">
                <button 
                  className="btn-primary"
                  onClick={() => handleGetStartedClick(selectedProduct.id)}
                >
                  Get Started
                </button>
                <button 
                  className="btn-outline"
                  onClick={handleScheduleDemoClick}
                >
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="products-cta">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how our solutions can help you achieve your goals</p>
          <div className="cta-buttons">
            <button
              className="btn-primary large"
              onClick={handleContactUsClick}
            >
              Contact Us Today
            </button>
            <button 
              className="btn-outline large"
              onClick={handleScheduleDemoClick}
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const Products = React.memo(ProductsComponent);
export default Products;
