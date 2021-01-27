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
  const [imagesIcon] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1611628602/New%20Portfolio%20Site/Projects/polaroid-pictures-svgrepo-com_c7tggw.svg"
  );
  const [fullscreenIcon] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1611783093/New%20Portfolio%20Site/Projects/fullscreen-svgrepo-com_steoot.svg"
  );
  const [showPictures, setShowPictures] = useState(false);

  useEffect(() => {
    if (showPictures) {
      window.addEventListener("resize", () => {
        return window.innerWidth >= 1024 ? setShowPictures(false) : null;
      });
    }
    if (work.languages) {
      setLanguages(work.languages);
    }
  }, [languages, showPictures]);

  return (
    <Container>
      <Close onClick={() => showMore(false)}>[close]</Close>
      <HeaderTechAndPictures>
        <HeaderAndTech>
          {work ? <H1 font={work.font}>{work.name}</H1> : null}
          <TechAndPics>
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
            <ShowPictures onClick={() => setShowPictures(true)}>
              <img src={imagesIcon} alt="show screenshots" />
              <span>Screenshots</span>
            </ShowPictures>
          </TechAndPics>
        </HeaderAndTech>
        <PicsWrapper>
          <Pictures pics={work.screenshots} />
          <FullScreen
            src={fullscreenIcon}
            alt="fullscreen"
            onClick={() => setShowPictures(true)}
          />
        </PicsWrapper>
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
                  visit site
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
                  see source code
                </a>
              </LinkText>
            </LinkDiv>
          ) : null}
        </LinksWrapper>
      </DescAndLinks>
      {showPictures ? (
        <Pictures
          pics={work.screenshots}
          show={"true"}
          setShowPictures={setShowPictures}
        />
      ) : null}
    </Container>
  );
};

export default InfoModal;

// styles
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  height: 58rem;
  min-height: 100vh;
  width: 100vw;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #ddd;
  padding-top: 5rem;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeModalIn 0.5s linear forwards;
  /* border: 2px solid white; */

  @keyframes fadeModalIn {
    to {
      opacity: 1;
    }
  }

  @media ${device.tabletS} {
    padding-top: 8rem;
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
  height: 18rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  /* border: 1px solid green; */
`;
const HeaderAndTech = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* border: 1px solid blue; */

  @media ${device.tabletS} {
    padding-left: 2rem;
  }
  @media ${device.laptop} {
    width: 50%;
  }
`;
const H1 = styled.h1`
  position: relative;
  top: 0;
  left: 0;
  color: #ddd;
  width: 100%;
  font-size: 2rem;
  font-family: ${(props) => props.font};
  margin-bottom: 1.5rem;
  text-align: left;
  padding-left: 1rem;
  margin-top: 2rem;
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
const TechAndPics = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid white; */

  @media ${device.tabletS} {
    flex-direction: row;
    align-items: flex-start;
  }
`;
const Languages = styled.ul`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 1rem;
  /* border: 1px solid green; */

  span {
    display: block;
    width: 100%;
    font-size: 1.3rem;
    color: #f05454;
    text-decoration: underline;
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
    height: 10rem;
    font-size: 1.2rem;
  }
  @media ${device.tablet} {
    width: 80%;
  }
`;
const PicsWrapper = styled.div`
  display: none;
  position: relative;
  width: 50%;
  height: 100%;
  max-width: fit-content;
  /* border: 1px solid orange; */

  @media ${device.laptop} {
    display: flex;
  }
`;
const FullScreen = styled.img`
  &:hover {
    opacity: 1;
  }
  position: absolute;
  top: calc(100% - 1.5rem);
  z-index: 2;
  left: calc(100% - 1.6rem);
  width: 1.5rem;
  cursor: pointer;
  opacity: 0.6;
  transition-duration: 0.5s;
  /* border: 1px solid red; */
`;
const ShowPictures = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin-top: 2rem;
  padding: 0 0.3rem;
  cursor: pointer;
  animation: slideShowPicturesIn 1s forwards;
  /* border: 1px solid yellow; */

  img {
    width: 3rem;
    margin-right: 1rem;
    padding: 0.2rem;
    background-color: #f05454;
    border-radius: 50%;
  }
  @keyframes slideShowPicturesIn {
    from {
      left: 100%;
    }
  }

  @keyframes slideShowPicturesInTablet {
    from {
      top: -100%;
    }
  }

  @media ${device.tabletS} {
    width: 55%;
    font-size: 1.3rem;
    animation: slideShowPicturesInTablet 1s forwards;

    img {
      width: 4rem;
    }
  }
  @media ${device.laptop} {
    display: none;
  }
`;
const Li = styled.li`
  position: relative;
  top: -1.8rem;
  opacity: 0;
  width: 50%;
  margin-top: 0.3rem;
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
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0;
  /* border: 1px solid greenyellow; */

  @media ${device.mobileL} {
    justify-content: center;
    align-items: center;
  }

  @media ${device.tabletS} {
    flex-direction: row-reverse;
  }
`;
const Description = styled.div`
  position: relative;
  top: 0;
  width: 80%;
  max-width: 500px;
  max-height: 300px;
  overflow: scroll;
  font-size: 1.3rem;
  display: none;
  align-items: flex-start;
  padding: 0.8rem 1rem;
  color: #ddd;
  font-weight: 300;
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

  @media ${device.mobileL} {
    display: initial;
  }
  @media ${device.laptop} {
    width: 50%;
  }
`;
const LinksWrapper = styled.div`
  position: relative;
  left: -50%;
  width: 100%;
  max-width: 600px;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
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
    /* border: 1px solid red; */
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

  @media ${device.mobileM} {
    flex-direction: column;
  }

  @media ${device.mobileL} {
    flex-direction: row;
  }

  @media ${device.tabletS} {
    flex-direction: column;
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

  @media ${device.mobileM} {
    display: initial;
  }
  @media ${device.mobileL} {
    display: none;
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
