import React from 'react'
import Textform from './Component/Textform';
import About from './Component/About';

import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
        <>
      <BrowserRouter>
    
    <div class="navbar navbar-expand-lg bg-dark" id='navBar'>
        <div><Link to={'/Home'}><button className='btn btn-outline-success'>Home </button></Link></div>
        <div><Link to={'/About'}><button className='btn btn-outline-primary'>About </button></Link></div>
        <div><Link to={'/Textform'}><button className='btn btn-outline-warning'>Contact Us </button></Link></div>
    </div>
    <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Textform' element={<Textform/>}/>
    </Routes>
  </BrowserRouter>
    
    
    

   
    </>
    </div>
  )
}

export default Navbar
