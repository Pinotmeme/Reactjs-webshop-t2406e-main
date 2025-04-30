import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

const HeroCarousel = () => {
  const slides = [
    { id: 1, image: "/images/hero_1.jpg" },
    { id: 2, image: "/images/hero_2.jpg" },
    { id: 3, image: "/images/hero_3.jpg" },
  ];

  return (
    <Carousel
      fade
      interval={8000}
      className="custom-carousel"
    >
      {slides.map((slide, index) => (
        <Carousel.Item key={slide.id}>
          <div className="carousel-image-container">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-100 h-100"
              loading="lazy"
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
