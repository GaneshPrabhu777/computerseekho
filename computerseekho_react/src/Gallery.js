import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Gallery() {
  // Sample image URLs (replace these with your actual image URLs)
  const imageUrls = [
    'images/slide1.jpg',
    'images/slide2.jpg',
    'images/slide3.jpg',
    'images/slide4.jpg',
    'images/slide5.jpg',
    'images/slide6.jpg',
    'images/slide7.jpg',
    'images/slide8.jpg',
    'images/slide9.jpg',
    'images/slide10.jpg',
    'images/slide11.jpg',
    'images/slide12.jpg',
    'images/slide13.jpg',
    'images/slide14.jpg',
    'images/slide15.jpg',
    'images/slide16.jpg',
    'images/slide17.jpg',
    'images/slide18.jpg',
    'images/slide19.jpg',
    'images/slide20.jpg',
    'images/slide21.jpg',
    'images/slide22.jpg',
    'images/slide23.jpg',
    'images/slide24.jpg',
    'images/slide25.jpg',
    'images/slide26.jpg',
    'images/slide27.jpg',
    'images/slide28.jpg',
    'images/slide29.jpg',
    'images/slide30.jpg',
    'images/slide31.jpg',
    'images/slide32.jpg',
    'images/slide33.jpg',
  

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
