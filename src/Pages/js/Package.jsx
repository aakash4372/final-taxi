import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/Packages.css'; // Custom styles if needed

const services = [
  {
    image: '/img/caricon/7.png', // Path to image
    title: 'Outstation Oneway Taxi',
    subtitle: '',
    link: 'https://www.taxirider.in/',
  },
  {
    image: '/img/caricon/5.png', // Path to image
    title: 'Outstation Round Trip',
    subtitle: '',
    link: 'https://www.taxirider.in/',
  },
  {
    image: '/img/caricon/6.png', // Path to image
    title: 'Blogging',
    subtitle: 'Tour Packages',
    link: 'https://www.taxirider.in/',
  },
];

const ServiceCards = () => {
  return (
    <Container className="py-5" id='services'>
      <h2 className="text-center text-[#2c3e50] text-uppercase mb-5 fw-bold display-6 display-md-5 display-lg-4">
      Services
      </h2>
      <Row className="g-4">
        {services.map((service, index) => (
          <Col key={index} xs={12} md={4} className="text-center">
            <Card className="border-0 service-card">
              <div className="icon-wrapper mb-3">
                <img src={service.image} alt={service.title} width={70} height={70} />
              </div>
              <h5>{service.title}</h5>
              <a href={service.link} className="text-primary fw-semibold" target="_blank" rel="noopener noreferrer">
                Get Estimate & Book <span role="img" aria-label="pointer">👈</span>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceCards;
