import React from "react";
import Step from "../Components/Step";
import styles from "./HowWeWork.module.css";
const HowWeWork = () => {
  const steps = [
    {
      text: " You tell us your proposal.",
      step: 1,
      // imgUrl: require("../assets/StepsIcons/proposal.png"),
    },
    {
      text: " We design your site and do a review.",
      step: 2,
      // imgUrl: require("../assets/StepsIcons/design.png"),
    },
    {
      text: " We develop your website.",
      step: 3,
      // imgUrl: require("../assets/StepsIcons/develop.png"),
    },
    {
      text: " We deploy your website.",
      step: 4,
      // imgUrl: require("../assets/StepsIcons/deploy.png"),
    },
    {
      text: " You enjoy all the benefits of having a website for your company.",
      step: 5,
    },
  ];
  return (
    <div name="HowWeWork" className={styles.container}>
      <p>How we work</p>
      {steps.map((x) => (
        <Step
          step={x.step}
          text={x.text}
          imageUrl={x.imgUrl}
          bgColor={x.bgColor}
        />
      ))}
    </div>
  );
};

export default HowWeWork;
