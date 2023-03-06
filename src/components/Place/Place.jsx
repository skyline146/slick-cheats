import Link from "next/link";
import { useTranslation } from "next-i18next";

import styles from "./Place.module.css";

function Place() {
  const { t } = useTranslation();

  return (
    <section className={styles.place}>
      <div className={styles.place__container}>
        <div className={styles.place__wrapper}>
          <div className={styles.place__wrap}>
            <div className={styles["place__wrap-inner"]}>
              <h1 className={styles.place__title}>{t("about.allCheats")}</h1>
              <Link className={styles.place__link} href="/catalog">
                <button className={styles.place__button}>
                  {t("about.catalog")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Place;
