import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Container, Col, Row } from "reactstrap";
import Dashoption from "../Login/dashoption";
import AdminButtons from "../Admin_panel/AdminButtons";

function CourseList(props) {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/courses")
      .then((res) => res.json())
      .then((result) => {
        setCourse(result);
      });
  }, []);

  const getStatusText = (isActive) => {
    return isActive ? "Active" : "Inactive";
  };

  return (
    <>
      <Container fluid>
        <Row>
          <AdminButtons />
          <Col md="11">
            <div>
              <br />
              <h2 align="center">Available Course</h2>
              <br />
              <a href={"/coursecreate"}>
                <Button variant="primary" style={{ marginLeft: '50px' }}>Add Course</Button>
              </a>
              <br /><br /><br />
              <Table striped bordered hover size="lg" className="margine  ">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Syllabus</th>
                    <th>Age group</th>
                    {/* <th>Cover Photo</th> */}
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {course.map((courses) => (
                    <tr key={courses.course_id}>
                      <td>{courses.course_id}</td>
                      <td>{courses.course_name}</td>
                      <td>{courses.course_description}</td>
                      <td>{courses.course_duration}</td>
                      <td>{courses.course_syllabus}</td>
                      <td>{courses.age_grp_type}</td>
                      {/* <td>{courses.cover_photo}</td> */}
                      <td style={{ backgroundColor: courses.course_is_active ? "lightgreen" : "red" }}>
                        {getStatusText(courses.course_is_active)}
                      </td>
                      <td>
                        <a href={"/coursesedit/" + courses.course_id}>
                          <Button variant="secondary">Edit</Button>
                        </a>
                      </td>
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

export default CourseList;
