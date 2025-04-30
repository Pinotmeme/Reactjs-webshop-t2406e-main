import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import './ServiceSection.css';

const services = [
  {
    title: "Tư vấn chăm sóc",
    description: "Đội ngũ chuyên gia tư vấn cách chăm sóc cây phù hợp",
    icon: "🌱"
  },
  {
    title: "Giao hàng tận nơi",
    description: "Miễn phí vận chuyển trong bán kính 10km",
    icon: "🚚"
  },
  {
    title: "Bảo hành cây trồng",
    description: "Đổi trả trong 7 ngày nếu cây có vấn đề",
    icon: "🛡️"
  }
];

const ServiceSection = () => {
  return (
    <section className="service-section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Dịch vụ của chúng tôi</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 service-card">
                <Card.Body className="text-center">
                  <div className="service-icon">{service.icon}</div>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceSection;