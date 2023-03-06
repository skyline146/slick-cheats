import Link from "next/link";
import { useTranslation } from "next-i18next";

import styles from "./Product.module.css";

function AllGames({
  link,
  image,
  logo,
  title,
  subtitle,
  flags,
  status,
  price,
}) {
  const { t } = useTranslation();

  return (
    <section>
      <Link className={styles.product__link} href={link}>
        <div
          className={styles.product__wrap}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className={styles.product__wrapper}>
            <div className={styles.product__wrapper_width}>
              <div className={styles["product__wrapper_title-wrap"]}>
                <div className={styles["product__wrapper_title-wrapper"]}>
                  <img
                    className={styles.product__logo}
                    src={logo}
                    alt={title}
                  />
                  <p className={styles.product__logo_title}>{subtitle}</p>
                </div>
                <p className={styles["product__wrapper_title-text"]}>{title}</p>
                {flags
                  ? flags.map((flag) => (
                      <img
                        key={flag}
                        className={styles.product__logo_flag}
                        src={flag}
                        alt="National Flag"
                      />
                    ))
                  : null}
              </div>
              <div className={styles.product__wrapper_product}>
                <h3 className={styles.product__wrapper_title}>
                  {t("about.status")}
                </h3>
                {status}
              </div>
              {price ? (
                <div className={styles.product__wrapper_price}>
                  <p className={styles.product__wrapper_title}>
                    {t("about.price")}
                  </p>
                  <p className={styles.product__wrapper_subtitle}>
                    <span className={styles["games__wrapper_subtitle-span"]}>
                      {t("about.from")}
                    </span>{" "}
                    {price}
                  </p>
                </div>
              ) : null}
              <button className={styles.product__button}>
                {t("about.learnMore")}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default AllGames;
