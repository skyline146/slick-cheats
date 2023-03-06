import { useTranslation } from "next-i18next";
import Link from "next/link";

const arrow_gray = "/images/select__arrow_gray.svg";

import styles from "./Reviews.module.css";

function ReviewsTitle({ backgroundImage, link, nav, title, subtitle }) {
  const { t } = useTranslation();

  return (
    <section className={styles.review}>
      <div
        className={styles.review__container}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={styles.review__navigation}>
          <Link className={styles.review__link} href="/">
            <p className={styles.review__navigation_text}>{t("about.home")}</p>
          </Link>
          <img
            className={styles.review__arrow_gray}
            src={arrow_gray}
            alt="arrow"
          />
          <Link className={styles.review__link} href={link}>
            <p className={styles["review__navigation_text-active"]}>{nav}</p>
          </Link>
        </div>
        <div className={styles.review__wrap}>
          <div className={styles.review__wrapper_center}>
            <div className={styles.review__wrapper_title}>
              <p className={styles.review__title}>{title}</p>
            </div>
            <p className={styles.review__subtitle}>{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsTitle;
