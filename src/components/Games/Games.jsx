import Link from "next/link";
import { useTranslation } from "next-i18next";

import GamesCatalog from "../Catalog/GamesCatalog";

import styles from "./Games.module.css";

export default function Games() {
  const { t } = useTranslation();

  return (
    <section className={styles.games}>
      <div className={styles.games__container}>
        <div className={styles.games__wrap_title}>
          <h2 className={styles.games__title}>{t("about.popularGames")}</h2>
          <Link className={styles.games__link} href={`/catalog`}>
            <button className={styles.games__button_title}>
              {t("about.viewCatalog")}
            </button>
          </Link>
        </div>

        <GamesCatalog />
      </div>
    </section>
  );
}
