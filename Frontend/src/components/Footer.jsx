// Footer.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="text-light p-4 mt-4 border-1 bg-dark">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-md-left mb-1">
            <div>&copy; 2023 All rights reserved.</div>
            <div>Need assistance? Contact our customer support at nobodywillhelpyou@gmail.com</div>
            <div>Thank you for visiting us.</div>

          </Col>
          <Col md={2} className="text-md-right">
            <div>Our Team:</div>
            <div>Sanket Pashte</div>
            <div>Venkatesh Pujari</div>
            <div>Abhishek Thote</div>
          </Col>
          <Col md={4} className="text-md-right">
            <Row className="mb-3">
              <Col xs={3} className="mb-2 text-center">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="2x"  />
                </a>
                <div>Facebook</div>
              </Col>
              <Col xs={3} className="mb-2 text-center">
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="2x"  />
                </a>
                <div>Twitter</div>
              </Col>
              <Col xs={3} className="text-center">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x"  />
                </a>
                <div>Instagram</div>
              </Col>
            </Row>
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
