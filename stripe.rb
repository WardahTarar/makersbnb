require 'stripe'
require 'json'
# Set your secret key: remember to change this to your live secret key in production
# See your keys here: https://dashboard.stripe.com/account/apikeys

Stripe.api_key = 'sk_test_QjSjtH3lC8RnU8ip7LnpZNBy00nQhVNHIg'


# stripe uses integers, 999 = 9.99, 1000 = 10.00 like pennies
def charge(amount, receipt_email)
    charge = Stripe::Charge.create(
        {
        amount: amount,
        currency: 'gbp',
        source: 'tok_visa',
        receipt_email: receipt_email,
      }
    )
    return charge[:id]
  end


# find billing based on stripe charge id
def findBilling(id)
  retreive = Stripe::Charge.retrieve(id)
  billingObj = {
                  :email => retreive[:receipt_email], 
                  :amount => retreive[:amount]
                }.to_json
end                                