import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Gallery() {
  // Sample image URLs (replace these with your actual image URLs)
  const imageUrls = [
    '/images/Slide1.jpg',
    '/images/Slide2.jpg',
    '/images/Slide3.jpg',
    '/images/Slide4.jpg',
    '/images/Slide5.jpg',
    '/images/Slide6.jpg',
    '/images/Slide7.jpg',
    '/images/Slide8.jpg',
    '/images/Slide9.jpg',
    '/images/Slide10.jpg',
    '/images/Slide11.jpg',
    '/images/Slide12.jpg',
    '/images/Slide13.jpg',
    '/images/Slide14.jpg',
    '/images/Slide15.jpg',
    '/images/Slide16.jpg',
    '/images/Slide17.jpg',
    '/images/Slide18.jpg',
    '/images/Slide19.jpg',
    '/images/Slide20.jpg',
    '/images/Slide21.jpg',
    '/images/Slide22.jpg',
    '/images/Slide23.jpg',
    '/images/Slide24.jpg',
    '/images/Slide25.jpg',
    '/images/Slide26.jpg',
    '/images/Slide27.jpg',
    '/images/Slide28.jpg',
    '/images/Slide29.jpg',
    '/images/Slide30.jpg',
    '/images/Slide31.jpg',
    '/images/Slide32.jpg',
    '/images/Slide33.jpg',
  

];

  return (
    <Container fluid>
      <h2 className="text-center mt-4">Image Gallery</h2>
      <Row className="justify-content-center mt-3">
        {imageUrls.map((imageUrl, index) => (
          <Col key={index} xs={6} md={4} lg={3} className="mb-4">
            <div className="gallery-item">
              <img src={imageUrl} alt={`Image ${index}`} className="img-fluid"/>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
