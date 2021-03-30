import React from 'react'

const PokeSquare = props => {
  return (
    <div>
      <p>{props.name}</p>
      <img src={props.img}/>
    </div>
  )
}

export default PokeSquare
