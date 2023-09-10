import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Dashoption from "../Login/dashoption";

function StudentTable() {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.student_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div >
      <Dashoption />
      <h2 style={{ textAlign: "center" }}>Student List</h2>
      <div style={{ width: "20%", float: "right", marginRight: "20px" }}>
        <input
          type="text"
          placeholder="Search by student name"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ width: "100%" }}
        />
      </div>
      <br />
      <br />
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
          {filteredStudents.map((student) => (
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
              <td>
                <a href={"/pay/" + student.student_id}>
                  <Button variant="secondary">Fees</Button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default StudentTable;
