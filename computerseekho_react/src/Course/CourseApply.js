import React from "react";
import { useState, useEffect } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";

export function CourseApply(props) {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/courses")
      .then((res) => res.json())
      .then((result) => {
        setCourse(result);
      });
  }, []);
  return (
    <div>
      <br />
      <h2 align="center">Courses Offered</h2>
      <br />
      <br />
      <br />
      <br />
      <CardGroup>
        {course.map((courses)=>(
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{courses.course_name}</Card.Title>
              <Card.Text>
                <b>{courses.course_description}</b>
                <br/>
                {courses.course_syllabus}
              </Card.Text>
              <Button variant="primary">Apply</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
} export default CourseApply;
