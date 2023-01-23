import React from 'react'
import "./Navbar.css"
import { RiAccountCircleLine } from 'react-icons/ri'
import { MdOutlineSearch } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'


function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='Navbar-Container'>  
      <div className='Navbar-Wrapper'>
      <div className="Navbar-Search">
          <input className='Navbar-Input' placeholder='Search'/>
          <MdOutlineSearch/>
        </div>
        <button onClick={()=>{navigate('/Login')}} className="Navbar-Button"><RiAccountCircleLine/> Sign In</button> 
      </div>
    </div>
    
  )
}

export default Navbar