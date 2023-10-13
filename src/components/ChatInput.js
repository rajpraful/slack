import React from "react";
import styled from "styled-components";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const ChatInput = ({ channelId, channelName, chatRef }) => {
  const [user] = useAuthState(auth);
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: e.target.message.value,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user?.displayName,
        userImage: user?.photoURL,
      });
    }
    chatRef?.current?.scrollIntoView({ bahavior: "smooth" });
  };

  return (
    <ChatInputContainer>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder={`Message ${channelName}`}
          name="message"
        />
        <button style={{ display: "none" }} type="submit">
          send
        </button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
`;
