package com.book.healthapp.services;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.book.healthapp.domain.Doctor;
import com.book.healthapp.domain.User;
import com.book.healthapp.exceptions.UserNotFoundException;
import com.book.healthapp.helpers.DoctorList;
import com.book.healthapp.repositories.DoctorDAO;
import com.book.healthapp.repositories.RxDAO;

@Service
public class DoctorServiceImpl implements DoctorService {
	
	private DoctorDAO doctorDAO;
	private UserService userService;
	
	@Autowired
	public DoctorServiceImpl(DoctorDAO doctorDAO, UserService userService) {
	    this.doctorDAO = doctorDAO;
	    this.userService = userService;
	}
	
	@Override
	public List<Doctor> findBySpeciality(String specialityCode) {
		return doctorDAO.findBySpecialityCode(specialityCode);
	}

	@Override
	public List<Doctor> findAll() {
		return doctorDAO.findAll();
	}

	@Override
	public int findCount() {
		return doctorDAO.findAllCount();
	}

	@Override
	public Doctor findByUserEmailAddress(String email) {
		User user = null;
		try {
			user = userService.getByEmail(email);
		} catch (UserNotFoundException e) {
			return null;
		}
		return this.findByUserId(user.getId());
	}

	@Override
	public Doctor findByUserId(int userId) {
		return doctorDAO.findByUserId(userId);
	}
	
	@Override
	public void save(Doctor doctor) {
	}

	@Override
	public List<Doctor> findByLocation(String location) {
		return null;
	}

	@Override
	public List<Doctor> findByHospital(String hospitalName) {
		return null;
	}

	@Override
	public void addDoctor(User user) {
		if(user.getRole() == 1) {
			Doctor doctor = new Doctor();
			doctor.setUser(user);
			doctor.setSpecialityCode("PHYSICIAN");
			doctorDAO.save(doctor);
		}
	}

}
