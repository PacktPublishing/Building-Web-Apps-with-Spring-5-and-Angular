package com.book.healthapp.services;

import java.util.Iterator;
import java.util.List;

import com.book.healthapp.domain.Doctor;
import com.book.healthapp.domain.User;


public interface DoctorService {
	
	void save(Doctor doctor);
	
	List<Doctor> findBySpeciality(String specialityCode);
	
	List<Doctor> findByLocation(String location);
	
	List<Doctor> findByHospital(String hospitalName);

	List<Doctor> findAll();
	
	Doctor findByUserEmailAddress(String email);
	
	int findCount();
	
	Doctor findByUserId(int userId);

	void addDoctor(User user);
}
