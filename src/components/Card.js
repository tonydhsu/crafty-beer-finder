import React from 'react'
import BrewDetails from './BrewDetails'
import './css/Card.css'

const Card = ({id, name, street}) => {
  
  return (
    <>
      <div className='brewery-card' key={id} >
        <p>{name}</p>
        <p>{street}</p>
      </div>
    </>
  )
}


export default Card