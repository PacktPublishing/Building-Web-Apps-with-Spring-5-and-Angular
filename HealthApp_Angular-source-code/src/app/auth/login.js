"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Login = (function () {
    function Login(email, password) {
        this.email = email;
        this.password = password;
    }
    return Login;
}());
exports.Login = Login;
var NewUser = (function () {
    function NewUser() {
        this.role = 0;
        this.email = '';
        this.password = '';
        this.firstname = '';
    }
    return NewUser;
}());
exports.NewUser = NewUser;
var User = (function () {
    function User(email, firstname, role) {
        this.email = email;
        this.firstname = firstname;
        this.role = role;
    }
    return User;
}());
exports.User = User;
var SignupStatus = (function () {
    function SignupStatus() {
        this.code = '';
        this.message = '';
        this.user = new User('', '', 0);
    }
    return SignupStatus;
}());
exports.SignupStatus = SignupStatus;
var LoginStatus = (function () {
    function LoginStatus(code, message) {
        this.code = code;
        this.message = message;
    }
    return LoginStatus;
}());
exports.LoginStatus = LoginStatus;
//# sourceMappingURL=login.js.map