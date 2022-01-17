import React, {useState} from 'react'
import './css/Search.css'
import { fetchApi } from './api'
import BrewList from './BrewList'
import BrewDetails from '../BrewDetails'
import { Routes, Route, Link } from 'react-router-dom'


const Search = () => {
  const [city, setCity] = useState('')
  const [brewy, setBrewy] = useState([])


  const handleSearch = async () => {
    const convertCity = city.trim().toLowerCase().split(' ').join('_')
    const apiRes = await fetchApi(convertCity)
    setBrewy(apiRes)
  }


  const clearInput = () => {
    setCity('')
  }

  const handleClick = (event) => {
    event.preventDefault()
    handleSearch()
    clearInput()
  }

  return (
    <>
      <form className='form-section' onSubmit={handleClick}>
        <p className='find-text'>Find a brewery near you</p>
        <p className='search-text'>Search for a city:</p>
        <div>
          <input className='input'
            type='text'
            placeholder='e.g., Denver'
            value={city}
            onChange={(event) => setCity(event.target.value)}
            />
          <button 
          type='submit'
          >Search</button>
        </div>
      </form>
      <section className='brew-grid'>
    {brewy && <BrewList breweries={brewy}/>}        
      </section>
    </>
  )
     
    
      
}

export default Search