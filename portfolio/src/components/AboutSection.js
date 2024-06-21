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

const HighlightedSpan = styled.span`
  color: yellow;
  padding: 2px 4px;
  border-radius: 3px;
`;

const BronzeSpan = styled.span`
  color: orange;
  padding: 2px 4px;
  border-radius: 3px;
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
                <MainHeading>소개</MainHeading>
                <AdditionalText>
                  <p>이름: 이건</p>
                  <p>나이: 1997년08월08일(만26세)</p>
                  <p>기술: React, Html, CSS, Javascript, GitHub...</p>
                  <p>Email: dlrjs6949@gmail.com</p>
                </AdditionalText>
              </Slide>
              <Slide>
                <MainHeading>학력</MainHeading>
                <AdditionalText>
                  <p>대학교: 충청대학교</p>
                  <p>졸업연도: 2018</p>
                </AdditionalText>
              </Slide>
              <Slide>
                <MainHeading>경력</MainHeading>
                <AdditionalText>
                  <p>DW아카데미 데이터시각화 2회차 수료</p>
                  <p>신입</p>
                </AdditionalText>
              </Slide>
              <Slide>
                <MainHeading>수상 이력</MainHeading>
                <AdditionalText>
                  <p>
                    수상명: <br />
                    청주 시장배 유도대회 개인전{" "}
                    <HighlightedSpan>금메달</HighlightedSpan>
                    <br />
                    충북 도지사배 유도대회 개인전{" "}
                    <HighlightedSpan>금메달</HighlightedSpan>
                    <br />
                    충북 도지사배 유도대회 단체전{" "}
                    <BronzeSpan>동메달</BronzeSpan>
                    <br />
                    전국체전 참가
                  </p>
                  <p>사용기술: 허리후리기, 밭다리, 한팔업어치기, 빗 당겨치기</p>
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
