import React, { useState } from "react";
import './Style/sliderDC.css';

export function SliderDC({ items }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="sliderDC-container">
            <div className="carousel">
                
                <div className="image-container">
                <button onClick={handlePrev} className="carousel-control prev">&lt;</button>
                    <img 
                        src={items[currentIndex].image} 
                        alt={items[currentIndex].DC}
                    />
                    <div className="hover-info">
                        <p className="DatoCurioso">Datos Curiosos</p>
                        <p className="DC">{items[currentIndex].DC}</p>
                        <p className="informacion">{items[currentIndex].informacion}</p>
                    </div>
                    <button onClick={handleNext} className="carousel-control next">&gt;</button>
                </div>
                
            </div>
        </section>
    );
}
