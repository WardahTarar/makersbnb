$(document).ready(function() {
  var user = new User();

  $("#signup").click(function() {
    $.get("http://localhost:9292/users/new", function() {
      window.location.replace("/users/new");
    });
  });

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
