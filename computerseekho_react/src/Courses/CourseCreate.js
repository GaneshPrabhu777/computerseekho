import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function CourseCreate(props) {
  const [course, setCourse] = useState({});
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "course_is_active") {
      setIsActive(value === "true");
    } else {
      setCourse((values) => ({ ...values, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCourse((values) => ({ ...values, course_is_active: isActive }));

    let demo = JSON.stringify(course);

    fetch("http://localhost:8080/api/courses", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: demo,
    })
alert("Course added successfully")
    navigate("/courselist");
  };

  return (
    <Container>
      
      <Row className="justify-content-center">
        <Col md={6}>
           <h3 align="center">Add Course</h3>
        <br/><br/>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Id:</Form.Label>
              <Form.Control type="text" disabled name="course_id" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" name="course_name" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description:</Form.Label>
              <Form.Control type="text" name="course_description" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Duration:</Form.Label>
              <Form.Control type="number" name="course_duration" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Syllabus:</Form.Label>
              <Form.Control type="text" name="course_syllabus" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Age Group:</Form.Label>
              <Form.Control as="select" name="age_grp_type"  onChange={handleChange}>
                <option value="child">Child</option>
                <option value="teen">Teen</option>
                <option value="adult">Adult</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Course Status:</Form.Label>
              <Form.Check
                type="radio"
                label="Active"
                name="course_is_active"
                value="true"
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Inactive"
                name="course_is_active"
                value="false"
                onChange={handleChange}
              />
            </Form.Group>
            <br/><br/>
            <Button type="submit">Submit</Button>
          </Form>
          <br/><br/><br/><br/>
        </Col>
      </Row>
    </Container>
  );
}

export default CourseCreate;
