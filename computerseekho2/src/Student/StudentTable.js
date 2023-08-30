import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function StudentTable() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:8080/api/student")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toISOString().split("T")[0]; // Get only the date part
  };

  return (
    <div>
      <h2>Student List</h2>
      <br/>
      <a href={"/addstudent"}>
        <Button variant="primary" style={{marginLeft : '50px'}}>Add Student</Button>
      </a>
    <br/><br/><br/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Qualification</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.student_id}>
              <td>{student.student_id}</td>
              <td>{student.student_name}</td>
              <td>{student.student_address}</td>
              <td>{student.student_gender}</td>
              <td>{formatDate(student.student_dob)}</td>
              <td>{student.student_qualification}</td>
              <td>{student.student_mobile}</td>
              
              <td>
                <a href={"/studentedit/" + student.student_id}>
                  <Button variant="secondary">Edit</Button>
                </a>
              </td>
              {/* <td>
                <a href={"/newreg"}>
                  <Button variant="secondary">Register</Button>
                </a>
              </td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default StudentTable;
