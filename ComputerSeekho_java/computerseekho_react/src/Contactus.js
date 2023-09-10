import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Map from './map';

function ContactUs() {
  const [staffIdList, setStaffIdList] = useState([]);
  const [lastAssignedStaffIndex, setLastAssignedStaffIndex] = useState(-1);
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
    fetchStaffData();
  }, []);

  const fetchStaffData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/staff"); // Replace with your API endpoint for staff data
      const staffData = await response.json();

      // Extract staff_id values into an array
      const staffIds = staffData.map((staff) => staff.staff_id);
      setStaffIdList(staffIds);
    } catch (error) {
      console.error('Error fetching staff data:', error);
    }
  };

  const getNextStaffId = () => {
    if (staffIdList.length === 0) {
      console.error('No staff found');
      return null;
    }

    // Increment the last assigned staff index (cycling through if needed)
    const nextIndex = (lastAssignedStaffIndex + 1) % staffIdList.length;
    setLastAssignedStaffIndex(nextIndex);

    // Return the next staff_id
    return staffIdList[nextIndex];
  };

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();

    const nextStaffId = getNextStaffId();

    if (!nextStaffId) {
      console.error('No staff found');
      return;
    }

    const enrichedEnquiryData = {
      ...enquiryData,
      staff_id: nextStaffId, // Set the staff_id from the array
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


      if (response.ok) {
        alert("Enquiry Submitted")
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
      } else {
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
          <Form onSubmit={handleEnquirySubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '10px' }}>
              <label>Name:</label>
              <input
                type="text"
                value={enquiryData.enquirer_name}
                onChange={(e) => setEnquiryData({ ...enquiryData, enquirer_name: e.target.value })}
                style={{ width: '100%', padding: '5px' }}
              />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label>Mobile:</label>
              <input
                type="text"
                value={enquiryData.enquirer_mobile}
                onChange={(e) => setEnquiryData({ ...enquiryData, enquirer_mobile: e.target.value })}
                style={{ width: '100%', padding: '5px' }}
              />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label>Email:</label>
              <input
                type="text"
                value={enquiryData.enquirer_email_id}
                onChange={(e) => setEnquiryData({ ...enquiryData, enquirer_email_id: e.target.value })}
                style={{ width: '100%', padding: '5px' }}
              />
            </div>

            <input type="date" hidden value={enquiryData.enquiry_date} onChange={(e) => setEnquiryData({ ...enquiryData, enquiry_date: e.target.value })} />
            <input type="date" hidden value={enquiryData.follow_up_date} onChange={(e) => setEnquiryData({ ...enquiryData, follow_up_date: e.target.value })} />

            <div style={{ marginBottom: '10px' }}>
              <label>Query:</label>
              <textarea
                rows="3"            // Set the number of rows
                cols="20"           // Set the number of columns
                value={enquiryData.enquirer_query}
                onChange={(e) => setEnquiryData({ ...enquiryData, enquirer_query: e.target.value })}
                style={{ width: '100%', padding: '5px' }}
              />
            </div>


            <Button variant="primary" type="submit" className="mt-3" style={{ width: '100%', padding: '10px' }}>
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
          <Map />
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
