import React from 'react'
import NavBar from "./components/NavBar"
import Product from './components/Product';
import Home from './components/Home'
import {Routes,Route}from 'react-router-dom'

function App() {
  return (
  
    <>
    <NavBar/>
    <Routes>
    
    <Route path ="/" element={<Home/>}/>
    <Route path ="/product" element={<Product/>}/>

    </Routes>
    </>
 
  )
}

export default App