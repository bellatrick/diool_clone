import React from "react";
import WhiteStripes from "../images/featuresstripe.png";

import styles from "../styles/KeyFeatures.module.css";
import icon1 from '../images/icon1.svg'
import icon2 from '../images/icon2.svg'
import icon3 from '../images/icon3.svg'
import clip from '../images/featuresclip.png'
const KeyFeatures = () => {
  return (
    <div className={styles.container}>
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
        <img
        src={clip}
        className={styles.clip}
        alt="clip art"
      />
      <div className={styles.features}>
        <div className={styles.features_header}>
          <h2>Available key features</h2>
          <p>Our technology makes your life easier</p>
        </div>
        <div className={styles.features_container}>
          <div>
            <img src={icon1} alt='icon'/>
            <h3>Bank settlement funds in T+2</h3>
            <p>
              From your Diool account, transfer your funds to your bank in 2
              days maximum
            </p>
          </div>
          <div>
          <img src={icon2} alt='icon'/>
            <h3>Add & withdraw funds</h3>
            <p>
            Add and withdraw funds easily with any payment method
            </p>
          </div>
          <div>
          <img src={icon3} alt='icon'/>
            <h3>Quick payments</h3>
            <p>
            Pay your partners and suppliers directly from your balance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
