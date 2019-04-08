require 'sinatra/base'
current_dir = Dir.pwd

Dir["#{current_dir}/models/*.rb"].each { |file| require file }


class Makersbnb < Sinatra::Base;

get('/listings/all') do
  erb(:'/listings/all')
end

run! if app_file == $0


end
