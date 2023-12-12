import Link from 'next/link';
import React from 'react';

const FooterContact: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:pr-4" style={{alignSelf: "center"}}>
          <p className="footer-p">ADD Malta, Level 2, The Fort</p>
          <p className="footer-p">Hardrocks Business Park, Burmarrad Road</p>
          <p className="footer-p">Naxxar, NXR 6245 Malta</p>
        </div>
        
        <div className="lg:pr-4" style={{alignSelf: "center"}}>
          <p className="footer-p text-center mt-4">
            <br className="lg:hidden" />
            All rights reserved ©
            <br className="lg:hidden" />
            <br className="lg:hidden" />
            <span className="text-blue-400"> Karito Scrap</span>
          </p>
        </div>
        <div className="mt-8 lg:mt-0 text-center lg:text-center" style={{alignSelf: "center"}}>
          <p className="footer-p">info@dynamicops.co</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterContact;