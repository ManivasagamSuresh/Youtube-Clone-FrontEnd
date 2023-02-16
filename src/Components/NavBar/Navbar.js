import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { RiAccountCircleLine } from 'react-icons/ri'
import { MdOutlineSearch } from 'react-icons/md'
import { BiVideoPlus } from 'react-icons/bi'
import { AiOutlineLogout } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { UserContext } from '../Context/userContext'
import { logout } from '../Redux/userSlice'
import Uploadvdo from '../UploadVdo/Uploadvdo'
import { useFormik } from 'formik'
import axios from 'axios'
import { Config } from '../../Config'


function Navbar() {


  const [Open,setOpen]=useState(false);
// const [input,setInput]=useState('')
  const[q,setQ]=useState("")
  const {currentUser} = useSelector(state => state.user)
  const navigate = useNavigate();
// const {User,setUser} = useContext(UserContext); 
const dispatch = useDispatch()

const signout = ()=>{
  dispatch(logout());
  localStorage.clear("accessToken");
  navigate("/")
}

  return (
    <>
    {currentUser?<><div className='Navbar-Container'>  
      <div className='Navbar-Wrapper'>
      <div className="Navbar-Search">
          <input className='Navbar-Input'  placeholder='Search' onChange={e=>setQ(e.target.value)}/>
          {/* onChange={formik.handleChange} name='search' value={formik.values.search} */}
          <MdOutlineSearch onClick={()=>navigate(`/search?q=${q}`)}/>
          
        </div>
        {currentUser? <div className='Navbar-User'>
          <BiVideoPlus size={"1.5em"} onClick={()=>setOpen(true)}/>
          <img className='Navbar-Avatar' src=''/>
          {currentUser.others.name} 
          <span onClick={()=>{signout()}} className="Navbar-Logout"> 
          <span style={{margin:"10px"}}>|</span><AiOutlineLogout/>Logout</span></div>
        :<button onClick={()=>{navigate('/')}} className="Navbar-Button">
          <RiAccountCircleLine/> Sign In</button> }
      </div>
    </div>
    {Open && <Uploadvdo setOpen={setOpen}/>}</>:null}
    </>
  )
}
// navigate(`/Search?q=${q}`)
export default Navbar