import React from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";
import Navigation from "../Shared/Navigation";
import Header from "../Shared/Header";
import WorkCard from "../Work/WorkCard";

const Work = () => {
  return (
    <Container>
      <Navigation />
      <Headline>My Work</Headline>
      <WorkCard name={"Bawls"} />
    </Container>
  );
};

export default Work;

// styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Headline = styled.h1`
  width: 100%;
  font-size: 3rem;
  color: #ddd;
  background-color: #f05454;
`;
