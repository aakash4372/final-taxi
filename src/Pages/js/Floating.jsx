import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import '../css/Floating.css';

const FloatingIcons = () => {
  return (
    <div className="floating-icons">
      <a
        href="https://wa.me/916383441919"
        target="_blank"
        rel="noopener noreferrer"
        className="icon whatsapp-icon"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a
        href="tel:+916383441919"
        className="icon phone-icon"
        title="Call Us"
      >
        <FaPhoneAlt />
      </a>
    </div>
  );
};

export default FloatingIcons;
