package com.book.healthapp.domain;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class RxMedicine {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private int rxId;
	private int medicineId;
	private String durationCode;
	private Timestamp createTime;
	private Timestamp lastUpdated;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getRxId() {
		return rxId;
	}
	public void setRxId(int rxId) {
		this.rxId = rxId;
	}
	public int getMedicineId() {
		return medicineId;
	}
	public void setMedicineId(int medicineId) {
		this.medicineId = medicineId;
	}
	public String getDurationCode() {
		return durationCode;
	}
	public void setDurationCode(String durationCode) {
		this.durationCode = durationCode;
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
