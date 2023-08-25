import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import BatchList from "../Batch/BatchList";

export function Course() {
  const navigate = useNavigate();
  const [course, setCourse] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:8080/api/CourseById/" + id)
      .then((res) => res.json())
      .then((result) => {
        setCourse(result);
      });
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{course.course_name}</h1>
      <img
        src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        alt=""
        width="1500"
        height="500"
        style={{ display: "block", margin: "0 auto" }}
      />
      <br />
      <div>{course.course_description}</div>
      <div>{course.course_syllabus}</div>
      <br />
      <Button
        variant="primary"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </Button>

    </div>
  );
}

export default Course;
