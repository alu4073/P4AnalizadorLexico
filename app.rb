require 'sinatra'

get '/' do
  erb :index
end

get '/tests' do
  erb :indexTest
end
