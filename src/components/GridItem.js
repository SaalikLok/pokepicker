import React from 'react'
import styled from '@emotion/styled'
import _ from 'lodash'
import { Link } from 'react-router-dom'

const Item = styled.div`
  display: block;
  background: #4a4a4a;
  border-radius: 0.5em;
  width: 8em;
  height: 7em;
`

const Label = styled.p`
  color: #fafafa;
`

const GridItem = props => {
  return (
    <Link to={`/pokemon/${props.id}?pokemon=${props.name}`}>
      <Item>
        <img src={props.img}/>
        <Label>{_.capitalize(props.name)}</Label>
      </Item>
    </Link>
  )
}

export default GridItem
