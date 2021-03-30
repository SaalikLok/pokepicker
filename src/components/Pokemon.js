import React from 'react'
import styled from '@emotion/styled'

const GridItem = styled.div`
  background: #4a4a4a;
  border-radius: 0.5em;
`

const PokeSquare = props => {
  return (
    <GridItem>
      {/* <p>{props.name}</p> */}
      <img src={props.img}/>
    </GridItem>
  )
}

export default PokeSquare
