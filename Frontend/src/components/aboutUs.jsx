import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../img/sankey.jpg';
import img2 from '../img/venkey.jpg';
import img3 from '../img/abhi.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './about.css'; // Import your custom CSS file
import Header from './Header';

export function AboutUs() {
  const sankeyLinkedIn = 'https://www.linkedin.com/in/sanketpashte';
  const vennkeyLinkedIn = 'https://www.linkedin.com/in/venkatesh-pujari-632101248/';
  const abhiLinkedIn = 'https://www.linkedin.com/in/abhishek-thote-60533a228/';

  return (
    <Container className='about-background'>
      <Row className='mt-4'>

        <Col lg={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src={img2} className="mt-2"/>
            <Card.Body>
              <Card.Title className="d-flex flex-column  align-items-center">Venkatesh Pujari</Card.Title>
              <span className="d-flex flex-column  align-items-center">PRN: 230940520098</span>
              <Card.Text>
                To succeed in an environment of growth and excellence and earn a job, which provides me job satisfaction and self-development and help me achieve personal as well as organizational goals.
              </Card.Text>
              <Button variant="primary" href={vennkeyLinkedIn} target="_blank" className="d-flex flex-column  align-items-center">
                LinkedIn
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src={img3} className="mt-2"/>
            <Card.Body>
              <Card.Title className="d-flex flex-column  align-items-center">Abhishek Thote</Card.Title>
              <span className="d-flex flex-column  align-items-center">PRN: 230940520001</span>
              <Card.Text>
                As a fresh graduate aspiring to be a software developer, I bring a strong foundation, enthusiasm, and a willingness to learn. I am eager to contribute to the industry and grow in my career.
              </Card.Text>
              <Button variant="primary" href={abhiLinkedIn} target="_blank" className="d-flex flex-column  align-items-center">
                LinkedIn
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="custom-card">
            <Card.Img variant="top" src={img1} className="mt-2" />
            <Card.Body>
              <Card.Title className="d-flex flex-column  align-items-center">Sanket Pashte</Card.Title>
              <span className="d-flex flex-column  align-items-center">PRN: 230940520071</span>
              <Card.Text>
                As a fresh graduate aspiring to be a software developer, I bring a strong foundation, enthusiasm, and a willingness to learn. I am eager to contribute to the industry and grow in my career.
              </Card.Text>
              <Button variant="primary" href={sankeyLinkedIn} target="_blank" className="d-flex flex-column  align-items-center">
                LinkedIn
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
