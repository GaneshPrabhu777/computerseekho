import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Buttonstyle.css'

function Dashoption() {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <div className="button-container">
            <Button color="primary" size="sm" tag={Link} to="/followups">Followups</Button>
            <Button color="primary" size="sm" tag={Link} to="/addenq">Add Enquiry</Button>
            <Button color="primary" size="sm" tag={Link} to="/allenq">All Enquiry</Button>
            <Button color="primary" size="sm" tag={Link} to="/newreg">New Student</Button>
            <Button color="primary" size="sm" tag={Link} to="/studlist">Student List</Button>
            <Button color="primary" size="sm" tag={Link} to="/placerecord">Placement</Button>
            <Button color="primary" size="sm" tag={Link} to="/batch">Batch</Button>
            <Button color="primary" size="sm" tag={Link} to="/allstaff">Staff</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashoption;
