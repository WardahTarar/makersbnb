$(document).ready(function() {
  var user = new User();

  $("#submitCreate").click(function() {
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let email = $("#emailCreate").val();
    let password = $("#passwordCreate").val();

    let newUser = user.createUser(firstName, lastName, email, password);

    $.post("http://localhost:9292/users/new", newUser, function() {
      window.location.replace("/index");
    });
  });
});
