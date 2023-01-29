import React, { useContext } from 'react'
import "./Menu.css"


import logo from '../../img/log.png'
import { AiFillHome } from 'react-icons/ai';
import { MdOutlineExplore } from 'react-icons/md';
import { MdOutlineSubscriptions } from 'react-icons/md';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import { MdOutlineHistory } from 'react-icons/md';
import { MdOutlineSettings } from 'react-icons/md';
import { MdHelpOutline } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';
import { RiAccountCircleLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/userContext';
import { useSelector } from 'react-redux';


function Menu() {
   const navigate = useNavigate()
   
   const {currentUser} = useSelector(state => state.user)
  return (
   <div className='Menu-Container'>
   
      <div className='Menu-Wrapper'>
      <Link to={'/'}  style={{textDecoration:"none",color:"inherit"}} >  
      <div className="Menu-Logo">
            <img className='Menu-Img' src={logo}/>
            MBTube            
        </div>
      </Link>
      
        <div className="Menu-Item" onClick={()=>{navigate("/")}}>
           <AiFillHome size={"1.5em"}/> Home
        </div>
        <div className="Menu-Item" onClick={()=>{navigate("/trendvideo")}}>
           <MdOutlineExplore size={"1.5em"}/> Explore
        </div>
        <div className="Menu-Item" onClick={()=>{navigate("/subscribedVideo")}}>
           <MdOutlineSubscriptions size={"1.5em"}/> Subscription
        </div>
        
        
            { !currentUser && 
            <>
            <hr className='Menu-Hr'/>
            <div className="Login">
            Sign In to Like , comment and Subscribe .
            <br/>
            <button onClick={()=>{navigate('/Login')}} className='Menu-Button'><RiAccountCircleLine size={"1.3em"}/> Sign In</button>
            </div>
            </>  }
            
        
        <hr className='Menu-Hr'/>
        <div className="Menu-Item">
           <MdOutlineVideoLibrary size={"1.5em"}/> Library
        </div>
        <div className="Menu-Item">
           <MdOutlineHistory size={"1.5em"}/> History
        </div>
        <hr className='Menu-Hr'/>
        <div className="Menu-Item">
           <MdOutlineSettings size={"1.5em"}/> Setting
        </div>
        <div className="Menu-Item">
           <MdHelpOutline size={"1.5em"}/> Help
        </div>
        

      </div>
      
      
    
   </div>
    
  )
}

export default Menu