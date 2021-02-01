import React, { useEffect } from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";

const BackgroundHeader = ({ text }) => {
  useEffect(() => {
    // window.addEventListener("scroll", parrallax);
  });

  // parallax effect
  const parrallax = () => {
    const background = document.querySelectorAll(".bg_header_wrapper");
    let scrolled = window.pageYOffset;
    background[0].style.top = scrolled * 0.5 + "px";
    background[1].style.top = scrolled * 0.5 + "px";
    background[2].style.top = scrolled * 0.5 + "px";
    console.log(background);
  };

  return (
    <Wrapper className="bg_header_wrapper">
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
