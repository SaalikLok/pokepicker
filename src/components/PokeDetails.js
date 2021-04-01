import React from 'react'
import styled from '@emotion/styled'
import _ from 'lodash'

const DetailsContainer = styled.div`
  max-width: 80%;
  margin: auto;
  margin-top: 5%;
  display: grid;
  grid-template-columns: 1fr 2fr;
`

const Picture = styled.img`
  width: 50%;

`

const Type = styled.span`
  height: 1.2em;
  border: 1px solid white;
  border-radius: 0.3em;
  font-size: 1em;
  margin-right: 1em;
  padding: 0.3em;
`

const PokeDetails = props => {
  const types = props.types.map( typeObject => {
    return <Type key={typeObject.slot}>{typeObject.type.name}</Type>
  })

  return (
    <DetailsContainer>
      <Picture src={props.img} alt="pokemon-picture"/>
      <div>
        <h1>{_.capitalize(props.name)}</h1>
        {types}
      </div>
    </DetailsContainer>
  )
}

export default PokeDetails
