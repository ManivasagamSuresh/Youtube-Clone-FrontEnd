import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';
import VideoCard from '../VideoCard/Videocard';
import "./Search.css"
import { Config } from '../../Config';

function Search() {
    // const [searchParams] = useSearchParams() 
    const [Videos,setVideos] = useState([]);
    // let q = searchParams.get('q')
    const query = useLocation().search
    // console.log(q);
    useEffect(()=>{
        const fetch  =   async()=>{
            
            // console.log(q)
            const res = await axios.get(`${Config.api}/search${query}`,{"headers" :{
                "authorization":localStorage.getItem("accessToken"),
            }})
            setVideos(res.data);
        }
        fetch();
    },[query])
  return (
    <div className='Search-Container'>
        {
            Videos.map((vdo)=>{
                 return   <VideoCard key={vdo._id} vdo={vdo}/>
            })
          }
    </div>
  )
}

export default Search