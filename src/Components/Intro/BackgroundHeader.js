import React from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";

const BackgroundHeader = ({ text }) => {
  return (
    <Wrapper>
      <h1>{text}</h1>
    </Wrapper>
  );
};

export default BackgroundHeader;

// styles
const Wrapper = styled.div`
  position: absolute;
  top: 8rem;
  left: 0;

  h1 {
    width: 100vw;
    text-align: center;
    font-size: clamp(3rem, 11vw, 8rem);
    opacity: 0.1;
  }

  @media ${device.tabletS} {
    top: 5rem;
  }
`;
