import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";
import Dashoption from "../Login/dashoption";


export function AllEnq(props) {
  const [enquiries, setEnquiries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/getenq")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((result) => {
        setEnquiries(result);
      })
      .catch((error) => {
        console.error("Error fetching enquiries:", error);
      }
      );
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Dashoption />
          <Col md="11">
            <div>
              <br />
              <h2 align="center">Enquiry List</h2>
              <br />
              <br /><br /><br />
              <Table striped bordered hover size="lg" className="margine">
                <thead>
                  <tr>
                    <th>Enquiry Id</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Query</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((enquiry) => (
                    <tr key={enquiry.enquiry_id}>
                      <td>{enquiry.enquiry_id}</td>
                      <td>{enquiry.enquirer_name}</td>
                      <td>{enquiry.enquirer_mobile}</td>
                      <td>{enquiry.enquirer_email_id}</td>
                      <td>{enquiry.enquirer_query}</td>
                      <td
                        style={{
                          backgroundColor: enquiry.enquiry_processed_flag
                            ? "red"
                            : "green",
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        {enquiry.enquiry_processed_flag ? "Close" : "Open"}
                      </td>
                      <td>
                        <a href={"/call/" + enquiry.enquiry_id}>
                          <Button variant="secondary">Call</Button>
                        </a>
                      </td>
                      <td>
                        <a href={"/newreg" + enquiry.enquiry_id}>
                          <Button variant="secondary">Register</Button>
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

export default AllEnq;
