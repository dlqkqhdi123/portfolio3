import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: #0a192f;
  color: #64ffda;
  padding: 20px;
  text-align: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Header = () => {
  return <HeaderContainer>My Portfolio</HeaderContainer>;
};

export default Header;
