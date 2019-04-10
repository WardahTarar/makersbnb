require 'stripe'
# Set your secret key: remember to change this to your live secret key in production
# See your keys here: https://dashboard.stripe.com/account/apikeys
Stripe.api_key = 'sk_test_QjSjtH3lC8RnU8ip7LnpZNBy00nQhVNHIg'

charge = Stripe::Charge.create({
    amount: 999,
    currency: 'usd',
    source: 'tok_visa',
    receipt_email: 'jenny.rosen@example.com',
})


