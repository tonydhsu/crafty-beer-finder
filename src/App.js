import React, { useState } from 'react'
import title from './craftybeer-title.png'
import './App.css';
import Search from './components/Search'
import { Routes, Route, Link } from 'react-router-dom'


const App =() => {
  
  return (
    <>
      <header className="header">
        <Link to="/">
          <img className ="title" src={title} 
            alt="crafty beer title"/>
        </Link>
      </header> 
      <main className='main-container'>
        <Search />      
      </main>
    </>
    
  );
}

export default App;
