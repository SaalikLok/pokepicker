import React from 'react'
import Pokemon from './Pokemon'
import styled from '@emotion/styled'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 5em 5em 5em;
  grid-template-rows: 5em 5em;
  gap: 1em;
  justify-content: center;
`

const GridItem = styled.div`
  background: #4a4a4a;
  border-radius: 0.5em;
`

const PokeGrid = props => {
  const displayPokemon = props.pokemon.map(poke => {
    if(!poke){
      return <GridItem/>
    }
    return <Pokemon key={poke.id} name={poke.name} img={poke.img}/>
  })

  return (
    <Grid>
      {displayPokemon}
    </Grid>
  )
}

export default PokeGrid
