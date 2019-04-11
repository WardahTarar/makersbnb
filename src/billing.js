var Billing = function () {}

Billing.prototype.createBilling = function (amount, email, customerName, description) {
  this.amount = amount;
  this.email = email;
  this.customerName = customerName;
  this.description = description;

  return {
    amount: this.amount,
    email: this.email,
    name: this.customerName,
    description: this.description
  }

}