
import React from 'react'
import {FaAutoprefixer} from 'react-icons/fa'
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <div className='header' >
    <FaAutoprefixer className='icon'/>
    <h2>bayulee phones and accessories</h2>
    <ul>
    <li> <Link to="/">Home</Link></li>
    <li><Link to="/about">About us </Link></li>
    <li> <Link to="/product">Product</Link></li>
    <li><Link to="/contactus">Contact Us</Link></li>
   </ul>
    </div>
  )
}

export default NavBar