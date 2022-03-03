import React from "react";

import "./ChatEachItem.css";
import img1 from "../../../../PostFeed/components/Feed/FeedPeopleImages/1.jpg";

const ChatEachItem = () =>{
    return (
      <div className="ChatEachItemMain">
        <img className="ChatEachItemImg"  src={img1} alt="" />
        <p className="ChatEachItemText">Sherlock Holmes</p>
      </div>
    );
};

export default ChatEachItem;