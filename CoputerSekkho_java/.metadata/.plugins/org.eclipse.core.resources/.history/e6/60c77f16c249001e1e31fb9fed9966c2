package com.example.managers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Payment;
import com.example.repositories.PaymentRepository;

@Service
public class PaymentMangerImp implements PaymentManager {

	@Autowired
	private PaymentRepository prep;

	@Override
	public List<Payment> GetAll() {
		// TODO Auto-generated method stub
		return prep.findAll();
	}

	@Override
	public Optional<Payment> FindById(int id) {
		// TODO Auto-generated method stub
		return prep.findById(id);
	}

	@Override
	public List<Payment> GetByStudentId(int id) {
		// TODO Auto-generated method stub
		return prep.getPayDetail(id); // 
		}


	@Override
	public void addpayment(Payment p) {
		prep.save(p);

	}

}
