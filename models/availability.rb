require 'sinatra/activerecord'

class Availability < ActiveRecord::Base
belongs_to :listing


end
