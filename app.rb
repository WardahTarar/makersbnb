require 'sinatra/base'
require 'sinatra/activerecord'
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
    erb :index
  end

  get '/users/new' do
    erb :signup
  end

  post '/users/new' do
    encrypted_password = BCrypt::Password.create(params[:password])
    User.create(first_name: params[:firstName], last_name: params[:lastName], email: params[:email], password_digest: encrypted_password)
    redirect '/'
  end

  get '/users/show/:id' do
    p User.find(params[:id])
  end

  run! if app_file == $PROGRAM_NAME
end
