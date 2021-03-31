import React, { useState } from 'react'
import styled from '@emotion/styled'

const AddPokemonForm = props => {
  const [pokemonName, setPokemonName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addPokemon(pokemonName)
  }

  const handleChange = (event) => {
    setPokemonName(event.currentTarget.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="pokemon-name" placeholder="pokemon here" onChange={handleChange} value={pokemonName} />
      <input type="submit" value="I choose you!" />
    </form>
  )
}

export default AddPokemonForm
