package com.book.healthapp.helpers;

import java.util.List;

import com.book.healthapp.domain.Doctor;

public class DoctorInfo {
	
	private String message;
	private List<Doctor> doctors;
	private int count;
	
	public DoctorInfo(){
	}
	
	public DoctorInfo(String message, List<Doctor> doctors) {
		this.setDoctors(doctors);
		this.setMessage(message);
	}
	
	public DoctorInfo(String message, int count) {
		this.setCount(count);
		this.setMessage(message);
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public List<Doctor> getDoctors() {
		return doctors;
	}

	public void setDoctors(List<Doctor> doctors) {
		this.doctors = doctors;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}
}
