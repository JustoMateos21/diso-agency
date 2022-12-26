import React from "react";
import styles from "./Step.module.css";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Step = ({ step, imageUrl, text }) => {
  return (
    <div className={[styles.stepContainer]}>
      <p className={styles.stepNumber}>{step}</p>
      <p className={styles.text}>{text}</p>
      <div className={styles.container}></div>
    </div>
  );
};

export default Step;
