import React from 'react'
import styled from '@emotion/styled'

const MoveItem = styled.p`
  border: 2px white solid;
  border-radius: 0.4em;
  text-align: center;
  font-size: 1.5em;
  padding: 1em;
`

const Move = props => {
  return (
    <MoveItem>
      {props.name}
    </MoveItem>
  )
}

export default Move
