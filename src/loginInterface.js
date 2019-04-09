$(document).ready(function() {
  $("#login_page").click(function() {
    $.get("http://localhost:9292/sessions/new/login", function() {
      window.location.replace("/sessions/new/login");
    });
  });

  $("#login_submit").click(function() {
    let email = $("#email").val();
    let password = $("#password").val();
    $.post(
      "http://localhost:9292/sessions",
      { email: email, password: password },
      function() {}
    );
  });
});
