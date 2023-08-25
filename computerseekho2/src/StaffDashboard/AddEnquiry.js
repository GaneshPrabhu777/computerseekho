import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Dashoption from '../Login/dashoption';

function AddEnquiry() {

  const [timestamp, setTimestamp] = useState(new Date().getTime());
  const [Enquiry, setEmployee] = useState({});
  let navigate = useNavigate();
  let issubmit = false;
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEmployee(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    let demo = JSON.stringify(Enquiry);
    // console.log(JSON.parse(demo));
    fetch("http://localhost:8080/api/new_enquiry", {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: demo
    })

    event.preventDefault();

    alert("Enquiry Submitted Successfully !")

    navigate(-1);
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Dashoption />


          <Col md="11">

            <Container >
              <h3 align="center">Add New Enquiry</h3>
              {/* <p>issubmit &&<p color='green'>Enquiry Submitted Successfully !</p></p> */}
              <Row sm={8}>

                <br />
                <Col sm={5}>
                  <Form style={{ position: 'relative', top: '50px', left: '200px' }} onSubmit={handleSubmit}>
                    <Form.Group controlId="f1">
                      <Form.Label>Enquirer Name</Form.Label>
                      <Form.Control
                        size="sm"
                        placeholder="Enquirer Name"
                        type="text"
                        name="enquirer_name"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    {/* <label>Enquirer Name</label>
      <input name = "enquirer_name"  type="text" onChange={handleChange}></input> */}
                    <Form.Group controlId="f2">
                      <Form.Label>Student Name</Form.Label>
                      <Form.Control
                        size="sm"
                        placeholder="Name"
                        type="text"
                        name="student_Name"
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="f3">
                      <Form.Label>Mobile No.</Form.Label>
                      <Form.Control
                        size="sm"
                        placeholder="Mobile No"
                        type="text"
                        name="enquirer_mobile"
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="f4">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        size="sm"
                        placeholder="Email"
                        type="text"
                        name="enquirer_email_id"
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="f4">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        size="sm"
                        placeholder="address"
                        as="textarea"
                        rows="2"
                        name="enquirer_address"
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="f5">
                      <Form.Label>Student Query</Form.Label>
                      <Form.Control as="textarea" name="enquirer_query" rows={5} onChange={handleChange} placeholder="Enter your text here..." />
                    </Form.Group>
                    <div>
                      <input
                        type="hidden"
                        name="enquiry_date"
                        value={new Date().toISOString().substring(0, 10)}
                      />
                    </div>
                    <div>
                      <br></br>
                      {/* <input  type='submit' className=''/> */}
                      <Button variant="primary" type='submit'>Submit</Button>
                    </div>
                    <p style={{ paddingTop: '20px' }}></p>
                    <br />
                    <br />
                    <br />

                  </Form>
                </Col>

                <Col sm={6}>

                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AddEnquiry