require 'sinatra/activerecord'
# require 'bcrypt'

class User < ActiveRecord::Base
  has_many :listings



end 