import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";
import Navigation from "../Shared/Navigation";
import WorkCard from "../Work/WorkCard";
import { workItems } from "../Work/WorkInfo";

const Work = () => {
  const [workIcon] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1611118263/New%20Portfolio%20Site/Icons/001-binary_code_ndwhch.svg"
  );
  const [bg] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1610949169/New%20Portfolio%20Site/Screen_Shot_2021-01-17_at_10.37_1_1_1_kkynsh.jpg"
  );
  const [workImage] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1611115833/New%20Portfolio%20Site/andrew-neel-cckf4TsHAuw-unsplash_ido6m4.jpg"
  );

  return (
    <Container bg={workImage}>
      <Overlay />
      <Navigation />
      <HeaderWrapper bg={bg}>
        <H1Wrapper>
          <img src={workIcon} alt="portfolio work" />
          <Headline>My Work</Headline>
        </H1Wrapper>
        <H3>
          All applications are built with mobile first design methodologies
        </H3>
      </HeaderWrapper>
      <CardWrapper height={window.innerHeight >= 850 ? "100%" : "620px"}>
        {workItems.map((work, ind) => (
          <WorkCard
            name={work.name}
            bg={work.bg}
            delay={`${ind * 0.2}s`}
            key={ind}
          />
        ))}
      </CardWrapper>
    </Container>
  );
};

export default Work;

// styles
const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
`;
const Overlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    146deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(55, 65, 81, 0.9) 34%,
    rgba(17, 24, 39, 0.9) 100%
  );
`;
const CardWrapper = styled.div`
  position: relative;
  z-index: 1;
  height: 100vh;
  padding: 15rem 1rem 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: scroll;
  /* border: 1px solid red; */
`;
const HeaderWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 0.5rem;
  background-color: #374151;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  /* border: 1px solid red; */
`;
const H1Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 1rem;

  img {
    width: 3rem;
    margin-right: 1rem;
  }
`;
const Headline = styled.h1`
  width: 100%;
  font-size: 3rem;
  font-weight: bold;
  color: #f05454;
  text-align: center;
`;
const H3 = styled.h3`
  display: none;
  font-size: 1.3rem;
  color: #ddd;
  text-align: center;
  /* border: 1px solid red; */

  @media ${device.tabletS} {
    display: initial;
    text-align: left;
  }
`;
