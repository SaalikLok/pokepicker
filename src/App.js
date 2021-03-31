import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'

import "babel-polyfill"
import getPokemon from './data/getPokemon'
import PokeGrid from './components/PokeGrid'
import AddPokemonForm from './components/AddPokemonForm'

const MainDiv = styled.div`
  text-align: center;
  max-width: 80%;
  margin: auto;
`

const App = () => {
  // The big piece here to make sure that the array maxes out at 6 items. 
  // The visitor should be able to remove pokemon from the array at will, and have an empty spot show up
  // There should also be a message that sends a warning if someone is trying to add pokemon to the array when it is full.

  const [pokemon, setPokemon] = useState([])

  const addPokemon = async (pokemonName) => {
    const pokeData = await getPokemon(pokemonName.toLowerCase())
    setPokemon(pokemon.concat([{ id:pokeData.id, name: pokeData.name, img: pokeData.sprites.front_default}]))
  }

  return (
    <MainDiv>
      <h1>PokePicker</h1>
      <p>Choose your Pokemon!</p>
      <PokeGrid pokemon={pokemon} addPokemon={addPokemon}/>
      <AddPokemonForm addPokemon={addPokemon}/>
    </MainDiv>
  )
}

export default App
