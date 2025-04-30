// components/Footer/index.js
import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 py-4" sticky="bottom">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>Liên hệ</h5>
            <p><FaMapMarkerAlt /> 123 Đường Cây Xanh, Q.1, TP.HCM</p>
            <p>📞 0909 123 456</p>
            <p>✉️ support@greengarden.vn</p>
            <p>Copyright © 2025 GreenGarden</p>
          </Col>
          
          <Col md={4} className="mb-4">
            <h5>Mạng xã hội</h5>
            <div className="d-flex gap-3">
              <a href="#fb" className="text-light"><FaFacebook size={30} /></a>
              <a href="#ig" className="text-light"><FaInstagram size={30} /></a>
              <a href="#yt" className="text-light"><FaYoutube size={30} /></a>
            </div>
          </Col>
          
          <Col md={4} className="mb-4">
            <h5>Giờ làm việc</h5>
            <p>Thứ 2 - Thứ 7: 8:00 - 20:00</p>
            <p>Chủ nhật: 8:00 - 12:00</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;