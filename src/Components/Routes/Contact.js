import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { device } from "../../resources/mediaquery";
import Navigation from "../Shared/Navigation";
import Footer from "../Shared/Footer";

const Contact = () => {
  const [bg] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1610949169/New%20Portfolio%20Site/Screen_Shot_2021-01-17_at_10.37_1_1_1_kkynsh.jpg"
  );
  const [helloPic] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1611383304/New%20Portfolio%20Site/cytonn-photography-ZJEKICY5EXY-unsplash_1_mr0qvu.jpg"
  );
  const [contactIcon] = useState(
    "https://res.cloudinary.com/drucvvo7f/image/upload/v1611384636/New%20Portfolio%20Site/Icons/016-help_yaz7q4.svg"
  );
  const [name, setName] = useState("");
  const [valName, setValName] = useState(false);
  const [email, setEmail] = useState("");
  const [valEmail, setValEmail] = useState(false);
  const [message, setMessage] = useState("");
  const [valMessage, setValMessage] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [scroll, setScroll] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [open] = useState(true);

  useEffect(() => {
    setScroll(false);
    if (scroll) {
      window.scrollTo(0, 0);
    }
  }, [valName, valEmail, valMessage]);

  // SUBMIT to backend
  const handleSubmit = () => {
    if (!!valName && valEmail && valMessage) {
      setShowValidation(false);
      validateForm();
      // POST CALL
      fetch("/hey")
        .then((data) => {
          console.log(data.json());
        })
        .then(() => {
          setName("");
          setEmail("");
          setMessage("");
          setValName(false);
          setValEmail(false);
          setValMessage(false);
          setSubmitted(true);
          // window.scrollTo(0, 0);
        })
        .catch((err) => console.log(err));
    } else {
      setShowValidation(true);
    }
  };
  // input validation
  const validateForm = (field) => {
    if (field) {
      if (field.name === "name") {
        return field.value.length ? setValName(true) : setValName(false);
      } else if (field.name === "email") {
        return field.value.length &&
          field.value.includes("@") &&
          field.value.includes(".com")
          ? setValEmail(true)
          : setValEmail(false);
      } else if (field.name === "message") {
        return field.value.length ? setValMessage(true) : setValMessage(false);
      }
    }
  };
  // display remaining characters in message textarea
  const messageCount = (text) => {
    return 300 - text.length;
  };

  return (
    <Container>
      <Navigation />
      <HeaderWrapper bg={bg}>
        <H1Wrapper>
          <img src={contactIcon} alt="portfolio work" />
          <Headline>Contact</Headline>
        </H1Wrapper>
        <h3>
          {open
            ? "I'm open to new opportunities"
            : "Not accepting new work at this time"}
        </h3>
      </HeaderWrapper>
      <Wrapper bg={helloPic}>
        <Form>
          <H3 opacity={submitted ? "0" : "1"}>Drop me a line.</H3>
          <Confirmation opacity={submitted ? "1" : "0"}>
            <div>
              Thank you! Your message has been <span></span>.
            </div>
          </Confirmation>
          <FormWrapper height={submitted ? "0" : "390px"}>
            <Label htmlFor="name">
              <span>Name</span>
              {showValidation ? (
                <div> {valName ? null : "Please enter your name"}</div>
              ) : null}
            </Label>
            <Name
              type="text"
              name="name"
              placeholder="enter name"
              onChange={(e) => {
                console.log("we changing");
                validateForm(e.target);
                setName(e.target.value);
              }}
              value={name}
            />
            <Label htmlFor="email">
              <span>Email</span>
              {showValidation ? (
                <div> {valEmail ? null : "Please enter a valid email"}</div>
              ) : null}
            </Label>
            <Email
              type="email"
              name="email"
              placeholder="enter email"
              onChange={(e) => {
                validateForm(e.target);
                setEmail(e.target.value);
              }}
              value={email}
            />
            <Label htmlFor="message">
              <span>Message</span>
              {showValidation ? (
                <div> {valMessage ? null : "Please add a message"}</div>
              ) : null}
            </Label>
            <MessageWrapper>
              <Message
                maxLength="300"
                name="message"
                placeholder="What do you want to say?"
                onChange={(e) => {
                  validateForm(e.target);
                  setMessage(e.target.value);
                }}
                value={message}
              />
              <Counter>
                characters left ({message ? messageCount(message) : "300"})
              </Counter>
            </MessageWrapper>
          </FormWrapper>
        </Form>
      </Wrapper>
      <Button
        onClick={() => handleSubmit()}
        top={submitted ? "-20vrem" : "0"}
        overflow={submitted ? "visible" : "hidden"}
        color={submitted ? "#30475e" : "#222831"}
        bg={submitted ? "#30475e" : "#f05454"}
      >
        Sen
        <LetterWrapper opacity={submitted ? "0" : "1"}>
          <BtnLetter top={submitted ? "-0.5rem" : "-200%"}>t</BtnLetter>
          <BtnLetter top={submitted ? "200%" : "-0.5rem"}>d</BtnLetter>
        </LetterWrapper>
        <Sent
          animation={submitted ? "jumpSentUp" : "none"}
          color={submitted ? "green" : "#222831"}
        >
          sent
        </Sent>
      </Button>
      <Footer />
    </Container>
  );
};

