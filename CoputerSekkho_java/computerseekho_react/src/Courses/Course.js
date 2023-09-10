import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Course() {
  const [course, setCourse] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/api/CourseById/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setCourse(result);
      });
  }, [id]); // Include id as a dependency to fetch data when the id parameter changes.

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{course.course_name}</h1>

      <br />
      <br />
      <table>
        <tbody>
          <tr>
            <td>
              <h4>Description</h4>
              <div style={{ textAlign: "left" }}>{course.course_description}</div>
            </td>
            <td>
              <img
                src={course.cover_photo}
                alt="course"
                width="50%"
                height="auto"
                style={{ display: "block", margin: "0 auto" }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ width: "30%", marginTop:"100px" }}>
              <h4>Syllabus</h4>
              <div>{course.course_syllabus}</div>
            </td>
            <td style={{marginTop:"10px" }}>
              <iframe
                src={course.video_link}
                title="Course Video"
                width="600px"
                height="400px"
                allowFullScreen
              />
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a href="/Contactus">
          <button>Enquiry</button>
        </a>
      </div>
    </div>
  );
}

export default Course;
