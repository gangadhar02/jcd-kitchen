import React, { useState, useEffect } from 'react';
import { LazyImage } from './LazyImage';

const HeroImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/lovable-uploads/kitchen designs/1.webp',
    '/lovable-uploads/kitchen designs/2.webp',
    '/lovable-uploads/kitchen designs/3.webp',
    '/lovable-uploads/kitchen designs/4.webp',
    '/lovable-uploads/kitchen designs/5.webp',
    '/lovable-uploads/kitchen designs/23.webp',
    '/lovable-uploads/kitchen designs/24.webp',
    '/lovable-uploads/kitchen designs/Enscape_2025-04-21-18-27-22.webp'
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <LazyImage
            src={image}
            alt={`Kitchen design showcase ${index + 1}`}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-white scale-110 shadow-lg'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroImageSlideshow;