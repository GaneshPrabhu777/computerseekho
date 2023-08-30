import React from "react";
import { useState, useEffect } from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
export function CourseEdit(props) {
  const [course, setCourse] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/api/CourseById/" + id)
      .then((res) => res.json())
      .then((result) => {
        setCourse(result);
      });
  }, {});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCourse((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    let demo = JSON.stringify(course);
    console.log(JSON.parse(demo));
    fetch("http://localhost:8080/api/courses/" + id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: demo,
    }).then((r) => {
      console.log(r);
    });
    event.preventDefault();
    navigate("/");

  };
  return (
    <div>

    <form onSubmit={handleSubmit}>
      <label>Id:</label><br/>
      <input
        type="text"
        name="id"
        disabled
        value={course.course_id || ""}
        onChange={handleChange}
      />
      <br /> <label>Name:</label><br/>
      <input
        type="text"
        name="name"
        value={course.course_name || ""}
        onChange={handleChange}
      />
      <br /> <label>Description:</label><br/>
      <input
        type="text"
        name="description"
        value={course.course_description || ""}
        onChange={handleChange}
      />
      <br /> <label>Duration:</label><br/>
      <input
        type="number"
        name="department"
        value={course.course_duration || ""}
        onChange={handleChange}
      />
      <br /><br/>
      <input type="submit" />
    </form>
</div>
  );
}
export default CourseEdit;
