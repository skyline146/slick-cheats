import CatalogTitle from "@/components/Catalog/CatalogTitle";
import Buttons from "@/components/Catalog/Buttons";

import styles from "@/components/AllGames/Product.module.css";

export default function GameLayout({ game, children }) {
  const { backgroundImage, link, title, logo, amount } = game;
  return (
    <section className={styles.product}>
      <CatalogTitle
        backgroundImage={backgroundImage}
        link={link}
        nav={title}
        logo={logo}
        title={title}
        product={amount}
      />
      <div className={styles.product__container}>
        <Buttons />
        <div className={styles.product__wrap_grid}>{children}</div>
      </div>
    </section>
  );
}
