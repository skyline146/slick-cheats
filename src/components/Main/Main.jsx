import Link from "next/link";

import { useTranslation } from "next-i18next";

import styles from "./Main.module.css";

// import main_logo from "../../images/main/main__logo.png";

function Main() {
  const { t } = useTranslation();

  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <div className={styles.main__wrapper}>
          <div className={styles.main__infowrapper}>
            <a
              className={styles.main__link}
              href={t("about.discordLink")}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.main__discord_wrapper}>
                <div className={styles.main__discord_logo} />
                <div className={styles.main__discord}>{t("about.discord")}</div>
              </div>
            </a>
            <p className={styles.main__title}>
              <span className={styles.main__title_color}>
                {t("about.bestShop")}
              </span>{" "}
              {t("about.aboutShop")}
            </p>
            <p className={styles.main__subtitle}>{t("about.catalogDesc")}</p>
            <div className={styles.main__button_wrapper}>
              <Link className={styles.main__link} href={`/catalog`}>
                <button className={styles.main__button_catalog}>
                  {t("about.catalog")}
                </button>
              </Link>
              {/* <button className="main__button_search">
                      <div className="main__button_logo" />
                      <input className="main__input" minLength={2} maxLength={25} placeholder="Search" />
                  </button> */}
            </div>
            <div className={styles.main__information}>
              <div className={styles.main__information_wrapper}>
                <div className={styles.main__information_width}>
                  <div className={styles["main__information_logo-games"]} />
                  <div className={styles.main__information_wrap}>
                    <p className={styles.main__information_title}>7+</p>
                    <p className={styles.main__information_subtitle}>
                      {t("about.descGames")}
                    </p>
                  </div>
                </div>

                <div className={styles.main__information_width}>
                  <div className={styles["main__information_logo-cheats"]} />
                  <div className={styles.main__information_wrap}>
                    <p className={styles.main__information_title}>9+</p>
                    <p className={styles.main__information_subtitle}>
                      {t("about.descCheats")}
                    </p>
                  </div>
                </div>

                <div className={styles.main__information_width}>
                  <div
                    className={styles["main__information_logo-developers"]}
                  />
                  <div className={styles.main__information_wrap}>
                    <p className={styles.main__information_title}>7+</p>
                    <p className={styles.main__information_subtitle}>
                      {t("about.descDev")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
