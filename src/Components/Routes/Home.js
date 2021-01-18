import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";
import Navigation from "../Shared/Navigation";
import Hero from "../Hero/Hero";
import StatementsWrapper from "../Intro/StatementsWrapper";

const Home = () => {
  const [code] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1610949169/New%20Portfolio%20Site/Screen_Shot_2021-01-17_at_10.37_1_1_1_kkynsh.jpg"
  );
  return (
    <Container bg={code}>
      <Navigation />
      <Hero />
      <StatementsWrapper />
    </Container>
  );
};

export default Home;
// styles
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
