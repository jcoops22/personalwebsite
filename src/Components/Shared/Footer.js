import React from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";

const Footer = () => {
  return (
    <Container>
      <Wrapper>My Footer</Wrapper>
    </Container>
  );
};

export default Footer;

// styles
const Container = styled.footer`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 6rem;
  background-color: #222831;
  margin: 0;
  /* border: 1px solid green; */
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ddd;
`;
