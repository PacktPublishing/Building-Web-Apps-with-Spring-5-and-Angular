package com.book.healthapp;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.Assert.*;

import java.util.ArrayList;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.book.healthapp.domain.User;
import com.book.healthapp.exceptions.UserNotFoundException;
import com.book.healthapp.repositories.UserDAO;
import com.book.healthapp.services.UserService;
import com.book.healthapp.services.UserServiceImpl;


@ExtendWith(SpringExtension.class)
@Tag("Service")
public class UserServiceTests {

	@MockBean
//	@Mock
	private UserDAO userDAO;
	
	private UserService userService;
	
	@BeforeEach
	public void setUp() throws Exception {		
//		this.userDAO = Mockito.mock(UserDAO.class);
//		MockitoAnnotations.initMocks(this);
		this.userService = new UserServiceImpl(this.userDAO);
	}

	@AfterEach
	public void tearDown() throws Exception {
	}
	
	@Test
	@RepeatedTest(5)
	@DisplayName("Throws exception if user with given email does not exist")
	public void Should_throwException_When_UserDoesNotExist() {
		String email = "foo@bar.com";
		Mockito.when(this.userDAO.findByEmail(email)).thenReturn(new ArrayList<User>());
		assertThatThrownBy(() -> this.userService.doesUserExist(email)).isInstanceOf(UserNotFoundException.class)
				.hasMessage("User does not exist in the database.");
	}

//	@Test
//	@DisplayName("Throws exception if user with given email & password is not found in the database")
//	public void Should_throwException_When_UnmatchingUserCredentialsFound() {
//		fail("Not yet implemented");
//	}
}
