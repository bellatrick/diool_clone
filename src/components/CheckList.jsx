import React from 'react'
import styles from "../styles/HeadSection.module.css";
import { Check } from "@material-ui/icons";
const CheckList = () => {
    return (
        <div>
             <div className={styles.header_list}>
              <div className={styles.check_list}>
                <p className={styles.checked_p}>
                  <Check style={{ color: "white", fontSize: "16px" }} />
                </p>
                <p className={styles.check_list_p}>
                  Collect payments on one platform
                </p>
              </div>
              <div className={styles.check_list}>
                <p className={styles.checked_p}>
                  <Check style={{ color: "white", fontSize: "16px" }} />
                </p>
                <p>Collect payments on one platform</p>
              </div>
              <div className={styles.check_list}>
                <p className={styles.checked_p}>
                  <Check style={{ color: "white", fontSize: "16px" }} />
                </p>
                <p>Collect payments on one platform</p>
              </div>
            </div>
        </div>
    )
}

export default CheckList
