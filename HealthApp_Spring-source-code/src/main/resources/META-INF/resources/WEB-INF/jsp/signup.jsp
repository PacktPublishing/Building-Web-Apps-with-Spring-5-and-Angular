<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Welcome! App for Doctors & Patients</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>
	<div class="container">
		<div class="page-header h1">
			New User Signup
		</div>
		<div>
			<form method="post" action="/account/signup/process">
			  <div class="form-group col-xs-8">
			    <label for="inputEmailAddress">Nick Name</label>
			    <input type="text" class="form-control input-lg" name="nickname" id="nickname" placeholder="nickname">
			  </div>
			  <div class="form-group col-xs-8">
			    <label for="inputEmailAddress">Email address</label>
			    <input type="email" class="form-control input-lg" name="emailaddress" id="email" placeholder="Email">
			  </div>
			  <div class="form-group col-xs-8">
			    <label for="inputPassword">Password</label>
			    <input type="password" class="form-control input-lg" name="password"  id="password" placeholder="Password">
			  </div>
			  <div class="form-group col-xs-8">
			  	<button type="submit" class="btn btn-primary btn-lg">Submit</button>
			  </div>
			  
			</form>
		</div>
	</div>
</body>
</html>