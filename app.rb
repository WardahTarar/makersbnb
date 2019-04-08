require 'sinatra/base'
# current_dir = Dir.pwd

# Dir["#{current_dir}/models/*.rb"].each { |file| require file }


class Makersbnb < Sinatra::Base;
  set :root, File.dirname(__FILE__)
  set :public_folder, File.dirname(__FILE__)


get '/users/new' do
  erb :signup
end

post '/users/new' do
  'Makers BnB'
end




run! if app_file == $0


end 