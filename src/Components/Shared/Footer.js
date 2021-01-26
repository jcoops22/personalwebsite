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
          <a
            href="https://github.com/jcoops22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
            <img src={gitHub} alt="github" />
          </a>
        </Item>
        <Item>
          <a href="mailto:%20jcooper232074@gmail.com?subject=Getting%20In%20Touch">
            <span>Gmail</span>
            <img src={gmail} alt="gmail" />
          </a>
        </Item>
        <Item>
          <a
            href="https://www.linkedin.com/in/jonathancooperwebdeveloper/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>
            <img src={linkedin} alt="linked in" />
          </a>
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Footer;

// styles
const Container = styled.footer`
  position: relative;
  bottom: 0;
  z-index: 1;
  width: 100%;
  background-color: #222831;
  padding: 0.5rem 0;

  /* border: 1px solid green; */
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: #ddd;
`;
const Item = styled.div`
  height: 1.5rem;
  width: fit-content;
  max-width: 5rem;
  font-size: 0.8rem;
  font-weight: 200;
  margin: 0.5rem 2rem 0;
  cursor: pointer;
  /* border: 1px solid red; */

  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  span {
    height: 1rem;
    /* border: 1px solid red; */
  }

  img {
    width: 0.8rem;
    margin-left: 0.2rem;
    /* border: 1px solid red; */
  }

  @media ${device.tabletS} {
    margin: 1rem 2rem 0;
  }
`;
