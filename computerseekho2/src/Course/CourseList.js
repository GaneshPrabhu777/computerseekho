import React from "react";
import { useState, useEffect } from "react";
import { Button, Col, Table } from "react-bootstrap";


export function CourseList(props) {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/courses")
      .then((res) => res.json())
      .then((result) => {
        setCourse(result);
      });
  }, []);
  return (
    <div><br/>
      <h2 align="center">Available Courses</h2>
      <br/>
      <a href={"/coursecreate"}>
        <Button variant="primary" style={{marginLeft : '50px'}}>Add Course</Button>
      </a>
    <br/><br/><br/>
    <Col xs="11" >
      <Table striped bordered hover size="lg" className="margine table" style={{margin:"20px",marginLeft:"50px",padding:"20px"}}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Duration</th>
            <th style={{width:"500px"}}>Syllabus</th>
            <th>Age Group</th>
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
              <td>
                <a href={"/courses/" +courses.course_id}>
                  <Button variant="primary">Display</Button>
                </a>
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

      </Col>
    </div>
  );
} export default CourseList;
