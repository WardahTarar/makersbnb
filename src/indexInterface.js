$(document).ready(function() {
  var userID = $("#userID").val();
  $("#form").hide();
  $("#search").click(function() {
    $("#form").slideToggle();
  });
  $("#bookings").click(function() {
    $.get("http://localhost:9292/users/"+userID+"/requests", function() {
      window.location.replace("/users/"+userID+"/requests");
    });
  });
});
