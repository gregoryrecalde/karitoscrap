"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

const WidgetComponent = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ['https://cdn.freeaspect.com/karitoscrap/promo_1.png', 'https://cdn.freeaspect.com/karitoscrap/promo_2.png', 'https://cdn.freeaspect.com/karitoscrap/promo_3.png', 'https://cdn.freeaspect.com/karitoscrap/promo_4.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  },[images.length]);

  return (
    <div className="widget rounded-2xl widget-animation flex items-center justify-center">
      {images.map((img, index) => (
        <Image
          key={index}
          className={`absolute transition-opacity duration-1000 ${index === imageIndex ? 'opacity-100' : 'opacity-0'}`}
          src={img}
          alt={`image-${index}`}
          width={1}
          height={1}
          unoptimized
          priority
        />
      ))}
    </div>
  );
};

export default WidgetComponent;
