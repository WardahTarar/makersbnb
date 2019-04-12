$(document).ready(function() {
  var listing = new Listing();

  $("#submitListing").click(function() {
    let name = $("#name").val();
    let location = $("#location").val();
    let city = $("#city").val();
    let price = $("#price").val();
    let startDate = $("#startDate").val();
    let endDate = $("#endDate").val();
    let description = $("#description").val();

    let newListing = listing.create(
      name,
      location,
      city,
      price,
      startDate,
      endDate,
      description
    );

    checkListingInput(name, location, city, price, startDate, endDate, newListing) 
  });

  $("#listing").click(function(){
    $("input[name=name],name").val("");
    $("input[name=location,location").val("")
    $("input[name=city],city").val("");
    $("input[name=description],description").val("");
    $("input[name=startDate],startdate").val("");
    $("input[name=endDate],enddate").val("");
    $("input[name=price],price").val("");
    $("#alert").remove();
  })


});


function checkListingInput(name, location, city, price, startDate, endDate, newListing) {
  if (name =="" || location =="" || city=="" || price=="" || startDate=="" || endDate=="") {
    $("#alertMessageListingCreate").html(
      "<div class='alert', id='alert'> Please fill in all the fields to add listing </div>"
    );
    return;
  }
  console.log(newListing);
  $.post("http://localhost:9292/listings/new", newListing, function() {
    window.location.replace("/index");
  });


}