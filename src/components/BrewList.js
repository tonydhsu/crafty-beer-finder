import React, { useState } from 'react'
import './css/BrewList.css'
import Card from './Card'

const BrewList = (breweries) => {

  console.log(breweries, 'breweries')

  const brewyDetails = breweries.map(brewy => {

    return (
     <Card
        key={brewy.id}
        name={brewy.name}
        street={brewy.street}

     />
    )

  })

  return (
    <div className='brewy-container'>
      {brewyDetails}
    </div>
  )
}

export default BrewList