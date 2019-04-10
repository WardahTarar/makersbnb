require 'stripe'
# Set your secret key: remember to change this to your live secret key in production
# See your keys here: https://dashboard.stripe.com/account/apikeys

Stripe.api_key = 'sk_test_QjSjtH3lC8RnU8ip7LnpZNBy00nQhVNHIg'

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



def findBilling(id)
  retreive = Stripe::Charge.retrieve(id)
  return retreive[:receipt_email]
end                                