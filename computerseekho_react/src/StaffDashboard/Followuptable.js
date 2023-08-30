import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Button } from 'reactstrap';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

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

  const queryParams = new URLSearchParams(window.location.search);
  const staffIdFromURL = queryParams.get('staff_id');

  const columns = [
    {
      dataField: 'enquiry_id',
      text: 'Enq.Id',
      sort: true,
      headerStyle: { width: '50px' },
      style: { width: '100px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
    },
    {
      filter: textFilter(),
      dataField: 'enquirer_name',
      text: 'Enquirer Name',
      sort: true
    },
    {
      dataField: 'enquirer_mobile',
      text: 'Phone',
      sort: true,
      headerStyle: { width: '150px' }, // Set the width for the header
      style: { width: '100px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }, // Set the width and styling for the cell content
      style: { textAlign: 'center'}
    
    },
    {
      dataField: 'follow_up_date',
      text: 'Follow-up Date',
      formatter: formatDate,
      sort: true,
      headerStyle: { width: '140px' }, // Set the width for the header
      style: { width: '100px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }, // Set the width and styling for the cell content
      style: { textAlign: 'center'}
    
    },
    {
      dataField: 'enquirer_email_id',
      text: 'Email',
      sort: true
    },
    {
      dataField: 'followup_msg',
      text: 'Followup Message',
      sort: true,
    },
    {
      dataField: 'staff_id',
      text: 'Staff Id',
      filter: textFilter({
        defaultValue: staffIdFromURL,
      }),
      hidden: false,
      headerStyle: { width: '80px' }, // Set the width for the header
      style: { textAlign: 'center' , width: '100px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }, // Set the width and styling for the cell content
    
    },
    {
      dataField: 'actions',
      formatter: (cell, row) => (
        <a href={"/call/" + row.enquiry_id}>
          <Button variant="secondary">Call</Button>
        </a>
      ),
      headerStyle: { width: '70px' }, // Set the width for the header
      style: { width: '100px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }, // Set the width and styling for the cell content
    },
    {
      dataField: 'actions',
      formatter: (cell, row) => (
        <a href={"/newreg/?enquiry_id=" + row.enquiry_id}>
          <Button variant="secondary">Register</Button>
        </a>
      ),
      headerStyle: { width: '100px' }, // Set the width for the header
      style: { width: '100px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }, // Set the width and styling for the cell content
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
    <div className="container" style={{ marginTop: 5 }}>
      <div className="table-responsive" style={{ width: '100%' }}> {/* Set the width to 90% */}
        {enquiry.length > 0 ? (
          <BootstrapTable
            striped
            hover
            keyField="enquiry_id"
            data={enquiry}
            columns={columns}
            filter={filterFactory()}
            pagination={paginationFactory(options)}
          />
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  </div>
);
};

export default Bootstraptab1;