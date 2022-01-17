import React, {useState, useEffect} from 'react'
import './css/BrewDetails.css'
import { fetchDetail } from './api'
import { Link, useParams } from 'react-router-dom'





const BrewDetails = () => {
    const brewyId = useParams().brewyId
   
  
    const [brewyDetails, setBrewyDetails] = useState([])
    
    useEffect(() => {
      fetchDetail(brewyId)
      .then (data => setBrewyDetails(data))
    }, [])

  //  console.log(brewyDetails)
  //  const convertPhone = (number) => {
  //    return number.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
  //  }
  // console.log(convertPhone(2345679393))


    return (
      <>
        <div className='temp'>
        <article className='brewy-details' key={brewyDetails.id}>
          <h1 className='name'>{brewyDetails.name}</h1>
          <p>Brewery Type: {brewyDetails.brewery_type}</p>
          <p>{brewyDetails.street}</p>
          <p>{brewyDetails.city}, {brewyDetails.state}</p>
          <p>{brewyDetails.phone}</p>
        </article>

        <div className='links-section'>
          <a href={brewyDetails.website_url} target='blank'><button className='link-btn'>Visit Website</button></a>
          <a href={`https://www.google.com/maps/search/?api=1&query=${brewyDetails.id}`} target='blank'><button className='link-btn'>Get Directions</button></a>
          <Link to={'/'}>
            <button className='back-btn'>Back</button>
          </Link>

        </div>
        </div>

        
      </>
  
  
    )
  }



export default BrewDetails