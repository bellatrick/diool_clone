import React from "react";
import styles from "../styles/HeadSection.module.css";
import Headimage from "../images/headimage.jpg";
import WhiteStripes from "../images/whitestripes.png";
import CheckList from "./CheckList";
const HeadSection = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div>
          <h1 className={styles.header}>
            Make your <span>business</span> <br /> transactions
            <br />
            easier
          </h1>
          <div className={styles.img_container_small}>
            <img src={Headimage} alt="headimage of man wearing suit" />
          </div>
          <div className={styles.header_list_container}>
            <CheckList/>
            <div className={styles.header_buttons}>
              <button className={styles.signup_button}>Sign up now</button>
              <button className={styles.demo_button}>Book a demo</button>
            </div>
          </div>
        </div>
        <div className={styles.img_container}>
          <img src={Headimage} alt="headimage of man wearing suit" />
        </div>
      </section>
      <img
        src={WhiteStripes}
        className={styles.leftstripe}
        alt="white stripes"
      />
      <img
        src={WhiteStripes}
        className={styles.rightstripe}
        alt="white stripes"
      />
    </div>
  );
};

export default HeadSection;
