import React, { useState } from "react";
import styles from "./Cube.module.css";
import front from "../assets/img/lg.jpg";
import css from "../assets/img/CSS.png";
import github from "../assets/img/github.svg";
import react from "../assets/img/react.png";
import figma from "../assets/img/Figma.png";
import jqurey from "../assets/img/제이커리.png";
import bootstrap from "../assets/img/부트스트랩.png";
import back from "../assets/img/firebase.png";
import html from "../assets/img/HTML5.png";
import js from "../assets/img/자바스크립트.png";

const Cube = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleToggle = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className={styles.cubeWrapper} onClick={handleToggle}>
      <div
        className={`${styles.cubeContainer} ${isPaused ? styles.paused : ""}`}
      >
        <div className={`${styles.cube} ${styles.front}`}>
          <p className={styles.frontP}>Front end</p>
          <div className={styles.frontEndImg}>
            <img src={react} alt="Front" className={styles.frontImg} />
            <img src={html} alt="Front" className={styles.frontImg} />
            <img src={css} alt="Front" className={styles.frontImg} />
            <img src={js} alt="Front" className={styles.frontImg} />
            <img src={jqurey} alt="Front" className={styles.frontImg} />
          </div>
        </div>
        <div className={`${styles.cube} ${styles.back}`}>
          <p className={styles.frontP}>Back end</p>
          <div className={styles.frontEndImg}>
            <img src={back} alt="Front" className={styles.frontImg} />
            <img src={github} alt="Front" className={styles.frontImg} />
          </div>
        </div>
        <div className={`${styles.cube} ${styles.right}`}>
          <p className={styles.frontP}>etc</p>
          <div className={styles.frontEndImg}>
            <img src={figma} alt="Front" className={styles.frontImg} />
            <img src={bootstrap} alt="Front" className={styles.frontImg} />
            <img src={front} alt="Front" className={styles.frontImg} />
          </div>
        </div>
        <div className={`${styles.cube} ${styles.left}`}>
          <div className={styles.myImgKing}>
            <img src={front} alt="Front" className={styles.myImgKing} />
          </div>
        </div>
        <div className={`${styles.cube} ${styles.top}`}></div>
        <div className={`${styles.cube} ${styles.bottom}`}></div>
      </div>
    </div>
  );
};

export default Cube;
