import React from 'react'
import "./Comments.css"
import logo from '../../img/channelLogo.jpg'
import Comment from '../CommentCard/Comment'




function Comments() {
  return (
    <div className='Comments-Container'>
    <div className='Comments-New'>
        <img className='Comments-Avatar' src={logo}/>
        <input className='Comments-Input' placeholder='Add Your Comment....'/>
    </div>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    </div>
  )
}

export default Comments