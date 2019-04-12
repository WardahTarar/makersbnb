$(document).ready(function() {
  var requestID = $("#requestID").val();
  var userID = $("#userID").val();
  $("#decline").click(function() {
    $.post("http://localhost:9292/users/"+userID+"/requests/"+requestID+"/decline", function() {
      window.location.replace("/users/"+userID+"/requests");
    });
  });
  $("#approve").click(function() {
    $.post("http://localhost:9292/users/"+userID+"/requests/"+requestID+"/approve", function() {
      window.location.replace("/users/"+userID+"/requests");
    });
  });
});
