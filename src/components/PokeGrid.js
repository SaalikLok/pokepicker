import React, { useEffect } from 'react'
import GridItem from './GridItem'
import styled from '@emotion/styled'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 8em 8em 8em;
  grid-template-rows: 8em 8em;
  gap: 2em;
  justify-content: center;
  align-items: center;
`

const Item = styled.div`
  display: block;
  background: #4a4a4a;
  border-radius: 0.5em;
  width: 8em;
  height: 7em;
`

const PokeGrid = props => {
  const displayPokemon = props.pokemon.map(poke => {
    if(!poke.pokeData){
      console.log("Empty Grid Item to be rendered")
      return <Item key={poke.id}/>
    }
    return <GridItem 
      key={poke.id} 
      id={poke.id} 
      name={poke.pokeData.name} 
      img={poke.pokeData.sprites.front_default}
    />
  })

  return (
    <Grid>
      {displayPokemon}
    </Grid>
  )
}

export default PokeGrid
