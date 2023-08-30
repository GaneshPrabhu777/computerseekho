import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
const myStyle = {
  color: "red",
};
export function CourseDelete(props) {
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
  const handledelete = (event) => {
    fetch("http://localhost:8080/api/courses/" + id, {
      method: "Delete",
    }).then((res) => console.log(res));
    navigate(-1);
  };

  return (
    <div>
      <h1>
        <span style={myStyle}>Are you sure ?</span>
      </h1>

      <form>
        <label>Id:</label>
        {course.course_id}
        <br />
        <label>name:</label>
        {course.course_name}
        <br />
        <label>Description:</label>
        {course.course_description}
        <br />
        <label>Syllabus:</label>
        {course.course_syllabus}
        <br /><br/>
        <Button variant="danger" onClick={handledelete}>Delete</Button> 	&emsp;
        <Button variant="primary"onClick={() => {navigate(-1);}}>Close</Button>
      </form>
    </div>
  );
}
export default CourseDelete;
