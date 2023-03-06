import { useTranslation } from "next-i18next";

const rus_flag = "/images/flags/flag__russia.png";
const eu_flag = "/images/flags/flag__eu.png";

import styles from "./Functional.module.css";

function Times(props) {
  const { t } = useTranslation();

  const isFree = props.free;
  return (
    <div style={{ display: "block" }}>
      {isFree ? (
        <div className={styles.sub__wrap}>
          <a
            className={styles.sub__link}
            href={props.linkFREE}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.sub__wrapper}>
              <div className={styles.sub__price_wrap}>
                <p className={styles.sub__price_subtitle}>{t("about.free")}</p>
              </div>
              <button className={styles.sub__purchase}>
                {t("about.download")}
              </button>
            </div>
          </a>
        </div>
      ) : (
        <div className={styles.sub__wrap}>
          <a
            className={styles.sub__link}
            href={props.linkCIS}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.sub__wrapper}>
              <div className={styles.sub__region_wrap}>
                <img
                  className={styles.sub__region_logo}
                  src={rus_flag}
                  alt="rus"
                />
                <p className={styles.sub__region_title}>CIS region</p>
              </div>
              <div className={styles.sub__price_wrap}>
                <p className={styles.sub__price_title}>{t("about.price")}</p>
                <p className={styles.sub__price_subtitle}>
                  {props.price}
                  <span className={styles.span}>₽</span>
                </p>
              </div>
              <button className={styles.sub__purchase}>{t("about.buy")}</button>
            </div>
          </a>
          <a
            className={styles.sub__link}
            href={props.linkEU}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.sub__wrapper}>
              <div className={styles.sub__region_wrap}>
                <img
                  className={styles.sub__region_logo}
                  src={eu_flag}
                  alt="rus"
                />
                <p className={styles.sub__region_title}>EU region</p>
              </div>
              <div className={styles.sub__price_wrap}>
                <p className={styles.sub__price_title}>{t("about.price")}</p>
                <p className={styles.sub__price_subtitle}>
                  {props.price2}
                  <span className={styles.span}>$</span>
                </p>
              </div>
              <button className={styles.sub__purchase}>{t("about.buy")}</button>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}

export default Times;
