package com.book.healthapp.services;

import java.util.List;

import com.book.healthapp.domain.Rx;

public interface RxService {

	void save(Rx rx);
	
	List<Rx> findByDoctorId(int doctorId);
	
	List<Rx> findByPatientId(int userId);
}
