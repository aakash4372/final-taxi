import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import '../css/Service_car.css';

const services = [
  {
    title: "Hatchback Ac 4+1",
    img: "/img/11.png",
    hoverImg: "/img/12.png",
    oneway: "13 Rs Per Km",
    roundTrip: "12 Rs Per Km",
  },
  {
    title: "Sedan Ac 4+1",
    img: "/img/13.png",
    hoverImg: "/img/14.png",
    oneway: "14 Rs Per Km",
    roundTrip: "13 Rs Per Km",
  },
  {
    title: "SUV Ac 7+1",
    img: "/img/15.png",
    hoverImg: "/img/16.png",
    oneway: "19 Rs Per Km",
    roundTrip: "17 Rs Per Km",
  },
];

const Service_car = () => {
  return (
    <div className="service-section" id="tariff">
      <Container>
        <h2 className="text-center text-uppercase text-white mb-5 pt-5 fw-bold display-6 display-md-5 display-lg-4">
          tariff
        </h2>
        <Row>
          {services.map((service, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
              <Card className="service-card text-center shadow-sm p-3">
                <div className="card-img-wrapper">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="card-img car-image"
                  />
                  <img
                    src={service.hoverImg}
                    alt="Hover"
                    className="card-img hover-image"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>
                    Oneway Drop: {service.oneway}
                    <br />
                    Round Trip: {service.roundTrip}
                  </Card.Text>
                  <a 
                    href="https://www.taxirider.in/"  
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="estimate-link"
                  >
                    Get Estimate & Book 
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Service_car;
