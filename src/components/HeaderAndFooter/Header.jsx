import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="./">
      <div className='logo'></div>
      </Link>
        <Nav/>
    </header>
  )
}
