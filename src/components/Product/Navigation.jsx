import { useTranslation } from "next-i18next";
import Link from "next/link";

const arrow_gray = "/images/select__arrow_gray.svg";

import styles from "./Functional.module.css";

function Navigation(props) {
  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.functional__navigation}>
        <Link className={styles.functional__link} href="/">
          <p className={styles.functional__navigation_text}>
            {t("about.home")}
          </p>
        </Link>
        <img
          className={styles.functional__arrow_gray}
          src={arrow_gray}
          alt="arrow"
        />
        <Link className={styles.functional__link} href="/catalog">
          <p className={styles.functional__navigation_text}>
            {t("about.catalog")}
          </p>
        </Link>
        <img
          className={styles.functional__arrow_gray}
          src={arrow_gray}
          alt="arrow"
        />
        <Link className={styles.functional__link} href={props.link}>
          <p className={styles.functional__navigation_text}>{props.title}</p>
        </Link>
        <img
          className={styles.functional__arrow_gray}
          src={arrow_gray}
          alt="arrow"
        />
        <Link className={styles.functional__link} href={props.link2}>
          <p className={styles["functional__navigation_text-active"]}>
            {props.subtitle}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
