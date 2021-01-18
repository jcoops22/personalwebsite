import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";
import Card from "./Card";
import Header from "../Shared/Header";

const StatementsWrapper = () => {
  const [devIcon] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1610933666/New%20Portfolio%20Site/Icons/004-code_jzojgv.svg"
  );
  const [designIcon] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1610934029/New%20Portfolio%20Site/Icons/010-device_ausdx0.svg"
  );
  const [uxIcon] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1610933950/New%20Portfolio%20Site/Icons/018-idea_iuyusn.svg"
  );
  const [developerItems] = useState([
    {
      name:
        "Building full stack applications with modern JavaScript frameworks",
      icon: "",
    },
    {
      name: "Backend proficiencies with NodeJS, Ruby and Python",
      icon: "",
    },
  ]);
  const [designerItems] = useState([
    {
      name:
        "Building full stack applications with modern JavaScript frameworks",
      icon: "",
    },
    { name: "Backend proficiencies with NodeJS, Ruby and Python", icon: "" },
  ]);
  const [uxItems] = useState([
    {
      name:
        "Building full stack applications with modern JavaScript frameworks",
      icon: "",
    },
    { name: "Backend proficiencies with NodeJS, Ruby and Python", icon: "" },
  ]);

  return (
    <Wrapper>
      <CardWrapper bg="#ddd">
        <Header text={"What I Do"} invert={true} />
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
        <Header text={"What I Bring"} invert={true} />
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
  height: 550px;
  width: 100%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.bg};
  border: 1px solid green;
`;
