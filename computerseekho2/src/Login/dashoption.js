// import Container from 'react-bootstrap/Container';

import { Link} from 'react-router-dom';
import './ButtonGrid.css'; // Import your CSS file for styling
import {  Col, Button } from 'reactstrap';


function Dashoption() {


  return (
    <> 
      <Col md="1">
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


    </>
      );
}

      export default Dashoption;