import styles from "../styles/Nav.module.css";
import icon from "../images/download.svg";
const MobileNav = () => {
  return (
    <div className={styles.mobile_navigation_menu_container}>
      <div className={styles.mobile_navigation_menu}>
        <div className={styles.mobile_nav_item}>
          <p className={styles.mobile_nav_item_p}>Our Solution:</p>
          <hr />
          <div className={styles.mobile_nav_detail}>
            <div className={styles.mobile_nav_detail_div}>
              <img src={icon} alt="icon" />
              <p>Payment platform</p>{" "}
            </div>
            <div className={styles.mobile_nav_detail_div}>
              <img src={icon} alt="icon" />
              <p>Payment platform</p>{" "}
            </div>
            <div className={styles.mobile_nav_detail_div}>
              <img src={icon} alt="icon" />
              <p>Payment platform</p>{" "}
            </div>
          </div>
        </div>
        <div className={styles.mobile_nav_item}>
          <p className={styles.mobile_nav_item_p}>Our Solution:</p>
          <hr />
          <div className={styles.mobile_nav_detail}>
            <div className={styles.mobile_nav_detail_div}>
              <img src={icon} alt="icon" />
              <p>Payment platform</p>{" "}
            </div>
            <div className={styles.mobile_nav_detail_div}>
              <img src={icon} alt="icon" />
              <p>Payment platform</p>{" "}
            </div>
            <div className={styles.mobile_nav_detail_div}>
              <img src={icon} alt="icon" />
              <p>Payment platform</p>{" "}
            </div>
          </div>
        </div>
        <div className={styles.mobile_nav_item}>
          <p className={styles.mobile_nav_item_p}>Our Solution:</p>
          <hr />
          <div className={styles.mobile_nav_detail}>
            <div className={styles.mobile_nav_detail_div}>
              <p>
                {" "}
                <img src={icon} alt="icon" />
              </p>
              <p>Payment platform</p>{" "}
            </div>
            <div className={styles.mobile_nav_detail_div}>
              <p>
                {" "}
                <img src={icon} alt="icon" />
              </p>
              <p>Payment platform</p>{" "}
            </div>
            <div className={styles.mobile_nav_detail_div}>
              <img src={icon} alt="icon" />
              <p>Payment platform</p>{" "}
            </div>
          </div>
        </div>
        <div className={styles.mobile_nav_bottom}>
          <p>Sign in</p>
          <div className={styles.nav_item_button}>Try</div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
