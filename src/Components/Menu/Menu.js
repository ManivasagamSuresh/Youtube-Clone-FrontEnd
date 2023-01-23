import React from 'react'
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
import { Link } from 'react-router-dom';


function Menu() {
  return (
   <div className='Menu-Container'>
   
      <div className='Menu-Wrapper'>
      <Link to={'/'}  style={{textDecoration:"none",color:"inherit"}} >  
      <div className="Menu-Logo">
            <img className='Menu-Img' src={logo}/>
            MBTube            
        </div>
      </Link>
      
        <div className="Menu-Item">
           <AiFillHome/> Home
        </div>
        <div className="Menu-Item">
           <MdOutlineExplore/> Explore
        </div>
        <div className="Menu-Item">
           <MdOutlineSubscriptions/> Subscription
        </div>
        <hr className='Menu-Hr'/>
        <div className="Login">
            Sign In to Like , comment and Subscribe .
            <br/>
            <button className='Menu-Button'><RiAccountCircleLine/> Sign In</button> 
        </div>
        <hr className='Menu-Hr'/>
        <div className="Menu-Item">
           <MdOutlineVideoLibrary size={"2em"}/> Library
        </div>
        <div className="Menu-Item">
           <MdOutlineHistory/> History
        </div>
        <hr className='Menu-Hr'/>
        <div className="Menu-Item">
           <MdOutlineSettings/> Setting
        </div>
        <div className="Menu-Item">
           <MdHelpOutline/> Help
        </div>
        <div className="Menu-Item">
           <MdOutlineLightMode/> Light Mode
        </div>

      </div>
      
      
    
   </div>
    
  )
}

export default Menu