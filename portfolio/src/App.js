import React from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import styled from "styled-components";
import "./App.css";

const AppContainer = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <MainSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </AppContainer>
  );
}

export default App;
