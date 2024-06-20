import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import myImage from "../assets/img/lg.jpg";
import Stars from "./Stars";

const AboutSectionContainer = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  color: white;
  text-align: center;
  overflow: hidden; /* Bokeh 요소가 섹션을 벗어나지 않도록 함 */
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  max-width: 1200px;
  align-items: center;
  position: relative;
  z-index: 1; /* Bokeh 요소보다 위에 표시되도록 함 */
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 500px; /* Adjust this value as needed */
  border-radius: 100px;
`;

const SliderContainer = styled.div`
  width: 50%;
  height: 400px;
  .slick-prev,
  .slick-next {
    width: 50px;
    height: 50px;
    z-index: 1;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 50px; /* 화살표 크기 조정 */
    color: #fff; /* Customize arrow color */
  }
  margin-top: -260px;
`;

const Slide = styled.div`
  padding: 10px;
  /* background: #414141; */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  height: 640px;
  border-radius: 10%;
  text-align: left; /* 왼쪽 정렬 추가 */
  margin-left: 30px; /* 왼쪽 마진 추가 */
`;

const MainHeading = styled.h1`
  font-size: 3em;
  margin: 0;
  padding: 0;
  line-height: 1.2;
  color: #64ffda;
`;

const AdditionalText = styled.div`
  margin-top: 20px;
  color: #fff;
  font-size: 1.2em;

  p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const AboutSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Element name="about">
      <AboutSectionContainer>
        <Stars />
        <ContentContainer>
          <ImageContainer>
            <ProfileImage src={myImage} alt="Profile" />
          </ImageContainer>
          <SliderContainer>
            <Slider {...settings}>
              <Slide>
                <MainHeading>연락처</MainHeading>
                <AdditionalText>
                  <p>Email: example@example.com</p>
                  <p>Phone: 010-1234-5678</p>
                </AdditionalText>
              </Slide>
              <Slide>
                <MainHeading>학력</MainHeading>
                <AdditionalText>
                  <p>대학교: 서울대학교 컴퓨터공학과</p>
                  <p>졸업연도: 2022</p>
                </AdditionalText>
              </Slide>
              <Slide>
                <MainHeading>경력</MainHeading>
                <AdditionalText>
                  <p>회사: ABC Corp</p>
                  <p>직위: 프론트엔드 개발자</p>
                  <p>기간: 2022 - 현재</p>
                </AdditionalText>
              </Slide>
              <Slide>
                <MainHeading>수상 이력</MainHeading>
                <AdditionalText>
                  <p>수상명: Best Developer Award</p>
                  <p>수상기관: ABC Corp</p>
                  <p>수상연도: 2023</p>
                </AdditionalText>
              </Slide>
            </Slider>
          </SliderContainer>
        </ContentContainer>
      </AboutSectionContainer>
    </Element>
  );
};

export default AboutSection;
