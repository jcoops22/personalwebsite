import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { Link } from "react-router-dom";
import Header from "../Shared/Header";
import {
  devIconvar,
  designIconvar,
  uxIconvar,
  developerItemsvar,
  designerItemsvar,
  uxItemsvar,
} from "./StatementInfo";

const StatementsWrapper = () => {
  const [devIcon] = useState(devIconvar);
  const [designIcon] = useState(designIconvar);
  const [uxIcon] = useState(uxIconvar);
  const [developerItems] = useState(developerItemsvar);
  const [designerItems] = useState(designerItemsvar);
  const [uxItems] = useState(uxItemsvar);

  return (
    <Wrapper>
      <CardWrapper bg="#ddd" className="card">
        <Header text={"What I do"} invert={true} />
        <Card icon={devIcon} header={"Develop"} list={developerItems} />
      </CardWrapper>
      <CardWrapper bg="#30475e" className="card">
        <Header text={"My Approach"} />
        <Card
          invert={true}
          icon={designIcon}
          header={"Design"}
          list={designerItems}
        />
      </CardWrapper>
      <CardWrapper bg="#ddd" className="card">
        <Header text={"What I bring"} invert={true} />
        <Card icon={uxIcon} header={"UX/UI"} list={uxItems} />
        <BtnWrapper>
          <Link to="/work">
            <button>See my work</button>
          </Link>
        </BtnWrapper>
      </CardWrapper>
    </Wrapper>
  );
};

export default StatementsWrapper;

// styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
`;
const CardWrapper = styled.div`
  min-height: 800px;
  width: 100%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition-duration: 1.5s;
  background-color: ${(props) => props.bg};
  /* border: 1px solid green; */

  button {
    &:hover {
      /* color: #222831; */
      background-color: #30475e;
    }
    width: 9rem;
    height: 4rem;
    font-weight: 200;
    font-size: 1.3rem;
    margin: auto;
    color: #ddd;
    transition-duration: 0.3s;
    border-radius: 5px;
    background-color: #f05454;
  }
`;
const BtnWrapper = styled.div`
  margin: auto;
`;
