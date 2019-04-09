# frozen_string_literal: true

require 'sinatra/base'
require 'sinatra/activerecord'
require './fakeDataGenerator'
require 'bcrypt'
# current_dir = Dir.pwd
current_dir = Dir.pwd

Dir["#{current_dir}/models/*.rb"].each { |file| require file }

class Makersbnb < Sinatra::Base
  include BCrypt
  set :root, File.dirname(__FILE__)
  set :public_folder, File.dirname(__FILE__)

  enable :sessions

  get '/' do
    # createFakeListing
    redirect '/index'
  end

  get '/index' do
    @user = User.find(session[:id]) if session[:id]
    @listings = Listing.all
    erb :index
  end

  # USER CREATION
  get '/users/new' do
    erb :signup
  end

  get '/listings' do 
    @listings = Listing.all
    p @listings
    erb(:'index')
    # listing dates, use dropdown
  end 

  #SIGN UP ROUTE
  post '/users/new' do
    encrypted_password = BCrypt::Password.create(params[:password])

    user = User.create(
      first_name: params[:firstName],
      last_name: params[:lastName],
      email: params[:email],
      password_digest: encrypted_password
    )
   
    session[:id] = user[:id]
    redirect '/listings'
  end

  get '/users/show/:id' do
    # p User.find(params[:id])
  end

  # LISTINGS
  get '/listings/new' do
    erb :'/listings/new'
  end

  post '/listings/new' do
    listing = Listing.create(
      name: params[:name],
      location: params[:location],
      city: params[:city],
      price_per_night: params[:price],
      user_id: session[:id],
      available_start_date: params[:startDate],
      available_end_date: params[:endDate],
      description: params[:description]
    )
    
    redirect '/index'
  end

  # SESSION FOR USER ID
  get '/sessions/new/login' do
    erb :login
  end

  #LOGIN ROUTE
  post '/sessions' do
    user = User.find_by(email: params[:email]) # email must be unique
    return unless BCrypt::Password.new(user[:password_digest]) == params[:password]
    session[:id] = user[:id]
    redirect '/'
  end

  post '/sessions/destroy' do
    session.clear
    redirect '/index'
  end

  run! if app_file == $PROGRAM_NAME
end
