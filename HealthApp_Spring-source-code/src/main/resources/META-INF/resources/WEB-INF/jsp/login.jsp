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
			User Login
		</div>
		<div>
			<form>
			  <div class="form-group">
			    <label for="inputEmailAddress">Email address</label>
			    <input type="email" class="form-control input-lg" id="email" placeholder="Email">
			  </div>
			  <div class="form-group">
			    <label for="inputPassword">Password</label>
			    <input type="password" class="form-control input-lg" id="password" placeholder="Password">
			  </div>
			  <button type="submit" class="btn btn-primary btn-lg">Submit</button>
			</form>
			<div style="width:40%;padding-top:20px">
				<div style="float:left;padding-right:10px"><a href="/account/signup">New User? Sign up</a>, </div>
				<div><a href="/account/signup">Forgot Password</a></div>
			</div>
		</div>
		
		
	</div>
</body>
</html>