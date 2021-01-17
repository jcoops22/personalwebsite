import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { device } from "./resources/mediaquery";
import Statement from "./Components/Intro/Statement";
import List from "./Components/Intro/List";
import Navigation from "./Components/Navigation";
import hero from "./resources/hero.svg";

function App() {
  const [developerItems] = useState([
    "Building full stack applications with modern JavaScript frameworks",
    "Backend proficiencies with NodeJS, Ruby and Python",
  ]);
  const [code] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1610868877/Screen_Shot_2021-01-17_at_12.32.51_AM_avm92z.png"
  );

  return (
    <AppWrapper className="App bg-gray-700">
      <Container bg={code}>
        <Navigation />
        <HeroWrapper bg={hero}>
          <H1 className="lip-in-hor-bottom ">I'm Jonathan</H1>
          <H3>Full Stack Web Developer</H3>
        </HeroWrapper>
        <StatementWrapper>
          <Statement text="Developer">
            <List items={developerItems} />
          </Statement>
          <Statement text="Designer">
            <List items={developerItems} />
          </Statement>
          <Statement text="UX/UI">
            <List items={developerItems} />
          </Statement>
        </StatementWrapper>
      </Container>
    </AppWrapper>
  );
}

export default App;

// styles
const AppWrapper = styled.div``;
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  padding-top: 5rem;
  padding-left: -1rem;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  /* border: 1px solid red; */
`;
const HeroWrapper = styled.div`
  position: relative;
  left: 0;
  width: 100%;
  height: 80vh;
  margin-bottom: 8rem;
  padding-bottom: 1.5rem;
  background-image: url(${(props) => props.bg});
  background-position: right;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: slideRight 0.8s linear forwards;
  /* border: 2px solid white; */

  @keyframes slideRight {
    from {
      opacity: 0;
      left: -30%;
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
const StatementWrapper = styled.div`
  padding: 4rem 1rem;
  min-height: 100vh;
  background-color: #ddd;
`;
