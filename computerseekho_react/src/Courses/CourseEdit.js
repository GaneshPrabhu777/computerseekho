import React, { useState, useEffect } from "react";
import { Form, useNavigate, useParams } from "react-router-dom";

function CourseEdit() {
  const [course, setCourse] = useState({});
  const { course_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/CourseById/" + course_id)
      .then((res) => res.json())
      .then((result) => {
        setCourse(result);
      });
  }, [course_id]);

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    // If the input element is a radio button and its value is "yes" or "no",
    // convert it to boolean (true or false)
    if (event.target.type === "radio" && (value === "yes" || value === "no")) {
      value = value === "yes"; // Convert "yes" to true, "no" to false
    }

    // Update the course state with the new value
    setCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedCourse = { ...course };
    delete updatedCourse.id; // Remove the id property, assuming it's not needed in the update
    const demo = JSON.stringify(updatedCourse);

    await fetch("http://localhost:8080/api/courses/" + course_id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: demo,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Course updated successfully");
          setTimeout(1000)
          navigate("/courselist");
        } else {
          console.error("Failed to update course");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div style={{ width: "300px", margin: "5% auto" }}>
      <form onSubmit={handleSubmit}>
        <h2>Edit Course</h2>
        <div className="form-group">
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={course.course_id || ""}
            onChange={handleChange}
            className="form-control"
            disabled
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="course_name"
            value={course.course_name || ""}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            name="course_description"
            value={course.course_description || ""}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Duration:</label>
          <input
            type="number"
            name="course_duration"
            value={course.course_duration || ""}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Age Group:</label>
          <select
            name="age_grp_type"
            value={course.age_grp_type || ""}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select Age Group</option>
            <option value="Child">Child</option>
            <option value="Teenager">Teenager</option>
            <option value="Adult">Adult</option>
            <option value="All">All</option>
          </select>
        </div>
        <div className="form-group">
          <label>Syllabus:</label>
          <input
            type="text"
            name="course_syllabus"
            value={course.course_syllabus || ""}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Photo Link:</label>
          <input
            type="text"
            name="cover_photo"
            value={course.cover_photo || ""}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Video Link:</label>
          <input
            type="text"
            name="video_link"
            value={course.video_link || ""}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Course Status:</label>
          <table>
            <tr>
              <td>
                <label>
                  <input
                    type="radio"
                    name="course_is_active"
                    value="true"
                    checked={course.course_is_active === true}
                    onChange={handleChange}
                  />
                  Active
                </label>
              </td>
              <td>
                <label>
                  <input
                    type="radio"
                    name="course_is_active"
                    value="false"
                    checked={course.course_is_active === false}
                    onChange={handleChange}
                  />
                  Inactive
                </label>
              </td>
            </tr>
          </table>
        </div>

        <div className="form-group">
          <input type="submit" className="btn btn-primary" value="Save" />
        </div>
      </form>
    </div>
  );
}

export default CourseEdit;
