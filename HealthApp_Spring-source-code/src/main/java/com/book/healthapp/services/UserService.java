package com.book.healthapp.services;

import com.book.healthapp.domain.User;
import com.book.healthapp.exceptions.UnmatchingUserCredentialsException;
import com.book.healthapp.exceptions.UserNotFoundException;

public interface UserService {
	
	User save(User user);
	
	void update(User user);
	
	User doesUserExist(String email) throws UserNotFoundException;
	
	User getByEmail(String email) throws UserNotFoundException;
	
	User isValidUser(String email, String password) throws UnmatchingUserCredentialsException;
}
