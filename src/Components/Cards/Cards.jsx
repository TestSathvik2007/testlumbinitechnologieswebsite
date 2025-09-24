import React from 'react';
import './Cards.css';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Our Vision',
    description:
      'At Lumbini Technologies, we aim to shape a future where technology empowers growth and innovation. We strive to deliver impactful solutions that enhance lives, making us a trusted leader in the digital space.',
  },
  {
    title: 'Quality, Integrity, And Innovation At Every Step.',
    description:
      'Lumbini Technologies is dedicated to delivering excellence. We stand by our commitment to quality, guided by integrity, and fueled by innovation to create solutions that make a difference.',
  },
  {
    title: 'Customer-Centric And Future-Ready.',
    description:
      'At Lumbini Technologies, we harness advanced technology to address today’s real-world needs, helping businesses and individuals thrive in an evolving world.',
  },
  {
    title: '24/7 Service',
    description:
      'With Lumbini Technologies, support is always within reach. Our team is available 24/7, ready to assist you at any moment to keep your systems running smoothly and reliably.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ServiceCards = () => {
  return (
    <motion.section
      className="cards-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* You can add a heading here if you like, as per your CSS */}
      {/* <h2 className="cards-heading">Our Services</h2> */}
      <div className="cards-container">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="card"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ServiceCards;