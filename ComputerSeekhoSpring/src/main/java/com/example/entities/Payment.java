package com.example.entities;

import java.sql.*;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int payment_id;
	private String payment_transaction_id;
	private Date payment_date;
	private boolean payment_done;
	private boolean payment_receipt_send;
	private double amount;
	private String payment_type ;
	
	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}

	public String getPayment_transaction_id() {
		return payment_transaction_id;
	}

	public void setPayment_transaction_id(String payment_transaction_id) {
		this.payment_transaction_id = payment_transaction_id;
	}

	public Date getPayment_date() {
		return payment_date;
	}

	public void setPayment_date(Date payment_date) {
		this.payment_date = payment_date;
	}

	public boolean isPayment_done() {
		return payment_done;
	}

	public void setPayment_done(boolean payment_done) {
		this.payment_done = payment_done;
	}

	public boolean isPayment_receipt_send() {
		return payment_receipt_send;
	}

	public void setPayment_receipt_send(boolean payment_receipt_send) {
		this.payment_receipt_send = payment_receipt_send;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getPayment_type() {
		return payment_type;
	}

	public void setPayment_type(String payment_type) {
		this.payment_type = payment_type;
	}
	
	
	
	
	

}