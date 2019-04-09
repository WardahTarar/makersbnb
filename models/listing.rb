require 'sinatra/activerecord'
require 'bcrypt'

class Listing < ActiveRecord::Base
belongs_to :user
has_many :availability




end