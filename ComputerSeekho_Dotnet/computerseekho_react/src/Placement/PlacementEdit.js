import React, { useState, useEffect } from "react";
import { Form, useNavigate, useParams } from "react-router-dom";

function PlacementEdit(props) {
    const [placement, setPlacement] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/placement/" + id)
            .then((res) => res.json())
            .then((result) => {
                setPlacement(result);
            });
    }, [id]); // Add id as a dependency to the useEffect dependency array

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPlacement((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let demo = JSON.stringify(placement);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/placementedit/" + id, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: demo,
        })
        alert("Data updated")
                navigate("/placerecord");
            


    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Id:</label><br />
                <input
                    type="text"
                    name="id"
                    disabled
                    value={placement.placemetid || ""}
                    onChange={handleChange}
                />
                <br /> <label>Course Name:</label><br />
                <input
                    type="text"
                    name="coursename"
                    value={placement.coursename || ""}
                    onChange={handleChange}
                />
                <br /> <label>Batch Id:</label><br />
                <input
                    type="number"
                    name="batchid"
                    value={placement.batchid || ""}
                    onChange={handleChange}
                />
                <br /> <label>Total Students:</label><br />
                <input
                    type="number"
                    name="total_student"
                    value={placement.total_student || ""}
                    onChange={handleChange}
                />
                <br /> <label>Placed Students:</label><br />
                <input
                    type="number"
                    name="placedstudents"
                    value={placement.placedstudents || ""}
                    onChange={handleChange}
                />
                <br /><br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default PlacementEdit;
