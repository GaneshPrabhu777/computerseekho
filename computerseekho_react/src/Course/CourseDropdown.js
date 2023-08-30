import React from "react";
import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";

export function CourseDropdown(props) {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/courses")
      .then((res) => res.json())
      .then((result) => {
        setCourse(result);
      });
  }, []);
  return (
    <div>
      <Dropdown >
        <Dropdown.Toggle style={{color:"black" , backgroundColor:"white",border:"none"}} id="dropdown-autoclose-true">
          Course
        </Dropdown.Toggle>

        <Dropdown.Menu>

        {course.map((courses) => (
            <Dropdown.Item href={"/courses/" + courses.course_id}>{courses.course_name}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
export default CourseDropdown;
