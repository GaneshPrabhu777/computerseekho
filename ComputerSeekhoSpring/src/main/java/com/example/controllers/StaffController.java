package com.example.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;

import com.example.entities.Enquiry;
import com.example.entities.Staff;
import com.example.managers.StaffManager;

@RestController
@CrossOrigin("*")
public class StaffController {

	@Autowired
	StaffManager smng;

	@GetMapping(value="api/getEnqbystaff/{id}")
	   public List<Enquiry> getAllEnqForStaff(@PathVariable int id) {
		return smng.getAllEnquiriesForStaff(id);
	}	

	
	
	@GetMapping(value = "api/staff")
	public List<Staff> showStaff() {
		return smng.getStaff();
	}

	@GetMapping(value = "api/staff/{sid}")
	public Optional<Staff> getStaff(@PathVariable int sid) {

		Optional<Staff> s = smng.getStaff(sid);
		
		return s;
	}
	
	@GetMapping(value = "api/stafflog/{uname}")
	public Optional<Staff> slogin(@PathVariable String uname) {

		Optional<Staff> s = smng.stafflogin(uname);
		return s;
	}

	@PostMapping(value = "api/staff")
	public void addStaff(@RequestBody Staff s) {
		smng.addStaff(s);
	}
	
	@PutMapping(value="api/staff/{sid}")
	public void updateStaff(@RequestBody Staff s, @PathVariable int sid) {
		smng.updateStaffData(s, sid);
	}
	
	@DeleteMapping(value="api/staff/{sid}")
	public void delelteStaff(@PathVariable int sid) {
		smng.delete(sid);
	}

}
