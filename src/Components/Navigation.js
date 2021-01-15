import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    console.log(showNav);
  }, [showNav]);
  return (
    <nav>
      <NavIcon
        className="fixed top-2 nav_span w-8 cursor-pointer text-2xl z-20 flex-row	justify-center items-center	border-solid border-black"
        onClick={() => setShowNav(!showNav)}
      >
        {showNav ? <div>&#10005;</div> : <PersonalIcon>JC</PersonalIcon>}
      </NavIcon>
      <NavItemsWrapper
        right={showNav ? 0 : 100}
        className={`navigation sm:w-1/2 sm:max-w-md bg-white z-10 rounded-bl-3xl fixed w-full h-screen`}
      >
        <NavItem>Home</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Work</NavItem>
      </NavItemsWrapper>
      {showNav ? <Modal onClick={() => setShowNav(false)} /> : null}
    </nav>
  );
};

export default Navigation;

// styles
const NavIcon = styled.div`
  position: fixed;
  left: calc(100% - 3rem);
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
`;
const NavItemsWrapper = styled.div`
  right: ${(props) => props.right};
  transition-duration: 0.4s;
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
const NavItem = styled.p`
  &:hover {
    opacity: 0.6;
  }
  color: #db2777;
  font-size: 2rem;
  margin: 0.7rem 0;
  margin-top: 0;
  letter-spacing: 0.05em;
  cursor: pointer;
  animation: popIn 0.4s ease-in forwards;
  /* border: 1px solid red; */

  @keyframes popIn {
    to {
      margin-top: 0.7rem;
    }
  }
`;
const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  /* background-color: black; */
`;
