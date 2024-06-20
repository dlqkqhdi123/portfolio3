import React, { useState } from "react";
import styles from "./Cube.module.css";
import front from "../assets/img/lg.jpg";

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
          <p className={styles.frontP}>Front</p>
          <div className={styles.frontEndImg}>
            <img src={front} alt="Front" className={styles.frontImg} />
            <img src={front} alt="Front" className={styles.frontImg} />
            <img src={front} alt="Front" className={styles.frontImg} />
            <img src={front} alt="Front" className={styles.frontImg} />
          </div>
        </div>
        <div className={`${styles.cube} ${styles.back}`}>Back</div>
        <div className={`${styles.cube} ${styles.left}`}>Left</div>
        <div className={`${styles.cube} ${styles.right}`}>Right</div>
        <div className={`${styles.cube} ${styles.top}`}>Top</div>
        <div className={`${styles.cube} ${styles.bottom}`}>Bottom</div>
      </div>
    </div>
  );
};

export default Cube;
