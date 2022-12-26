import React from "react";
import styles from "./Services.module.css";
import webImage from "../assets/webImage.jpg";

const WhatWeDo = () => {
  return (
    <div name="Services" className={styles.container}>
      <p className={styles.text}>
        We solve your company's problems by creating amazing web pages.
      </p>
      <img className={styles.webImage} src={webImage} alt="web" />
      <br />
      <br />
    </div>
  );
};

export default WhatWeDo;
