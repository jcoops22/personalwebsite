import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";
import Loader from "../Shared/Loader";

const WorkCard = ({ name, delay, bg, desc, showMore, setSelected, work }) => {
  const [previewArrow] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1611124735/New%20Portfolio%20Site/Icons/Work/right-arrow-svgrepo-com_pmbhi2.svg"
  );
  const [loading, setLoading] = useState(true);

  const getShortDescription = (desc) => {
    // take the first senence of descrption
    return desc.split(".")[0];
  };
  const getInitials = (name) => {
    let length = name.split(" ");
    let f = length[0][0];
    let s = length.length > 1 ? length[1][0] : "";
    let t = length.length > 2 ? length[2][0] : "";

    return f + s + t;
  };

  useEffect(() => {
    let preLoad = document.createElement("img");
    preLoad.src = bg;
    preLoad.addEventListener("load", () => {
      setLoading(false);
      preLoad = null;
    });
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <Loader />
      ) : (
        <Content delay={delay}>
          <Background bg={loading ? null : bg}>
            <H1>{name}</H1>
          </Background>
          <Desc>{getShortDescription(desc)}</Desc>
          <BigH1>{getInitials(name)}</BigH1>
          <Bubble>
            <span
              onClick={() => {
                showMore(true);
                setSelected(work);
              }}
            >
              See more
              <img src={previewArrow} alt="see more" />
            </span>
          </Bubble>
        </Content>
      )}
    </Wrapper>
  );
};

export default WorkCard;

// styles
const H1 = styled.h1`
  display: none;
  font-size: 1.3rem;
  font-weight: 500;
  width: 100%;
  color: #ddd;
  padding-left: 1rem;
  /* transition-duration: 0.1s; */
`;
const BigH1 = styled.h1`
  position: absolute;
  top: 1rem;
  left: 2rem;
  text-transform: uppercase;
  color: #f05454;
  font-size: 6rem;
  opacity: 0;
  /* border: 1px solid red; */
`;
const Desc = styled.div`
  position: absolute;
  left: -100%;
  top: 1rem;
  opacity: 0;
  width: 70%;
  height: 100%;
  color: #ddd;
  font-weight: 400;
  padding: 2.7rem 0 0 1.5rem;
  display: none;
  align-items: center;
  background-color: #30475e;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition-duration: 0.5s;

  @media ${device.mobileL} {
    display: flex;
  }
`;
const Bubble = styled.div`
  position: absolute;
  top: 100%;
  left: 100%;
  height: 16rem;
  width: 16rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 50%;
  background-color: #f05454;
  transition-duration: 0.4s;

  span {
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 2.8rem;
    margin-left: 1rem;
    transition-duration: 0.4s;
  }

  img {
    width: 1.5rem;
    /* border: 1px solid red; */
  }
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition-duration: 0.2s;
`;
const Wrapper = styled.div`
  &:hover ${Desc} {
    opacity: 1;
    left: 1rem;
  }
  &:hover ${BigH1} {
    opacity: 1;
  }
  &:hover ${Background} {
    filter: blur(10px);
  }
  &:hover ${Bubble} {
    top: calc(100% - 8rem);
    left: calc(100% - 8rem);
  }
  &:hover {
    border: 2px solid #f05454;
  }
  position: relative;
  top: 1rem;
  height: 14rem;
  width: 100%;
  max-width: 450px;
  border-radius: 5px;
  background-color: #222831;
  overflow: hidden;
  /* border: 2px solid #ddd; */
`;
const Content = styled.div`
  transition-duration: 4s;
  opacity: 0;
  animation: slideUpContent 0.8s ${(props) => props.delay} linear forwards;
  /* border: 2px solid #ddd; */

  @keyframes slideUpContent {
    to {
      top: 0;
      opacity: 1;
    }
  }
`;
