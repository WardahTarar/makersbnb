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

  hosts = [user1, user2, user3]

  hosts.each do |host|
    50.times do |_i|
      Listing.create(
        name: 'Entire flat 2BD',
        location: Faker::Address.street_address,
        city: Faker::Nation.capital_city,
        price_per_night: rand(100..500),
        user_id: host[:id],
        available_start_date:
        Faker::Time.backward(60, :evening),
        available_end_date: Faker::Time.forward(60, :evening)
      )
    end
  end

  user4 = User.create(first_name: Faker::Name.first_name,
                      last_name: Faker::Name.last_name,
                      email: Faker::Internet.email,
                      password_digest: 1234)
  user5 = User.create(first_name: Faker::Name.first_name,
                      last_name: Faker::Name.last_name,
                      email: Faker::Internet.email,
                      password_digest: 1234)
  user6 = User.create(first_name: Faker::Name.first_name,
                      last_name: Faker::Name.last_name,
                      email: Faker::Internet.email,
                      password_digest: 1234)

  guests = [user4, user5, user6]

  guests.each do |guest|
    20.times do
      listing_id = rand(1..150)
      Request.create(
        start_date: Listing.find(listing_id)[:available_start_date],
        # between(Listing.find(listing_id)[:available_start_date], Listing.find(listing_id)[:available_end_date]),
        listing_id: listing_id,
        user_id: guest[:id]
      )
    end
  end

end
