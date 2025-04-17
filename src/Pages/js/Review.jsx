import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../css/Review.css';

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sriram",
      review:
        "I have booked a Sedan Cab in one way drop taxi salem they send me a neat and clean car with polite driver. Really enjoyed the ride.",
      avatar: "/img/review/r1.jpg",
    },
    {
      id: 2,
      name: "Parthasarathy",
      review:
        "In an emergency situation I have booked a cab they responded very well and I reached my destination on time.",
      avatar: "/img/review/r2.jpg",
    },
    {
      id: 3,
      name: "Karthik",
      review:
        "Booked a cab from One Way Drop Taxi Salem at the last minute. The car was in perfect condition and the driver was very professional. Excellent service!",
      avatar: "/img/review/r3.jpg",
    },
    {
      id: 4,
      name: "Vignesh",
      review:
        "Clean cab, polite driver, and timely service. Overall a very good experience with One Way Drop Taxi Salem.",
      avatar: "/img/review/r4.jpg",
    },
    {
      id: 5,
      name: "Priya",
      review:
        "Used the service during a family emergency. They responded quickly and ensured I reached on time. Thank you!",
      avatar: "/img/review/r5.jpg",
    },
  ];
  

  const nextReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
   <div className="review-bg" id='reviews'>
     <div className="review-slider-container" >
      <div className="review-slider">
      <h2 className="text-center text-white text-uppercase mb-5 fw-bold display-6 display-md-5 display-lg-4">
  Reviews
</h2>
        <div className="review-card-wrapper">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className={`review-card ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="card">
                <div className="card-body text-center">
                  <p className="review-text">{review.review}</p>
                  <div className="reviewer-info d-flex flex-column align-items-center">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="reviewer-avatar img-fluid"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://via.placeholder.com/150";
                      }}
                    />
                    <div className="text-center mt-1">
                      <h5 className="reviewer-name mb-1">{review.name}</h5>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="slider-controls">
          <button className="slider-btn prev-btn" onClick={prevReview}>
            <FaChevronLeft />
          </button>
          <button className="slider-btn next-btn" onClick={nextReview}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ReviewSlider;
