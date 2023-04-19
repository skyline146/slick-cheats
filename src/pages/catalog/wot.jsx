import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import withHead from "@/utils/withHead";
import GameLayout from "@/components/Catalog/GameLayout";
import AllGames from "@/components/AllGames/AllGames";
import Status from "@/components/Status";
import useStatusStore from "@/lib/store";

const wot = "/images/products/products_wot_slick.jpg";
const wot_logo = "/images/logos/wot_white.svg";
const flag_ru = "/images/flags/flag__russia.png";
const flag_eu = "/images/flags/flag__eu.png";
const wot_bg = "/images/catalog/wot_bg.png";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function Wot() {
  const status = useStatusStore((state) => state.status);

  const game = {
    backgroundImage: wot_bg,
    logo: wot_logo,
    title: "World of Tanks Blitz",
    amount: 2,
    link: "/catalog/wot",
  };

  return (
    <GameLayout game={game}>
      <AllGames
        link="/wot/slick/cis"
        image={wot}
        title="SLICK CIS"
        flags={[flag_ru]}
        logo={wot_logo}
        subtitle="World of Tanks Blitz"
        status={<Status status={status.blitz_slick} />}
      />
      <AllGames
        link="/wot/slick/eu"
        image={wot}
        title="SLICK EU"
        flags={[flag_eu]}
        logo={wot_logo}
        subtitle="World of Tanks Blitz"
        status={<Status status={status.blitz_slick} />}
      />
    </GameLayout>
  );
}

export default withHead(Wot);
