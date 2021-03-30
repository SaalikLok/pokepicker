import React, {useState, useEffect} from 'react'
import Pokemon from './Pokemon'

const PokeGrid = props => {
  const [pokemon, setPokemon] = useState({
    name: "pikachu",
    img: ""
  })

  const addPokemon = async () => {
    const pokeData = await props.getPokemon("pikachu")
    setPokemon({name: pokeData.name, img: pokeData.sprites.front_default})
  }

  useEffect(() => {
    addPokemon()
  },[])

  return (
    <div>
      Something
      <Pokemon name={pokemon.name} img={pokemon.img}/>
    </div>
  )
}

export default PokeGrid
