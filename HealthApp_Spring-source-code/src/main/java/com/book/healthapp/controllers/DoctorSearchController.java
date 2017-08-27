package com.book.healthapp.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.book.healthapp.domain.Doctor;
import com.book.healthapp.helpers.DoctorInfo;
import com.book.healthapp.services.DoctorService;

@RestController
public class DoctorSearchController {
	
	final static Logger logger = LoggerFactory.getLogger(DoctorSearchController.class);
	
	@Autowired
	DoctorService docService;
	
	@GetMapping(value="/doctor/count")
	public DoctorInfo getDoctorsCount(ModelMap model) {
		int count = docService.findCount();
		return new DoctorInfo("All doctors count", count);
	}
    
	@RequestMapping(value="/doctor/{code}", method=RequestMethod.GET)
	public DoctorInfo getBySpecialityCode(ModelMap model, @PathVariable("code") String code) {
		List<Doctor> doctors = docService.findBySpeciality(code);
		if(doctors == null) {
			return new DoctorInfo("No Doctors found!", null);
		}
		return new DoctorInfo("Doctors found", doctors);
	}
	
	@GetMapping(value="/doctor", produces="application/json")
	public DoctorInfo findAll(ModelMap model) {
		
		List<Doctor> doctors = docService.findAll();
		if(doctors == null) {
			return new DoctorInfo("No Doctors found!", null);
		}
		return new DoctorInfo("Doctors found", doctors);
	}
}
