import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { device } from "../resources/mediaquery";

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    console.log(showNav);
  }, [showNav]);
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
            <NavItem delay={"0.1s"} className="tilt-in-right-1">
              Home
            </NavItem>
            <NavItem delay={"0.2s"} className="tilt-in-right-1">
              Work
            </NavItem>
            <NavItem delay={"0.3s"} className="tilt-in-right-1">
              Contact
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
const NavItem = styled.p`
  &:hover {
    opacity: 0.6;
  }
  color: #f05454;
  font-size: 2rem;
  margin: 0.7rem 0;
  margin-top: 0;
  letter-spacing: 0.05em;
  cursor: pointer;
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
