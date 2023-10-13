import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error?.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://static-00.iconduck.com/assets.00/slack-icon-2048x2048-5nfqoyso.png"
          alt="logo"
        />
        <h1>Please sign-in to Slack</h1>
        <p>slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;

export const LoginContainer = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #f8f8f8;
`;

export const LoginInnerContainer = styled.div`
  -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  padding: 100px;
  text-align: center;
  background-color: white;

  > img {
    height: 100px;
    object-fit: contain;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit;
    background-color: var(--slack-color);
    color: white;
    padding: 18px 25px;
  }
`;
