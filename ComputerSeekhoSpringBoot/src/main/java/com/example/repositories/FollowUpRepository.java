package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.entities.Enquiry;
import com.example.entities.Followup;

import jakarta.transaction.Transactional;

@Transactional
public interface FollowUpRepository extends JpaRepository<Followup,Integer>{

	@Query(value="select * from enquiry",nativeQuery=true)
	public List<Enquiry> getAll();
	
	@Query(value="select * from enquiry where staff_id=:staff_id",nativeQuery = true)
	public List<Enquiry> getBystaffId(@Param("staff_id")int staffid);
}
