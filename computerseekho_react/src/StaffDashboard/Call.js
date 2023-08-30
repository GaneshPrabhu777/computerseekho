import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Dashoption from '../Login/dashoption';
import { useParams, useNavigate } from 'react-router-dom';
import { Label } from 'reactstrap';

function Call(props) {
    let navigate = useNavigate();

    const { id } = useParams();
    const [enquiry, setEnquiry] = useState({
        enquirer_name: '',
        student_name: '',
        enquirer_mobile: '',
        enquirer_email_id: '',
        enquirer_address: '',
        enquirer_query: '',
        enquiry_date: new Date().toISOString().substring(0, 10),
        followup_msg: '',
        close_enquiry: 'no',
        closure_reason: '',
        enquiry_processed_flag: false,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEnquiry((values) => ({
            ...values,
            [name]: value,
        }));
    };

    const handleCloseEnquiryChange = (event) => {
        const { name, value } = event.target;
        setEnquiry((values) => ({
            ...values,
            [name]: value,
            closure_reason: '',
            enquiry_processed_flag: value === 'yes' ? true : false,
        }));
    };

    const renderClosureReasonInput = () => {
        if (enquiry.close_enquiry === 'yes') {
            return (
                <Form.Group controlId="closureReason">
                    <Form.Label>Closure Reason</Form.Label>
                    <Form.Control
                        type="text"
                        name="closure_reason"
                        value={enquiry.closure_reason}
                        onChange={handleChange}
                    />
                </Form.Group>
            );
        }
        return null;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/api/update_enquiry/${id}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(enquiry),
            });

            if (response.ok) {
                alert("Enquiry Submitted Successfully !");
            } else {
                console.error('Failed to store enquiry');
            }
        } catch (error) {
            console.error('Error storing enquiry:', error);
        }
    };

    const fetchExistingEnquiryData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/getById/${id}`);
            const existingEnquiryData = await response.json();

            setEnquiry(existingEnquiryData);
        } catch (error) {
            console.error('Error fetching existing enquiry data:', error);
        }
    };

    useEffect(() => {
        fetchExistingEnquiryData();
    }, [id]);

    return (
        <Container fluid>
            <Dashoption />
            <Row className="justify-content-center">
                <div className="col-sm-5">
                    <h3 className="text-center">Enquiry Followup</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="enquirerName">
                            <Form.Label>Enquirer Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="enquirer_name"
                                value={enquiry.enquirer_name}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="enquirerMobile">
                            <Form.Label>Mobile No.</Form.Label>
                            <Form.Control
                                type="text"
                                name="enquirer_mobile"
                                value={enquiry.enquirer_mobile}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="enquirerEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                name="enquirer_email_id"
                                value={enquiry.enquirer_email_id}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="enquirerQuery">
                            <Form.Label>Student Query</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                name="enquirer_query"
                                value={enquiry.enquirer_query}
                                onChange={handleChange}
                                placeholder="Enter your text here..."
                            />
                        </Form.Group>
                        <Form.Group controlId="followupMsg">
                            <Form.Label>Follow-up Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                name="followup_msg"
                                value={enquiry.followup_msg}
                                onChange={handleChange}
                                placeholder="Enter your follow-up message..."
                            />
                        </Form.Group>
                        <Label>Do you want to close enquiry?</Label>
                        <Form.Group controlId="closeEnquiry">
                            <div>
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    name="close_enquiry"
                                    value="yes"
                                    checked={enquiry.close_enquiry === 'yes'}
                                    onChange={handleCloseEnquiryChange}
                                />
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="close_enquiry"
                                    value="no"
                                    checked={enquiry.close_enquiry === 'no'}
                                    onChange={handleCloseEnquiryChange}
                                />
                            </div>
                        </Form.Group>
                        {renderClosureReasonInput()}
                        <Button variant="primary" type="submit" className="mt-3">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Row>
        </Container>
    );
}

export default Call;
