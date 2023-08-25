package com.example.managers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Student;
import com.example.repositories.StudentRepository;

@Service
public class StudentMangerImpl implements StudentManager {
   
	@Autowired
	StudentRepository repository;
	
	@Override
	public List<Student> getstudent() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}	

   @Override
	public void update(Student std, int id) {
		// TODO Auto-generated method stub
	  repository.updateStudentdata(std.getStudent_name(),std.getStudent_address(),std.getStudent_gender(), std.getStudent_dob(),std.getStudent_qualification(),std.getStudent_mobile(),id);
}

	@Override
	public Optional<Student> getSelectedbyid(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}

	@Override
	public List<Student> getSelected(String name) {
		// TODO Auto-generated method stub
		return repository.listtype(name);
	}

	@Override
	public void addstudent(Student student) {
		// TODO Auto-generated method stub
		repository.save(student);
	}

}

