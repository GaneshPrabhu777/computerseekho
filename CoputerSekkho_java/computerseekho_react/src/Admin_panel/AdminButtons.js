import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
// import './Login/Buttonstyle.css'

function AdminButtons() {
    return (
        <Container fluid>
            <Row>
                <Col sm="6">
                    <div className="button-container">
                        <Button color="primary" size="sm" tag={Link} to="/showstaff">Staff</Button>
                        <Button color="primary" size="sm" tag={Link} to="/courselist">Course</Button>
                        <Button color="primary" size="sm" tag={Link} to="/enqlist">All Enquiry</Button>
                        <Button color="primary" size="sm" tag={Link} to="/admstudlist">Student List</Button>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default AdminButtons