require 'sinatra/activerecord'
require_relative '../models/listing.rb'


def createFakeListing 


    user1 = User.create(first_name: "user1",
      last_name: "user1lastname",
      email: "soemeemail@gmail.com",
      password_digest: 1234)
    user2 = User.create(first_name: "user2",
      last_name: "user2lastname",
      email: "soemeemail@gmail.com",
      password_digest: 1234)
    user3 = User.create(first_name: "user3",
      last_name: "user3lastname",
      email: "soemeemail@gmail.com",
      password_digest: 1234)
   
    user = [user1,user2,user3].sample

    5.times do {
      Listing.create(name: "A", location: "B",city:"C",price_per_night:"232",user_id:user[:id])
    }
    

end