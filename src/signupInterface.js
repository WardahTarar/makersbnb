$(document).ready(function() {
  console.log("1");

  var user = new User();

  $("#submit").click(function() {
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let email = $("#email").val();
    let password = $("#password").val();

    let newUser = user.createUser(firstName, lastName, email, password);

    $.post("http://localhost:9292/users/new", newUser, function() {
      window.location.replace("/index");
    });
  });
});
