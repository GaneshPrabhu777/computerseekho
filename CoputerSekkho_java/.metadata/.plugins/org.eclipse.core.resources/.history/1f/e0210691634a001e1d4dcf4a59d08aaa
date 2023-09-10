package com.example.entities;

import java.util.Date;

import jakarta.persistence.*;

@Entity
@Table
public class Enquiry {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int enquiry_id;
	String enquirer_name;
	
	String enquirer_mobile;
	String enquirer_email_id;
	Date enquiry_date;
	Date follow_up_date;
	String closure_reason;
	String followup_msg;
	String enquirer_query;
	boolean enquiry_processed_flag=false;
	int staff_id;
	
//	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name= "staff_id")
//	private Staff staff_id;
	
	
	public int getStaff_id() {
		return staff_id;
	}
	public void setStaff_id(int staff_id) {
		this.staff_id = staff_id;
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
	 * @return the enquirer_name
	 */
	public String getEnquirer_name() {
		return enquirer_name;
	}
	/**
	 * @param enquirer_name the enquirer_name to set
	 */
	public void setEnquirer_name(String enquirer_name) {
		this.enquirer_name = enquirer_name;
	}
	/**
	 * @return the enquirer_address
	 */
//	public String getEnquirer_address() {
//		return enquirer_address;
//	}
//	/**
//	 * @param enquirer_address the enquirer_address to set
//	 */
//	public void setEnquirer_address(String enquirer_address) {
//		this.enquirer_address = enquirer_address;
//	}
	/**
	 * @return the enquirer_mobile
	 */
	public String getEnquirer_mobile() {
		return enquirer_mobile;
	}
	/**
	 * @param enquirer_mobile the enquirer_mobile to set
	 */
	public void setEnquirer_mobile(String enquirer_mobile) {
		this.enquirer_mobile = enquirer_mobile;
	}
	/**
	 * @return the enquirer_email_id
	 */
	public String getEnquirer_email_id() {
		return enquirer_email_id;
	}
	/**
	 * @param enquirer_email_id the enquirer_email_id to set
	 */
	public void setEnquirer_email_id(String enquirer_email_id) {
		this.enquirer_email_id = enquirer_email_id;
	}
	/**
	 * @return the enquiry_date
	 */
	public Date getEnquiry_date() {
		return enquiry_date;
	}
	/**
	 * @param enquiry_date the enquiry_date to set
	 */
	public void setEnquiry_date(Date enquiry_date) {
		this.enquiry_date = enquiry_date;
	}
	/**
	 * @return the enquirer_query
	 */
	public String getEnquirer_query() {
		return enquirer_query;
	}
	/**
	 * @param enquirer_query the enquirer_query to set
	 */
	public void setEnquirer_query(String enquirer_query) {
		this.enquirer_query = enquirer_query;
	}
	/**
	 * @return the closure_reasonId
	 */
	
	/**
	 * @return the closure_reason
	 */
	public String getClosure_reason() {
		return closure_reason;
	}
	/**
	 * @param closure_reason the closure_reason to set
	 */
	public void setClosure_reason(String closure_reason) {
		this.closure_reason = closure_reason;
	}
	/**
	 * @return the enquiry_processed_flag
	 */
	public boolean isEnquiry_processed_flag() {
		return enquiry_processed_flag;
	}
	/**
	 * @param enquiry_processed_flag the enquiry_processed_flag to set
	 */
	public void setEnquiry_processed_flag(boolean enquiry_processed_flag) {
		this.enquiry_processed_flag = enquiry_processed_flag;
	}
	/**
	 * @return the student_name
	 */
		
	/**
	 * @return the follow_up_date
	 */
	public Date getFollow_up_date() {
		return follow_up_date;
	}
	/**
	 * @param follow_up_date the follow_up_date to set
	 */
	public void setFollow_up_date(Date follow_up_date) {
		this.follow_up_date = follow_up_date;
	}
	public String getFollowup_msg() {
		return followup_msg;
	}
	public void setFollowup_msg(String followup_msg) {
		this.followup_msg = followup_msg;
	}
}
