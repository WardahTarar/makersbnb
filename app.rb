require 'sinatra/base'
current_dir = Dir.pwd

Dir["#{current_dir}/models/*.rb"].each { |file| require file }

class Makersbnb < Sinatra::Base;

get '/spaces/:space_id' do
  erb :spaces
end

run! if app_file == $0

end
