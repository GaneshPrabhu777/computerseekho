import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminButtons from "../Admin_panel/AdminButtons";
import "./CreateStaff.css"; // Import your CSS for styling here

function CreateStaff(props) {
  const [staff, setStaff] = useState({});
  let navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setStaff((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    let demo = JSON.stringify(staff);
    fetch("http://localhost:8080/api/staff", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: demo,
    })
      .then((r) => r.json())
      .then((data) => data);

    event.preventDefault();
    alert("New Staff Added Successfully !");
    navigate(-1);
  };

  return (
    <>
      <AdminButtons />
      <div className="add-staff-form">
        <h3 className="form-title">Add New Staff</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="staff_name" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Mobile:</label>
            <input type="text" name="staff_mobile" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="text" name="staff_email" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <select name="staff_role" onChange={handleChange}>
              <option value="">Select staff</option>
              <option value="Teacher">Teacher</option>
              <option value="Office_Staff">Office-Staff</option>
              <option value="Housekeeping">Housekeeping</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="form-group">
            <label>Photo URL:</label>
            <input type="text" name="photo_url" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input type="text" name="staff_username" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="text" name="staff_password" onChange={handleChange} />
          </div>
          <div className="form-group radio-options">
            <label>
              <input
                type="radio"
                name="staff_isactive"
                value="true"
                onChange={handleChange}
              />{" "}
              Active
            </label>
            <label>
              <input
                type="radio"
                name="staff_isactive"
                value="false"
                onChange={handleChange}
              />{" "}
              Inactive
            </label>
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" className="submit-button" />
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateStaff;
