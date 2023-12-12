// CustomLink.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Modal from './modal';

interface CustomLinkProps {
  href: string;
  title: string;
  price: string;
  imageUrl?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, imageUrl, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preloadedImage, setPreloadedImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (imageUrl) {
      // Set the preloaded image URL
      setPreloadedImage(imageUrl);
    }
  }, [imageUrl]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="lg:max-w-full m-1 group rounded-lg border border-neutral-300 px-5 py-4 transition-colors hover:border-pink-300 cursor-pointer">
      <div className="flex items-center justify-center max-h-[20ch] min-h-[20ch]" onClick={handleOpenModal}>
        <div>
          {preloadedImage && (
            <Image
              src={preloadedImage}
              alt={title}
              className="relative mt-3 rounded-lg w-full h-full max-w-[24ch] min-h-24ch"
              width={1}
              height={1}
              unoptimized
            />
          )}
        </div>
      </div>

      <h2 className={`mb-3 text-2xl font-semibold`} style={{ textAlign: "center" }}>
        {title}
      </h2>

      <h2 className={`mb-3 text-2xl font-semibold`} style={{ textAlign: "center" }}>
        S/. {price}
      </h2>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={title}
        imageComponent={preloadedImage && <img src={preloadedImage} alt={title} width={400} height={300} />}
        price={price}
        // Pass other data as needed
      />
    </div>
  );
};

export default CustomLink;
