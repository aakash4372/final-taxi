
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/Packages.css'; // Custom styles

const services = [
  {
    image: '/img/caricon/1.png',
    title: 'Trusted and Verified Drivers',
    subtitle: 'Ride with confidence.',
    link: 'https://www.taxirider.in/',
  },
  {
    image: '/img/caricon/2.png',
    title: 'Clean and Well-Maintained Cabs',
    subtitle: 'Comfort meets hygiene.',
    link: 'https://www.taxirider.in/',
  },
  {
    image: '/img/caricon/3.png',
    title: 'Transparent Pricing',
    subtitle: 'What you see is what you pay.',
    link: 'https://www.taxirider.in/',
  },
  {
    image: '/img/caricon/4.png',
    title: '24/7 Customer Support',
    subtitle: "We're always here for you.",
    link: 'https://www.taxirider.in/',
  },
];

const ServiceCards = () => {
  return (
    <Container className="py-5 " id='why-choose'>
     <h2 className="text-center text-[#2c3e50] text-uppercase mb-5 fw-bold display-6 display-md-5 display-lg-4">
        Why Choose Us
      </h2>
      <Row className="g-4">
        {services.map((service, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={3} className="text-center">
            <Card className="border-0 service-card p-4 shadow-sm h-100">
              <div className="icon-wrapper mb-3">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-icon"
                />
              </div>
              <h5>{service.title}</h5>
              <a href={service.link} target="_blank"
  rel="noopener noreferrer" className="text-primary fw-semibold">
                Get Estimate & Book <span role="img" aria-label="pointer">👆</span>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceCards;
