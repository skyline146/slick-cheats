import { useRef } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import { useTranslation } from "next-i18next";

import stylesJoin from "@/utils/stylesJoin";
import styles from "./Header.module.css";
import styles2 from "../Footer/Footer.module.css";

const language = "/images/language.svg";
const ru = "/images/flags/russia.png";
const eng = "/images/flags/england.png";

function Header({ router }) {
  const { t, i18n } = useTranslation("common");

  const activeLang = i18n.language;

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link className={styles.logo_mobile} href="/">
          <div className={styles.header__logo_mobile} />
        </Link>
        <div
          className={stylesJoin([
            styles.header__wrapper,
            styles.header__wrapper_links,
          ])}
        >
          <Link
            className={stylesJoin([styles.header__link, styles.logo__link])}
            href="/"
          >
            <div className={styles.header__logo} />
          </Link>
          <Link className={styles.header__link} href={`/catalog`}>
            <p className={styles.header__catalog}>{t("about.catalog")}</p>
          </Link>
          <a
            className={styles.header__link}
            href="https://t.me/WyXL7"
            target="_blank"
            rel="noreferrer"
          >
            <p className={styles.header__support}>{t("about.support")}</p>
          </a>
          <Link className={styles.header__link} href={`/reviews`}>
            <p className={styles.header__reviews}>{t("about.reviews")}</p>
          </Link>
          <Link className={styles.header__link} href={`/terms`}>
            <p className={styles.header__terms}>{t("about.terms")}</p>
          </Link>
        </div>
        <div className={styles.header__wrapper}>
          <img
            className={styles.header__translate_image}
            src={language}
            alt="language"
          />
          <Link
            style={{ textDecoration: "none" }}
            href={router.pathname}
            locale="ru"
          >
            <div className={styles.header__language_button}>
              <button
                className={stylesJoin([
                  styles.header__translate,
                  activeLang === "ru" ? styles.header__translate_active : "",
                ])}
              >
                RU
              </button>
              <img className={styles.header__flag} src={ru} alt="Russia" />
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            href={router.pathname}
            locale="en"
          >
            <div className={styles.header__language_button}>
              <button
                className={stylesJoin([
                  styles.header__translate,
                  activeLang === "en" ? styles.header__translate_active : "",
                ])}
              >
                EN
              </button>
              <img className={styles.header__flag} src={eng} alt="England" />
            </div>
          </Link>

          <div className={styles.header__wrapper_links}>
            <a
              className={styles2.footer__link}
              href={t("about.telegramLink")}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className={styles2.footer__image}
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={styles2.footer__link}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.23244 10.4007C9.06328 8.14981 12.2792 6.65417 13.8941 5.92856C18.4903 3.87021 19.4565 3.51481 20.0776 3.5C20.2156 3.5 20.5193 3.52962 20.7263 3.70732C20.892 3.8554 20.9334 4.04791 20.961 4.19599C20.9886 4.34407 21.0162 4.65505 20.9886 4.89198C20.7401 7.70556 19.6635 14.5322 19.1114 17.6715C18.8768 19.0043 18.4213 19.4485 17.9796 19.493C17.0135 19.5818 16.2819 18.8118 15.3572 18.1602C13.8941 17.1384 13.0798 16.5017 11.6581 15.4947C10.0156 14.3397 11.0784 13.7029 12.017 12.6663C12.2654 12.3998 16.5028 8.25347 16.5856 7.88326C16.5994 7.83883 16.5994 7.66113 16.5028 7.57228C16.4062 7.48343 16.2681 7.51305 16.1577 7.54267C16.0059 7.57228 13.6871 9.23081 9.1737 12.5034C8.51118 12.9921 7.91768 13.2291 7.37939 13.2142C6.78588 13.1994 5.65409 12.8588 4.79834 12.5627C3.76315 12.2073 2.93501 12.0148 3.00402 11.3928C3.04543 11.067 3.4595 10.7413 4.23244 10.4007Z"
                  fill="#C2C6D7"
                />
              </svg>
            </a>
            <a
              className={styles2.footer__link}
              style={{ marginLeft: 8 }}
              href={t("about.discordLink")}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className={styles2.footer__image}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={styles2.footer__link}
                  d="M18.2601 6.592C17.0866 6.08067 15.8404 5.708 14.5396 5.5C14.3759 5.76867 14.194 6.13266 14.0666 6.41867C12.6831 6.228 11.3095 6.228 9.94504 6.41867C9.81769 6.13266 9.62666 5.76867 9.47201 5.5C8.16216 5.708 6.91595 6.08067 5.7507 6.592C3.39474 9.90265 2.758 13.1353 3.07637 16.3246C4.64094 17.4079 6.15096 18.0666 7.63458 18.5C7.99844 18.032 8.32591 17.5293 8.6079 17.0007C8.07121 16.81 7.56181 16.576 7.07061 16.2986C7.19796 16.212 7.32531 16.1167 7.44356 16.0213C10.409 17.3127 13.6209 17.3127 16.5499 16.0213C16.6773 16.1167 16.7955 16.212 16.9229 16.2986C16.4317 16.576 15.9223 16.81 15.3856 17.0007C15.6676 17.5293 15.9951 18.032 16.3589 18.5C17.8416 18.0666 19.3607 17.4079 20.9171 16.3246C21.3082 12.6327 20.2976 9.42602 18.2601 6.592ZM9.01723 14.3573C8.12577 14.3573 7.39806 13.586 7.39806 12.6413C7.39806 11.6967 8.10758 10.9253 9.01723 10.9253C9.91775 10.9253 10.6545 11.6967 10.6363 12.6413C10.6363 13.586 9.91775 14.3573 9.01723 14.3573ZM14.9945 14.3573C14.103 14.3573 13.3744 13.586 13.3744 12.6413C13.3744 11.6967 14.0848 10.9253 14.9945 10.9253C15.895 10.9253 16.6318 11.6967 16.6136 12.6413C16.6136 13.586 15.9041 14.3573 14.9945 14.3573Z"
                  fill="#C2C6D7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default withRouter(Header);
