import React from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";
import Navigation from "../Shared/Navigation";

const Contact = () => {
  const handleSubmit = () => {
    fetch("/hey").then((data) => {
      console.log(data.json());
    });
  };
  return (
    <Container>
      <Navigation />
      <h1>Contact Page</h1>
      <button onClick={() => handleSubmit()}>Click</button>
    </Container>
  );
};

export default Contact;

// styles
const Container = styled.div`
  min-height: 100vh;
  background-color: #30475e;
`;
