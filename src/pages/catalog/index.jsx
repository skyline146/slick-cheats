import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import withHead from "@/utils/withHead";
import GamesCatalog from "@/components/Catalog/GamesCatalog";
import Buttons from "@/components/Catalog/Buttons";
import CatalogGrey from "@/components/Catalog/CatalogGrey";

const catalog_game = "/images/catalog__game.svg";
const catalog_logo = "/images/catalog/catalog__bg.png";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function Catalog() {
  const { t } = useTranslation();

  return (
    <section>
      <CatalogGrey
        backgroundImage={catalog_logo}
        logo={catalog_game}
        title={t("about.catalog")}
        subtitle={t("about.catalogGamesDesc")}
      />
      <Buttons />
      <GamesCatalog />
    </section>
  );
}

export default withHead(Catalog);
