import React, {useState} from 'react'
import styled from '@emotion/styled'

import "babel-polyfill"
import getPokemon from '../data/getPokemon'
import PokeGrid from './PokeGrid'
import AddPokemonForm from './AddPokemonForm'

import {charizardData, pikachuData, lugiaData, golemData} from '../data/fakeData'

const MainDiv = styled.div`
  text-align: center;
  max-width: 80%;
  margin: auto;
`

const MainPage = () => {
  // The big piece here to make sure that the array maxes out at 6 items. 
  // The visitor should be able to remove pokemon from the array at will, and have an empty spot show up
  // There should also be a message that sends a warning if someone is trying to add pokemon to the array when it is full.   
  const [pokemon, setPokemon] = useState([
    {
      id: 1,
      pokeData: charizardData
    },
    {
      id: 2,
      pokeData: pikachuData
    },
    {
      id: 3,
      pokeData: lugiaData
    },
    {
      id: 4,
      pokeData: golemData
    },
    {
      id: 5,
      pokeData: null
    },
    {
      id: 6,
      pokeData: null
    }
  ])

  const addPokemon = async (pokemonName) => {
    const pokeData = await getPokemon(pokemonName.toLowerCase())
    let newPokemonArray = pokemon 
    newPokemonArray[0] = {id: 1, pokeData}

    console.log(newPokemonArray)

    setPokemon(newPokemonArray)
  }

  return (
    <MainDiv>
      <h1>PokePicker</h1>
      <p>Choose your Pokemon!</p>
      <PokeGrid pokemon={pokemon} addPokemon={addPokemon}/>
      {/* <AddPokemonForm addPokemon={addPokemon}/> */}
    </MainDiv>
  )
}

export default MainPage
