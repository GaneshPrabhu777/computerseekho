package com.example.managers;

import java.util.List;

import com.example.entities.Enquiry;
import com.example.entities.Followup;

public interface FollowUpService {

	public void Add(Followup follow);
	public List<Enquiry> GetAllFollowUp();
	public List<Enquiry> GetFollowUpByStaffId(int staffid);
	
}
