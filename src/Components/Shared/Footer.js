import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";

const Footer = () => {
  const [gitHub] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1611464622/New%20Portfolio%20Site/Footer%20Icons/github-svgrepo-com_1_urstx7.svg"
  );
  const [linkedin] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1611467385/New%20Portfolio%20Site/Footer%20Icons/linkedin-svgrepo-com_eqvjc9.svg"
  );
  const [gmail] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1611467385/New%20Portfolio%20Site/Footer%20Icons/gmail-svgrepo-com_bgfut5.svg"
  );
  return (
    <Container>
      <Wrapper>
        <Item>
          <span>GitHub</span>
          <img src={gitHub} alt="github" />
        </Item>
        <Item>
          <span>Gmail</span>
          <img src={gmail} alt="gmail" />
        </Item>
        <Item>
          <span>LinkedIn</span>
          <img src={linkedin} alt="linked in" />
        </Item>
      </Wrapper>
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ddd;
`;
const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 1.5rem;
  width: fit-content;
  max-width: 5rem;
  font-size: 0.8rem;
  font-weight: 200;
  margin: 2rem;
  cursor: pointer;
  /* border: 1px solid red; */

  span {
    height: 1rem;
    /* border: 1px solid red; */
  }

  img {
    width: 0.8rem;
    margin-left: 0.2rem;
    /* border: 1px solid red; */
  }
`;
