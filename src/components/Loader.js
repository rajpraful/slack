import React from "react";
import styled from "styled-components";
import Spinner from "react-spinkit";

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderInnerContainer>
        <img
          src="https://static-00.iconduck.com/assets.00/slack-icon-2048x2048-5nfqoyso.png"
          alt="logo"
        />
        <CustomSpinner
          name="ball-spin-fade-loader"
          color="purple"
          fadeIn="none"
        />
      </LoaderInnerContainer>
    </LoaderContainer>
  );
};

export default Loader;

export const LoaderContainer = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  margin: auto;
`;

export const LoaderInnerContainer = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
    object-fit: contain;
  }
`;

const CustomSpinner = styled(Spinner)`
  margin: auto;
`;
