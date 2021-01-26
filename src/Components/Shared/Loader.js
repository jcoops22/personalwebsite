import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <Loading></Loading>
    </Wrapper>
  );
};

export default Loader;

// styles
const Wrapper = styled.div`
  position: absolute;
  top: calc(50% - 1.5rem);
  left: calc(50% - 1.5rem);
`;
const Loading = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  animation: spinLoader 1s linear infinite;
  border: 3px solid gray;
  border-top-color: darkgray;

  @keyframes spinLoader {
    to {
      transform: rotate(360deg);
    }
  }
`;
