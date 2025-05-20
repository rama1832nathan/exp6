import { useEffect, useState } from 'react';
import './ImageSlider.css'; 

function ImageSlider({ images = [], autoSlide = true, interval = 6000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;

    const slide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slide);
  }, [autoSlide, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider">
      <button onClick={goToPrevious} className="nav-btn">❮</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-img" />
      <button onClick={goToNext} className="nav-btn">❯</button>
    </div>
  );
}

export default ImageSlider;
