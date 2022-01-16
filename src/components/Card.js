import React from 'react'
import './css/Card.css'

const Card = ({name, street}) => {
  

  return (
    <div className='brewery-card'>
      <p>{name}</p>
      <p>{street}</p>
    </div>
  )
}


export default Card