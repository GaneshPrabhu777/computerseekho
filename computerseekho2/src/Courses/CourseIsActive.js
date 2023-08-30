import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
export function CourseIsActive(props) {
  const [course, setCourse] = useState({});
  const [isActive, setIsActive] = useState({});
  const [ButtonText, setButtonText] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/api/CourseById/" + id)
      .then((res) => res.json())
      .then((result) => {
        setCourse(result);
      }).then(()=>{
        if(course.course_is_active===0){
            setIsActive("danger");
            setButtonText("Inactive")
        }
        else{
            setIsActive("danger");
            setButtonText("Inactive");
        }
      })
      ;
  }, {});

  const handleClick = (event) => {
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
    navigate(0);
  };
  return <div>
    <Button variant={isActive}>{ButtonText}</Button>
  </div>;
}
export default CourseIsActive;
