"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

const WidgetComponent = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ['/img/promo_1.png', '/img/promo_2.png', '/img/promo_3.png', '/img/promo_4.png'];

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
          width={400}
          height={64}
          priority
        />
      ))}
    </div>
  );
};

export default WidgetComponent;