# frozen_string_literal: true

require 'sinatra/activerecord'
require 'faker'
# require_relative '../models/listing.rb'

def createFakeListing

  User.create(
    first_name: "John",
    last_name: "Doe",
    email: "john@email.com",
    password_digest: '$2a$10$noOLIzoWHiv0VnjM6x8OlONAEHEMus6nbQviG9vOW1Auc.olvyhtm'
  )

  Listing.create(
    name: 'Test Listing',
    location: 'Test Address',
    city: 'Test City',
    price_per_night: 99,
    user_id: 1,
    available_start_date: '2019-04-12 12:12:12',
    available_end_date: '2019-04-21 12:12:12'
  )

  Listing.create(
    name: 'Test Listing 2',
    location: 'Test Address 2',
    city: 'Test City 2',
    price_per_night: 99,
    user_id: 1,
    available_start_date: '2019-04-12 12:12:12',
    available_end_date: '2019-04-21 12:12:12'
  )

  User.create(
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'jane@email.com',
    password_digest: '$2a$10$noOLIzoWHiv0VnjM6x8OlONAEHEMus6nbQviG9vOW1Auc.olvyhtm'
  )

  Request.create(
    start_date: '2019-04-17 12:12:12',
    listing_id: 1,
    user_id: 2
  )

  Request.create(
    start_date: '2019-04-19 12:12:12',
    listing_id: 2,
    user_id: 2
  )

  Reservation.create(
    start_date: '2019-04-19 12:12:12',
    request_id: 2
  )

end
