package com.book.healthapp.repositories;


import java.util.List;

import com.book.healthapp.domain.Doctor;

public interface DoctorDAO {
	
	List<Doctor> findAll();
	
	List<Doctor> findBySpecialityCode(String code);
	
	int findAllCount();
	
	List<Doctor> findByLocation(String location);
	
	List<Doctor> findByHospital(String hospitalName);
	
	Doctor findByUserId(int userId);

	Doctor save(Doctor doctor);
}
