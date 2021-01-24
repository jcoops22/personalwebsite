import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {}, [showNav]);
  return (
    <nav>
      <NavIconWrapper
        onClick={() => setShowNav(!showNav)}
        bg={showNav ? "#ddd" : "#f05454"}
      >
        {showNav ? <XIcon>&#10005;</XIcon> : <PersonalIcon>JC</PersonalIcon>}
      </NavIconWrapper>
      <NavItemsWrapper
        right={showNav ? 0 : 100}
        className={`navigation sm:w-1/2 sm:max-w-md z-20 rounded-bl-3xl fixed w-full h-screen`}
      >
        {showNav ? (
          <div>
            <NavItem delay={"0.1s"}>
              <Link to="/">Home</Link>
              <UnderlineWrapper>
                <Underline />
                <Dot />
              </UnderlineWrapper>
            </NavItem>
            <NavItem delay={"0.2s"}>
              <Link to="/work">Work</Link>
              <UnderlineWrapper>
                <Underline />
                <Dot />
              </UnderlineWrapper>
            </NavItem>
            <NavItem delay={"0.3s"}>
              <Link to="/contact">Contact</Link>
              <UnderlineWrapper>
                <Underline />
                <Dot />
              </UnderlineWrapper>
            </NavItem>
          </div>
        ) : null}
      </NavItemsWrapper>
      {showNav ? (
        <Modal
          onClick={() => setShowNav(false)}
          bg={showNav ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0,0,)"}
        />
      ) : null}
    </nav>
  );
};

export default Navigation;

// styles
const NavIconWrapper = styled.div`
  position: fixed;
  top: 1rem;
  z-index: 30;
  left: calc(100% - 3rem);
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 0.4s;
  background-color: ${(props) => props.bg};
  border: 2px solid #ddd;
`;
const PersonalIcon = styled.div`
  width: 2rem;
  height: 2rem;
  color: #fff;
  padding: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  /* border: 3px solid #fff; */
`;
const XIcon = styled.div`
  color: #f05454;
  font-size: 2rem;
`;
const NavItemsWrapper = styled.div`
  right: ${(props) => props.right};
  background-color: #ddd;
  transition-duration: 0.4s;
`;
const UnderlineWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 13px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* border: 1px solid red; */
`;
const Underline = styled.div`
  position: absolute;
  left: 100%;
  height: 3px;
  width: 95%;
  opacity: 0;
  transition-duration: 0.1s;
  transition-delay: 0;
  background-color: #f05454;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;
const Dot = styled.div`
  position: absolute;
  left: calc(100% - 13px);
  top: 0;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  transform: scale(0);
  transition-duration: 0.2s;
  transition-delay: 0.1s;
  background-color: #ddd;
  border: 2px solid #f05454;
`;
const NavItem = styled.div`
  &:hover ${Underline} {
    transition-delay: 0.1s;
    transition-duration: 0.4s;
    left: 0;
    opacity: 1;
  }
  &:hover ${Dot} {
    transition-duration: 0.1s;
    transform: scale(1);
  }
  position: relative;
  color: #f05454;
  font-size: 2rem;
  margin: 0.7rem 0;
  padding-right: 1rem;
  letter-spacing: 0.05em;
  cursor: pointer;
  overflow: hidden;
  width: fit-content;
  animation-delay: ${(props) => props.delay};
  /* border: 1px solid red; */
`;
const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  transition-duration: 1.4s;
  background-color: ${(props) => props.bg};
  /* background-color: black; */

  @media ${device.tabletS} {
    display: initial;
  }
`;
