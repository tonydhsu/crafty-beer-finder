import React, {useState} from 'react'
import './css/Search.css'
import { fetchApi } from './api'
import BrewList from './BrewList'
import BrewDetails from './BrewDetails'
import { Routes, Route, Link } from 'react-router-dom'


const Search = () => {
  const [city, setCity] = useState('')
  const [brewy, setBrewy] = useState([])


  const handleSearch = async () => {
    const convertCity = city.trim().toLowerCase().split(' ').join('_')
    const apiRes = await fetchApi(convertCity)
    setBrewy(apiRes)
    saveToStorage()
  }

  const saveToStorage = () => {
    localStorage.setItem('brewyResults', brewy)
    console.log(localStorage.getItem('brewyResults'), 'localstoage')

  }


  const clearInput = () => {
    setCity('')
  }

  const handleClick = (event) => {
    event.preventDefault()
    handleSearch()
    // saveToStorage()
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
          <button className='search-btn'
          type='submit'
          >Search</button>
        </div>
      </form>
      <section className='brew-grid'>
        <BrewList breweries={brewy}/>      
      </section>
    </>
  )
     
    
      
}

export default Search