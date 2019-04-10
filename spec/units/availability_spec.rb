require 'sinatra/activerecord'
require './models/listing.rb'
require './models/user.rb'
require './src/availability.rb'

describe CheckAvailability do

  it 'returns the listings that matches user requirements' do
    user = User.create(first_name: "James",
      last_name: "user1lastname",
      email: "soemeemail@gmail.com",
      password_digest: 1234)

    l1 = Listing.create(name: "A", location: "B",city:"C",price_per_night:"232",user_id:user[:id],available_start_date:'01-05-2019',available_end_date:'15-05-2019')
    l2 = Listing.create(name: "B", location: "B",city:"C",price_per_night:"232",user_id:user[:id],available_start_date:'01-05-2019',available_end_date:'20-05-2019')
    l3 = Listing.create(name: "C", location: "B",city:"C",price_per_night:"232",user_id:user[:id],available_start_date:'01-06-2019',available_end_date:'15-06-2019')
  
    time1 = DateTime.new(2019,5,1)
    time2 = DateTime.new(2019,5,15)
    
    available_space = CheckAvailability.check_dates(time1, time2)

    expect(available_space[0].name).to eq('A')
    expect(available_space[1].name).to eq('B')
    
  end
 
end