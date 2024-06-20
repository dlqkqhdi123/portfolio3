import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

const ContactContainer = styled.section`
  padding: 100px 20px;
  background: #112240;
  color: white;
  text-align: center;
`;

const ContactHeading = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #64ffda;
`;

const ContactText = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #ccd6f6;
`;

const ContactSection = () => {
  return (
    <Element name="contact">
      <ContactContainer>
        <ContactHeading>Contact</ContactHeading>
        <ContactText>
          Feel free to reach out to me at my email address.
        </ContactText>
      </ContactContainer>
    </Element>
  );
};

export default ContactSection;
