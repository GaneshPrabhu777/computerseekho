import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    //console.log(JSON.parse(demo));
    fetch("http://localhost:8080/api/staff", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: demo,
    })
      .then((r) => r.json())
      .then((data) => data);

    event.preventDefault();
    alert("New Staff Added Successfully !")
    navigate(-1);
  };

  return (
    <>
      <h3 align="center">Add New Staff</h3>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="staff_name" onChange={handleChange} /> <br />
        <label>Mobile: </label>
        <input type="text" name="staff_mobile" onChange={handleChange} /> <br />
        <label>Email:</label>
        <input type="text" name="staff_email" onChange={handleChange} /> <br />
        <label>Role:</label>
        <select name="staff_role" onChange={handleChange}>
          <option value="Teacher">Teacher</option>
          <option value="Office_Staff">Office-Staff</option>
          <option value="Housekeeping">Housekeeping</option>
          <option value="Admin">Admin</option>
        </select>
        <br />
        <label>Username:</label>
        <input type="text" name="staff_username" onChange={handleChange} /> <br />
        <label>Password:</label>
        <input type="text" name="staff_password" onChange={handleChange} /> <br />
        <label>Active Status:</label>
        <div>
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
        <br />
        <input type="submit" />
      </form>
    </>
  );
}

export default CreateStaff;
