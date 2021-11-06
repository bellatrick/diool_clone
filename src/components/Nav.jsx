import React from "react";
import styles from "../styles/Nav.module.css";
import logo from "../images/icon4.svg";
import { Close, Menu, ExpandMore } from "@material-ui/icons";
import MobileNav from "./MobileNav";
import Zoom from "react-reveal/Zoom";
import icon from "../images/download.svg";
const Navbar = ({ open, setOpen }) => {
  return (
    <header>
      <div className={styles.inner_width}>
        <a href="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </a>
        <nav className={styles.navigation}>
          <div className={styles.popup_content}>
            <div className={styles.nav_item}>
              <p>Our Solution</p> <ExpandMore style={{ color: "coral" }} />
            </div>
            <Zoom>
              <div className={styles.popup}>
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
            </Zoom>
          </div>
          <div className={styles.popup_content}>
            <div className={styles.nav_item}>
              <p>Pricing</p> <ExpandMore style={{ color: "coral" }} />
            </div>
            <Zoom>
              <div className={styles.popup}>
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
            </Zoom>
          </div>
          <div className={styles.popup_content}>
            <div className={styles.nav_item}>
              <p>About</p> <ExpandMore style={{ color: "coral" }} />
            </div>
            <Zoom>
              <div className={styles.popup}>
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
            </Zoom>
          </div>
          <div className={styles.nav_item}>
            <p>Sign In</p>
          </div>
          <div className={styles.nav_item}>
            <button>Try</button>
          </div>
          <div className={styles.nav_item}>
            <p className={styles.nav_item_FR}>FR</p>
          </div>
        </nav>
      </div>

      <div>
        <div className={styles.mobile_menu}>
          <a href="/">
            <img src={logo} alt="logo" className={logo} />
          </a>
          <div className={styles.menu}>
            <div className={styles.FR}>
              <p>FR</p>
            </div>
            <div className={styles.toggle_button}>
              {!open ? (
                <Menu
                  onClick={() => setOpen(true)}
                  style={{ fontSize: "45px", marginTop: "20px" }}
                />
              ) : (
                <Close
                  onClick={() => setOpen(false)}
                  style={{ fontSize: "45px", marginTop: "20px" }}
                />
              )}
            </div>
          </div>
        </div>
        {open ? <MobileNav /> : ""}
      </div>
    </header>
  );
};

export default Navbar;
