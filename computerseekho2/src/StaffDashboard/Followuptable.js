import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Button } from 'reactstrap';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'; // Import Bootstrap table CSS

const formatDate = (dateTimeString) => {
  const date = new Date(dateTimeString);
  return date.toISOString().split("T")[0];
};

const Bootstraptab1 = () => {
  const [enquiry, setEnquiry] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8080/api/getenq')
      .then(response => {
        setEnquiry(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const navigate = useNavigate();

  const columns = [
    {
      dataField: 'enquiry_id',
      text: 'Enq.Id',
      sort: true
    },
    {
      filter: textFilter(),
      dataField: 'enquirer_name',
      text: 'Enquirer Name',
      sort: true
    },
    // {
    //   dataField: 'student_name',
    //   text: 'Student Name',
    //   sort: true
    // },
    {
      dataField: 'enquirer_mobile',
      text: 'Phone',
      sort: true
    },
    {
      dataField: 'follow_up_date',
      text: 'Follow-up Date',
      formatter: formatDate,
      sort: true
    },
    {
      dataField: 'enquirer_email_id',
      text: 'Email',
      sort: true
    },
    {
      text: 'Actions',
      dataField: 'actions',
      formatter: (cell, row) => (
        <a href={"/call/" + row.enquiry_id}>
          <Button variant="secondary">Call</Button>
        </a>
        
      ),
    },
    {
      text: 'Actions',
      dataField: 'actions',
      formatter: (cell, row) => (
        <a href={"/newreg"}>
          <Button variant="secondary">Register</Button>
        </a>
        
      ),
    },
  ];

  const options = {
    page: 1,
    sizePerPage: 10,
    totalSize: enquiry.length,
  };

  return (
    <div className="container">
      <br />
      <div className="container" style={{ marginTop: 10 }}>
        {enquiry.length > 0 ? (
          <BootstrapTable
            striped
            hover
            keyField='enquiry_id'
            data={enquiry}
            columns={columns}
            filter={filterFactory()}
            pagination={paginationFactory(options)}
            classes="table-responsive" // Apply responsive styling to the table
          />
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
}

export default Bootstraptab1;
