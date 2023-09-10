import React from 'react'
import { Col,Button} from 'react-bootstrap'
import AdminButtons from './AdminButtons'
import { Container,Row } from 'reactstrap'

function Admindash() {
  return (
    
        <Container fluid>
            <Row>
                <AdminButtons />
                <Col md="11">

                    <div>
                      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <h2 align="center">Welcome to Admin Dashboard</h2>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    </div>
                </Col>
            </Row>
        </Container>
  )
}

export default Admindash