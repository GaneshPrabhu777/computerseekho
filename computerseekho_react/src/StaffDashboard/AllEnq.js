import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";
import Dashoption from "../Login/dashoption";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'; // Import filterFactory and textFilter

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
      });
  }, []);

  const columns = [
    {
      dataField: 'enquiry_id',
      text: 'Enq Id',
      sort: true,
      headerStyle: { width: '50px' }, // Set the width for the header
      style: { width: '100px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
    },
    {
      dataField: 'enquirer_name',
      text: 'Name',
      filter: textFilter(), // Apply text filter to this column
    },
    {
      dataField: 'enquirer_mobile',
      text: 'Mobile',
      sort: true,
      headerStyle: { width: '150px' }, // Set the width for the header
      style: { width: '100px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
    },
    {
      dataField: 'enquirer_email_id',
      text: 'Email',
    },
    {
      dataField: 'enquirer_query',
      text: 'Query',
    },
    {
      dataField: 'followup_msg',
      text: 'Followup message',
    },
    {
      dataField: 'closure_reason',
      text: 'Closure reason',
    },
    {
      dataField: 'enquiry_processed_flag',
      text: 'Status',
      formatter: (cellContent, row) => (
        <div
          style={{
            backgroundColor: row.enquiry_processed_flag ? "red" : "green",
            color: "white",
            textAlign: "center",
          }}
        >
          {row.enquiry_processed_flag ? "Close" : "Open"}
        </div>
      ),
      sort: true,
      headerStyle: { width: '80px' }, // Set the width for the header
      style: { width: '100px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
    },
    {
      dataField: 'actions',
      text: 'Call',
      formatter: (cellContent, row) => (
        <a href={"/call/" + row.enquiry_id}>
          <Button variant="secondary">Call</Button>
        </a>
      ),
      sort: true,
      headerStyle: { width: '80px' }, // Set the width for the header
      style: { width: '100px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
    },
    {
      dataField: 'actions',
      text: 'Register',
      formatter: (cellContent, row) => (
        <a href={"/newreg/" + row.enquiry_id}>
          <Button variant="secondary">Register</Button>
        </a>
      ),
      sort: true,
      headerStyle: { width: '100px' }, // Set the width for the header
      style: { width: '100px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
    },
  ];

  return (
    <>
     <Dashoption />
      <Container fluid>
        <Row>
          <Col md="12">
            <div className="table-responsive"> {/* Use the full width of the container */}
              <br />
              <h2 align="center">Enquiry List</h2>
              <br />
              <BootstrapTable
                striped
                bordered
                hover
                keyField='enquiry_id'
                data={enquiries}
                columns={columns}
                filter={filterFactory()}
              />
            </div>
          </Col>
        </Row>
      </Container>
      </>
  );
}

export default AllEnq;
