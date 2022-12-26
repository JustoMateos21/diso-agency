import React from "react";
import { Link } from "react-scroll";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div name="Home" className={styles.homeContainer}>
      <div>
        <p className={styles.firstText}>
          <small>Expand your</small> <br />
          <b>business </b>
          <br />
          <br />
          <small> With the </small>
          <b>
            {" "}
            best <br />
            online presence
          </b>
        </p>
      </div>
      <div className={styles.btnContainer}>
        <Link smooth className={styles.button} to="Contact">
          Get in Touch
        </Link>
        <Link smooth className={styles.button} to="Contact">
          Get a quote
        </Link>
      </div>
    </div>
  );
};

export default Home;
