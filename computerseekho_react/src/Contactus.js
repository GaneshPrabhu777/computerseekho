import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Map from './map'

function ContactUs() {
  const [staffList, setStaffList] = useState([]);
  const [currentStaffIndex, setCurrentStaffIndex] = useState(0);
  const [enquiryData, setEnquiryData] = useState({
    enquirer_name: '',
    enquirer_address: '',
    enquirer_mobile: '',
    enquirer_email_id: '',
    enquiry_date: '',
    follow_up_date: '',
    closure_reason: '',
    followup_msg: '',
    enquirer_query: '',
    enquiry_processed_flag: false,
    staff_id: null,
  });
  useEffect(() => {
    // Fetch staff data when the component mounts
    fetchStaffData();
  }, []);

  const fetchStaffData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/staff"); // Replace with your API endpoint for staff data
      const staffData = await response.json();
      // console.log(staffData);
      setStaffList(staffData);
    } catch (error) {
      console.error('Error fetching staff data:', error);
    }
  };

  const getNextStaff = async () => {
    const nextStaffIndex = (currentStaffIndex + 1) % staffList.length;
    setCurrentStaffIndex(nextStaffIndex);
    const selectedStaff = staffList[nextStaffIndex];
  
    try {
      const response = await fetch(`http://localhost:8080/api/staff/${selectedStaff.staff_id}`);
      const staffData = await response.json();
  
      if (staffData.staff_role === "office_staff") {
        return staffData;
      } else {
        console.error('Selected staff does not have the required staff_role.');
        return null;
      }
    } catch (error) {
      console.error('Error fetching staff data:', error);
      return null;
    }
  };
  
  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
  
    const selectedStaff = await getNextStaff();
  
    if (!selectedStaff) {
      console.error('No eligible staff found');
      return;
    }
  
    const enrichedEnquiryData = {
      ...enquiryData,
      staff_id: selectedStaff.staff_id,
    };

    // console.log('Enquiry Data:', enrichedEnquiryData);

    // Set today's date to enquiry_date
  const currentDate = new Date().toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format
  enrichedEnquiryData.enquiry_date = currentDate;


    try {
      const response = await fetch("http://localhost:8080/api/new_enquiry", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enrichedEnquiryData), // Use the enrichedEnquiryData object
      }
      );
      alert("Enquiry Submitted Successfully")


      if (response.ok) {
        // Enquiry successfully stored
        // console.log('Enquiry stored successfully');
        // Clear the form fields
        setEnquiryData({
          enquirer_name: '',
          enquirer_address: '',
          enquirer_mobile: '',
          enquirer_email_id: '',
          enquiry_date: '',
          follow_up_date: '',
          closure_reason: '',
          followup_msg: '',
          enquirer_query: '',
          enquiry_processed_flag: false,
          staff_id: null,
        });
      } 
      else {
        console.error('Failed to store enquiry');
      }
    } catch (error) {
      console.error('Error storing enquiry:', error);
    }
  };

  return (
    <Container><br />
      <br />
      <br />
      <br />
      <Row className="mt-4">
        <Col lg={6}>
          <h2 align="center">Enquiry Form</h2>
          <Form onSubmit={handleEnquirySubmit}>
            <label>Name:</label>
            <input
              type="text"
              value={enquiryData.enquirer_name}
              onChange={(e) => setEnquiryData({ ...enquiryData, enquirer_name: e.target.value })}
            />
           
            <label>Mobile:</label>
            <input
              type="text"
              value={enquiryData.enquirer_mobile}
              onChange={(e) => setEnquiryData({ ...enquiryData, enquirer_mobile: e.target.value })}
            />
            <label>Email:</label>
            <input
              type="text"
              value={enquiryData.enquirer_email_id}
              onChange={(e) => setEnquiryData({ ...enquiryData, enquirer_email_id: e.target.value })}
            />
        <input
          type="date"
          hidden
          value={enquiryData.enquiry_date}
          onChange={(e) => setEnquiryData({ ...enquiryData, enquiry_date: e.target.value })}
        />
        <input
          type="date"
          hidden
          value={enquiryData.follow_up_date}
          onChange={(e) => setEnquiryData({ ...enquiryData, follow_up_date: e.target.value })}
        />
       
            <label>Query:</label>
            <input
              type="text"
              value={enquiryData.enquirer_query}
              onChange={(e) => setEnquiryData({ ...enquiryData, enquirer_query: e.target.value })}
            />

            {/* <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                name="enquirer_email_id"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="query">
              <Form.Label>Your Query</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="enquirer_query"
                onChange={handleChange}
                placeholder="Enter your text here..."
              />
            </Form.Group>
            <Form.Group controlId="enquiry_date">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                hidden
                rows={5}
                name="enquirer_date"
                
                onChange={handleChange}
                placeholder="Enter your text here..."
              /> */}
            {/* <div className='container'>
                <h2>React Js Formatted Date YYYY/MM/DD</h2>
                <p>Formatted Date: {formattedDate}</p>
              </div> */}
            {/* </Form.Group> */}
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
            <br />
            <br />
            <br />
            <br />
            <br />
          </Form>
        </Col>


        {/* MAP */}
        <Col lg={6}>
          <Map/>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
