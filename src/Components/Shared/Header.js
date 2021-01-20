import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";

const Header = ({ text, invert }) => {
  const [aniName, setaniName] = useState(null);
  const [ref, setRef] = useState(null);

  const headerItem = useRef();

  useEffect(() => {
    setRef(headerItem.current);

    let devObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio > 0) {
          if (ref) {
            setaniName("slideIn");
          }
        }
      },
      { rootMargin: "-100px" }
    );
    devObserver.observe(headerItem.current);
  }, [aniName, ref]);

  return (
    <Wrapper name={aniName} ref={headerItem}>
      <H1 border={invert ? "2px solid #30475e" : "2px solid #ddd"}>{text}</H1>
    </Wrapper>
  );
};

export default Header;

// styles
const Wrapper = styled.div`
  position: relative;
  left: -11rem;
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  animation: 0.8s forwards;
  animation-name: ${(props) => props.name};
  /* border: 1px solid red; */

  @keyframes slideIn {
    to {
      left: -1rem;
    }
  }
`;
const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 200;
  color: #ddd;
  padding: 0.3rem 0.5rem 0.3rem 1.5rem;
  background-color: #f05454;
  border-radius: 8px;
  /* border: ${(props) => props.border}; */
`;
