import React from "react";
import styles from "./Benefits.module.css";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";
import { FiRepeat } from "react-icons/fi";
const Benefits = () => {
  return (
    <div name="Benefits" className={styles.benefitsContainer}>
      <p className={styles.benefits}>Benefits of having a professional web</p>
      <ul className={styles.benefitsList}>
        <li className={styles.benefit}>
          <p>You open up to the world</p>
          <BsFillDoorOpenFill size={26} />
        </li>
        <li className={styles.benefit}>
          <p>New customers</p>
          <FaPeopleCarry size={26} />
        </li>
        <li className={styles.benefit}>
          <p> Much lower costs</p>
          <FaMoneyBillAlt size={26} />
        </li>
        <li className={styles.benefit}>
          <p> No schedules </p>
          <AiOutlineSchedule size={26} />
        </li>
        <li className={styles.benefit}>
          <p> Ultrasegmented marketing + high conversion</p>{" "}
          <AiOutlineRise size={26} />
        </li>
        <li className={styles.benefit}>
          <p>Automation, less work, more performance</p>
          <FiRepeat size={26} />
        </li>
      </ul>
    </div>
  );
};

export default Benefits;
