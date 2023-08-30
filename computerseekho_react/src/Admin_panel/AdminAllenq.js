import React from "react";
import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";
import Dashoption from "../Login/dashoption";
import AdminButtons from "./AdminButtons";

function AdminAllenq(props) {
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
      });
  }, []);
  

  return (
    <>
      <Container fluid>
        <Row>


          <AdminButtons />

          <Col md="11">
            <div><br />
              <h2 align="center">Enquiry List</h2>
              <br />
              {/* <a href={"/coursecreate"}>
        <Button variant="primary" style={{marginLeft : '50px'}}>Add Course</Button>
      </a> */}
              <br /><br /><br />
              <Table striped bordered hover size="lg" className="margine  ">
                <thead>
                  <tr>
                    <th>Enquiry Id</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>email</th>
                    <th>Query</th>
                  </tr>
                </thead>
                <tbody>
                {enquiries.map((enquiry) => (
                    <tr key={enquiry.enquiry_id}>
                      <td>{enquiry.enquiry_id}</td>
                      {/* <td><img src={staffs.staff_photo} width={100} height={100} alt="Staff Photo" /></td> */}
                      <td>{enquiry.enquirer_name}</td>
                      <td>{enquiry.enquirer_mobile}</td>
                      <td>{enquiry.enquirer_email_id}</td>
                      <td>{enquiry.enquirer_query}</td>
                      
              <td>
                <a href={"#" + enquiry.enquiry_id}>
                  <Button variant="secondary">Call</Button>
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

export default AdminAllenq;
