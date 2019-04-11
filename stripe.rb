require 'dotenv'
Dotenv.load
require 'stripe'
require 'json'

# Set to secret test key
Stripe.api_key = ENV['SECRET_KEY']

# stripe uses integers, 999 = 9.99, 1000 = 10.00 like pennies
def charge(amount, email, name, listing_desc)
    charge = Stripe::Charge.create(
        {
        amount: amount,
        currency: 'gbp',
        source: 'tok_visa',
        receipt_email: email,
        description: listing_desc
      }
    )
    return charge
end

# find billing based on stripe charge id
def findBilling(id)
  retreive = Stripe::Charge.retrieve(id)
  billingObj = {
                  :email => retreive[:billing_details].email,
                  :name => retreive[:billing_details].name,
                  :description => retreive[:description],
                  :amount => retreive[:amount]
                }.to_json
end                                
