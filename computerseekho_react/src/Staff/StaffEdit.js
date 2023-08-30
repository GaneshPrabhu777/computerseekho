import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function StaffEdit() {
    const [staff, setStaff] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/staff/" + id)
            .then((res) => res.json())
            .then((result) => {
                setStaff(result);
            });
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setStaff((prevStaff) => ({ ...prevStaff, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:8080/api/staff/" + id, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(staff),
        }).then((response) => {
            if (response.ok) {
                console.log("Staff updated successfully");
                navigate("/showstaff");
            } else {
                console.error("Error updating staff");
            }
        });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
                <h3 align="center">Edit Staff</h3>
                <br />
                <label>ID:</label>
                <input type="number" name="id" disabled value={staff.staff_id || ""} onChange={handleChange} />
                <br /><br />
                <label>Name: </label>
                <input type="text" name="staff_name" value={staff.staff_name || ""} onChange={handleChange} />
                <br /><br />
                <label>Mobile:</label>
                <input type="text" name="staff_mobile" value={staff.staff_mobile || ""} onChange={handleChange} />
                <br /><br />
                <label>Email:</label>
                <input type="text" name="staff_email" value={staff.staff_email || ""} onChange={handleChange} />
                <br /><br />
                <label>Username:</label>
                <input type="text" name="staff_username" value={staff.staff_username || ""} onChange={handleChange} />
                <br /><br />
                <label>Password:</label>
                <input type="text" name="staff_password" value={staff.staff_password || ""} onChange={handleChange} />
                <br /><br />
                <label>Role:</label>
                <select name="staff_role" value={staff.staff_role || ""} onChange={handleChange}>
                    <option value="Teacher">Teacher</option>
                    <option value="Office_Staff">Office-Staff</option>
                    <option value="Housekeeping">Housekeeping</option>
                    <option value="Admin">Admin</option>
                </select>
                <br /><br />
                <label>Is Active:</label>
                <select name="staff_isactive" value={staff.staff_isactive} onChange={handleChange}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <br /><br />
                <button type="submit">Save</button>
            </form>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export default StaffEdit;
