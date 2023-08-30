import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Staff() {
    const navigate = useNavigate();
    const [staff, setStaff] = useState({});
    const { id } = useParams();
    useEffect(() => {
      fetch("http://localhost:8080/api/staff/" + id)
        .then((res) => res.json())
        .then((result) => {
          setStaff(result);
        });
    }, {});
    
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/cardpic.jpg" />
        <Card.Body>
          <Card.Title>{staff.staff_id}</Card.Title>
          <Card.Text>
            <div>
              <label>name:</label>
              {staff.staff_name}
              <br />
              <label>Mobile:</label>
              {staff.staff_mobile}
              <br />
              <label>Email:</label>
              {staff.staff_email}
              <br />
              <label>Role:</label>
              {staff.staff_role}
              <br />
              <label>Username:</label>
              {staff.staff_username}
              <br />
              <label>Password:</label>
              {staff.staff_password}
              <br />
            </div>
          </Card.Text>
          <Button variant="primary" onClick={() => {navigate(-1)}}>Close</Button>
        </Card.Body>
      </Card>
    );
}

export default Staff