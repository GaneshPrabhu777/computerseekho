package com.example.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.entities.Enquiry;
import com.example.entities.Followup;
import com.example.managers.FollowUpService;

@RestController
@CrossOrigin("*")
public class FollowUpController {

	private FollowUpService fus;
	
	@GetMapping("api/followup")
	public List<Enquiry> GetAllEnquiry()
	{
		return fus.GetAllFollowUp();
	}
	
	@GetMapping(value="api/followup/{id}")
	public List<Enquiry>GetByStaff(@PathVariable int id)
	{
		return fus.GetFollowUpByStaffId(id);
	}
	
	@PostMapping(value = "api/followup/")
	public void add(@RequestBody Followup follow)
	{
		fus.Add(follow);
	}
}
