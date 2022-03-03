import React from "react";

import "./ChatFeed.css";

import ChatEachItem from "./ChatEachItem/ChatEachItem";
import TypicalText from "../../../Shared/components/TypicalText";

import img1 from "../../../PostFeed/components/Feed/FeedPeopleImages/1.jpg";



var TitleArr = ["CONNECT", "CONNECTING..."];

const ChatFeed = () => {
  return (
    <React.Fragment>
      <div className="ChatMainElement">
        <div className="ChatSubElement">
          {/* Left BAR */}
          <div className="ChatLeftMainBar">
            <div className="ChatLeftMainBarHeader">
              <p className="ChatLeftMainBarHeaderText">
                <TypicalText TextArr={TitleArr} />
              </p>
            </div>

            {/* Left BAR List of people*/}
            <div className="ChatLeftMainBarList">
              <div class="ChatLeftMainBarListScrollbar" id="style-4">
                <div class="ChatLeftMainBarListSrollforce-overflow">
                  <ChatEachItem />
                  <ChatEachItem />
                  <ChatEachItem />
                  <ChatEachItem />
                  <ChatEachItem />
                  <ChatEachItem />
                  <ChatEachItem />
                  <ChatEachItem />
                  <ChatEachItem />
                  <ChatEachItem />
                  <ChatEachItem />
                  <ChatEachItem />
                  <ChatEachItem />
                  <ChatEachItem />
                  <ChatEachItem />
                  <ChatEachItem />
                  <ChatEachItem />
                  <ChatEachItem />
                  <ChatEachItem />
                  <ChatEachItem />
                  <ChatEachItem />
                </div>
              </div>
            </div>
          </div>

          {/* RightBAR */}
          <div className="ChatRightMainBar">
            <div className="ChatRightMainBarHeader">
              <img className="ChatEachItemImg" src={img1} alt="" />
              <p className="ChatRightMainBarHeaderText">Sherlock Holmes</p>
            </div>

            {/* RightBAR Chat List */}

            <div className="ChatRightMainBarList">
              <div class="ChatRightMainBarListScrollbar" id="style-4">
                <div class="ChatRightMainBarListScrollbarforce-overflow">
                  <div class="message sol">
                    <div class="messageText">thats thats ok</div>
                  </div>
                  <div class="message sag mtLine">
                    <div class="messageText">ok thanthanthan</div>
                  </div>
                  <div class="message sol">
                    <div class="messageText">thatsthats ok</div>
                  </div>
                  <div class="message sag mtLine">
                    <div class="messageText">ok thanthanthan</div>
                  </div>{" "}
                  <div class="message sol">
                    <div class="messageText">thats thats ok</div>
                  </div>
                  <div class="message sag mtLine">
                    <div class="messageText">ok thanthanthan</div>
                  </div>{" "}
                  <div class="message sol">
                    <div class="messageText">thats thatsok</div>
                  </div>
                  <div class="message sag mtLine">
                    <div class="messageText">ok thanthanthan</div>
                  </div>{" "}
                  <div class="message sol">
                    <div class="messageText">thats othatsk</div>
                  </div>
                  <div class="message sag mtLine">
                    <div class="messageText">ok thanthanthan</div>
                  </div>{" "}
                  <div class="message sol">
                    <div class="messageText">thats othatsk</div>
                  </div>
                  <div class="message sag mtLine">
                    <div class="messageText">ok thanthanthan</div>
                  </div>{" "}
                  <div class="message sol">
                    <div class="messageText">thats othatsk</div>
                  </div>
                  <div class="message sag mtLine">
                    <div class="messageText">ok thanthanthan</div>
                  </div>{" "}
                  <div class="message sol">
                    <div class="messageText">thats othatsk</div>
                  </div>
                  <div class="message sag mtLine">
                    <div class="messageText">ok thanthanthan</div>
                  </div>{" "}
                  <div class="message sol">
                    <div class="messageText">thats othatsk</div>
                  </div>
                  <div class="message sag mtLine">
                    <div class="messageText">ok thanthanthan</div>
                  </div>{" "}
                  <div class="message sol">
                    <div class="messageText">thats ok</div>
                  </div>
                  <div class="message sag mtLine">
                    <div class="messageText">ok thanthanthan</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ChatRightMainBarFoot">
              <div className="FootInputMessage">
                <input
                  className="MessageInputs"
                  name="Message"
                  placeholder="Message"
                  required
                />
              </div>

              <div className="FootInputMessageSendBTN">
                <i
                  class="fa fa-2x fa-paper-plane  SendBTN"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatFeed;

{
  /* <div className="ChatRightMainBarList">
              <div class="ChatLeftMainBarListScrollbar" id="style-4">
                <div class="ChatLeftMainBarListScrollbarforce-overflow">
                  <div className="ChatMessages">
                    <p className="ChatMessagesText">
                      Sherlock klsjdnckj skdj c KLJSDnc kLSJDnc kjkjS KSD Nc
                      LKDcnj kSJDc k lkSDNc lk SJDN c k DNsc
                    </p>
                  </div>

                  <div class="message sol">
                    <div class="messageText">thats ok</div>
                  </div>

                  <div class="message sag mtLine">
                    <div class="messageText">ok thanthanthan</div>
                  </div>

                </div>
              </div>
            </div> */
}
