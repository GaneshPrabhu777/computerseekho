package com.example.repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entities.Student;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface StudentRepository extends JpaRepository<Student, Integer> {

	@Query(value = "select * from student p where p.student_name=:name", nativeQuery = true)
	List<Student> listtype(@Param("name") String name);


	@Modifying
	@Query("UPDATE Student s SET s.student_name = :name, s.student_address = :add, s.student_gender = :gender, s.student_dob = :date, s.student_qualification = :qual, s.student_mobile = :mob WHERE s.student_id = :id")
	void updateStudentdata(@Param("name") String name, @Param("add") String add, @Param("gender") String gender,
	        @Param("date") Date date, @Param("qual") String qual, @Param("mob") String mob, @Param("id") int id);


}
