import React, { useState } from 'react'
import title from './craftybeer-title.png'
import './App.css';
import Search from './components/Search'


const App =() => {
  
  return (
    <>
      <header className="header">
        <img className ="title" src={title} 
        alt="crafty beer title"/>
      </header> 
      <main className='main-container'>
        <Search />
      </main>
    </>
  );
}

export default App;
