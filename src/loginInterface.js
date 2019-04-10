$(document).ready(function() {
  $("#loginSubmit").click(function() {
    //event listener
    let email = $("#emailLogIn").val();
    let password = $("#passwordLogIn").val();
    $.post(
      "http://localhost:9292/sessions",
      {
        email: email,
        password: password
      },
      function() {
        window.location.replace("/index");
      }
    );
  });
});
