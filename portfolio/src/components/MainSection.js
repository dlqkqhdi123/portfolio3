import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import Cube from "./cube.js";

const MainSectionContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0a192f;
  color: white;
  text-align: center;
  flex-direction: column; /* Flex direction을 column으로 설정하여 텍스트와 큐브를 세로로 정렬합니다. */
`;

const MainHeading = styled.h1`
  font-size: 3em;
  margin: 0;
  padding: 0;
  line-height: 1.2;
  color: #64ffda;
`;

const SubHeading = styled.p`
  font-size: 1.5em;
  margin-top: 20px;
  color: #ccd6f6;
`;

const MainSection = () => {
  return (
    <Element name="main">
      <MainSectionContainer>
        <MainHeading>꿈을 코드로 변환하는 신입 개발자 </MainHeading>
        <SubHeading>
          창의성을 코드로 코드를 현실로 바로 지금부터 입니다.
        </SubHeading>
        <Cube />
      </MainSectionContainer>
    </Element>
  );
};

export default MainSection;
