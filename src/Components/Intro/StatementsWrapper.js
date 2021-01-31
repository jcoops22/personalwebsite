import React, { useState, useEffect, useRef } from "react";
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
import BackgroundHeader from "./BackgroundHeader";
import arrow from "../../resources/arrow.svg";

const StatementsWrapper = () => {
  const [devIcon] = useState(devIconvar);
  const [designIcon] = useState(designIconvar);
  const [uxIcon] = useState(uxIconvar);
  const [developerItems] = useState(developerItemsvar);
  const [designerItems] = useState(designerItemsvar);
  const [uxItems] = useState(uxItemsvar);

  const [ref, setRef] = useState(null);
  const btn = useRef();

  useEffect(() => {
    setRef(btn.current);

    let devObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio > 0) {
          if (ref) {
            ref.classList.add("bounce-in-bottom");
          }
        }
      },
      { rootMargin: "-100px" }
    );
    devObserver.observe(btn.current);
  }, [ref]);

  return (
    <Wrapper>
      <CardWrapper bg="#ddd" className="card">
        <Header text={"What I do"} invert={true} />
        <BackgroundHeader text={"What I do"} />
        <Card icon={devIcon} header={"Develop"} list={developerItems} />
      </CardWrapper>
      <CardWrapper bg="#30475e" className="card">
        <Header text={"My Approach"} />
        <BackgroundHeader text={"My Approach"} />
        <Card
          invert={true}
          icon={designIcon}
          header={"Design"}
          list={designerItems}
        />
      </CardWrapper>
      <CardWrapper bg="#ddd" className="card">
        <Header text={"What I bring"} invert={true} />
        <BackgroundHeader text={"What I bring"} />
        <Card icon={uxIcon} header={"UX/UI"} list={uxItems} />
        <BtnWrapper ref={btn}>
          <Link to="/work">
            <button>See my work</button>
          </Link>
          <Img src={arrow} alt="arrow" />
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
  position: relative;
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
    animation: bounceUpOpen 3s forwards;
    background-color: #f05454;
  }
`;
const Img = styled.img`
  position: absolute;
  left: 0;
  width: 2rem;
  z-index: -1;
  /* opacity: 0; */
  transition-duration: 0.3s;
`;
const BtnWrapper = styled.div`
  &:hover ${Img} {
    opacity: 1;
    left: 100%;
  }

  position: relative;
  margin: auto;
  opacity: 0;
  display: flex;
  align-items: center;
`;
