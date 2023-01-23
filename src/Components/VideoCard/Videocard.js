import React from 'react'
import "./Videocard.css"
import mb from '../../img/mb.jpg'
import logo from '../../img/channelLogo.jpg'
import { Link } from 'react-router-dom'

function VideoCard({type}) {
  return (
    <Link to={'/video/2106'} style={{textDecoration:"none"}}>
    <div className='Card-Container' style={{display : `${type=="sm" && "flex" }`, marginBottom:`${type=="sm" && "10px" }` }}>
      <img src={mb} className='Card-Img'style={{height:`${type=="sm" && "120px" }}`}}/>
      <div className='Card-Details'>
        <img src={logo} className='Channel-Img' style={{display:`${type=="sm" && "none" }`}}/>
        <div className='Card-Texts' style={{fontSize:`${type=="sm" && "12px" }`}}>
            <h1 className='Card-Title'>Test Title for video</h1>
            <h2 className='Card-ChannelName'>MB channel</h2>
            <div className='Card-Info'>273548 view . 2 days ago </div>
          </div>
      </div>
      </div>
      </Link>
  )
}

export default VideoCard