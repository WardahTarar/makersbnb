# frozen_string_literal: true

require 'sinatra/activerecord'
require './models/listing.rb'
require './models/user.rb'
require './src/availability.rb'

class CheckAvailability
  def self.check_dates(start_date, end_date)
    Listing.where('available_start_date <= :start_date AND available_end_date >= :end_date',
                  start_date: start_date, end_date: end_date).as_json
  end
end
