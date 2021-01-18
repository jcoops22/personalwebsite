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
        "Bring applications to life with modern JavaScript frameworks such as ReactJS and VueJS",
      icon:
        "https://res.cloudinary.com/drucvvo7f/image/upload/v1610944681/New%20Portfolio%20Site/Icons/Develop/005-code_rjnkga.svg",
    },
    {
      name:
        "Build API's, connect databases and serve files with NodeJS and popular frameworks such as Express",
      icon:
        "https://res.cloudinary.com/drucvvo7f/image/upload/v1610944681/New%20Portfolio%20Site/Icons/Develop/002-cloud_computing_gayk2z.svg",
    },
    {
      name: "NodeJS, Python and Ruby (Ruby on Rails)",
      icon:
        "https://res.cloudinary.com/drucvvo7f/image/upload/v1610944681/New%20Portfolio%20Site/Icons/Develop/012-files_tl7jub.svg",
    },
    {
      name: "MongoDB, Firebase CloudStore, Postgress, SQL",
      icon:
        "https://res.cloudinary.com/drucvvo7f/image/upload/v1610944681/New%20Portfolio%20Site/Icons/Develop/007-database_oezqwk.svg",
    },
  ]);
  const [designerItems] = useState([
    {
      name: "Expert styling with CSS3 and modern CSS frameworks",
      icon:
        "https://res.cloudinary.com/drucvvo7f/image/upload/v1610944888/New%20Portfolio%20Site/Icons/UX/017-homepage_bgmn0q.svg",
    },
    {
      name: "TailwindCSS, Bootstrap, SASS, Styled Components",
      icon:
        "https://res.cloudinary.com/drucvvo7f/image/upload/v1610944933/New%20Portfolio%20Site/Icons/UX/024-maintenance_j28l1t.svg",
    },
    {
      name: "Figma, Trello, Agile",
      icon:
        "https://res.cloudinary.com/drucvvo7f/image/upload/v1610944933/New%20Portfolio%20Site/Icons/UX/022-layout_ao8q5m.svg",
    },
  ]);
  const [uxItems] = useState([
    {
      name: "Five years of client side software experience",
      icon:
        "https://res.cloudinary.com/drucvvo7f/image/upload/v1610945450/New%20Portfolio%20Site/Icons/UX/023-login_zqrzrz.svg",
    },
    {
      name: "Knowledge of Design Flows and UX/UI best practices",
      icon:
        "https://res.cloudinary.com/drucvvo7f/image/upload/v1610945450/New%20Portfolio%20Site/Icons/UX/023-login_zqrzrz.svg",
    },
  ]);

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