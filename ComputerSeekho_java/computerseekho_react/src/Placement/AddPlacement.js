import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddPlacement.css'; // Import the CSS file for styling

function AddPlacement() {
  const [placement, setAddPlacement] = useState({
    batch_name: '', // Initialize batch_name as an empty string
    coursename: '', // Initialize coursename as an empty string
  });
  const [batchNames, setBatchNames] = useState([]);
  const [courseNames, setCourseNames] = useState([]); // To store course names
  let navigate = useNavigate();

  useEffect(() => {
    // Fetch batch names from the server
    fetch('http://localhost:8080/api/batch')
      .then((response) => response.json())
      .then((data) => {
        setBatchNames(data);
      })
      .catch((error) => {
        console.error('Error fetching batch names:', error);
      });
  }, []);

  // Fetch course names based on the selected batch
  useEffect(() => {
    if (placement.batch_name) {
      // Use batch_name to fetch course names
      fetch(`http://localhost:8080/api/courses?batch_name=${placement.batch_name}`)
        .then((response) => response.json())
        .then((data) => {
          setCourseNames(data);
        })
        .catch((error) => {
          console.error('Error fetching course names:', error);
        });
    }
  }, [placement.batch_name]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAddPlacement((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let demo = JSON.stringify(placement);
    fetch('http://localhost:8080/api/addplacement', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: demo,
    })
      .then(() => {
        alert('Placement added successfully!');
        navigate("/placerecord");
      })
      .catch((error) => {
        console.error('Error adding placement:', error);
      });
  };

  return (
    <div className="centered-form">
      <form className="placement-form" onSubmit={handleSubmit}>
        <label>Batch Name</label>
        <select
          name="batch_name"
          value={placement.batch_name}
          onChange={handleChange}
        >
          <option value="">Select batch name</option>
          {batchNames.map((batch) => (
            <option key={batch.batch_id} value={batch.batch_name}>
              {batch.batch_name}
            </option>
          ))}
        </select>
        <label>Course Name</label>
        <select
          name="coursename"
          value={placement.coursename}
          onChange={handleChange}
        >
          <option value="">Select course name</option>
          {courseNames.map((course) => (
            <option key={course.course_id} value={course.course_name}>
              {course.course_name}
            </option>
          ))}
        </select>
        <label>Total Students</label>
        <input
          type="text"
          name="total_student"
          value={placement.total_student || ''}
          onChange={handleChange}
        />
        <label>Placed Students</label>
        <input
          type="text"
          name="placedstudents"
          value={placement.placedstudents || ''}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPlacement;
