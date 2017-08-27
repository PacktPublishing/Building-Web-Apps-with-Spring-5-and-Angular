package com.book.healthapp.domain;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class DoctorLocation {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private int doctorId;
	private int healthCentreId;
	private Timestamp createTime;
	private Timestamp lastUpdated;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getDoctorId() {
		return doctorId;
	}
	public void setDoctorId(int doctorId) {
		this.doctorId = doctorId;
	}
	public int getHealthCentreId() {
		return healthCentreId;
	}
	public void setHealthCentreId(int healthCentreId) {
		this.healthCentreId = healthCentreId;
	}
	public Timestamp getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Timestamp createTime) {
		this.createTime = createTime;
	}
	public Timestamp getLastUpdated() {
		return lastUpdated;
	}
	public void setLastUpdated(Timestamp lastUpdated) {
		this.lastUpdated = lastUpdated;
	}
	
	
}
