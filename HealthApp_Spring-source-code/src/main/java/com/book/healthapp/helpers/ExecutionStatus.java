package com.book.healthapp.helpers;

import com.book.healthapp.domain.User;

public class ExecutionStatus {
	private String code;
	private String message;
	private User user;
	
	public ExecutionStatus(){
		
	}
	
	public ExecutionStatus(String code, String message) {
		this.code = code;
		this.message = message;
	}
	
	public ExecutionStatus(String code, String message, User user) {
		this.code = code;
		this.message = message;
		this.user = user;
	}
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}
