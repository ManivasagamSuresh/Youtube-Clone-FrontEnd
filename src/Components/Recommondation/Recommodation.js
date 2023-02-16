import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Recommodation.css"
import { Config } from '../../Config';
import VideoCard from '../VideoCard/Videocard';
import { useSelector } from 'react-redux';


function Recommodation({tags}) {
  const [Videos,setVideos]=useState([]);
  const {currentVideo}=useSelector(state=>state.video)

  useEffect(()=>{
    const fetch = async()=>{
        const res = await axios.get(`${Config.api}/tags?tags=${tags}`,{headers :{
            "authorization":localStorage.getItem("accessToken")
        }})
        // res.data
        let data = res.data;
        let index = data.findIndex(ele=>ele._id==currentVideo._id)
        data.splice(index,1);
        console.log(data);
        setVideos(data);
        console.log(Videos)
    };
    fetch()
  },[tags,currentVideo])
  
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