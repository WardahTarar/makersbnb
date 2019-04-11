$(document).ready(function() {
  $("#request").click(function() {
    var listingID = $("#listingID").val();
    var startDate = $("#startDate").val();
    $(".selector").flatpickr();
    $.post("http://localhost:9292/listings/"+listingID+"/new", { start_date: startDate }, function() {
      window.location.replace("/index");
    });
  });
  $("#bookings").click(function() {
    var userID = $("#userID").val();
    $.get("http://localhost:9292/users/"+userID+"/requests", function() {
      window.location.replace("/users/"+userID+"/requests");
    });
  });
});
