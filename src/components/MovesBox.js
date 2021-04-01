import React from 'react'
import styled from '@emotion/styled'
import Move from './Move'
import _ from 'lodash'

const MovesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1em;
`

const MovesBox = props => {
  const moves = props.moves.map( moveObject => {
    return <Move name={_.capitalize(moveObject.move.name)} />
  })

  return (
    <MovesContainer>
      {moves}
    </MovesContainer>
  )
}

export default MovesBox
