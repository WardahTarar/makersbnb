$(document).ready(function() {

  $("#payHost").click(function() {
    var billing = new Billing();

    // let name = $("#customerName").val();
    let amount = $("#amount").val();
    let email = $("#email").val();
    let name = $("#name").val();
    let description = $("#listingDesc").val();

    let newBilling = billing.createBilling(
      amount,
      email,
      name,
      description
    );

    console.log(newBilling);

    $.post("http://localhost:9292/payments/new", newBilling)

  });
});
