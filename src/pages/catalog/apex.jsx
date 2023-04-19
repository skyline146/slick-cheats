import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import useStatusStore from "../../lib/store";

import GameLayout from "@/components/Catalog/GameLayout";
import withHead from "@/utils/withHead";
import AllGames from "@/components/AllGames/AllGames";
import Status from "@/components/Status";

const catalog_game = "/images/logos/apex_white.svg";
const catalog__apex_image = "/images/catalog/apex_bg.png";
const apex = "/images/products/products__apex_slick.jpg";
const apex_logo = "/images/logos/apex_gray.svg";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function Apex() {
  const status = useStatusStore((state) => state.status);

  const game = {
    backgroundImage: catalog__apex_image,
    logo: catalog_game,
    title: "Apex Legens",
    amount: 1,
    link: "/catalog/apex",
  };
  return (
    <GameLayout game={game}>
      <AllGames
        link="/apex/slick"
        image={apex}
        title="SLICK"
        logo={apex_logo}
        subtitle="Apex"
        status={<Status status={status.apex_slick} />}
      />
    </GameLayout>
  );
}

export default withHead(Apex);
