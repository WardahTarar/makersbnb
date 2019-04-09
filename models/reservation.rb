require 'sinatra/activerecord'

class Reservation < ActiveRecord::Base
  belongs_to :request


end 