package com.example.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Placement {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int placemetid;
	private String coursename;
//	private int batchid;
	private String batch_name;

	private int total_student;
	private int placedstudents;

	@Override
	public String toString() {
		return "Placement [placemetid=" + placemetid + ", coursename=" + coursename 
				+ ", total_student=" + total_student + ", placedstudents=" + placedstudents + "]";
	}

	public int getTotal_student() {
		return total_student;
	}

	public void setTotal_student(int total_student) {
		this.total_student = total_student;
	}

	public int getPlacemetid() {
		return placemetid;
	}

	public void setPlacemetid(int placemetid) {
		this.placemetid = placemetid;
	}

	public String getCoursename() {
		return coursename;
	}

	public void setCoursename(String coursename) {
		this.coursename = coursename;
	}

	public String getBatch_name() {
		return batch_name;
	}

	public void setBatch_name(String batch_name) {
		this.batch_name = batch_name;
	}

//	public int getBatchid() {
//		return batchid;
//	}
//
//	public void setBatchid(int batchid) {
//		this.batchid = batchid;
//	}

	public int getPlacedstudents() {
		return placedstudents;
	}

	public void setPlacedstudents(int placedstudents) {
		this.placedstudents = placedstudents;
	}

}
