import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "../../resources/mediaquery";
import Pictures from "./Pictures";

const InfoModal = ({ showMore, work }) => {
  const [languages, setLanguages] = useState([]);
  const [linkIcon] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1611197153/New%20Portfolio%20Site/Projects/link-svgrepo-com_ze2s5j.svg"
  );
  const [codeIconLink] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1611196511/New%20Portfolio%20Site/Projects/code-svgrepo-com_iuuqql.svg"
  );
  useEffect(() => {
    if (work.languages) {
      setLanguages(work.languages);
    }
  }, [languages]);

  return (
    <Container>
      <Close onClick={() => showMore(false)}>[close]</Close>
      <HeaderTechAndPictures>
        <HeaderAndTech>
          {work ? <H1>{work.name}</H1> : null}
          {languages.length ? (
            <Languages>
              <span>Tech:</span>
              {languages.map((lang, ind) => (
                <Li key={ind} delay={ind * 0.2}>
                  {lang.name} <img src={lang.icon} alt={lang.name} />
                </Li>
              ))}
            </Languages>
          ) : null}
        </HeaderAndTech>
        <Pictures pics={work.screenshots} />
      </HeaderTechAndPictures>
      <DescAndLinks>
        <Description>{work.desc}</Description>
        <LinksWrapper>
          {work.site ? (
            <LinkDiv>
              <a href={work.site} target="_blank" rel="noopener noreferrer">
                <Site>
                  <img src={linkIcon} alt="visit website" />
                </Site>
              </a>
              <LinkText>
                <a href={work.site} target="_blank" rel="noopener noreferrer">
                  See site
                </a>
              </LinkText>
            </LinkDiv>
          ) : null}
          {work.github ? (
            <LinkDiv>
              <a href={work.github} target="_blank" rel="noopener noreferrer">
                <Git>
                  <img src={codeIconLink} alt="see code" />
                </Git>
              </a>
              <LinkText>
                <a href={work.github} target="_blank" rel="noopener noreferrer">
                  See source code
                </a>
              </LinkText>
            </LinkDiv>
          ) : null}
        </LinksWrapper>
      </DescAndLinks>
    </Container>
  );
};

export default InfoModal;

// styles
const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  color: #ddd;
  background-color: rgba(0, 0, 0, 0.8);
  /* border: 2px solid white; */

  @media ${device.tabletS} {
    padding-top: 2rem;
  }
`;
const Close = styled.span`
  cursor: pointer;
  position: absolute;
  z-index: 2;
  top: 5rem;
  left: calc(100% - 4rem);
  font-size: 1.1rem;
  color: #ddd;
  /* border: 3px solid red; */

  @media ${device.tabletS} {
    top: 7rem;
  }
`;
const HeaderTechAndPictures = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  padding-top: 5rem;
  /* border: 1px solid green; */
`;
const HeaderAndTech = styled.div`
  width: 100%;
  max-height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */

  @media ${device.tabletS} {
    width: 40%;
    align-items: flex-start;
  }
`;
const H1 = styled.h1`
  position: relative;
  top: 0;
  left: 0;
  color: #ddd;
  width: 100%;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: left;
  padding-left: 1rem;
  animation: slideInH1forModal 0.7s forwards;
  /* border: 1px solid red; */

  @keyframes slideInH1forModal {
    from {
      left: 100%;
      opacity: 0;
    }
  }

  @media ${device.tabletS} {
    padding-left: 0;
  }
  @media ${device.tablet} {
    font-size: 3rem;
  }
`;
const Languages = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  padding: 0 1rem;

  span {
    display: block;
    width: 100%;
    font-size: 1.3rem;
    color: #f05454;
    /* border: 1px solid green; */
  }

  img {
    margin-left: 1rem;
    width: 1.3rem;
    border-radius: 50%;
    /* border: 1px solid #ddd; */
  }

  @media ${device.tabletS} {
    padding: 0;
  }
  @media ${device.tablet} {
    width: 80%;
  }
`;
const Li = styled.li`
  position: relative;
  top: -1.5rem;
  opacity: 0;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  animation: dropInLI 0.7s forwards;
  animation-delay: ${(props) => props.delay + "s"};
  /* border: 1px solid red; */

  @keyframes dropInLI {
    to {
      top: 0;
      opacity: 1;
    }
  }
`;
const DescAndLinks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  /* border: 1px solid greenyellow; */
`;
const Description = styled.div`
  position: relative;
  top: 0;
  width: 80%;
  max-width: 500px;
  max-height: 250px;
  overflow: scroll;
  font-size: 1.3rem;
  display: flex;
  align-items: flex-start;
  padding: 2rem;
  color: #ddd;
  border-radius: 5px;
  background-color: #30475e;
  background: rgb(55, 65, 81);
  background: linear-gradient(
    180deg,
    rgba(55, 65, 81, 1) 61%,
    rgba(34, 40, 49, 0.5) 100%
  );
  animation: slideDescUp 1.5s forwards;
  /* border: 1px solid red; */

  @keyframes slideDescUp {
    from {
      top: 100%;
      opacity: 0;
    }
  }

  @media ${device.laptop} {
    width: 50%;
  }
`;
const LinksWrapper = styled.div`
  position: relative;
  left: -50%;
  width: 50%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  animation: slideInLinksWrapper 0.6s forwards;
  /* border: 1px solid red; */

  button {
    &:focus {
      outline: none;
    }
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 3.5rem;
    margin: 0;
    border-radius: 50%;
    animation: spreadOutButtonLinks 0.4s 0.6s forwards;
  }

  img {
    width: 1.8rem;
    /* border: 1px solid red; */
  }

  @keyframes slideInLinksWrapper {
    to {
      left: 0;
    }
  }

  @keyframes spreadOutButtonLinks {
    to {
      margin: 1rem 0;
    }
  }

  @keyframes slideOutLinkSpan {
    to {
      left: 0;
    }
  }

  @media ${device.tablet} {
    /* flex-direction: row; */
  }
`;
const LinkDiv = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  overflow-x: hidden;
  /* border: 1px solid red; */

  @media ${device.tabletM} {
    justify-content: flex-start;
    width: 240px;
  }
`;
const LinkText = styled.div`
  position: relative;
  left: -100%;
  opacity: 0;
  color: #ddd;
  font-size: 1.4rem;
  display: none;
  margin-left: 1rem;
  animation: slideOutLinkSpan 0.4s 1s forwards;
  /* border: 1px solid red; */

  @keyframes slideOutLinkSpan {
    to {
      left: 0;
      opacity: 1;
    }
  }

  @media ${device.tabletM} {
    display: initial;
  }
`;
const Git = styled.button`
  background-color: #f05454;
`;
const Site = styled.button`
  background-color: #30475e;
`;
