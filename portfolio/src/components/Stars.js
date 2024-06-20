import React from "react";
import styled, { keyframes } from "styled-components";

const twinkle = keyframes`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
`;

const shoot = keyframes`
  0% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translateX(-100vw) translateY(100vh);
    opacity: 0;
  }
`;

const StarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  background: #000;
`;

const Star = styled.div`
  position: absolute;
  border-radius: 50%;
  background: white;
  opacity: 0.8;
  animation: ${twinkle} 2s infinite alternate;

  ${({ size, top, left, duration }) => `
    width: ${size}px;
    height: ${size}px;
    top: ${top}%;
    left: ${left}%;
    animation-duration: ${duration}s;
  `}
`;

const ShootingStar = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  opacity: 0;
  transform: translateX(0) translateY(0);
  animation: ${shoot} 3s infinite;
  animation-delay: ${({ delay }) => delay}s;

  ${({ top, left }) => `
    top: ${top}%;
    left: ${left}%;
  `}
`;

const Stars = () => {
  const starElements = Array.from({ length: 100 }).map((_, index) => {
    const size = Math.random() * 2 + 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = Math.random() * 2 + 1;

    return { size, top, left, duration };
  });

  const shootingStarElements = Array.from({ length: 10 }).map((_, index) => {
    const top = Math.random() * 50;
    const left = Math.random() * 100;
    const delay = Math.random() * 10;

    return { top, left, delay };
  });

  return (
    <StarContainer>
      {starElements.map((star, index) => (
        <Star
          key={index}
          size={star.size}
          top={star.top}
          left={star.left}
          duration={star.duration}
        />
      ))}
      {shootingStarElements.map((star, index) => (
        <ShootingStar
          key={index + 100}
          top={star.top}
          left={star.left}
          delay={star.delay}
        />
      ))}
    </StarContainer>
  );
};

export default Stars;
