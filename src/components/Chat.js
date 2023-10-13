import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import ChatInput from "./ChatInput";
import { db } from "../firebase";
import Message from "./Message";
import { LoginContainer, LoginInnerContainer } from "./Login";
import EmptyMessageIcon from "../EmptyMessages.png";

const Chat = () => {
  const chatRef = useRef(null);
  const roomId = useSelector((state) => state.app.roomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timeStamp", "asc")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [roomId, loading]);

  console.log("mesages", roomMessages);
  return (
    <ChatContainer>
      {roomDetails && roomMessages ? (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
              </h4>
              <StarBorderOutlinedIcon />
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlinedIcon /> Details
              </p>
            </HeaderRight>
          </Header>
          <div>
            {roomMessages?.docs?.length === 0 ? (
              <LoginContainer style={{ backgroundColor: "transparent" }}>
                <MessageInnerContainer
                  style={{ backgroundColor: "transparent" }}
                >
                  <img
                    src={EmptyMessageIcon}
                    alt="no messages"
                    style={{ height: "200px" }}
                  />
                  <h1>Welcome to {roomDetails?.data().name}</h1>
                  <p>
                    It looks empty here, why don't you start the conversation
                  </p>
                </MessageInnerContainer>
              </LoginContainer>
            ) : (
              roomMessages?.docs.map((doc) => {
                const { message, timeStamp, user, userImage } = doc.data();
                console.log("userImage", userImage);
                return (
                  <Message
                    key={doc.id}
                    message={message}
                    timeStamp={timeStamp}
                    user={user}
                    userImage={userImage}
                  />
                );
              })
            )}
            <ChatBottom ref={chatRef} />
          </div>
          <ChatInput
            channelName={roomDetails?.data().name}
            channelId={roomId}
            chatRef={chatRef}
          />
        </>
      ) : (
        <>
          <LoginContainer>
            <MessageInnerContainer>
              <img
                src="https://static-00.iconduck.com/assets.00/slack-icon-2048x2048-5nfqoyso.png"
                alt="logo"
              />
              <h1>Welcome to Slack!</h1>
              <p>Please add or select the channel to begin</p>
            </MessageInnerContainer>
          </LoginContainer>
        </>
      )}
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid lightgrey;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
  }

  > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 16px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  > p {
    display: flex;
    align-items: center;
    font-size: 14px;

    > .MuiSvgIcon-root {
      margin-right: 5px;
      font-size: 16px;
    }
  }
`;

const ChatBottom = styled.div`
  padding-bottom: 130px;
`;

const MessageInnerContainer = styled(LoginInnerContainer)`
  box-shadow: none;
  background-color: #f8f8f8;
  > img {
    margin-bottom: 10px;
  }
  > h1 {
    padding: 10px;
  }
  > p {
    color: gray;
    font-weight: 400;
  }
`;
