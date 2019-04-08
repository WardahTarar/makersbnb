$(document).ready(function() {
  console.log("1");

  var user = new User();

  $("#signUp").mousedown(function() {
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let email = $("#email").val();
    let password = $("#password").val();

    let newUser = user.createUser(firstName, lastName, email, password);

    console.log("2");
    console.log(newUser);
    $.post("#", newUser); //A hash
  });
});
