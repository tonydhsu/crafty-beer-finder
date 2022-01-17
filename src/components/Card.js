import React from 'react'
import BrewDetails from '../BrewDetails'
import './css/Card.css'
import { Link } from "react-router-dom"

const Card = ({id, name, street}) => {
  

  return (
    <>
        <Link to={`/details/${id}`} className='link-card'>
          <div className='brewery-card' key={id} >
            <p>{name}</p>
            <p>{street}</p>
          </div>
        </Link>
        
     
    
    </>
  )
}


export default Card