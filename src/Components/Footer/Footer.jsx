import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Github, ArrowUp } from "lucide-react";
import "./Footer.css"; // make sure this path is correct

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <h2 className="footer-brand">Lumbini Technologies</h2>
          <p className="footer-subtext">Innovating Technology for a Smarter Future</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-list">
            {["Home", "About Us", "Services", "Products", "Careers", "Contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`${link.replace(/\s+/g, "")}`}
                    className="footer-link"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="footer-title">Contact</h3>
          <ul className="footer-list">
            <li className="footer-contact"><MapPin size={16} /> Vijayawada, India</li>
            <li className="footer-contact"><Mail size={16} /> lumbini.technologies01@gmail.com</li>
            <li className="footer-contact"><Phone size={16} /> +91 98482 94006</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="newsletter-section">
          <h3 className="footer-title">Newsletter</h3>
          <p className="footer-subtext mb-3">
            Stay updated with our latest solutions & opportunities.
          </p>
          <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" className="footer-input" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="footer-btn"
              type="submit"
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Lumbini Technologies. All Rights Reserved.</p>

        <div className="footer-bottom-links">
          <a href="#privacy" className="footer-link">Privacy Policy</a>
          <a href="#terms" className="footer-link">Terms & Conditions</a>
        </div>

        <div className="footer-socials">
          <a href="https://www.linkedin.com/company/lumbini-technologies/?viewAsMember=true" target="_blank" rel="noreferrer" className="footer-link"><Linkedin size={18} /></a>
          <a href="https://www.instagram.com/lumbini_technologies/" target="_blank" rel="noreferrer" className="footer-link"><Instagram size={18} /></a>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
