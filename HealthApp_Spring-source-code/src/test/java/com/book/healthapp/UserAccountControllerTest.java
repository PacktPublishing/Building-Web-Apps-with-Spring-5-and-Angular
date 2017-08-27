package com.book.healthapp;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.book.healthapp.configuration.CustomAuthenticationProvider;
import com.book.healthapp.controllers.UserAccountController;
import com.book.healthapp.domain.User;
import com.book.healthapp.helpers.ExecutionStatus;
import com.book.healthapp.services.DoctorService;
import com.book.healthapp.services.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

@ExtendWith(SpringExtension.class)
@Tag("Controller")
public class UserAccountControllerTest {

	private MockMvc mockMvc;
	@MockBean
	private UserService userService;
	@MockBean
	private DoctorService docService;
	
	
	@BeforeEach
	public void setUp(TestInfo testInfo) throws Exception {
		this.mockMvc = MockMvcBuilders.standaloneSetup(new UserAccountController(this.userService, this.docService)).build();
		String displayName = testInfo.getDisplayName();
		assertTrue(displayName.equals("Should return error message for when user not existing in the database tries to login."));
	}
	
	@Test
	@DisplayName("Should return error message for when user not existing in the database tries to login.")
	public void Should_ReturnErrorMessage_ForUnmatchingUser() throws Exception {
		
		User user = new User();
		user.setEmail("foo@bar.com");
		user.setPassword("foobar");
		//
		// Create JSON Representation for User object;
		// Gson is a Java serialization/deserialization library to 
		// convert Java Objects into JSON and back
		//
		Gson gson = new Gson();
		String jsonUser = gson.toJson(user);
		//
		// Mock the isValidUser method of userService
		//
		Mockito.when(this.userService.isValidUser("foo@bar.com", "foobar")).thenReturn(null);
		//
		// Invoke the method
		//
		MvcResult result = this.mockMvc.perform(
	            post("/account/login/process")
	            .contentType(MediaType.APPLICATION_JSON)
	            .content(jsonUser))
				.andExpect(status().isOk())
	            .andReturn();
		
		MockHttpServletResponse response  = result.getResponse();
		ObjectMapper mapper = new ObjectMapper();
		ExecutionStatus responseObj = mapper.readValue(response.getContentAsString(), ExecutionStatus.class);
	    assertTrue(responseObj.getCode().equals("USER_LOGIN_UNSUCCESSFUL"));
	    assertTrue(responseObj.getMessage().equals("Username or password is incorrect. Please try again!"));
	}

}
