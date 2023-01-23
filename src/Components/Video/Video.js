import React from "react";
import "./Video.css";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineLibraryAdd } from "react-icons/md";
import logo from "../../img/channelLogo.jpg";
import Comments from "../Comments/Comments";
import VideoCard from "../VideoCard/Videocard";

function Video() {
  return (
    <div className="Video-Container">
      <div className="Video-Content">
        <div className="Video-Wrapper">
          <iframe
            width="100%"
            height="370"
            src="https://www.youtube.com/embed/4ai00NGSFsQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <h1 className="Video-Title">Test Video</h1>
        <div className="Video-Details">
          <div className="Video-Info"> 347938749 views . 2days ago</div>
          <div className="Video-Buttons">
            <div className="Video-Button">
              <SlLike size={"1.2em"} /> 2106
            </div>
            <div className="Video-Button">
              {" "}
              <SlDislike size={"1.2em"} /> 1210{" "}
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
            <img className="Video-ChannelImg" src={logo} />
            <div className="Video-ChannelDetail">
              <span className="Video-ChannelName">MB Channel</span>
              <div className="Video-ChannelCounter">21k Subscribers</div>
              <div className="Video-ChannelDescription">
                Recorded and Edited by Wesley, Chandrasekaran TK at Akshrah
                SoundLab Song Mixed & Mastered by Balu Thankachan @ 20dBBlack
              </div>
            </div>
          </div>
          <button className="Video-ChannelSubscribe">Subscribe</button>
        </div>
        <hr className="Video-Hr" />
        <Comments/>
      </div>
      <div className="Video-Recommodation">
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        

        </div>
    </div>
  );
}

export default Video;
