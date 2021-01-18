import React from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";

const Header = ({ text, invert }) => {
  return (
    <Wrapper>
      <H1 border={invert ? "2px solid #30475e" : "2px solid #ddd"}>{text}</H1>
    </Wrapper>
  );
};

export default Header;

// styles
const Wrapper = styled.div`
  position: relative;
  left: -1rem;
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  /* border: 1px solid red; */
`;
const H1 = styled.h1`
  font-size: 1.5rem;
  color: #ddd;
  padding: 0.3rem 0.5rem 0.3rem 1.5rem;
  background-color: #f05454;
  border-radius: 8px;
  border: ${(props) => props.border};
`;
