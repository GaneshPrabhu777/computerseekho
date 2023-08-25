import React, { useState } from "react";
import "./AddBatchForm.css"; // Add your custom CSS file for styling
import { useNavigate } from "react-router-dom";
function AddBatchForm() {
    const navigate = useNavigate();
  const [batchData, setBatchData] = useState({
    batch_id: "",
    batch_name: "",
    batch_start_time: "",
    batch_end_time: "",
    final_presentation_date: "",
    batch_fees: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBatchData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/addBatch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(batchData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Batch added successfully");
          // You can reset the form or perform any other necessary actions here
        } else {
          console.error("Error adding batch");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      navigate(-1);
  };

  return (
    <div className="add-batch-form">
      <h2>Add New Batch</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Batch ID:</label>
          <input
            type="text"
            name="batch_id"
            value={batchData.batch_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Batch Name:</label>
          <input
            type="text"
            name="batch_name"
            value={batchData.batch_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            name="batch_start_time"
            value={batchData.batch_start_time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <input
            type="date"
            name="batch_end_time"
            value={batchData.batch_end_time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Final Presentation Date:</label>
          <input
            type="date"
            name="final_presentation_date"
            value={batchData.final_presentation_date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Batch Fees:</label>
          <input
            type="number"
            name="batch_fees"
            value={batchData.batch_fees}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Add Batch</button>
        </div>
      </form>
    </div>
  );
}

export default AddBatchForm;
