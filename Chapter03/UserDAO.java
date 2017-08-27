package com.book.healthapp.repositories;

import java.util.List;

import com.book.healthapp.domain.User;

public interface UserDAO  {
	
	User save(User user);
	
	List<User> findByEmail(String email);
	
	List<User> findByEmailAndPassword(String email, String password);
	
	void update(User user);
	
}
