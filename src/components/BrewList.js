import React, { useState } from 'react'
import './css/BrewList.css'
import Card from './Card'
import BrewDetails from './BrewDetails'
import { Routes, Route, Link } from 'react-router-dom'


const BrewList = (breweries) => {
  const [list, setList] = useState([])

  // console.log(breweries, 'breweries')

  const brewyDetails = breweries.breweries.map(brewy => {
     
    return (
      <>
        <Link to={`/${brewy.id}`} key={brewy.id} className='link-card'>
          <Card
            key={brewy.id}
            type={brewy.brewery_type}
            name={brewy.name}
            city={brewy.city}
            street={brewy.street}
            />
          </Link>
      </>
    )
  })

  return (
    <>
      <div className='brewy-container'>
        {brewyDetails}
      </div>
      {/* <Routes>
       
      </Routes> */}
    </>
  )
}

export default BrewList