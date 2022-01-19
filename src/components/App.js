import React from 'react'
import './css/App.css';
import Search from './Search'
import { Routes, Route, Link } from 'react-router-dom'
import BrewDetails from './BrewDetails';
import Header from './Header'

const App =() => {
  
  return (
    <>
      <Header />
      <main className='main-container'>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/:brewyId' element={<BrewDetails />} />
      </Routes>
      </main>
    </>
  );
}

export default App;
