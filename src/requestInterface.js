$(document).ready(function() {
  $("#request").click(function() {
    var listingID = $("#listingID").val();
    var startDate = $("#startDate").val();
    $(".selector").flatpickr();
    $.post("http://localhost:9292/listings/"+listingID+"/new", { start_date: startDate }, function() {
      window.location.replace("/listings/"+listingID+"/new");
    });
  });
});
