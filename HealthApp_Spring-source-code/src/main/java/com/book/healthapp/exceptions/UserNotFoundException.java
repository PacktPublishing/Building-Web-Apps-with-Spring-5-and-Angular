package com.book.healthapp.exceptions;

public class UserNotFoundException extends Exception {

	private static final long serialVersionUID = 1L;

	public UserNotFoundException(String message) {
		super(message);
	}

	public UserNotFoundException() {
		// TODO Auto-generated constructor stub
	}
}
