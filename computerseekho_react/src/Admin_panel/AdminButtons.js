// import Container from 'react-bootstrap/Container';

import { Link, NavLink, Navigate, Outlet } from 'react-router-dom';
import { Col, Button } from 'reactstrap';

function AdminButtons() {
    return (
        <>
            <Col md="1">
                <div className="button-container">

                    <Button color="primary" size="sm" tag={Link} to="/showstaff">Staff</Button>
                    <Button color="primary" size="sm" tag={Link} to="/courselist">Course</Button>
                    <Button color="primary" size="sm" tag={Link} to="/enqlist">All Enquiry</Button>
                    <Button color="primary" size="sm" tag={Link} to="/studlist">Students List</Button>

                </div>
            </Col>
        </>
    )
}

export default AdminButtons