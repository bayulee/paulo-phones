import React from 'react'
import phones from '../pics/smartphone1.webp'
import drive from '../pics/pendrive3.jpg'
import head from "../pics/headphone.jpg"
import cases from "../pics/phonecase2.jpg"
import {Link} from "react-router-dom"


function Home() {
  return (

    <div>
    <div className='firstrow'>
    <div className='card'>
    <h2>Smartphones</h2>
    <img src={phones}alt=""/>
    <p>we sell quality Smartphones at affordable price</p>
    <button><Link to="/Product">view phones</Link></button>
    </div>

    <div className='card'>
    <h2>PenDrives</h2>
    <img src={head}alt=""/>
    <p>we sell quality headphone at affordable price</p>
    <button><Link to="/Product">view headphone</Link></button>
    </div>

    <div className='secondrow'>
    <div className='card'>
    <h2>PenDrives</h2>
    <img src={drive}alt=""/>
    <p>we sell quality PenDrives at affordable price</p>
    <button><Link to="/Product">view pendrive</Link></button>
    </div>
    <div className='card'>
    <h2>phonecase</h2>
    <img src={cases}alt=""/>
    <p>we sell quality phonecase at affordable price</p>
    <button><Link to="/Product">view phone cases</Link></button>
    </div>
    </div>
    </div>
    
    </div>
  )
}

export default Home