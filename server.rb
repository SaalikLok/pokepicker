require 'sinatra'
require 'poke-api-v2'

get '/get-random-team' do
  pokemon = []

  6.times do
    pokemon << PokeApi.get(pokedex: rand(1..386))
  end

  binding.pry
end