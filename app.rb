# frozen_string_literal: true

require 'sinatra/base'
require 'sinatra/activerecord'
require 'bcrypt'
# current_dir = Dir.pwd
current_dir = Dir.pwd

Dir["#{current_dir}/models/*.rb"].each { |file| require file }

class Makersbnb < Sinatra::Base;

  include BCrypt
  set :root, File.dirname(__FILE__)
  set :public_folder, File.dirname(__FILE__)

  enable :sessions

  get '/' do
    redirect '/index'
  end

  get '/index' do
    @user = User.find(session[:id]) if session[:id]
    erb :index
  end

  get '/users/new' do
    erb :signup
  end

  post '/users/new' do
    encrypted_password = BCrypt::Password.create(params[:password])
    user = User.create(
      first_name: params[:firstName],
      last_name: params[:lastName],
      email: params[:email],
      password_digest: encrypted_password
    )
    session[:id] = user[:id]
    redirect '/index'
  end

  get '/users/show/:id' do
    # p User.find(params[:id])
  end

  get '/sessions/new/login' do
    erb :login
  end

  get '/spaces/:listing_id' do
    @listing_id = params[:listing_id]
    @listing = Listing.find(@listing_id)
    erb :"spaces/spaces"
  end

  post '/spaces/:listing_id/create' do
    @listing_id = params[:listing_id]
    @start_date = Date.today
    @user_id = session[:id]
    Request.create(
      start_date: @start_date,
      listing_id: @listing_id,
      user_id: @user_id
    )
    redirect "/spaces/#{@listing_id}/create"
  end

  get '/spaces/:listing_id/create' do
    erb :'spaces/success'
  end

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
