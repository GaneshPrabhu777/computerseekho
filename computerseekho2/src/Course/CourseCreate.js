import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CourseCreate.css"; // Import your CSS file

function CourseCreate() {
  const [course, setCourse] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCourse((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/courses", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(course),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle successful response
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle fetch error
    }

    navigate(-1);
  };

  return (
    <div className="course-create-container">
      <h2>Create New Course</h2>
      <form className="course-form" onSubmit={handleSubmit}>
        <label htmlFor="course_name">Name:</label>
        <input
          type="text"
          id="course_name"
          name="course_name"
          onChange={handleChange}
        />
        <label htmlFor="course_description">Description:</label>
        <input
          type="text"
          id="course_description"
          name="course_description"
          onChange={handleChange}
        />
        <label htmlFor="course_duration">Duration:</label>
        <input
          type="number"
          id="course_duration"
          name="course_duration"
          onChange={handleChange}
        />
        <label htmlFor="course_syllabus">Syllabus:</label>
        <input
          type="text"
          id="course_syllabus"
          name="course_syllabus"
          onChange={handleChange}
        />
        <label htmlFor="age_grp_type">Age Group:</label>
        <input
          type="text"
          id="age_grp_type"
          name="age_grp_type"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CourseCreate;
