import { useTranslation } from "next-i18next";
import Link from "next/link";

import stylesJoin from "@/utils/stylesJoin";

const arrow_gray = "/images/select__arrow_gray.svg";

import styles from "./Catalog.module.css";

function CatalogTitle(props) {
  const { t } = useTranslation();

  return (
    <section
      className={stylesJoin([styles.select, styles["select-catalog-title"]])}
    >
      <div
        className={styles.select__container}
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
      >
        <div className={styles.select__navigation}>
          <Link className={styles.select__link} href="/">
            <p className={styles.select__navigation_text}>{t("about.home")}</p>
          </Link>
          <img
            className={styles.select__arrow_gray}
            src={arrow_gray}
            alt="arrow"
          />
          <Link className={styles.select__link} href="/catalog">
            <p className={styles.select__navigation_text}>
              {t("about.catalog")}
            </p>
          </Link>
          <img
            className={styles.select__arrow_gray}
            src={arrow_gray}
            alt="arrow"
          />
          <Link className={styles.select__link} href={props.link}>
            <p className={styles["select__navigation_text-active"]}>
              {props.nav}
            </p>
          </Link>
        </div>
        <div className={styles.select__wrap}>
          <div className={styles.select__wrapper_center}>
            <div className={styles.select__wrapper_title}>
              <img
                className={styles.select__logo_title}
                src={props.logo}
                alt="logo"
              />
              <p className={styles.select__title}>{props.title}</p>
            </div>
            <p className={styles.select__subtitle}>
              {props.product}{" "}
              {props.product > 1
                ? props.product > 4
                  ? t("about.products")
                  : t("about.products2")
                : t("about.product")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CatalogTitle;
