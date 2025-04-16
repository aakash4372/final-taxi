import React from 'react';
import { Button } from 'react-bootstrap';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { TbHandFinger } from "react-icons/tb";
import '../css/Home.css';

const HomePage = () => {
  return (
    <div className="homepage-container" id="home">
      <div className="overlay">
        <div className="content mt-28 text-center text-white">
          <h1 className="display-5 fw-bold mb-4">One Way Drop Taxi Salem</h1>
          <p className="lead mb-4">
            <strong>One way drop taxi salem</strong> provides outstation one way
            drop and round trip taxi in Salem and all over Tamil Nadu and Bangalore.
          </p>
          <div className="d-flex flex-wrap gap-3 mb-4 justify-content-center">
            <Button
              as="a"
              href="http://www.taxirider.in"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-secondary"
              size="lg"
              className="d-flex align-items-center gap-2 custom-btn"
            >
              <TbHandFinger className="icon-style" /> Get Fare
            </Button>

            <Button
              as="a"
              href="tel:6383441919"
              variant="outline-secondary"
              size="lg"
              className="d-flex align-items-center gap-2 custom-btn"
            >
              <FaPhoneAlt className="icon-style" /> Call
            </Button>

            <Button
              as="a"
              href="https://wa.me/916383441919"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-secondary"
              size="lg"
              className="d-flex align-items-center gap-2 custom-btn"
            >
              <FaWhatsapp className="icon-style" /> Whatsapp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
