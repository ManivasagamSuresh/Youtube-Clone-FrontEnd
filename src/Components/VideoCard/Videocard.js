import React, { useEffect, useState } from 'react'
import "./Videocard.css"
import mb from '../../img/mb.jpg'
import logo from '../../img/channelLogo.jpg'
import { Link } from 'react-router-dom'
import { format } from 'timeago.js'
import axios from 'axios'
import { Config } from '../../Config'

function VideoCard({type,vdo,test}) {

  const[Channel , setChannel] = useState({})

  useEffect(()=>{
    
    fetchChannel();
    // console.log(Videos)
  },[vdo.userId])
  
  const fetchChannel = async()=>{
    try {
      const channeldata = await axios.get(`${Config.api}/findUser/${vdo.userId}`)  
      // console.log(channedata.data) ;  
       setChannel(channeldata.data);
    } catch (error) {
      console.log(error);
    }
      
  }


  return (

    <Link to={'/video/2106'} style={{textDecoration:"none"}}>
    {console.log(test)}
    <div className='Card-Container' style={{display : `${type=="sm" && "flex" }`, marginBottom:`${type=="sm" && "20px" } `,width:`${type=="sm" && "100%" } `,alignItems:`${type=="sm" && "center" } ` }}>
      <img src={vdo.imgUrl} className='Card-Img'style={{height:`${type=="sm" && "95px" }`,width:`${type=="sm" && "180px" }`}}/>
      <div className='Card-Details' style={{marginTop:`${type=="sm" && "0px" }`}}>
        <img src={Channel.img} className='Channel-Img' style={{display:`${type=="sm" && "none" }`}}/>
        <div className='Card-Texts' style={{fontSize:`${type=="sm" && "12px" }`}}>
            <h1 className='Card-Title'>{vdo.title}</h1>
            <h2 className='Card-ChannelName' >{Channel.name}</h2>
            <div className='Card-Info'>{vdo.views} views · {format(vdo.timestamps)}</div>
          </div>
      </div>
      </div>
      </Link>
  )
}
// {vdo.views} views · {format(vdo.timestamps)}
export default VideoCard

