import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import styles from "./NotFound.module.css";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function NotFound() {
  return (
    <section className={styles.notfound}>
      <div className={styles.notfound__container}>
        <p className={styles.notfound__title}>404</p>
        <p className={styles.notfound__subtitle}>Page not found</p>
        <Link className={styles.notfound__link} href="/">
          <button className={styles.notfound__button}>Go to HOME</button>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
