import React, { useState } from 'react';

// Example function to calculate translateX value
const getTranslateX = (index) => {
  const itemWidth = 300; // Example item width
  return `translateX(-${index * itemWidth}px)`;
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div>
      <div
        className="carousel-container"
        style={{
          transform: getTranslateX(currentIndex),
          transition: 'transform 0.5s ease',
        }}
      >
        {/* Add your carousel items here */}
        <div className="carousel-item">Item 1</div>
        <div className="carousel-item">Item 2</div>
        <div className="carousel-item">Item 3</div>
        {/* More items as needed */}
      </div>

      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
