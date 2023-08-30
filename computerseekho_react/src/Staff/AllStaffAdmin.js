import React from 'react'
import AdminButtons from '../Admin_panel/AdminButtons'
import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { Row, Col, Container } from 'reactstrap';

function AllStaffAdmin(props) {

    const [staff, setStaff] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/api/staff")
            .then((res) => res.json())
            .then((result) => {
                setStaff(result);
            });
    }, []);

    return (
        <>
            <Container fluid>
                <Row>
                    <AdminButtons />
                    <Col md="11">
                        <div><br />
                            <h2 align="center">Staff Data</h2>
                            <br />
                            <a href={"addstaff"}>
                                <Button variant="primary" style={{ marginLeft: '50px' }}>Add Staff</Button>
                            </a>
                            <br /><br /><br />
                            <Table striped bordered hover size="lg" className="margine  ">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Mobile</th>
                                        <th>Email</th>
                                        <th>Username</th>
                                        <th>Password</th>
                                        <th>Role</th>
                                        <th>Active</th> {/* New Column */}
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {staff.map((Staffs) => (
                                        <tr key={Staffs.staff_id}>
                                            <td>{Staffs.staff_id}</td>
                                            <td>{Staffs.staff_name}</td>
                                            <td>{Staffs.staff_mobile}</td>
                                            <td>{Staffs.staff_email}</td>
                                            <td>{Staffs.staff_username}</td>
                                            <td>{Staffs.staff_password}</td>
                                            <td>{Staffs.staff_role}</td>
                                            <td>{Staffs.staff_isactive ? "Yes" : "No"}</td> {/* Show "Yes" if active, otherwise "No" */}
                                            <td>
                                                <a href={"/staff/" + Staffs.staff_id}>
                                                    <Button variant="secondary">Edit</Button>
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
    )
}

export default AllStaffAdmin;
