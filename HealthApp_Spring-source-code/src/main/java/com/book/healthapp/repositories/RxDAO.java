package com.book.healthapp.repositories;

import java.util.List;

import com.book.healthapp.domain.Rx;

public interface RxDAO {
	List<Rx> findByDoctorId(int doctorId);
	
	List<Rx> findByUserId(int userId);
	
	Rx save(Rx rx);
}
