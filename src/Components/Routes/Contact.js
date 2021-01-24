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
      </HeaderWrapper>
      <Wrapper bg={helloPic}>
        <Form>
          <H3>Drop me a line.</H3>
          <FormWrapper>
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
      <button onClick={() => handleSubmit()}>
        Sen
        <BtnLetter top={submitted ? "0.55rem" : "-100%"}>t</BtnLetter>
        <BtnLetter top={submitted ? "100%" : "0.55rem"}>d</BtnLetter>
      </button>
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

  button {
    &:hover {
      box-shadow: 1px 1px 5px 0 #999;
    }
    position: relative;
    height: 3rem;
    width: 6rem;
    font-size: 1.3rem;
    font-weight: 300;
    color: #222831;
    margin: 0.7rem 0 3rem;
    overflow: hidden;
    border-radius: 3px;
    background-color: #f05454;
  }

  @media ${device.tabletS} {
    justify-content: center;
  }
`;
const BtnLetter = styled.span`
  position: absolute;
  transition-duration: 1s;
  top: ${(props) => props.top};
`;
const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* border: 1px solid red; */
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
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  /* border: 1px solid red; */
`;
const Form = styled.div`
  height: 100%;
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0.6rem;
  background-color: rgba(48, 71, 94, 0.8);
  /* border: 2px solid #ddd; */
`;
const H3 = styled.h3`
  font-size: 2.3rem;
  color: #ddd;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  transform: scale(1.4);
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
const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  opacity: 0;
  animation: fadeFormWrapperIn 0.7s linear forwards;
  /* border: 1px solid red; */

  input,
  textarea {
    background-color: #ddd;
    color: #30475e;
    padding: 0.2rem 0.7rem;
    font-size: 1.4rem;
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
`;
const Message = styled.textarea`
  width: 100%;
  max-width: 500px;
  height: 200px;
  font-size: 2rem;
`;
const Counter = styled.span`
  position: absolute;
  z-index: 2;
  top: 100%;
  left: 0;
  width: 100%;
  color: #f05454;
  opacity: 0.7;
  text-align: right;
  /* border: 1px solid red; */
`;
