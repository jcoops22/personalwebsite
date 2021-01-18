import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
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
      <CardWrapper bg="#ddd">
        <Header text={"What I do"} invert={true} />
        <Card icon={devIcon} header={"Develop"} list={developerItems} />
      </CardWrapper>
      <CardWrapper bg="#30475e">
        <Header text={"My Approach"} />
        <Card
          invert={true}
          icon={designIcon}
          header={"Design"}
          list={designerItems}
        />
      </CardWrapper>
      <CardWrapper bg="#ddd">
        <Header text={"What I bring"} invert={true} />
        <Card icon={uxIcon} header={"UX/UI"} list={uxItems} />
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
  background-color: ${(props) => props.bg};
  /* border: 1px solid green; */
`;
