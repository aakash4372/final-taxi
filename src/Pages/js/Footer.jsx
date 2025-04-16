import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <>
      <div className="footer-section " id='contact'>
        <div className="footer-content">
          <div className="taxi-icon">🚕</div>
          <h4 className="footer-title">One Way Drop Taxi Salem <span className="highlight">@ Affordable Price</span></h4>
          <h5 className="footer-subtitle">Starts <span className="price">@2120</span> +Toll</h5>
          
          <button
  className="estimate-btn"
  onClick={() => window.open('https://www.taxirider.in/', '_blank', 'noopener,noreferrer')}
>
  Get Estimate 
  <span className="arrow-icon">→</span>
</button>

          
          {/* <div className="footer-links">
            <a href="#" className="footer-link">Home</a>
            <a href="#" className="footer-link">Services</a>
            <a href="#" className="footer-link">Contact</a>
            <a href="#" className="footer-link">About</a>
          </div> */}
        </div>
      </div>

      <div className="footer-bottom">
  <div className="footer-bottom-content text-center text-white" >
    <span>© {new Date().getFullYear()} </span>
    <a href="https://bmtechx.in" className="company-link" target="_blank" rel="noopener noreferrer">BMTechx.in</a>
    <span> All rights reserved.</span>
  </div>
</div>

    </>
  );
}

export default Footer;