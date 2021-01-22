import React from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";
import Navigation from "../Shared/Navigation";

const Contact = () => {
  const handleSubmit = () => {
    fetch("/hey")
      .then((data) => {
        console.log(data);
        // console.log(data.json());
      })
      .catch((err) => console.log(err));
    setTimeout(() => {
      fetch("/hoooooo")
        .then((data) => console.log(data))
        .catch((err) => console.log(err.message));
    }, 1000);
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
