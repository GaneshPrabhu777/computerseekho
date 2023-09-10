import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function Upcourses() {
  const [upcomingBatches, setUpcomingBatches] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:8080/api/batch")
      .then((response) => response.json())
      .then((data) => {
        // Filter batches with start dates in the future
        const currentDate = new Date();
        const upcomingBatches = data.filter((batch) => {
          const startDate = new Date(batch.batch_start_time);
          return startDate > currentDate;
        });

        setUpcomingBatches(upcomingBatches);
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
      <br />
      <br />
      <Col md="11" style={{ marginLeft: "40px" }}>
        <Table striped bordered hover responsive>
          <thead >
            <tr>
              <th>Batch ID</th>
              <th>Batch Name</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Final Presentation Date</th>
              <th>Total Seats</th>
              <th>Fee</th>
            </tr>
          </thead>
          <tbody>
            {upcomingBatches.map((batch) => (
              <tr key={batch.batch_id}>
                <td>{batch.batch_id}</td>
                <td>{batch.batch_name}</td>
                <td>{formatDate(batch.batch_start_time)}</td>
                <td>{formatDate(batch.batch_end_time)}</td>
                <td>{formatDate(batch.final_presentation_date)}</td>
                <td>{batch.batch_capacity}</td>
                <td>{batch.batch_fees}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a href="Contactus">
          <button>Enquiry</button>
        </a>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Upcourses;
