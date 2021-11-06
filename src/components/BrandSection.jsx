import React from "react";
import styles from "../styles/BrandSection.module.css";
import YUP from "../images/yup.png";
import orangemoney from "../images/orangemoney.png";
import momo from "../images/momo.png";
import eu from "../images/eu.png";
import Visa from "../images/visa.png";
import Mastercard from "../images/mastercard.png";
import Mobile from "../images/mobile+.png";
import { Check } from "@material-ui/icons";
import sideimage from "../images/download.png";
const BrandSection = () => {
  return (
    <div>
      <div className={styles.brand_container}>
        <img src={sideimage} alt="picart" className={styles.sideimage} />
        <div className={styles.brand_flex}>
          <div className={styles.brand_head}>
            <h4>IMPROVED OPERATIONS</h4>
            <p>
              Save time when
              <br /> managing your operations
            </p>
          </div>
          <div>
            <p className={styles.brand_paragraph}>
              Thanks to our partnerships with the main operators, Diool
              facilitates the collection of all mobile money payments. New! You
              can now collect Visa and Mastercard payments as well
            </p>
          </div>
        </div>
        <div className={styles.brands}>
          <img src={YUP} alt="brand logo" style={{ width: "100px" }} />
          <img src={orangemoney} alt="brand logo" style={{ width: "150px" }} />
          <img src={momo} alt="brand logo" />
          <img src={eu} alt="brand logo" style={{ width: "50px" }} />
          <img src={Visa} alt="brand logo" />
          <img src={Mastercard} alt="brand logo" />
        </div>

        <div className={styles.second_brand_section}>
          <div className={styles.brand_section_left}>
            <h4>ONE INTERFACE</h4>
            <h2>Collect all your merchant payments through one platform</h2>
            <p className={styles.brand_p}>
              Diool makes your payments easier, thanks to a user-friendly and
              secure interface
            </p>
            <div className={styles.header_list}>
              <div className={styles.check_list}>
                <p className={styles.checked_p}>
                  <Check style={{ color: "white", fontSize: "16px" }} />
                </p>
                <p className={styles.check_list_p}>
                  <span>Track</span> your transactions at any time
                </p>
              </div>
              <div className={styles.check_list}>
                <p className={styles.checked_p}>
                  <Check style={{ color: "white", fontSize: "16px" }} />
                </p>
                <p className={styles.check_list_p}>
                  <span>Monitor</span> your transfers thanks to real time
                  reports
                </p>
              </div>
              <div className={styles.check_list}>
                <p className={styles.checked_p}>
                  <Check style={{ color: "white", fontSize: "16px" }} />
                </p>
                <p className={styles.check_list_p}>
                  <span>Reduce</span> your cash and mobile money repatriation
                  costs
                </p>
              </div>
            </div>
            <div className={styles.mobile_image_container_small}>
              {" "}
              <img src={Mobile} alt="mobile" />
            </div>
            <div className={styles.button_div}>
              {" "}
              <button>Try diol</button>
            </div>
          </div>
          <div className={styles.mobile_image_container}>
            {" "}
            <img src={Mobile} alt="mobile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
