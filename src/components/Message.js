import React from "react";
import styled from "styled-components";

const Message = ({ message, timeStamp, user, userImage }) => {
  return (
    <MessageContainer>
      <img src={userImage} alt={user} />
      <MessageInfo>
        <strong>{user}</strong>{" "}
        <span>{new Date(timeStamp?.toDate()).toLocaleString()}</span>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
  }
`;
const MessageInfo = styled.div`
  padding-left: 10px;
  > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;
