import React, { useState } from 'react'
import title from './craftybeer-title.png'
import './App.css';
import Search from './components/Search'
import { Routes, Route, Link } from 'react-router-dom'
import BrewDetails from './BrewDetails';
import Header from './components/Header'


const App =() => {
  
  return (
    <>
      <Header />
      <main className='main-container'>
        {/* <Search />       */}
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/:brewyId' element={<BrewDetails />} />
      </Routes>
      </main>
    </>
    
  );
}

export default App;
