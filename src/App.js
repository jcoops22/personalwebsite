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
  return (
    <div className="App bg-white dark:bg-gray-700">
      <Container>
        <Navigation />
        <HeroWrapper bg={hero}></HeroWrapper>
        <Statement text="Developer">
          <List items={developerItems} />
        </Statement>
        <Statement text="Designer">
          <List items={developerItems} />
        </Statement>
        <Statement text="UX/UI">
          <List items={developerItems} />
        </Statement>
      </Container>
    </div>
  );
}

export default App;

// styles
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  /* background-color: #f05454; */
  overflow: hidden;
  padding-top: 8rem;
`;
const HeroWrapper = styled.div`
  width: 100%;
  height: 80vh;
  margin-bottom: 8rem;
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  /* border: 2px solid white; */
`;
