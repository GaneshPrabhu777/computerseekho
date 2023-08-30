import React, { useState } from "react";
import "./AddStudentForm.css"; // Add your custom CSS file for styling
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function AddStudentForm() {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState({
    student_name: "",
    student_address: "",
    student_gender: "", // Change to empty string
    student_dob: "",
    student_qualification: "",
    student_mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Student added successfully");
          // You can reset the form or perform any other necessary actions here
        } else {
          console.error("Error adding student");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    navigate(-1);
  };

  return (
    <div className="add-student-form">
      <h2>Add New Student</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="student_name"
            value={studentData.student_name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address:</Form.Label>
          <Form.Control
            type="text"
            name="student_address"
            value={studentData.student_address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date of Birth:</Form.Label>
          <Form.Control
            type="date"
            name="student_dob"
            value={studentData.student_dob}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Qualification:</Form.Label>
          <Form.Control
            type="text"
            name="student_qualification"
            value={studentData.student_qualification}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mobile:</Form.Label>
          <Form.Control
            type="text"
            name="student_mobile"
            value={studentData.student_mobile}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Gender:</Form.Label>
          <div>
            <Form.Check
              type="radio"
              name="student_gender"
              value="Male"
              label="Male"
              onChange={handleChange}
              required
            />
            <Form.Check
              type="radio"
              name="student_gender"
              value="Female"
              label="Female"
              onChange={handleChange}
              required
            />
            <Form.Check
              type="radio"
              name="student_gender"
              value="Other"
              label="Other"
              onChange={handleChange}
              required
            />
          </div>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Student
        </Button>
      </Form>
    </div>
  );
}

export default AddStudentForm;
