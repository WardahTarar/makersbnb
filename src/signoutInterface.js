$(document).ready(function() {
  $("#signout").click(function() {
    $.post("http://localhost:9292/sessions/destroy", function() {
      window.location.replace("/index");
    });
  });
});
