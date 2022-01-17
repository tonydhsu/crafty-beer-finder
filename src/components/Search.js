import React, {useState} from 'react'
import './css/Search.css'
import { fetchApi } from './api'
import BrewList from './BrewList'


const Search = () => {
  const [city, setCity] = useState('')
  const [brewy, setBrewy] = useState([])


  const handleSearch = async () => {
    const apiRes = await fetchApi(city)
    setBrewy(apiRes)
  }
  // console.log(brewy, 'brewy')
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
          <input
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
        <BrewList breweries={brewy}/>
      </section>
    </>
  )
     
    
      
}

export default Search