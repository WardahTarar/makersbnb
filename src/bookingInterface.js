$(document).ready(function() {
  $("#request").click(function() {
    var listingID = $("#listingID").val();
    var startDate = $("#startDate").val();
    var userID = $("#userID").val();
    $(".selector").flatpickr();
    $.post("http://localhost:9292/listings/"+listingID+"/new", { start_date: startDate }, function() {
      window.location.replace("/index");
    });
  });
  $("#bookings").click(function() {
    $.post("http://localhost:9292/users/"+userID+"/requests", { start_date: startDate }, function() {
      window.location.replace("/users/"+userID+"/requests");
    });
  });
});
