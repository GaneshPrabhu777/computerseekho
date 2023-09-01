package com.example.managers;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.entities.Payment;

@Service
public interface PaymentManager {

	public List<Payment> GetAll();

	public Optional<Payment> FindById(int id);

//	public void update(Payment p, int id);

	public void addpayment(Payment p);

	public List<Payment> GetByStudentId(int id);

}
