package com.book.healthapp;

import static org.junit.Assert.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@ExtendWith(SpringExtension.class)
public class UserServiceTests {

 @BeforeEach
 public void setUp() throws Exception {
 }

 @AfterEach
 public void tearDown() throws Exception {
 }

 @Test
 @DisplayName("Throws exception if user with given email does not 
   exist")
 void Should_throwException_When_UserDoesNotExist() {
 fail("Not yet implemented");
 }

 @Test
 @DisplayName("Throws exception if user with given email & password is 
   not found in the database")
 void Should_throwException_When_UnmatchingUserCredentialsFound() {
 fail("Not yet implemented");
 }
}