import React from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";

const InfoModal = ({ showMore, work }) => {
  return (
    <Container onClick={() => showMore(false)}>
      <h1>{work.name}</h1>
    </Container>
  );
};

export default InfoModal;

// styles
const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
`;
