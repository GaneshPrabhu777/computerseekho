import React from "react";
import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Container,Row,Col } from "reactstrap";
import Dashoption from "../Login/dashoption";

export function AllStaff(props) {
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
              {/* <a href={"/coursecreate"}>
        <Button variant="primary" style={{marginLeft : '50px'}}>Add Course</Button>
      </a> */}
              <br /><br /><br />
              <Table striped bordered hover size="lg" className="margine  ">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Role</th>
                    <th>email</th>
                  </tr>
                </thead>
                <tbody>
                  {staffs.map((staffs) => (
                    <tr key={staffs.staff_id}>
                      <td>{staffs.staff_id}</td>
                      <td><img src={staffs.staff_photo} width={100} height={100} alt="Staff Photo" /></td>
                      <td>{staffs.staff_name}</td>
                      <td>{staffs.staff_mobile}</td>
                      <td>{staffs.staff_role}</td>
                      <td>{staffs.staff_email}</td>
                      {/* <td>
                <a href={"/staffs/" + staffs.course_id}>
                  <Button variant="primary">Display</Button>
                </a>
              </td>
              <td>
                <a href={"/staffsedit/" + staffs.course_id}>
                  <Button variant="secondary">Edit</Button>
                </a>
              </td>
              <td>
                <a href={"/staffsdel/" + staffs.course_id}>
                  <Button variant="danger">Delete</Button>
                </a>
              </td> */}
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
} export default AllStaff;
