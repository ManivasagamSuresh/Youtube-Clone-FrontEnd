import React, { useContext } from 'react'
import "./Navbar.css"
import { RiAccountCircleLine } from 'react-icons/ri'
import { MdOutlineSearch } from 'react-icons/md'
import { BiVideoPlus } from 'react-icons/bi'
import { AiOutlineLogout } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { UserContext } from '../Context/userContext'
import { logout } from '../Redux/userSlice'


function Navbar() {

  const navigate = useNavigate();
// const {User,setUser} = useContext(UserContext); 
const dispatch = useDispatch()
const signout = ()=>{
  dispatch(logout());
  localStorage.clear("accessToken");
  navigate("/")
}

const {currentUser} = useSelector(state => state.user)
console.log(currentUser);
  return (
    <div className='Navbar-Container'>  
      <div className='Navbar-Wrapper'>
      <div className="Navbar-Search">
          <input className='Navbar-Input' placeholder='Search'/>
          <MdOutlineSearch/>
        </div>
        {currentUser? <div className='Navbar-User'>
          <BiVideoPlus size={"1.5em"}/>
          <img className='Navbar-Avatar' src=''/>
          {currentUser.others.name} 
          <span onClick={()=>{signout()}} className="Navbar-Logout"> 
          <span style={{margin:"10px"}}>|</span><AiOutlineLogout/>Logout</span></div>
        :<button onClick={()=>{navigate('/Login')}} className="Navbar-Button">
          <RiAccountCircleLine/> Sign In</button> }
      </div>
    </div>
    
  )
}

export default Navbar