import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { device } from "../../resources/mediaquery";
import Loader from "../Shared/Loader";

const Pictures = ({ pics, show, setShowPictures }) => {
  const [index, setIndex] = useState(0);
  const [leftArrow] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1611210526/New%20Portfolio%20Site/Projects/left-arrow-svgrepo-com_jswv0u.svg"
  );
  const [rightArrow] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1611210527/New%20Portfolio%20Site/Projects/right-arrow-svgrepo-com_cuk6lt.svg"
  );

  useEffect(() => {}, [index, show]);

  return (
    <Container
      show={show ? "flex" : "none"}
      pos={show ? "fixed" : "relative"}
      height={show ? "100vh" : "auto"}
      top={show ? "1rem" : "0"}
      color={show ? "rgba(0,0,0,0.8)" : "transparent"}
    >
      {show ? (
        <Close onClick={() => setShowPictures(false)}>&#10005;</Close>
      ) : null}
      {pics ? (
        <Wrapper max={show ? "990px" : "650px"}>
          <ImgWrapper height={show ? "520px" : "266px"}>
            <Prev>
              <img
                src={leftArrow}
                alt="right arrow"
                onClick={() => {
                  setIndex(index <= 0 ? pics.length - 1 : index - 1);
                }}
              />
            </Prev>
            <Img src={pics[index]} alt="project screenshot" />
            <Next>
              <img
                src={rightArrow}
                alt="right arrow"
                onClick={() => {
                  setIndex(index < pics.length - 1 ? index + 1 : 0);
                }}
              />
            </Next>
          </ImgWrapper>
          <NavDots>
            {pics.map((pic, ind) => (
              <Dot
                key={ind}
                onClick={() => {
                  setIndex(ind);
                }}
                bg={index === ind ? "#ddd" : null}
              />
            ))}
          </NavDots>
        </Wrapper>
      ) : null}
    </Container>
  );
};

export default Pictures;

// styles
const Nav = css`
  &:hover {
    opacity: 0.3;
  }
  position: absolute;
  top: 25%;
  opacity: 0;
  width: 25%;
  height: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition-duration: 0.5s;
  // border: 1px solid red;
`;
const Prev = styled.div`
  ${Nav}
  left: 0;
`;
const Next = styled.div`
  ${Nav}
  left: 75%;
`;
const Container = styled.div`
  position: ${(props) => props.pos};
  top: ${(props) => props.top};
  left: 0;
  z-index: 2;
  width: 100%;
  height: ${(props) => props.height};
  display: ${(props) => props.show};
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  animation: slideInPictures 0.5s cubic-bezier(0.17, 0.67, 0.57, 1.11) forwards;
  /* border: 1px solid red; */

  @media ${device.laptop} {
    display: flex;
    width: 100%;
  }

  @keyframes slideInPictures {
    from {
      left: -70%;
    }
  }
`;
const Close = styled.span`
  position: absolute;
  top: 7rem;
  left: calc(100% - 3rem);
  z-index: 2;
  font-size: 2rem;
  cursor: pointer;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: ${(props) => props.max};
  overflow: hidden;
  /* border: 1px solid yellow; */
`;
const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  /* border: 1px solid blue; */
`;
const Img = styled.img`
  width: 100%;
  /* border: 1px solid green; */

  @media ${device.laptop} {
    width: 90%;
  }
`;
const NavDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background-color: black;
  /* border: 1px solid red; */
`;
const Dot = styled.span`
  height: 10px;
  width: 10px;
  margin: 0 0.1rem;
  border: 1px solid #ddd;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
`;
