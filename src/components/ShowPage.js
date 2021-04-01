import React, {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import getPokemon from '../data/getPokemon'
import MovesBox from './MovesBox'
import PokeDetails from './PokeDetails'
import _ from 'lodash'
import AddPokemonForm from './AddPokemonForm'

const usePokemonQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const ShowPage = props => {
  let query = usePokemonQuery()
  const [pokemonData, setPokemonData] = useState({
    name: "",
    img: "",
    types: [],
    moves: []
  })

  const fetchPokemon = async () => {
    const pokeData = await getPokemon(query.get("pokemon"))
    setPokemonData({
      name: pokeData.name,
      img: pokeData.sprites.front_default,
      types: pokeData.types,
      moves: _.sampleSize(pokeData.moves, 4)
    })
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  return (
    <div>
      <PokeDetails
        name={pokemonData.name}
        img={pokemonData.img}
        types={pokemonData.types}
      />
      <MovesBox moves={pokemonData.moves} />
      <AddPokemonForm/>
    </div>
  )
}

export default ShowPage
