import React from 'react';
import Image from 'next/image';

const Loader: React.FC = () => (
  <div className="loader-container">
    <Image priority src="/img/logo.png" alt="DynamicOps Loader" 
  width={150}
  height={1} className="loader-logo" />
    <div className="loader-line"></div>
  </div>
);

export default Loader;