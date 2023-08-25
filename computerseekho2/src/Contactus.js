import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
  const [Enquiry, setEnquiry] = useState({});
  let navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEnquiry((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let demo = JSON.stringify(Enquiry);
    fetch('http://localhost:8080/api/new_enquiry', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: demo,
    })
      .then(() => {
        alert('Enquiry Submitted Successfully!');
        window.location.reload()
        // navigate('/Contactus'); // Navigate to the home page or desired route
      })
      .catch((error) => {
        console.error('Error submitting enquiry:', error);
      });
  };

  // const date = new Date();
  // // Format the date to YYYY-MM-DD
  // const formattedDate = date.toLocaleDateString('en-GB', {
  //   year: 'numeric',
  //   month: '2-digit',
  //   day: '2-digit',
  // }).split('/').reverse().join('-');


  return (
    <Container><br />
    <br />
    <br />
    <br />
      <Row className="mt-4">
        <Col lg={6}>
          <h2 align="center">Enquiry Form</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="enquirerName">
              <Form.Label>Enquirer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enquirer Name"
                name="enquirer_name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="studentName">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="student_name"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="mobile">
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mobile No"
                name="enquirer_mobile"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                name="enquirer_email_id"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="query">
              <Form.Label>Your Query</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="enquirer_query"
                onChange={handleChange}
                placeholder="Enter your text here..."
              />
            </Form.Group>
            <Form.Group controlId="enquiry_date">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                hidden
                rows={5}
                name="enquirer_date"
                
                onChange={handleChange}
                placeholder="Enter your text here..."
              />
              {/* <div className='container'>
                <h2>React Js Formatted Date YYYY/MM/DD</h2>
                <p>Formatted Date: {formattedDate}</p>
              </div> */}
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
            <br />
            <br />
            <br />
            <br />
            <br />
          </Form>
        </Col>

        <Col lg={6}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.908236798875!2d72.83031607495563!3d19.1116811508519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c3a5e26d7b%3A0x89a89f343cff9c29!2sSM%20VITA!5e0!3m2!1sen!2sin!4v1692108335468!5m2!1sen!2sin"
            width="100%"
            height="500"
            title="Location Map"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
