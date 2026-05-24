import React, { useState } from "react";
import { useParams } from "react-router-dom"; // 1. Import useParams
import { motion, AnimatePresence } from "framer-motion";
import './Product.css';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Data from '../../data/data.jsx';

function Product() {

    const { productId } = useParams();

    const product = Data.find((item) => item.key == productId) || {};

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

    // if (!product.key) {
    //     return (
    //         <div>
    //             <Link to='/Catalog'>Product not found. Return to catalog.</Link>
    //         </div>
    //     );
    // }

    // Within Product.jsx — Update your layout structure:
    return (
        <div>
            <button className='go_back_btn'>
                <ChevronLeft className='go_back_icon' />
                <Link className='go_back_text' to='/Catalog'>Back to catalog</Link>
            </button>
            <div className="product_container" >
                <div className='product_images_area'>
                    <div className="image-container">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentIdx}
                                src={images[currentIdx]}
                                alt={product.Title || "Product"}
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
                                    <button onClick={prevImage} className="nav-arrow">
                                        <ChevronLeft size={30} />
                                    </button>
                                    <button onClick={nextImage} className="nav-arrow">
                                        <ChevronRight size={30} />
                                    </button>
                                </div>

                                <div className="dots-row">
                                    {images.map((_, i) => (
                                        <span
                                            key={i}
                                            className={`nav-dot ${i === currentIdx ? "active" : ""}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className='product_main_area'>
                    <h2 className="product_title">{product.Title}</h2>
                    <h3  className="product_price">${product.Price}</h3>
                    <p  className="product_desc">{product.Desc}</p>
                    <div className="features">
                        
                    </div>
                    <div className="buttons">
                        <button className="buy_btn">Buy Now</button>
                        <button className="req_info">Request Information</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Product;
