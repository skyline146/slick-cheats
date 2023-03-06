import { useTranslation } from "next-i18next";
import Link from "next/link";

import styles from "./Catalog.module.css";

const arrow_gray = "/images/select__arrow_gray.svg";
const catalog_layer = "/images/catalog/catalog__layer.svg";

function CatalogGrey({ logo, title, subtitle }) {
  const { t } = useTranslation();

  return (
    <section
      className={styles.select}
      style={{ backgroundImage: `url(${catalog_layer})` }}
    >
      <div className={styles.select__container_main}>
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
            <p className={styles["select__navigation_text-active"]}>
              {t("about.catalog")}
            </p>
          </Link>
        </div>
        <div className={styles.select__wrap_grey}>
          <div className={styles.select__wrapper_center_gray}>
            <div className={styles.select__wrapper_title}>
              <img
                className={styles.select__logo_title}
                src={logo}
                alt="logo"
              />
              <p className={styles.select__title}>{title}</p>
            </div>
            <p className={styles.select__subtitle}>{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CatalogGrey;
