import React from 'react'
import '../CRUD/home.css'
import { Link } from 'react-router-dom'
import CreateUser from './CreateUser'
const Home = () => {
  return (
    <div id='home'>
      <div className="navbar">
        <Link className='navbar-text' to='/'>
            Create User
        </Link>
        <Link className='navbar-text' to='/user'>
            Users
        </Link>
      </div>
    </div>
  )
}

export default Home