export default Contact;

// styles
const Input = css`
  height: 2.3rem;
  width: 100%;
  max-width: 430px;
`;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 5rem;
  background-color: #30475e;
  /* border: 1px solid red; */
`;
const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.3rem 0;
  /* height: 5rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* border: 1px solid red; */

  h3 {
    color: #ddd;
    font-size: 1.5rem;
    padding-left: 1rem;
  }
`;
const H1Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1rem;
  opacity: 0;
  animation: fadeHeaderWrapperIn 1s linear forwards;
  /* border: 1px solid green; */

  img {
    width: 2rem;
    margin-right: 1rem;
  }

  @keyframes fadeHeaderWrapperIn {
    to {
      opacity: 1;
    }
  }

  @media ${device.tabletS} {
    img {
      width: 3rem;
    }
  }
`;
const Headline = styled.h1`
  width: 100%;
  font-size: 2.2rem;
  font-weight: bold;
  color: #f05454;
  text-align: center;

  @media ${device.tabletS} {
    font-size: 3rem;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 38rem;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  /* border: 1px solid red; */
`;
const Form = styled.div`
  min-height: 38rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  background-color: rgba(48, 71, 94, 0.8);
  /* border: 2px solid #ddd; */
`;
const H3 = styled.h3`
  font-size: 1.8rem;
  color: #ddd;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  transform: scale(1.3);
  opacity: ${(props) => props.opacity};
  transition-duration: 1s;
  /* border: 1px solid red; */

  @keyframes flexH3 {
    to {
      transform: scale(1);
    }
  }

  @media ${device.tabletS} {
    animation: flexH3 0.8s 0.4s forwards;
  }
`;
const Confirmation = styled.h3`
  position: absolute;
  top: 18rem;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12rem;
  font-size: 2rem;
  color: #f05454;
  opacity: ${(props) => props.opacity};
  transition-duration: 1.6s;
  transition-delay: 1s;
  background-color: #ddd;
  /* border: 1px solid red; */

  div {
    width: 250px;
    padding-left: 1.75rem;
    /* border: 1px solid red; */

    span {
      display: inline-block;
      width: 4rem;
    }
  }
`;
const FormWrapper = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  opacity: 0;
  overflow: hidden;
  animation: fadeFormWrapperIn 0.7s linear forwards;
  transition-duration: 1s;
  /* border: 1px solid red; */

  input,
  textarea {
    background-color: #ddd;
    color: #30475e;
    padding: 0.4rem 0.7rem;
    font-size: 1.4rem;
    font-weight: 300;
    border-radius: 3px;

    ::placeholder {
      font-size: 1.2rem;
    }
  }

  @keyframes fadeFormWrapperIn {
    to {
      opacity: 1;
    }
  }
`;
const Label = styled.label`
  width: 100%;
  max-width: 430px;
  color: #f05454;
  font-size: 1.4rem;
  font-weight: 400;
  margin-top: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* border: 1px solid red; */

  div {
    color: #ff0f5e;
    font-size: 1rem;
  }
  /* border: 2px solid #ddd; */
`;
const Name = styled.input`
  ${Input};
`;
const Email = styled.input`
  ${Input};
`;
const MessageWrapper = styled.div`
  position: relative;
  /* border: 1px solid red; */
`;
const Message = styled.textarea`
  width: 100%;
  max-width: 500px;
  height: 135px;
  font-size: 2rem;
  /* border: 1px solid red; */
`;
const Counter = styled.span`
  position: absolute;
  z-index: 2;
  top: 95%;
  left: 0;
  width: 100%;
  height: 2rem;
  color: #f05454;
  opacity: 0.7;
  text-align: right;
  /* border: 1px solid red; */
`;
const Button = styled.button`
  &:focus {
    outline: none;
  }
  position: relative;
  top: ${(props) => props.top};
  text-align: left;
  padding-left: 1.5rem; //center the text since letter is absolutely positioned
  height: 3rem;
  width: 6rem;
  font-size: 1.3rem;
  font-weight: 300;
  color: ${(props) => props.color};
  margin: 1rem 0 3rem;
  border-radius: 3px;
  transition-duration: 0.4s;
  transition-delay: 1s;
  background-color: ${(props) => props.bg};
`;
const LetterWrapper = styled.span`
  position: relative;
  top: 0.12rem;
  width: 1rem;
  height: 1rem;
  display: inline-block;
  overflow: hidden;
  opacity: ${(props) => props.opacity};
  transition-delay: 1s;
  transition-duration: 0.4s;
  /* border: 1px solid red; */
`;
const BtnLetter = styled.span`
  position: absolute;
  transition-duration: 1s;
  top: ${(props) => props.top};
  color: ${(props) => props.color};
`;
const Sent = styled.span`
  position: absolute;
  z-index: -1;
  top: 0.53rem; //line up with existing "Sent"
  left: 1.7rem; //to mimic padding of button
  transition-duration: 1s;
  animation: ${(props) => props.animation} 1s 1s forwards;
  /* border: 1px solid red; */

  @keyframes jumpSentUp {
    to {
      top: -18.5rem;
      z-index: 1;
      color: #f05454;
      font-size: 2rem;
      font-weight: 400;
    }
  }
`;
