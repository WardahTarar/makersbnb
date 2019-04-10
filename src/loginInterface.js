$(document).ready(function() {
  $("#loginSubmit").click(function() {
    let email = $("#emailLogIn").val();
    let password = $("#passwordLogIn").val();
    console.log(email);
    checkUserInput(email, password);
  });

  $("#loginBtn").click(function() {
    $("input[name=email], email").val("");
    $("input[name=password], password").val("");
    $("#alertMessage").html("");
  });
});

function checkUserInput(email, password) {
  if (email == "" && password == "") {
    $("#alertMessage").html(
      "<div class='alert', id='alert'> Please fill in all the fields to log in </div>"
    );
    return;
  } else if (isEmail(email) == false) {
    $("#alertMessage").html(
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
