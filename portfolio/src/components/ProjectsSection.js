import React, { useState } from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import styles from "./ProjectsSection.module.css";

const ProjectsContainer = styled.section`
  padding: 100px 20px;
  background: #0a192f;
  color: white;
  text-align: center;
`;

const ProjectsHeading = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #64ffda;
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
  border: 2px solid #64ffda;
  border-radius: 8px;
  padding: 20px;
  background: #112240;
  transition: transform 0.3s ease-in-out;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: start;
  gap: 20px;

  &:hover {
    transform: translateY(-10px);
  }

  &:active {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 50%;
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
  max-width: 800px;
  width: 100%;
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
        <ProjectsText>Here you can showcase your projects.</ProjectsText>
        <ProjectsGrid>
          <ProjectCard
            onClick={() =>
              handleCardClick({
                title: "Project 1",
                duration: "January 2023 - June 2023",
                team: "Team A",
                image: "https://via.placeholder.com/400", // 예시 이미지 URL
              })
            }
            className={styles.projectCard}
          >
            <ProjectImage
              src="https://via.placeholder.com/50"
              alt="Project 1"
            />
            <div>
              <h3>복습하자</h3>
              <p>복습을 위한 홈페이지</p>
            </div>
          </ProjectCard>
          <ProjectCard
            onClick={() =>
              handleCardClick({
                title: "Project 2",
                duration: "July 2023 - December 2023",
                team: "Team B",
                image: "https://via.placeholder.com/400", // 예시 이미지 URL
              })
            }
            className={styles.projectCard}
          >
            <ProjectImage
              src="https://via.placeholder.com/50"
              alt="Project 2"
            />
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
                style={{ backgroundImage: `url(${modalContent.image})` }}
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
              </ModalContent>
            </ModalContainer>
          </ModalBackground>
        )}
      </ProjectsContainer>
    </Element>
  );
};

export default ProjectsSection;
