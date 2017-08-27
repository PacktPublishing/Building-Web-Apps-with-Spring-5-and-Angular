export class Login {
  constructor(
    public email: string,
    public password: string
  ) {  }
}

export class NewUser {
  public role = 0;
  public email = '';
  public password = '';
  public firstname = '';
  constructor() {}
}

export class User {
  constructor(
    public email: string,
    public firstname: string,
    public role: number,
  ) {}
}

export class SignupStatus {
  public code = '';
  public message = '';
  public user = new User('', '', 0);
  constructor() {}
}

export class LoginStatus {
  constructor(
    public code: string,
    public message: string
  ) { }
}
