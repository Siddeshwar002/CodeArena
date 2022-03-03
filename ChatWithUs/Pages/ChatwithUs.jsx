import React from "react";

import UserNavigation from "../../Shared/components/UserNavigation";
import ChatFeed from "../Components/ChatFeed/ChatFeed";

const ChatWithUs = () => {
  return (
    <React.Fragment>
      <UserNavigation />
      <ChatFeed />
    </React.Fragment>
  );
};

export default ChatWithUs;
