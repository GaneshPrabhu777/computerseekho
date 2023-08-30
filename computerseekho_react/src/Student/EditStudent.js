import React, { useState, useEffect } from "react";
import "./EditStudentForm.css"; // Add your custom CSS file for styling
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";

function EditStudentForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [studentData, setStudentData] = useState({
    student_name: "",
    student_address: "",
    student_gender: "",
    student_dob: "",
    student_qualification: "",
    student_mobile: "",
  });

  useEffect(() => {
    fetch(`http://localhost:8080/api/studentbyid/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Convert date format to "YYYY-MM-DD"
        const formattedDate = new Date(data.student_dob).toISOString().split("T")[0];
        
        setStudentData({
          ...data,
          student_dob: formattedDate,
        });
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/api/student/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Student updated successfully");
         alert("Data updated")
          navigate("studlist");
        } else {
          console.error("Error updating student");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  };

  return (
    <div className="edit-student-form">
      <h2>Edit Student</h2>
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
          <Form.Control
            as="select"
            name="student_gender"
            value={studentData.student_gender}
            onChange={handleChange}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Control>
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
          Update Student
        </Button>
      </Form>
    </div>
  );
}

export default EditStudentForm;
