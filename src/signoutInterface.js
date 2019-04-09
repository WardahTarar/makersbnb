$(document).ready(function() {
  $("#signout").click(function() {
    $.post("http://localhost:9292/sessions/destroy", function() {
      window.location.replace("/index");
    });
  });

$('#listing').click(function() {
  $.get("http://localhost:9292/listings/new", function(){
    window.location.replace("/listings/new")
  })
})
});
