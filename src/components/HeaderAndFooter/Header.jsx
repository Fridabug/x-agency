import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="./" className='logo-container'>
      <div className='logo'></div>
      <h1> agency </h1>
      </Link>
        <Nav/>
    </header>
  )
}
