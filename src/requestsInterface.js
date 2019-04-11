$(document).ready(function() {
  $("#view_request").click(function() {
    var requestID = $("#requestID").val();
    var userID = $("#userID").val();
    $.post("http://localhost:9292/users/"+userID+"/requests/"+requestID+"", function() {
      window.location.replace("/users/"+userID+"/requests/"+requestID+"");
    });
  });
});
