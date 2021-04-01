import React, {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import getPokemon from '../data/getPokemon'
import PokeDetails from './PokeDetails'

const usePokemonQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const ShowPage = props => {
  let query = usePokemonQuery()
  const [pokemonData, setPokemonData] = useState({
    name: "",
    sprites: "",
    types: []
  })

  const fetchPokemon = async () => {
    const pokeData = await getPokemon(query.get("pokemon"))
    setPokemonData(pokeData)
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  return (
    <div>
      <PokeDetails
        name={pokemonData.name}
        img={pokemonData.sprites.front_default}
        types={pokemonData.types}
      />
    </div>
  )
}

export default ShowPage
