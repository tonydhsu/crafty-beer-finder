import React, {useState, useEffect} from 'react'
import './components/css/BrewDetails.css'
import { fetchDetail } from './components/api'
import { Link, useParams } from 'react-router-dom'




const BrewDetails = () => {
    const brewyId = useParams().brewyId
   
  
    const [brewyDetails, setBrewyDetails] = useState([])
    
    useEffect(() => {
      fetchDetail(brewyId)
      .then (data => setBrewyDetails(data))
    }, [])

   console.log(brewyDetails)
   const convertPhone = (number) => {
     return number.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
   }
  
  console.log(convertPhone)

    return (
      <article className='brewyDetailsContainer'>
        <h1 className='name'>{brewyDetails.name}</h1>
        <p>Brewery Type: {brewyDetails.brewery_type}</p>
        <p>{brewyDetails.street}</p>
        <p>{brewyDetails.city}, {brewyDetails.state}</p>
        <p>{convertPhone(brewyDetails.phone)}</p>
      </article>
  
  
    )
  }



export default BrewDetails