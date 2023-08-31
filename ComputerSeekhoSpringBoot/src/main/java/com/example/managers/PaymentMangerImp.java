package com.example.managers;

import java.util.List;
import java.util.Optional;

import com.example.entities.Payment;
import com.example.repositories.PaymentRepository;

public class PaymentMangerImp implements PaymentManager{

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
	public Optional<Payment> GetByName(String name) {
		// TODO Auto-generated method stub
		return prep.findOne(null); //lihkuhjhjuihkihkhkjhjkjkjjkjhkjghjhgjhghjgkjgugi;hhulflugtihgulgfitgulf8uytihlgulfult
	}

	@Override
	public void update(Payment e, int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void addpay(Payment p) {
		prep.save(p);
		
	}

}
