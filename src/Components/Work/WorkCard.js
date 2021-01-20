import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";

const WorkCard = ({ name, delay }) => {
  return (
    <Container delay={delay} className="flip-in-ver-right ">
      <h1>{name}</h1>
      <Bubble />
    </Container>
  );
};

export default WorkCard;

// styles
const Bubble = styled.div`
  position: absolute;
  top: 100%;
  left: 100%;
  height: 16rem;
  width: 16rem;
  border-radius: 50%;
  background-color: #f05454;
  transition-duration: 0.4s;
`;
const Container = styled.div`
  &:hover ${Bubble} {
    top: calc(100% - 8rem);
    left: calc(100% - 8rem);
  }
  position: relative;
  height: 13rem;
  width: 50%;
  opacity: 0;
  min-width: 290px;
  max-width: 300px;
  margin: 2rem 0.1rem;
  border: 2px solid #ddd;
  background-color: #30475e;
  overflow: hidden;
  border-radius: 20px;
  animation-delay: ${(props) => props.delay};

  @media ${device.tabletS} {
    margin: 0.5rem;
  }
`;
