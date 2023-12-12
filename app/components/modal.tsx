"use client"
import React from 'react';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageComponent?: React.ReactNode; // New prop for the image component
  price: string;
  // Otros datos que quieras mostrar en el modal
}

function enviarMensajeWhatsApp(nombreProducto: string, precio: string) {
  const numeroWhatsApp = '+51959015422';
  const mensaje = `Hola, deseo comprar el producto ${nombreProducto} ${precio}.`;
  const mensajeCodificado = encodeURIComponent(mensaje);
  const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
  window.open(enlaceWhatsApp, '_blank');
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, imageComponent, price }) => {
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

        <div className="mt-8 mb-10 text-center">
          <h2>{title}</h2>
          {imageComponent && (
            <div className="image-container">
              {imageComponent}
            </div>
          )}
          <p>{price}</p>
        </div>

        <div className="mt-8 mb-5 text-center">
          <button className="rounded-button mt-5" onClick={handleClickWhatsApp}>
            Comprar Por WhatApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
