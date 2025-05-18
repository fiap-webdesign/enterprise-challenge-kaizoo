import React, { useState } from "react";
import MascoteFlipCard from "./MascoteFlipCard";
import "../pages/MascotePage.css";

export default function MascoteCarousel({ mascotes }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mascotes.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === mascotes.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button left" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel">
        {mascotes.map((mascote, index) => {
          let className = "carousel-item";
          if (index === currentIndex) {
            className += " active";
          } else if (
            index === (currentIndex + 1) % mascotes.length ||
            (currentIndex === mascotes.length - 1 && index === 0)
          ) {
            className += " next";
          } else if (
            index ===
            (currentIndex - 1 + mascotes.length) % mascotes.length
          ) {
            className += " prev";
          }

          return (
            <div className={className} key={index}>
              <MascoteFlipCard mascote={mascote} />
            </div>
          );
        })}
      </div>
      <button className="carousel-button right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}
