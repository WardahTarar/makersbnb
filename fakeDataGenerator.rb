# frozen_string_literal: true

require 'sinatra/activerecord'
require 'faker'
# require_relative '../models/listing.rb'

def createFakeListing
  user1 = User.create(first_name: Faker::Name.first_name,
                      last_name: Faker::Name.last_name,
                      email: Faker::Internet.email,
                      password_digest: 1234)
  user2 = User.create(first_name: Faker::Name.first_name,
                      last_name: Faker::Name.last_name,
                      email: Faker::Internet.email,
                      password_digest: 1234)
  user3 = User.create(first_name: Faker::Name.first_name,
                      last_name: Faker::Name.last_name,
                      email: Faker::Internet.email,
                      password_digest: 1234)

  user = [user1, user2, user3].sample

  5.times do |_i|
    Listing.create(
      name: 'Entire flat 2BD',
      location: Faker::Address.street_address,
      city: Faker::Nation.capital_city,
      price_per_night: rand(100..500),
      user_id: user[:id],
      available_start_date:
      Faker::Time.backward(0, :evening),
      available_end_date: Faker::Time.forward(60, :evening)
    )
  end
end
