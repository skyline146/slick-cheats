import { useTranslation } from "next-i18next";

import stylesJoin from "@/utils/stylesJoin";

import Functional from "./Functional";
import SubscriptionPlans from "./SubscriptionPlans";
import Navigation from "./Navigation";
import System from "./System";
import Description from "./Description";

import styles from "./Functional.module.css";

export default function ProductPageLayout({
  data,
  status,
  functional,
  children,
  link,
  link2,
  gameLogo,
  title,
  subtitle,
  region,
  os,
  macro,
}) {
  const { t } = useTranslation();
  return (
    <section className={styles.functional}>
      <div className={styles.functional__container}>
        <Navigation
          link={link}
          title={title}
          link2={link2}
          subtitle={subtitle}
        />

        <div className={styles.functional__name_wrap}>
          <h2 className={styles.functional__title}>{subtitle}</h2>
          <div className={styles.functional__name_wrapper}>
            <div className={styles.functional__name_wrapper_title}>
              <img
                className={styles.functional__image}
                src={gameLogo}
                alt={title}
              />
              <p className={styles.functional__text}>{title}</p>
            </div>
            {status}
          </div>
          <p className={styles.functional__description_title}>
            {t("about.description")}
          </p>
          {region && (
            <p
              className={stylesJoin([
                styles.functional__description_title,
                styles.only_ru_server,
              ])}
            >
              {region === "cis" ? t("about.onlyRU") : t("about.onlyEU")}
            </p>
          )}
          <Description
            name={`${title} ${subtitle}`}
            game={title}
            macro={macro}
          />
        </div>
      </div>
      {/* Info */}
      <div className={styles.functional__info}>
        <div className={styles.functional__info_wrap}>
          <h3 className={styles.functional__info_title}>
            {t("about.functional")}
          </h3>
          {/* Functionals */}
          <div className={styles.functional__info_wrapper}>
            {functional.map((item) => (
              <Functional
                key={`${Math.random()}`}
                functions={item.functions}
                type={item.type}
              />
            ))}
          </div>
        </div>
        {/* Media */}
        <div className={styles.functional__media}>
          <p className={styles.functional__media_title}>{t("about.media")}</p>
          {children}
        </div>
      </div>
      {/* System */}
      <System
        os={os ?? ["Windows 10", "Windows 11"]}
        proc="Intel"
        proc2="AMD"
      />
      {/* Subscription plans */}
      <div className={styles.sub__container}>
        {data && <SubscriptionPlans region={region} data={data} />}
      </div>
    </section>
  );
}
