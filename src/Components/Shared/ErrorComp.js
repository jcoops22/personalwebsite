import React from "react";
import styled from "styled-components";

const ErrorComp = ({ message, err }) => {
  return (
    <Wrapper>
      <ErrorMessage>
        <Message>
          {message}:<ErrText>{err}.</ErrText>
        </Message>
      </ErrorMessage>
    </Wrapper>
  );
};

export default ErrorComp;

// styles
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ErrorMessage = styled.div`
  position: relative;
  top: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  opacity: 0;
  animation: slideErrMessageUp 0.8s forwards;
  font-size: 1.2rem;
  font-weight: 300;
  /* border: 1px solid red; */

  @keyframes slideErrMessageUp {
    to {
      top: 0;
      opacity: 1;
    }
  }
`;
const Message = styled.p`
  color: #30475e;
  background-color: #ddd;
  padding: 1.5rem;
  box-shadow: 0 0 12px 3px #ddd;
`;
const ErrText = styled.span`
  text-decoration: underline;
  color: #ff0f5e;
  padding-left: 0.5rem;
`;
