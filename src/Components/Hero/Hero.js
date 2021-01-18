import React from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";
import hero from "../../resources/hero.svg";

const Hero = () => {
  return (
    <HeroWrapper bg={hero}>
      <H1 className="lip-in-hor-bottom ">I'm Jonathan</H1>
      <H3>Full Stack Web Developer</H3>
    </HeroWrapper>
  );
};

export default Hero;

// styles
const HeroWrapper = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 611px;
  margin-bottom: 8rem;
  padding-bottom: 1.9rem;
  background-image: url(${(props) => props.bg});
  background-position: right;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: slideRight 0.8s cubic-bezier(0.76, 0.13, 0.12, 0.92) forwards;
  /* border: 2px solid white; */

  @keyframes slideRight {
    from {
      opacity: 0;
      top: 50px;
    }
  }

  @media ${device.mobileL} {
    align-items: center;
  }
  @media ${device.tabletS} {
    background-position: center;
  }
`;
const H1 = styled.h1`
  min-height: 5.5rem;
  font-size: 3rem;
  color: #f05454;
  font-weight: 600;
  padding-left: 0.5rem;
  background-color: #374151;
  border-top-right-radius: 20px;
  /* border: 1px solid red; */

  @media ${device.tabletS} {
    font-size: 3.7rem;
    padding-right: 2rem;
    background-color: transparent;
  }
`;
const H3 = styled.h3`
  font-size: 1.8rem;
  color: #ddd;
  padding-left: 0.5rem;
  margin-top: -0.2rem;
  border-top-right-radius: 20px;
  background-color: #374151;
  /* border: 1px solid red; */

  @media ${device.tabletS} {
    background-color: transparent;
  }
`;
