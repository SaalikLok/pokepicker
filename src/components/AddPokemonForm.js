import React, { useState } from 'react'
import styled from '@emotion/styled'

const SubmitButton = styled.input`
  font-family: "Poppins", sans-serif;
  font-size: 1em;
`

const AddPokemonForm = props => {
  const [pokemonName, setPokemonName] = useState("")
  const [statusText, setstatusText] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    // Also add error handling here so that when the API has an error, that gets set here.

    if(pokemonName === ""){
      setstatusText("Hey hey, you don't have the name of Pokemon here!")
    }
    else{
      props.addPokemon(pokemonName)
      setPokemonName("")
      setstatusText("Pokemon Added!")
    }
  }

  const handleChange = (event) => {
    setPokemonName(event.currentTarget.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="pokemon-name" placeholder="pokemon here" onChange={handleChange} value={pokemonName} />
      <SubmitButton type="submit" value="I choose you!" />
      <p>{statusText}</p>
    </form>
  )
}

export default AddPokemonForm
