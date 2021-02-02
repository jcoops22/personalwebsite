import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";

const BackgroundHeader = ({ text }) => {
  const [inView, setInView] = useState(false);
  const [ref, setRef] = useState(null);
  const wrap = useRef();

  useEffect(() => {
    setRef(wrap.current);

    let bgHeaderObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio > 0) {
          if (ref) {
            setInView(true);
          }
        }
      },
      { rootMargin: "-100px" }
    );
    bgHeaderObserver.observe(wrap.current);
  }, [inView, ref]);

  return (
    <Wrapper className="bg_header_wrapper" ref={wrap}>
      <H1 aniName={inView ? "fadeBackgroundHeaderH1In" : null}>{text}</H1>
    </Wrapper>
  );
};

export default BackgroundHeader;

// styles
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* border: 1px solid red; */

  @media ${device.tabletS} {
    top: 0rem;
  }
`;

const H1 = styled.h1`
  position: relative;
  top: 0;
  width: 100vw;
  text-align: center;
  font-size: clamp(3rem, 11vw, 8rem);
  font-weight: 700;
  opacity: 0;
  animation: ${(props) => props.aniName} 1s forwards;

  @keyframes fadeBackgroundHeaderH1In {
    to {
      top: 6rem;
      opacity: 0.04;
    }
  }
`;
