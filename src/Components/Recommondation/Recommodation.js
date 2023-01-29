import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Recommodation.css"
import { Config } from '../../Config';
import VideoCard from '../VideoCard/Videocard';


function Recommodation({tags}) {
  const [Videos,setVideos]=useState([]);

  useEffect(()=>{
    const fetch = async()=>{
        const res = await axios.get(`${Config.api}/tags?tags=${tags}`,{headers :{
            "authorization":localStorage.getItem("accessToken")
        }})
        setVideos(res.data);
        console.log(Videos)
    };
    fetch()
  },[tags])
  
    return (
    <div className='Recommodation-Container'>
          {
            Videos.map((vdo)=>{
                 return   <VideoCard type={"sm"} key={vdo._id} vdo={vdo}/>
            })
          }
          </div>
  )
}

export default Recommodation