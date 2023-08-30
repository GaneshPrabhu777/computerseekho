import React from "react";
import { useState, useEffect } from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";

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
      
        <NavDropdown title="Courses" id="basic-nav-dropdown">
        {course.map((courses) => (
        <NavDropdown.Item href={"/courses/" + courses.course_id}><p>{courses.course_name}</p></NavDropdown.Item>
        ))}

        </NavDropdown>

        {/* <Dropdown.Menu style={{color:"black" , backgroundColor:"white",border:"none"}}>

          {course.map((courses) => (
            <Dropdown.Item href={"/courses/" + courses.course_id}><p>{courses.course_name}</p></Dropdown.Item>
          ))}
        </Dropdown.Menu> */}
      
    </div>
  );
}
export default CourseDropdown;
