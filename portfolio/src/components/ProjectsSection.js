import React, { useState } from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import styles from "./ProjectsSection.module.css";
import project1Image from "../assets/img/logoComputer.png";
import project2Image from "../assets/img/pet partner.png";
import newImage1 from "../assets/img/studyLink.PNG"; // 새로운 이미지1
import newImage2 from "../assets/img/hostpetalMain.jpg"; // 새로운 이미지2

const ProjectsContainer = styled.section`
  padding: 100px 20px;
  background: #0a192f;
  color: white;
  text-align: center;
`;

const ProjectsHeading = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #fff;
`;

const ProjectsText = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
  color: #ccd6f6;
`;

const ProjectsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const ProjectCard = styled.div`
  flex: 1;
  max-width: 400px;
  border: 2px solid #000;
  border-radius: 8px;
  padding: 20px;
  background: #112240;
  transition: transform 0.3s ease-in-out;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    transform: translateY(-10px);
  }

  &:active {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
  border-radius: 10%;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #112240;
  border-radius: 8px;
  width: 50%;
  height: 50%;
  color: white;
  display: flex;
  overflow: hidden;
`;

const ModalImage = styled.div`
  flex: 1;
  background-size: cover;
  background-position: center;
`;

const ModalContent = styled.div`
  flex: 1;
  padding: 20px;
  position: relative;
  text-align: left;

  h2 {
    margin-bottom: 50px;
  }

  p {
    margin-bottom: 10px;
  }

  a {
    color: #64ffda;
    text-decoration: none;
    font-size: 1.2em;
    margin-top: 20px;
    display: inline-block;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const ModalCloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5em;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
`;

const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleCardClick = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <Element name="projects">
      <ProjectsContainer>
        <ProjectsHeading>Projects</ProjectsHeading>
        <ProjectsText>
          지금까지 DW아카데미를 다니면서 만든 프로젝트입니다.
          <br />
          계속 추가될 예정입니다
        </ProjectsText>
        <ProjectsGrid>
          <ProjectCard
            onClick={() =>
              handleCardClick({
                title: "복습하자",
                duration: "2023.11.22 ~ 2023.12.06",
                team: "2조",
                image: project1Image,
                modalImage: newImage1,
                link: "https://courageous-sprinkles-60c4e0.netlify.app/",
                description: `내용: DW아카데미를 시작하고 처음 하게된 중간프로젝트입니다. 
                조장을 맡아 프로젝트를 진행하였으며 
                학원 다니면서 복습의 중요성을 강조하시던 선생님의 말씀을 기억하여 만들게 되었습니다.`,
              })
            }
            className={styles.projectCard}
          >
            <ProjectImage src={project1Image} alt="Project 1" />
            <div>
              <h3>복습하자</h3>
              <p>복습을 위한 홈페이지</p>
            </div>
          </ProjectCard>
          <ProjectCard
            onClick={() =>
              handleCardClick({
                title: "Hostpetal",
                duration: "2023.12.26 ~ 2024.02.22",
                team: "2조",
                image: project2Image,
                modalImage: newImage2,
                link: "https://dlqkqhdi123.github.io/newtry/",
                description: `내용: Hostpetal 프로젝트는 동물 병원 검색을 위한 웹사이트입니다. 
                이 프로젝트에서는 팀의 일원으로서 Diseas 파트와 MyPage 파트 기능 구현을 담당하였습니다. 
                사용자 편의성을 고려한 UI/UX 디자인을 중점적으로 작업했습니다.`,
              })
            }
            className={styles.projectCard}
          >
            <ProjectImage src={project2Image} alt="Project 2" />
            <div>
              <h3>Hostpetal</h3>
              <p>동물 병원 서치 홈페이지</p>
            </div>
          </ProjectCard>
        </ProjectsGrid>
        {isModalOpen && (
          <ModalBackground onClick={handleCloseModal}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
              <ModalImage
                style={{ backgroundImage: `url(${modalContent.modalImage})` }}
              />
              <ModalContent>
                <ModalCloseButton onClick={handleCloseModal}>
                  ×
                </ModalCloseButton>
                <h2>{modalContent.title}</h2>
                <p>
                  <strong>기간:</strong> {modalContent.duration}
                </p>
                <p>
                  <strong>Team:</strong> {modalContent.team}
                </p>
                <p>{modalContent.description}</p>
                <a
                  href={modalContent.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  프로젝트 링크
                </a>
              </ModalContent>
            </ModalContainer>
          </ModalBackground>
        )}
      </ProjectsContainer>
    </Element>
  );
};

export default ProjectsSection;
