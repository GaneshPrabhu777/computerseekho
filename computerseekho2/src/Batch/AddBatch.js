import React, { useState, useEffect } from "react";
import "./AddBatchForm.css"; // Add your custom CSS file for styling
import { useNavigate } from "react-router-dom";

function AddBatchForm() {
  const navigate = useNavigate();
  const [batchData, setBatchData] = useState({
    batch_name: "",
    batch_start_time: "",
    batch_end_time: "",
    final_presentation_date: "",
    batch_fees: "",
      course_id:""
    
  });

  const [courseOptions, setCourseOptions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/courses") // Replace with your API endpoint to fetch courses
      .then((response) => response.json())
      .then((data) => {
        setCourseOptions(data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBatchData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCourseChange = (e) => {
    
    const selectedCourseId = e.target.value;
    console.log(selectedCourseId)
    setBatchData((prevData) => ({
      ...prevData,
      
        "course_id": selectedCourseId,
      
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(batchData);

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

    // navigate(-1);
  };

  return (
    <div className="add-batch-form">
      <h2>Add New Batch</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Course:</label>
          <select
            name="course_id"
            value={batchData.course_id}
            onChange={handleCourseChange}
            required
          >
            <option value="">Select a course</option>
            {courseOptions.map((course) => (
              <option key={course.course_id} value={course.course_id}>
                {course.course_name}
              </option>
            ))}
          </select>
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
