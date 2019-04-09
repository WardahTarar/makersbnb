var User = function() {};

User.prototype.createUser = function(firstName, lastName, email, password) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.password = password;

  return {
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    password: this.password
  };
};
