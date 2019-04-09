require 'sinatra/activerecord'

class Request < ActiveRecord::Base
  belongs_to :listing
  has_one :reservation
  
  
  
  
  end