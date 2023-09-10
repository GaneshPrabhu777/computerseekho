import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";
import Dashoption from "../Login/dashoption";

function AllStaff(props) {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/staff")
      .then((res) => res.json())
      .then((result) => {
        setStaffs(result);
      });
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Dashoption />

          <Col md="11">
            <div><br />
              <h2 align="center">Staff List</h2>
              <br />
              <br /><br /><br />
              <Table striped bordered hover size="lg" className="margine  ">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Role</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {staffs.map((staff) => (
                    <tr key={staff.staff_id}>
                      <td>{staff.staff_id}</td>
                      <td>
                        <img
                          src={staff.photo_url}
                          alt={`Photo of ${staff.staff_name}`}
                          style={{ height: "100px" }}
                        />
                      </td>
                      <td>{staff.staff_name}</td>
                      <td>{staff.staff_mobile}</td>
                      <td>{staff.staff_role}</td>
                      <td>{staff.staff_email}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AllStaff;
