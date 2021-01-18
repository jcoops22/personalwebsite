import React from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";

const Card = ({ header, list, icon, invert }) => {
  return (
    <Wrapper className="shadow-lg" color={invert ? "#ddd" : "222831"}>
      <Header>
        <img src={icon} alt="header" /> <h1>{header}</h1>
      </Header>
      <ul>
        {list.map((item, ind) => (
          <li key={ind}>{item.name}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Card;

// styles
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 800px;
  padding: 3.5rem 1rem;
  color: ${(props) => props.color};
  border-radius: 20px;
  /* border: 1px solid blue; */

  img {
    width: 5rem;
  }

  ul {
    border: 1px solid red;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #f05454;
    font-size: 3rem;
    padding-left: 1rem;
  }
`;
