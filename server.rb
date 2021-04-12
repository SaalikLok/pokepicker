require 'sinatra'
require 'pry'
require 'poke-api-v2'

get '/get-random-team' do
  pokemon = []
  
  6.times { |i| pokemon << PokeApi.get(pokemon: rand(1..386)) }
  
  binding.pry
end