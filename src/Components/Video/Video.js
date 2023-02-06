import React, { useEffect, useState } from "react";
import "./Video.css";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import Comments from "../Comments/Comments";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuccess, like , dislike, views } from "../Redux/videoSlice";
import { format } from 'timeago.js'
import { Config } from "../../Config";
import { subscription } from "../Redux/userSlice";
import Recommodation from "../Recommondation/Recommodation";
import { Socket } from "socket.io-client";

function Video({socket}) {


  const {currentUser} = useSelector(state => state.user)
  const {currentVideo} = useSelector(state => state.video)
  const [Channel,setChannel]=useState({});
const params = useParams();
const dispatch = useDispatch()



useEffect(()=>{
  const fecthData = async()=>{
    
    try {
      await axios.put(`${Config.api}/videoViews/${currentVideo._id}`,{"headers" :{
        "authorization":localStorage.getItem("accessToken")
    }})
      const  vdo = await axios.get(`${Config.api}/findvideo/${params.id}`,{headers :{
        "authorization":localStorage.getItem("accessToken")
    }})
      const  chnl = await axios.get(`${Config.api}/findUser/${vdo.data.userId}`,{headers :{
        "authorization":localStorage.getItem("accessToken")
    }})         
    console.log(vdo)
          setChannel(chnl.data);
          dispatch(fetchSuccess(vdo.data));
          dispatch(views(vdo.data));
    } catch (error) {
      console.log(error)
    }
  }
  fecthData();
},[params.id,dispatch])




const handlelike = async()=>{
  try {

    const add = await axios.put(`${Config.api}/like/${currentVideo._id}`,{"headers" :{
      "authorization":localStorage.getItem("accessToken"),
  }})
  
  dispatch(like(currentUser.others._id))
  } catch (error) {
    console.log("error"); 
  }
}

const handledislike = async()=>{
  try {
    const dis = await axios.put(`${Config.api}/dislike/${currentVideo._id}`,{"headers" :{
      "authorization":localStorage.getItem("accessToken")
  }})
  dispatch(dislike(currentUser.others._id))
  } catch (error) {
    console.log(error); 
  }
}


const handleSub = async()=>{


  currentUser.others.subscribedUsers.includes(Channel._id)
  ? await axios.put(`${Config.api}/unsub/${Channel._id}`,{ "headers" :{
    "authorization":localStorage.getItem("accessToken")
}})
:await axios.put(`${Config.api}/sub/${Channel._id}`,{ "headers" :{
  "authorization":localStorage.getItem("accessToken")
}});
  dispatch(subscription(Channel._id));


}



  return (
    <div className="Video-Container">
      <div className="Video-Content">
        <div className="Video-Wrapper">
          <video className="Video-Vdo" src={currentVideo?.videoUrl} controls/>          
        </div>
        <h1 className="Video-Title">{currentVideo?.title}</h1>
        <div className="Video-Details">
          { <div className="Video-Info">{currentVideo?.views}  views . {format(currentVideo.timestamps)}</div> }
          <div className="Video-Buttons">
            <div className="Video-Button" >
              {currentVideo?.likes?.includes(currentUser.others._id)?<AiFillLike size={"1.2em"} /> :<AiOutlineLike size={"1.2em"} onClick={handlelike}/>}
              {currentVideo?.likes?.length}
            </div>
            <div className="Video-Button" >
            {currentVideo?.dislikes?.includes(currentUser.others._id)?<AiFillDislike size={"1.2em"}/>:<AiOutlineDislike size={"1.2em"} onClick={handledislike}/>}
            </div>
            <div className="Video-Button">
              <RiShareForwardLine size={"1.3em"} />
              Share
            </div>
            <div className="Video-Button">
              <MdOutlineLibraryAdd size={"1.3em"} />
              Save
            </div>
          </div>
        </div>
        <hr className="Video-Hr" />

        <div className="Video-Channel">
          <div className="Video-ChannelInfo">
            <img className="Video-ChannelImg" src={Channel.img} />
            <div className="Video-ChannelDetail">
              <span className="Video-ChannelName">{Channel.name}</span>
              <div className="Video-ChannelCounter">{Channel.subscribers} Subscribers</div>
              <div className="Video-ChannelDescription">
              {currentVideo?.desc}
              </div>
            </div>
          </div>
          <button className="Video-ChannelSubscribe" onClick={handleSub}>{currentUser.others.subscribedUsers?.includes(Channel._id) ? "Subscribed":  "Subscribe"}</button>
        </div>
        <hr className="Video-Hr" />
        <Comments videoID={currentVideo?._id} socket={socket}/>
      </div>
      <Recommodation tags={currentVideo?.tags}/>     
    </div>
  );
}

export default Video;
