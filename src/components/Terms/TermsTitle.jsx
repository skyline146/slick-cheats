import { useTranslation } from "next-i18next";
import Link from "next/link";

import styles from "./Terms.module.css";

const arrow_gray = "/images/select__arrow_gray.svg";

function TermsTitle(props) {
  const { t } = useTranslation();

  return (
    <section className={styles.terms}>
      <div
        className={styles.terms__container}
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
      >
        <div className={styles.terms__navigation}>
          <Link className={styles.terms__link} href="/">
            <p className={styles.terms__navigation_text}>{t("about.home")}</p>
          </Link>
          <img
            className={styles.terms__arrow_gray}
            src={arrow_gray}
            alt="arrow"
          />
          <Link className={styles.terms__link} href={props.link}>
            <p className={styles["terms__navigation_text-active"]}>
              {props.nav}
            </p>
          </Link>
        </div>
        <div className={styles.terms__wrap}>
          <div className={styles.terms__wrapper_center}>
            <div className={styles.terms__wrapper_title}>
              <p className={styles.terms__title}>{props.title}</p>
            </div>
            <p className={styles.terms__subtitle}>{props.subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsTitle;
