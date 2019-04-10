$(document).ready(function() {
  $("#request").click(function() {
    var listingID = $("#listingID").val();
    var startDate = $("#startDate").val();
    $(".selector").flatpickr();
    $.post("http://localhost:9292/spaces/"+listingID+"/create", { start_date: startDate }, function() {
      window.location.replace("/spaces/"+listingID+"/create");
    });
  });
});
