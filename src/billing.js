var Billing = function () {}

Billing.prototype.createBilling = function (amount, email) {
  this.amount = amount;
  this.email = email;

  return {
    amount: this.amount,
    email: this.email
  }

}