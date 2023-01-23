import React from "react";
import "./Comment.css";
import logo from '../../img/channelLogo.jpg'

function Comment() {
  return (
  
  <div className="CommentCard-Container">
    <img src={logo} className="CommentCard-Avatar" />
    <div className="CommentCard-Details">
        <span className="CommentCard-Name">Bakya <span className="CommentCard-Date">1 days ago</span> </span>
        <span className="CommentCard-text">AK Mass,I'm Ak veriyan</span>
    </div>
    </div>
    
    )
}

export default Comment;
