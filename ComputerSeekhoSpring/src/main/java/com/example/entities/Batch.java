package com.example.entities;


import java.util.Date;
import java.util.Set;
import java.util.List;
import java.util.ArrayList;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Batch")
public class Batch {
	
	
	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "batch_id", length=16)
	private String batch_id;
	
	@Column(name = "batch_name", length=20, unique=true)
	private String batch_name;
	
	@Column(name = "batch_start_time", nullable = false)
	private Date batch_start_time;
	
	@Column(name = "batch_end_time", nullable = false)
	private Date batch_end_time; 

	
	@Column(name = "final_presentation_date", nullable = false)
	private Date final_presentation_date;
	
	@Column(name = "batch_fees", nullable = false, columnDefinition = "DECIMAL(10,2)")
	private float batch_fees;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "batch_id", referencedColumnName = "batch_id")
	private Set<Student> student;
	

	/**
	 * @return the batch_id
	 */
	public String getBatch_id() {
		return batch_id;
	}

	/**
	 * @param batch_id the batch_id to set
	 */
	public void setBatch_id(String batch_id) {
		this.batch_id = batch_id;
	}

	/**
	 * @return the batch_name
	 */
	public String getBatch_name() {
		return batch_name;
	}

	/**
	 * @param batch_name the batch_name to set
	 */
	public void setBatch_name(String batch_name) {
		this.batch_name = batch_name;
	}

	/**
	 * @return the batch_start_time
	 */
	public Date getBatch_start_time() {
		return batch_start_time;
	}

	/**
	 * @param batch_start_time the batch_start_time to set
	 */
	public void setBatch_start_time(Date batch_start_time) {
		this.batch_start_time = batch_start_time;
	}

	/**
	 * @return the batch_end_time
	 */
	public Date getBatch_end_time() {
		return batch_end_time;
	}

	/**
	 * @param batch_end_time the batch_end_time to set
	 */
	public void setBatch_end_time(Date batch_end_time) {
		this.batch_end_time = batch_end_time;
	}

	/**
	 * @return the final_presentation_date
	 */
	public Date getFinal_presentation_date() {
		return final_presentation_date;
	}

	/**
	 * @param final_presentation_date the final_presentation_date to set
	 */
	public void setFinal_presentation_date(Date final_presentation_date) {
		this.final_presentation_date = final_presentation_date;
	}

	@Override
	public String toString() {
		return "Batch [batch_id=" + batch_id + ", batch_name=" + batch_name + ", batch_start_time=" + batch_start_time
				+ ", batch_end_time=" + batch_end_time + ", batch_fees=" + batch_fees + ", final_presentation_date=" + final_presentation_date + "]";
	}

	public float getBatch_fees() {
		return batch_fees;
	}

	public void setBatch_fees(float batch_fees) {
		this.batch_fees = batch_fees;
	}
	
	
}
