package com.book.healthapp.interceptors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.util.StringUtils;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class SignupInterceptor extends HandlerInterceptorAdapter {

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception exception)
			throws Exception {
		// TODO Auto-generated method stub

	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView)
			throws Exception {
		// TODO Auto-generated method stub

	}

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		
        String emailAddress = request.getParameter("email");
        String password = request.getParameter("password");
        
        if(StringUtils.isEmpty(emailAddress) || StringUtils.containsWhitespace(emailAddress) ||
        		StringUtils.isEmpty(password) || StringUtils.containsWhitespace(password)) {
        	throw new Exception("Invalid Email Address or Password. Please try again.");
        }
        
        return true;
	}

}
