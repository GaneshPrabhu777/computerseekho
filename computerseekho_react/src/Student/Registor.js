import React, { useState, useEffect } from "react";
import "./StudentRegistrationForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import PaymentForm from "./Paymennt";

function StudentRegistrationForm() {
  const navigate = useNavigate();
  const { enquiry_id } = useParams();
  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [selectedBatchId, setSelectedBatchId] = useState("");
  const [studentData, setStudentData] = useState({
    student_name: "",
    student_address: "",
    student_gender: "",
    student_dob: "",
    student_qualification: "",
    student_mobile: "",
    // course_id: "",
    // batch_id: "",
    student_email:"",
    enquiry_id:"",
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/courses")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCourseId) {
      fetch(`http://localhost:8080/api/getBatchByCourseId/${selectedCourseId}`)
        .then((response) => response.json())
        .then((data) => {
          setBatches(data);
        })
        .catch((error) => {
          console.error("Error fetching batches:", error);
        });
    }
  }, [selectedCourseId]);

  useEffect(() => {
    if (enquiry_id) {
      fetch(`http://localhost:8080/api/getById/${enquiry_id}`)
        .then((response) => response.json())
        .then((fetchedEnquiryData) => {
          setStudentData((prevStudentData) => ({
            ...prevStudentData,
            student_name: fetchedEnquiryData.enquirer_name,
            student_mobile: fetchedEnquiryData.enquirer_mobile,
            student_email: fetchedEnquiryData.enquirer_email_id,
            enquiry_id : fetchedEnquiryData.enquiry_id,
          }));
          setSelectedCourseId(fetchedEnquiryData.course_id);
          setSelectedBatchId(fetchedEnquiryData.batch_id);
        })
        .catch((error) => {
          console.error("Error fetching enquiry data:", error);
        });
    }
  }, [enquiry_id]);

  const handleCourseChange = (e) => {
    setSelectedCourseId(e.target.value);
    setSelectedBatchId("");
  };

 
  const handleBatchChange = (e) => {
    setSelectedBatchId(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!selectedCourseId || !selectedBatchId) {
      console.error("Course and batch must be selected");
      return;
    }
  
    const registrationData = {
      ...studentData,
      course_id: selectedCourseId,
      batch_id: selectedBatchId,
    };
  
    try {
      const response = await fetch("http://localhost:8080/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),

      
      });
  
      if (response.ok) {
        console.log("Student registered successfully");
        setTimeout(1000)
        // You can reset the form or perform any other necessary actions here
        navigate("/payment/" + enquiry_id + "/" + selectedBatchId);
      } else {
        console.error("Error registering student");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <div className="student-registration-form">
      <h2>Student Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Select Course:</Form.Label>
          <Form.Control
            as="select"
            value={selectedCourseId}
            onChange={handleCourseChange}
            required
          >
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course.course_id} value={course.course_id}>
                {course.course_name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        {selectedCourseId && (
          <Form.Group>
            <Form.Label>Select Batch:</Form.Label>
            <Form.Control
              as="select"
              value={selectedBatchId}
              onChange={handleBatchChange}
              required
            >
              <option value="">Select a batch</option>
              {batches.map((batch) => (
                <option key={batch.batch_id} value={batch.batch_id}>
                  {batch.batch_name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        )}
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
          <Form.Label>Gender:</Form.Label>
          <Form.Control
            as="select"
            name="student_gender"
            value={studentData.student_gender}
            onChange={handleChange}
            required
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Control>
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
            as="select"
            name="student_qualification"
            value={studentData.student_qualification}
            onChange={handleChange}
            required
          >
            <option value="">Select qualification</option>
            <option value="High School">High School</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="PhD">PhD</option>
            {/* Add more options as needed */}
          </Form.Control>
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
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="student_email"
            value={studentData.student_email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default StudentRegistrationForm;