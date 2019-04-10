$(document).ready(function() {

  $("#payHost").click(function() {
    var billing = new Billing();

    // let name = $("#customerName").val();
    let amount = $("#amount").val();
    let email = $("#email").val();

    let newBilling = billing.createBilling(
      amount,
      email
    );

    console.log(newBilling);

    $.post("http://localhost:9292/payments/new", newBilling)

  });
});
