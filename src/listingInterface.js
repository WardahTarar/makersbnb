$(document).ready(function() {
  var listing = new Listing();

  $("#submitListing").click(function() {
    let name = $("#name").val();
    let location = $("#location").val();
    let city = $("#city").val();
    let price = $("#price").val();
    let startDate = $("#startDate").val();
    let endDate = $("#endDate").val();

    let newListing = listing.create(name, location, city, price, startDate, endDate);

    console.log(newListing);

    $.post("http://localhost:9292/listings/new", newListing), function(){
      window.location.replace("/index")
    };
  });
});
