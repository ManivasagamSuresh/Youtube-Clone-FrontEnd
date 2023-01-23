import React from 'react'
import "./Navbar.css"
import { RiAccountCircleLine } from 'react-icons/ri'
import { MdOutlineSearch } from 'react-icons/md'


function Navbar() {
  return (
    <div className='Navbar-Container'>  
      <div className='Navbar-Wrapper'>
      <div className="Navbar-Search">
          <input className='Navbar-Input' placeholder='Search'/>
          <MdOutlineSearch/>
        </div>
        <button className="Navbar-Button"><RiAccountCircleLine/> Sign In</button> 
      </div>
    </div>
    
  )
}

export default Navbar