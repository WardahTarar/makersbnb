require 'sinatra/activerecord'
require_relative '../models/listing.rb'

describe 'Add listing' do

  it 'adds listings to the database' do
    p "here"
    Listing.create(name: "A", location: "B",city:"C",price_per_night:"232",user_id:"1")
    Listing.create(name: "A", location: "B",city:"C",price_per_night:"232",user_id:"1")
    Listing.create(name: "A", location: "B",city:"C",price_per_night:"232",user_id:"1")
  end

end