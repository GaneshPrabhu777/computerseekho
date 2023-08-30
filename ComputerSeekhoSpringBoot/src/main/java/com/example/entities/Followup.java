package com.example.entities;

import jakarta.persistence.*;

@Entity
@Table
public class Followup {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int followup_id;
	private int enquiry_id;
	private int staff_id;
	private String followup_msg;
//	private boolean is_active;
	
	
	/**
	 * @return the followup_id
	 */
	public int getFollowup_id() {
		return followup_id;
	}
	/**
	 * @param followup_id the followup_id to set
	 */
	public void setFollowup_id(int followup_id) {
		this.followup_id = followup_id;
	}
	/**
	 * @return the enquiry_id
	 */
	public int getEnquiry_id() {
		return enquiry_id;
	}
	/**
	 * @param enquiry_id the enquiry_id to set
	 */
	public void setEnquiry_id(int enquiry_id) {
		this.enquiry_id = enquiry_id;
	}
	/**
	 * @return the staff_id
	 */
	public int getStaff_id() {
		return staff_id;
	}
	/**
	 * @param staff_id the staff_id to set
	 */
	public void setStaff_id(int staff_id) {
		this.staff_id = staff_id;
	}
	/**
	 * @return the followup_msg
	 */
	public String getFollowup_msg() {
		return followup_msg;
	}
	/**
	 * @param followup_msg the followup_msg to set
	 */
	public void setFollowup_msg(String followup_msg) {
		this.followup_msg = followup_msg;
	}
	/**
	 * @return the is_active
	 */
//	public boolean isIs_active() {
//		return is_active;
//	}
//	/**
//	 * @param is_active the is_active to set
//	 */
//	public void setIs_active(boolean is_active) {
//		this.is_active = is_active;
//	}
	
	
	

}
