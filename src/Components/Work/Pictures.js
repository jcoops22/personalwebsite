import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";

const Pictures = ({ pics }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    console.log(index);
  }, [index]);

  return (
    <Container>
      {pics ? (
        <Wrapper>
          <ImgWrapper>
            <img src={pics[index]} alt="project screenshot" />
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
const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  display: none;
  animation: slideInPictures 0.8s forwards;
  /* border: 1px solid red; */

  @media ${device.tabletS} {
    display: initial;
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
  width: 100%;
  height: 266px;
  display: flex;
  align-items: center;

  img {
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
