require 'sinatra/base'
<<<<<<< HEAD
require 'sinatra/json'
# current_dir = Dir.pwd
=======
current_dir = Dir.pwd
>>>>>>> origin/master

Dir["#{current_dir}/models/*.rb"].each { |file| require file }

class Makersbnb < Sinatra::Base
  set :root, File.dirname(__FILE__)
  set :public_folder, File.dirname(__FILE__)

  enable :sessions

  get '/' do
    @user = session[:user]
    erb :index
  end

  get '/users/new' do
    erb :signup
  end

  post '/users/new' do
    session[:user] = params[:firstName]
    redirect '/'
  end

  run! if app_file == $PROGRAM_NAME
end
