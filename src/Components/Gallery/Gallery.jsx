import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  X, 
  Download, 
  Heart, 
  Share2,
  Star,
  Camera,
  Users,
  Briefcase,
  Calendar,
  Code,
  Building,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  // Lock body scroll when modal is open and preload images for smoother slides
  useEffect(() => {
    if (selectedItem) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      if (selectedItem.images && Array.isArray(selectedItem.images)) {
        selectedItem.images.forEach((src) => {
          const img = new Image();
          img.src = src;
        });
      }
      const onKeyDown = (e) => {
        if (e.key === 'Escape') {
          setSelectedItem(null);
        }
      };
      document.addEventListener('keydown', onKeyDown);
      return () => {
        document.body.style.overflow = previousOverflow;
        document.removeEventListener('keydown', onKeyDown);
      };
    }
  }, [selectedItem]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState(new Set());

  const categories = ['All', 'Events'];

  const galleryItems = [
    {
      id: 1,
      title: "Client Meeting",
      category: "Events",
      images: [
        "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop"
      ],
      description: "Snapshots from our recent client meeting.",
      tags: ["client", "meeting", "business"]
    },
    {
      id: 2,
      title: "1-Year Anniversary",
      category: "Events",
      images: [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1454179083322-198bb4daae63?w=1200&h=800&fit=crop"
      ],
      description: "Celebrating our first anniversary milestone.",
      tags: ["anniversary", "milestone", "celebration"]
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Team': return <Users className="w-4 h-4" />;
      case 'Technology': return <Code className="w-4 h-4" />;
      case 'Projects': return <Briefcase className="w-4 h-4" />;
      case 'Events': return <Calendar className="w-4 h-4" />;
      case 'Office': return <Building className="w-4 h-4" />;
      default: return <Camera className="w-4 h-4" />;
    }
  };

  const GalleryItem = ({ item }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="gallery-item"
      onClick={() => { setSelectedItem(item); setSlideIndex(0); }}
    >
      <div className="gallery-image-container">
        <img src={(item.images && item.images[0]) || item.image} alt={item.title} className="gallery-image" />
        <div className="gallery-overlay">
          <div className="gallery-actions">
            <button 
              className={`gallery-action-btn ${favorites.has(item.id) ? 'favorited' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(item.id);
              }}
            >
              <Heart className="w-4 h-4" />
            </button>
            <button className="gallery-action-btn">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="gallery-action-btn">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="gallery-content">
        <div className="gallery-category">
          {getCategoryIcon(item.category)}
          <span>{item.category}</span>
        </div>
        <h3 className="gallery-title">{item.title}</h3>
        <p className="gallery-description">{item.description}</p>
        <div className="gallery-tags">
          {item.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="gallery-tag">#{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const ImageModal = ({ item, index, onPrev, onNext, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="image-modal-overlay"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="image-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="modal-close-btn">
          <X className="w-6 h-6" />
        </button>
        <div className="modal-image-container">
          <img src={(item.images && item.images[index]) || item.image} alt={item.title} className="modal-image" />
        </div>
        {item.images && item.images.length > 1 && (
          <div className="modal-actions" style={{ justifyContent: 'space-between' }}>
            <button className="modal-action-btn" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
              <ChevronLeft className="w-5 h-5" /> Prev
            </button>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {item.images.map((_, i) => (
                <span key={i} onClick={(e) => { e.stopPropagation(); setSlideIndex(i); }} style={{ width: 8, height: 8, borderRadius: 9999, background: i === index ? '#facc15' : '#4b5563', display: 'inline-block', cursor: 'pointer' }} />
              ))}
            </div>
            <button className="modal-action-btn" onClick={(e) => { e.stopPropagation(); onNext(); }}>
              Next <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-category">
              {getCategoryIcon(item.category)}
              <span>{item.category}</span>
            </div>
            <h2 className="modal-title">{item.title}</h2>
          </div>
          <p className="modal-description">{item.description}</p>
          <div className="modal-tags">
            {item.tags.map((tag, index) => (
              <span key={index} className="modal-tag">#{tag}</span>
            ))}
          </div>
          <div className="modal-actions">
            <button 
              className={`modal-action-btn ${favorites.has(item.id) ? 'favorited' : ''}`}
              onClick={(e) => { e.stopPropagation(); toggleFavorite(item.id); }}
            >
              <Heart className="w-5 h-5" />
              {favorites.has(item.id) ? 'Favorited' : 'Add to Favorites'}
            </button>
            <button className="modal-action-btn" onClick={(e) => { e.stopPropagation(); }}>
              <Share2 className="w-5 h-5" />
              Share
            </button>
            <button className="modal-action-btn" onClick={(e) => { e.stopPropagation(); }}>
              <Download className="w-5 h-5" />
              Download
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-icons"
          >
            <Camera className="w-6 h-6" />
            <Star className="w-4 h-4" />
            <Camera className="w-5 h-5" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hero-title"
          >
            Our <span className="text-highlight">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-subtitle"
          >
            Discover our team, projects, and company culture through our photo gallery
          </motion.p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="gallery-filters">
        <div className="filters-container">
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search gallery..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category !== 'All' && getCategoryIcon(category)}
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="gallery-container">
          <motion.div 
            layout
            className="gallery-grid"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <GalleryItem key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredItems.length === 0 && (
            <div className="no-results">
              <Camera className="w-12 h-12" />
              <h3>No results found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal with Slider */}
      <AnimatePresence>
        {selectedItem && (
          <ImageModal 
            item={selectedItem}
            index={slideIndex}
            onPrev={() => setSlideIndex((prev) => {
              const total = selectedItem.images ? selectedItem.images.length : 1;
              return (prev - 1 + total) % total;
            })}
            onNext={() => setSlideIndex((prev) => {
              const total = selectedItem.images ? selectedItem.images.length : 1;
              return (prev + 1) % total;
            })}
            onClose={() => setSelectedItem(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
