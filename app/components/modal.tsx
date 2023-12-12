import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageUrl?: string;
  price: string;
  // Otros datos que quieras mostrar en el modal
}
function enviarMensajeWhatsApp(nombreProducto: string, precio: string) {
  // Número de WhatsApp al que se enviará el mensaje
  const numeroWhatsApp = '+51959015422';

  // Construir el mensaje con el nombre del producto y el precio
  const mensaje = `Hola, deseo comprar el producto ${nombreProducto} ${precio}.`;

  // Codificar el mensaje para ser incluido en el enlace
  const mensajeCodificado = encodeURIComponent(mensaje);

  // Construir el enlace de WhatsApp
  const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

  // Abrir el enlace en una nueva pestaña
  window.open(enlaceWhatsApp, '_blank');
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, imageUrl, price }) => {
  if (!isOpen) {
    return null;
  }

  const handleClickWhatsApp = () => {
    enviarMensajeWhatsApp(title, price);
  };
  
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        
        <div className="mt-8 mb-10 lg:mt-0 text-center lg:text-center" style={{alignSelf: "center"}}>
          
        <h2>{title}</h2>
        {imageUrl && (
          <Image priority src={imageUrl} alt={title} width={400} height={300} />
        )}
        <p>{price}</p>
        </div>
        <div className="mt-8 mb-5 lg:mt-0 text-center lg:text-center" style={{alignSelf: "center"}}>
            <button className="rounded-button mt-5" onClick={handleClickWhatsApp}>
                Comprar Por WhatApp
            </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
