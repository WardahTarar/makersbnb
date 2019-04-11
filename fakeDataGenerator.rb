# frozen_string_literal: true

require 'sinatra/activerecord'
require 'faker'
# require_relative '../models/listing.rb'

def createFakeListing
  user1 = User.create(first_name: "John",
                      last_name: "Doe",
                      email: "john@email.com",
                      password_digest: '$2a$10$noOLIzoWHiv0VnjM6x8OlONAEHEMus6nbQviG9vOW1Auc.olvyhtm')
  user2 = User.create(first_name: Faker::Name.first_name,
                      last_name: Faker::Name.last_name,
                      email: Faker::Internet.email,
                      password_digest: 1234)
  user3 = User.create(first_name: Faker::Name.first_name,
                      last_name: Faker::Name.last_name,
                      email: Faker::Internet.email,
                      password_digest: 1234)

  hosts = [user1, user2, user3]

  Listing.create(
    name: 'Test Listing',
    location: 'Test Address',
    city: 'Test City',
    price_per_night: 99,
    user_id: 1,
    available_start_date: '2019-04-12 12:12:12',
    available_end_date: '2019-04-21 12:12:12'
  )

  hosts.each do |host|
    50.times do |_i|
      Listing.create(
        name: 'Entire flat 2BD',
        location: Faker::Address.street_address,
        city: Faker::Nation.capital_city,
        price_per_night: rand(100..500),
        user_id: host[:id],
        available_start_date:
        Faker::Time.backward(0, :evening),
        available_end_date: Faker::Time.forward(60, :evening)
      )
    end
  end

  user4 = User.create(first_name: 'Jane',
                      last_name: 'Doe',
                      email: 'jane@email.com',
                      password_digest: '$2a$10$noOLIzoWHiv0VnjM6x8OlONAEHEMus6nbQviG9vOW1Auc.olvyhtm')
  user5 = User.create(first_name: Faker::Name.first_name,
                      last_name: Faker::Name.last_name,
                      email: Faker::Internet.email,
                      password_digest: 1234)
  user6 = User.create(first_name: Faker::Name.first_name,
                      last_name: Faker::Name.last_name,
                      email: Faker::Internet.email,
                      password_digest: 1234)

  guests = [user1, user4, user5, user6]

  Request.create(
    start_date: '2019-04-17 12:12:12',
    listing_id: 1,
    user_id: 2
  )

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
