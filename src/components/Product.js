import React from 'react'
import phones from "../imgphones/smartphone1.webp"
import phone1 from "../imgphones/smartphone2.webp"
import phone2 from "../imgphones/smartphone3.webp"
function product() {

  return (
    <div>
    <div  className='firstrow'>

    <div className='card'>
    <h2>Sumsung</h2>
    <img src={phones}alt=""/>
    <p>ghc900</p>
    <button>buy me</button>
    </div>

    <div className='card'>
    <h2>iphone</h2>
    <img src={phone1}alt=""/>
    <p>ghc800</p>
    <button>buy me</button>
    </div>

    <div className='card'>
    <h2>techno</h2>
    <img src={phone2}alt=""/>
    <p>ghc1000</p>
    <button>buy me</button>
    </div>

    </div>
    <div  className='headphones'>
    </div>
    <div  className='pendrives'>
    </div>
    <div  className='phonecases'>
    </div>

    </div>
  )
}

export default product