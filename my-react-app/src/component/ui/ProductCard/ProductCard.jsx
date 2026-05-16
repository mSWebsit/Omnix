import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import "./ProductCard.css";

function ProductCard({ product }) {
  
  const CatColor={
    Web:'blue',
    Mobile:'lightblue',
    AI:'red',
    Automation:'yellow',
  };
  const defaultColor= 'white';

  const [currentIdx, setCurrentIdx] = useState(0);

  let images;
  if (Array.isArray(product.ImageSrc)) {
    images = product.ImageSrc;
  } else if (product.ImageSrc) {
    images = [product.ImageSrc];
  } else {
    images = ["https://placeholder.com"];
  }

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }} className="product-card">
      <div className="image-container">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIdx}
            src={images[currentIdx]}
            alt={product.Title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="main-image"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <div className="carousel-nav">
              <button onClick={prevImage} className="nav-arrow"><ChevronLeft size={20} /></button>
              <button onClick={nextImage} className="nav-arrow"><ChevronRight size={20} /></button>
            </div>
            <div className="dots-row">
              {images.map((_, i) => (
                <span key={i} className={`nav-dot ${i === currentIdx ? "active" : ""}`} />
              ))}
            </div>
          </>
        )}

        <div className="price-tag">${product.Price}</div>
      </div>

      <div className="content-area">
      <div className="Tags"> 
          {product.categories?.map((cat) => {
            const color = CatColor[cat] || defaultColor;
            return (
              <span 
                key={cat} 
                className="Tag"
                style={{color: color,borderColor: `${color}40`,backgroundColor: `${color}15`
                }}
              >
                {cat}
              </span>
            );
          })}
        </div> 
        <h3 className="title">{product.Title}</h3>
        <p className="description">{product.Desc}</p>
        <button className="cta-button">
          Try Demo <Zap size={18} />
        </button>
      </div>
    </motion.div>
  );
}
export default ProductCard