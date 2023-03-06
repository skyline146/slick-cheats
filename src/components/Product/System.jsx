import { useTranslation } from "next-i18next";

const os = "/images/supported_os.svg";
const processors = "/images/supported_processors.svg";

import styles from "./Functional.module.css";

function System(props) {
  const { t } = useTranslation();

  return (
    <div className={styles.functional__system}>
      <h5 className={styles.functional__system_title}>{t("about.system")}</h5>
      <div className={styles["functional__system_wrap-box"]}>
        <div className={styles.functional__system_wrap}>
          <img className={styles.functional__system_logo} src={os} alt="OS" />
          <div className={styles.functional__system_wrapper}>
            <p className={styles.functional__system_text}>{t("about.oc")}</p>
            <div className={styles.functional__system_wrapper_box}>
              {props.os.map((os) => (
                <p key={`${os}`} className={styles.functional__system_subtitle}>
                  {os}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.functional__system_wrap}>
          <img
            className={styles.functional__system_logo}
            src={processors}
            alt="processors"
          />
          <div className={styles.functional__system_wrapper}>
            <p className={styles.functional__system_text}>{t("about.proc")}</p>
            <div className={styles.functional__system_wrapper_box}>
              <p className={styles.functional__system_subtitle}>{props.proc}</p>
              <p className={styles.functional__system_subtitle}>
                {props.proc2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default System;
