import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";

const Card = ({ header, list, icon, invert }) => {
  const [ref, setRef] = useState(null);
  const card = useRef();

  useEffect(() => {
    setRef(card.current);

    let devObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio > 0) {
          if (ref) {
            ref.classList.add("tilt-in-right-1");
          }
        }
      },
      { rootMargin: "-100px" }
    );
    devObserver.observe(card.current);
  }, [ref]);

  return (
    <Wrapper
      className="sm:shadow-lg"
      color={invert ? "#ddd" : "222831"}
      ref={card}
    >
      <Header>
        <img src={icon} alt="header" /> <h1>{header}</h1>
      </Header>
      <ul>
        {list.map((item, ind) => (
          <li key={ind}>
            <img src={item.icon} alt={item.name} />
            {item.name}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Card;

// styles
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 800px;
  padding: 3.5rem 1rem;
  margin-top: 3rem;
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  opacity: 0;
  animation-delay: 0.2s;
  /* border: 1px solid blue; */

  img {
    width: 5rem;
    /* border: 1px solid blue; */
  }

  ul {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    /* border: 1px solid red; */

    li {
      display: flex;
      align-items: flex-start;
      font-weight: 200;
      font-size: 1.1rem;
      margin: 0.5rem 0;
    }

    img {
      width: 2rem;
      margin-right: 1rem;
    }
  }

  @media ${device.tabletS} {
    width: 90%;
    ul {
      width: 80%;
    }
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    color: #f05454;
    font-size: 3rem;
    padding-left: 1rem;
    /* border: 1px solid red; */
  }
`;
