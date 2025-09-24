import React, { useState, lazy, Suspense } from 'react';
import './Products.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// Import your local image with the exact filename 'lms.jpg'
import lmsImage from '../../assets/lms.jpg'; 

const ProductsComponent = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('overview'); 
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Learning Management System (SkillArc)",
      description: "An all-in-one next-generation LMS designed to revolutionize digital learning. Our platform combines scalability, interactivity, and analytics to deliver impactful education experiences..",
      features: [" Admin & Instructor Dashboards", "Interactive Quizzes & Assignments", "Mobile-First Design", "AI-Powered Progress Tracking", "Secure & Scalable Cloud Hosting"],
      // Use the imported image variable here
      image: lmsImage, 
      detailedInfo: {
        overview: "Our Learning Management System – SkillArc is designed to transform the way educational institutions, training providers, and enterprises deliver knowledge. With an intuitive interface, scalable architecture, and built-in analytics, SkillArc ensures a seamless experience for both instructors and learners. Whether it’s online courses, corporate upskilling, or blended learning, our platform adapts to your needs with cutting-edge web and AI-driven technologies.",
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
    },
    // You can add more products here
  ];

  const openModal = (product) => {
    // Debugging line: Check if the function is called and with what product
    console.log("Attempting to open modal for:", product.title);
    setSelectedProduct(product);
    setActiveTab('overview'); // Reset tab to overview when opening new modal
  };

  const closeModal = () => {
    // Debugging line: Check if the close function is called
    console.log("Attempting to close modal.");
    setSelectedProduct(null);
  };

  // Handler for "Contact Us Today" button
  const handleContactUsClick = () => {
    console.log("Redirecting to contact page...");
    navigate('/contact'); // Redirects to the /contact route
  };

  // Handler for "Schedule Demo" button
  const handleScheduleDemoClick = () => {
    console.log("Redirecting to demo scheduling...");
    // You can navigate to a demo page or open a scheduling modal
    navigate('/demo'); // Or whatever route you prefer
  };

  // Handler for "Get Started" button
  const handleGetStartedClick = (productId) => {
    console.log("Get started clicked for product:", productId);
    // Navigate to signup/onboarding or specific product page
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
              <img src={product.image} alt={product.title} />
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
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="modal-body">
                <div className="modal-image">
                  <img src={selectedProduct.image} alt={selectedProduct.title} />
                </div>

                {/* Tab Navigation for Modal Content */}
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

                {/* Tab Content (conditionally rendered) */}
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
                            <li key={idx}>
                              {/* Only one tick icon, remove duplicate */}
                              {benefit}
                            </li>
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
                            <li key={idx}>
                              <span className="icon-settings">⚙</span> {spec}
                            </li>
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

      {/* CTA Section */}
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

// Export default as lazy-loaded component
const Products = React.memo(ProductsComponent);
export default Products;