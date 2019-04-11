$(document).ready(function() {
  var userID = $("#userID").val();
  $("#form").hide();
  $("#search").click(function() {
    $("#form").slideToggle();
  });
});
