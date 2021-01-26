import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { device } from "../../resources/mediaquery";

const Pictures = ({ pics }) => {
  const [index, setIndex] = useState(0);
  const [leftArrow] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1611210526/New%20Portfolio%20Site/Projects/left-arrow-svgrepo-com_jswv0u.svg"
  );
  const [rigthArrow] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1611210527/New%20Portfolio%20Site/Projects/right-arrow-svgrepo-com_cuk6lt.svg"
  );
  useEffect(() => {}, [index]);

  return (
    <Container>
      {pics ? (
        <Wrapper>
          <ImgWrapper>
            <Prev>
              <img
                src={leftArrow}
                alt="right arrow"
                onClick={() =>
                  setIndex(index <= 0 ? pics.length - 1 : index - 1)
                }
              />
            </Prev>
            <img src={pics[index]} alt="project screenshot" />
            <Next>
              <img
                src={rigthArrow}
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
                onClick={() => setIndex(ind)}
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
  top: 0;
  opacity: 0;
  height: 266px;
  width: 25%;
  cursor: pointer;
  transition-duration: 0.7s;
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
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  animation: slideInPictures 0.8s forwards;
  /* border: 1px solid red; */

  @media ${device.laptop} {
    display: flex;
    width: 50%;
  }

  @keyframes slideInPictures {
    from {
      left: -70%;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 600px;
  /* border: 1px solid red; */
`;
const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;

  img {
    height: 266px;
    width: 100%;
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
