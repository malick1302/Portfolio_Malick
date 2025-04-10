import React, { useState, useEffect } from 'react';
import PhotoAbout from './PhotoAbout'; 

export default function Carousel({ carousel }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carousel.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [carousel.length]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div className="flex" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {carousel.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <PhotoAbout img={img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
