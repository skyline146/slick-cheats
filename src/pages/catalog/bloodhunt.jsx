import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import GameLayout from "@/components/Catalog/GameLayout";
import withHead from "@/utils/withHead";
import AllGames from "@/components/AllGames/AllGames";
import Update from "@/components/Status/Update/Update";

const catalog_game = "/images/logos/bloodhunt_white.svg";
const catalog__bloodhunt_game = "/images/catalog/bloodhunt_bg.png";
const bloodhunt_slick = "/images/products/products__bloodhunt_slick.jpg";
const bloodhunt_logo = "/images/logos/bloodhunt_gray.svg";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function Bloodhunt() {
  const game = {
    backgroundImage: catalog__bloodhunt_game,
    logo: catalog_game,
    title: "Bloodhunt",
    amount: 1,
    link: "/catalog/bloodhunt",
  };
  return (
    <GameLayout game={game}>
      <AllGames
        link="/bloodhunt/slick"
        image={bloodhunt_slick}
        title="SLICK"
        logo={bloodhunt_logo}
        subtitle="Bloodhunt"
        status={<Update />}
      />
    </GameLayout>
  );
}

export default withHead(Bloodhunt);
