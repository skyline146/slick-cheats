import { useTranslation } from "next-i18next";
import Link from "next/link";

const box = "/images/logos/games__logo_box.svg";

import styles2 from "./Catalog.module.css";
import styles from "../Games/Games.module.css";

function GamesCatalogTitle({ link, image, logo, title, product, price }) {
  const { t } = useTranslation();

  return (
    <div className={styles2.select__games_width}>
      <Link className={styles.games__link} href={link}>
        <div
          className={styles.games__wrap}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className={styles.games__wrapper}>
            <div className={styles.games__wrapper_width}>
              <div className={styles["games__wrapper_title-wrap"]}>
                <img className={styles.games__logo} src={logo} alt={title} />
                <p className={styles.games__logo_title}>{title}</p>
              </div>
              <div className={styles.games__wrapper_product}>
                <h3 className={styles.games__wrapper_title}>
                  {t("about.amount")}
                </h3>
                <div className={styles.games__wrapper_product_box}>
                  <img
                    className={styles.games__wrapper_logo}
                    src={box}
                    alt="box"
                  />
                  <p className={styles.games__wrapper_title}>
                    {product}{" "}
                    {product > 1 ? t("about.products") : t("about.product")}
                  </p>
                </div>
              </div>
              {/*
                <div className="games__wrapper_price">
                  <p className={styles.games__wrapper_title}>{t("about.price")}</p>
                   <p className="games__wrapper_subtitle"><span className="games__wrapper_subtitle-span">{t("about.from")}</span> {price}₽</p> 
                </div>
                */}
              {price ? (
                <button className={styles.games__button}>
                  {t("about.gamesFrom")} <span>{price}₽</span>
                </button>
              ) : (
                <button className={styles.games__button}>
                  {t("about.learnMore")}
                </button>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default GamesCatalogTitle;
