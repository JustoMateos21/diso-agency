import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <p className={styles.logo}>DISO | Digital Solutions</p>
    </div>
  );
};

export default Logo;
