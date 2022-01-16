import React, { useState } from 'react'
import './css/BrewList.css'
import Card from './Card'

const BrewList = (breweries) => {

  console.log(breweries, 'breweries')

  const brewyDetails = breweries.breweries.map(brewy => {

    return (
      <Card
          key={brewy.id}
          type={brewy.brewery_type}
          name={brewy.name}
          city={brewy.city}
          street={brewy.street}
      />
    
    )

  })

  return (
    <>
      <div className='brewy-container'>
      {brewyDetails}
      </div>
    
    </>
  )
}

export default BrewList