import React, {useState, useEffect} from 'react'

// need babel-polyfill so that parcel allows async to work
import "babel-polyfill"

import getPokemon from './data/getPokemon'
import PokeGrid from './components/PokeGrid'

const App = () => {
  const showPokemon = async () => {
    const pokemonData = await getPokemon("ditto")
    console.log(pokemonData)
  }

  return (
    <div onClick={showPokemon}>
      <PokeGrid getPokemon={getPokemon}/>
    </div>
  )
}

export default App
