import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'

import "babel-polyfill"
import getPokemon from './data/getPokemon'
import PokeGrid from './components/PokeGrid'

const MainDiv = styled.div`
  text-align: center;
  max-width: 80%;
  margin: auto;
`

const App = () => {
  const [pokemon, setPokemon] = useState([{id: 132, name:"ditto", img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}])

  const addPokemon = async () => {
    const pokeData = await getPokemon("pikachu")
    setPokemon(pokemon.concat([{ id:pokeData.id, name: pokeData.name, img: pokeData.sprites.front_default}]))
  }

  useEffect(() => {
    addPokemon()
  },[])

  return (
    <MainDiv>
      <h1>PokePicker</h1>
      <p>Choose your Pokemon!</p>
      <PokeGrid pokemon={pokemon} addPokemon={addPokemon}/>
    </MainDiv>
  )
}

export default App
