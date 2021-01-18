import React, { useState } from "react";
import "./App.css";
import { device } from "./resources/mediaquery";
import styled from "styled-components";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero/Hero";
import StatementsWrapper from "./Components/Intro/StatementsWrapper";

function App() {
  const [code] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1610949169/New%20Portfolio%20Site/Screen_Shot_2021-01-17_at_10.37_1_1_1_kkynsh.jpg"
  );

  return (
    <AppWrapper className="App bg-gray-700">
      <Container bg={code}>
        <Navigation />
        <Hero />
        <StatementsWrapper />
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
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  /* border: 1px solid red; */

  @media ${device.tabletS} {
    background-image: url(${(props) => props.bg});
  }
`;
