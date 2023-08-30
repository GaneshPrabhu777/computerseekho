package com.example.managers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.entities.Enquiry;
import com.example.entities.Followup;
import com.example.repositories.FollowUpRepository;

public class FollowUpImpl implements FollowUpService {

	@Autowired
	private FollowUpRepository fup;
	

	@Override
	public List<Enquiry> GetAllFollowUp() {
		// TODO Auto-generated method stub
	
		return fup.getAll();
	}

	@Override
	public List<Enquiry> GetFollowUpByStaffId(int staffid) {
		// TODO Auto-generated method stub
		return fup.getBystaffId(staffid);
	}

	@Override
	public void Add(Followup follow) {
		// TODO Auto-generated method stub
		
		fup.save(follow);
	}

}
