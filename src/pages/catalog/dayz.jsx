import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import withHead from "@/utils/withHead";
import GameLayout from "@/components/Catalog/GameLayout";
import AllGames from "@/components/AllGames/AllGames";
import Undetected from "@/components/Status/Undetected/Undetected";

const dayz_bg = "/images/products/products__dayz_collapse.png";
const catalog_game = "/images/logos/dayz_logo.svg";
const catalog_dayz_bg = "/images/catalog/dayz_bg.png";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function DayZ() {
  const game = {
    backgroundImage: catalog_dayz_bg,
    logo: catalog_game,
    title: "DayZ",
    amount: 1,
    link: "/catalog/dayz",
  };
  return (
    <GameLayout game={game}>
      <AllGames
        link="/dayz/collapse"
        image={dayz_bg}
        title="COLLAPSE"
        logo={catalog_game}
        subtitle="DayZ"
        status={<Undetected />}
      />
    </GameLayout>
  );
}

export default withHead(DayZ);
