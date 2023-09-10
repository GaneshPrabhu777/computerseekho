import React, { useState, useEffect } from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";

export function CourseDropdown(props) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/courses")
      .then((res) => res.json())
      .then((result) => {
        // Filter courses to include only active courses (course_is_active is true)
        const activeCourses = result.filter((course) => course.course_is_active === true);
        setCourses(activeCourses);
      });
  }, []);

  return (
    <div>
      <NavDropdown title="Courses" id="basic-nav-dropdown">
        {courses.map((course) => (
          <NavDropdown.Item key={course.course_id} href={"/courses/" + course.course_id}>
            <p>{course.course_name}</p>
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </div>
  );
}

export default CourseDropdown;
