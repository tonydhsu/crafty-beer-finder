import React from 'react'
import './css/Header.css'
import title from '../craftybeer-title.png'
import {Link} from 'react-router-dom'



const Header = () => {
  return (
    <header className="header">
        <Link to="/">
          <img className ="title" src={title} 
            alt="crafty beer title"/>
        </Link>
    </header> 
  )
}

export default Header