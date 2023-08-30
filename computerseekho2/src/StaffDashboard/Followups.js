import React from 'react'
import Dashoption from '../Login/dashoption'
import { Container, Row, Col } from 'reactstrap';
import Bootstraptab1 from './Followuptable';

function Followups() {
  return (
    <Container fluid>
      <Row>
        <Dashoption />
        <Col md="11">
          <h2 align="center">Followups</h2>
          <Bootstraptab1 />
        </Col>
      </Row>
    </Container>
  )
}

export default Followups