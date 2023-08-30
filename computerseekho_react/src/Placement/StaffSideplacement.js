import React, { useState, useEffect } from 'react';
import './GetPlacement.css'; // Import the CSS file
import { Button } from 'react-bootstrap';
import Dashoption from '../Login/dashoption';
import { Container,Row,Col } from 'reactstrap';

function StaffSidePlacement(props) {
    const [placements, setPlacements] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/getplacement")
            .then(res => res.json())
            .then(result => {
                setPlacements(result);
            });
    }, []);

    const calculatePlacementPercent = (placed, total) => {
        if (total === 0) {
            return 0;
        }
        return ((placed / total) * 100).toFixed(2);
    };

    return (
        <>
            <Container fluid>
                <Row>
                    <Dashoption />
                    <Col md="11">
                        <div className="placement-table-container">
                            <h2 align="center">Placement Table</h2>
                            <a href="/addplace">
                                <Button>Add New Placement</Button>
                            </a>
                            <table className="placement-table">
                                <thead>
                                    <tr>
                                        <th>Placement ID</th>
                                        <th>Batch ID</th>
                                        <th>Course Name</th>
                                        <th>Total Students</th>
                                        <th>Placed Students</th>
                                        <th>Placement Percent</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {placements.map(placement => (
                                        <tr key={placement.placemetid}>
                                            <td>{placement.placemetid}</td>
                                            <td>{placement.batchid}</td>
                                            <td>{placement.coursename}</td>
                                            <td>{placement.total_student}</td>
                                            <td>{placement.placedstudents}</td>
                                            <td>{calculatePlacementPercent(placement.placedstudents, placement.total_student)}%</td>
                                            <td><a href={"/editplace/" + placement.placemetid}>
                                                <Button>Edit</Button>
                                            </a></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>


    );
}

export default StaffSidePlacement;
