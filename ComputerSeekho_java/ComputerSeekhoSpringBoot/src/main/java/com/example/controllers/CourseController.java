/**
 * 
 */
package com.example.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Course;
import com.example.managers.CourseManager;

/**
 * 
 */

@RestController
@CrossOrigin("*")
public class CourseController {

	@Autowired
	CourseManager manager;
	
	@GetMapping(value = "api/courses")
	 public List<Course> showCourses()
	 {
		  return manager.getCourses(); 
		
	 }
	
	@GetMapping(value = "api/CourseById/{id}")
	 public Optional<Course> getCourse(@PathVariable int id)
	 {
		Optional<Course> c=manager.getCourse(id);
		return c;
	 }
	
	
	 @DeleteMapping(value = "api/courses/{id}")
	 public void removeCourse(@PathVariable int id)
	 {
		manager.delete(id);
	 }
	 
	 
	 @PostMapping(value = "api/courses")
	 public void addCourse(@RequestBody Course course)
	 {
		manager.addCourse(course);
	 }
	 
	 @PutMapping(value = "api/courses/{id}")
	 public void updatepro(@RequestBody Course course,@PathVariable int id)
	 {
		manager.update(course,id);
	 }
	 
	 
	 @PutMapping(value = "api/coursesInactive/{cid}")
	 public void updateActive(@RequestBody Course course,@PathVariable int cid)
	 {
		manager.statusInactive(course.isCourse_is_active(),cid);
	 }
	 
}
