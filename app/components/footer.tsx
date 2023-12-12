import Link from 'next/link';
import React from 'react';

function enviarMensajeWhatsApp() {
  // Número de WhatsApp al que se enviará el mensaje
  const numeroWhatsApp = '+51959015422';

  // Construir el mensaje con el nombre del producto y el precio
  const mensaje = `Hola, deseo un regalo personalizado.`;

  // Codificar el mensaje para ser incluido en el enlace
  const mensajeCodificado = encodeURIComponent(mensaje);

  // Construir el enlace de WhatsApp
  const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

  // Abrir el enlace en una nueva pestaña
  window.open(enlaceWhatsApp, '_blank');
}


const Footer: React.FC = () => {

  const handleClickWhatsApp = () => {
    enviarMensajeWhatsApp();
  };

  return (
    <footer className="footer">
      <div className="footer-container grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:pr-4" style={{alignSelf: "center"}}>
          <p className="footer-p">☎ +51 959-015-422</p>
        </div>
        
        <div className="lg:pr-4" style={{alignSelf: "center"}}>
          <p className="footer-p text-center mt-4">
            <br className="lg:hidden" />
            Todos los derechos reservados ©
            <br className="lg:hidden" />
            <br className="lg:hidden" />
            <span className="text-pink-400"> Karito Scrap</span>
          </p>
        </div>
        <div className="mt-8 lg:mt-0 text-center lg:text-center" style={{alignSelf: "center"}}>
            <button className="rounded-button mt-5" onClick={handleClickWhatsApp}>
                Comprar Por WhatApp
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;