import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CourseEdit.css"; // Import your custom CSS file

export function CourseEdit(props) {
  const [course, setCourse] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/CourseById/" + id)
      .then((res) => res.json())
      .then((result) => {
        setCourse(result);
      })
      .catch((error) => {
        console.error("Error fetching course:", error);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  };

  const handleIsActiveChange = (event) => {
    const isActive = event.target.value === "true"; // Convert the string value to a boolean
    setCourse((prevCourse) => ({ ...prevCourse, course_is_active: isActive }));
  };

  const handleSubmit = (event) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(course),
    };

    fetch("http://localhost:8080/api/courses/" + id, requestOptions)
      .then((response) => {
        console.log(response);
        navigate(-1);
      })
      .catch((error) => {
        console.error("Error updating course:", error);
      });

    event.preventDefault();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="course-form">
        <h2>Edit Course</h2>
        <div className="form-group">
          <label>Id:</label>
          <input
            type="text"
            name="id"
            disabled
            className="form-control"
            value={course.course_id || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="course_name"
            className="form-control"
            value={course.course_name || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            name="course_description"
            className="form-control"
            value={course.course_description || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Duration:</label>
          <input
            type="number"
            name="course_duration"
            className="form-control"
            value={course.course_duration || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Age Group:</label>
          <input
            type="text"
            name="age_grp_type"
            className="form-control"
            value={course.age_grp_type || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Is Active:</label>
          <div className="form-check">
            <input
              type="radio"
              name="course_is_active"
              value="true"
              checked={course.course_is_active === true}
              onChange={handleIsActiveChange}
              className="form-check-input"
            />
            <label className="form-check-label">Yes</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="course_is_active"
              value="false"
              checked={course.course_is_active === false}
              onChange={handleIsActiveChange}
              className="form-check-input"
            />
            <label className="form-check-label">No</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
}

export default CourseEdit;
