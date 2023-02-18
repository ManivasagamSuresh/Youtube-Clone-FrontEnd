import React, { useEffect, useState } from "react";
import "./Comment.css";
import logo from "../../img/channelLogo.jpg";
import { useSelector } from "react-redux";
import { format } from "timeago.js";
import axios from "axios";
import { Config } from "../../Config";

function Comment({ comment }) {
  const { currentUser } = useSelector((state) => state.user);
  const [User, setUser] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const user = await axios.get(
          `${Config.api}/findUser/${comment.userId}`
        );
        setUser(user.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  }, []);

  return (
    <div className="CommentCard-Container">
      <img src={User.img} className="CommentCard-Avatar" />
      <div className="CommentCard-Details">
        <span className="CommentCard-Name">
          {User.name}{" "}
          <span className="CommentCard-Date">{format(comment.timestamps)}</span>{" "}
        </span>
        <span className="CommentCard-text">{comment.comment}</span>
      </div>
    </div>
  );
}

export default Comment;
