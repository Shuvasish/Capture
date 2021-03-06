import React from "react";

import ScrollTop from "../components/ScrollTop";
// animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim, fade } from "../animation";
import styled from "styled-components";

function ContactUs(props) {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Contact Us</motion.h2>
        </Hide>
        <div>
          <Hide>
            <Social variants={titleAnim}>
              <Circle></Circle>
              <h2>Send Us a message</h2>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim}>
              <Circle></Circle>
              <h2>Send a email</h2>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim}>
              <Circle></Circle>
              <h2>Connect with social media</h2>
            </Social>
          </Hide>
        </div>
      </Title>
      <ScrollTop></ScrollTop>
    </ContactStyle>
  );
}
const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 91vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
  h2 {
    @media (max-width: 1300px) {
      font-size: 3rem;
    }
    @media (max-width: 700px) {
      font-size: 2rem;
    }
    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
    @media (max-width: 1300px) {
      margin-top: 5rem;
    }
    @media (max-width: 700px) {
      margin-top: 3rem;
    }
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
