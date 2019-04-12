$(document).ready(function() {
  $("#loginSubmit").click(function() {
    let email = $("#emailLogIn").val();
    let password = $("#passwordLogIn").val();
    checkUserInput(email, password);
  });

  $("#loginBtn").click(function() {
    $("input[name=emailLogIn], email").val("");
    $("input[name=passwordLogIn], password").val("");
    $("#alert").remove();
  });
});

function checkUserInput(email, password) {
  if (email == "" && password == "") {
    $("#alertMessageLogin").html(
      "<div class='alert', id='alert'> Please fill in all the fields to log in </div>"
    );
    return;
  } else if (isEmail(email) == false) {
    $("#alertMessageLogin").html(
      "<div class='alert', id='alert'> Please check the email address format </div>"
    );
    return;
  }

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
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
