import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import withHead from "@/utils/withHead";
import GameLayout from "@/components/Catalog/GameLayout";
import AllGames from "@/components/AllGames/AllGames";
import Status from "@/components/Status";
import useStatusStore from "@/lib/store";

const rust_bg_slick = "/images/products/products__rust_slick.png";
const rust_bg_collapse = "/images/products/products__rust_collapse.png";
const catalog_game = "/images/logos/rust_logo.png";
const catalog_rust_bg = "/images/catalog/rust_bg.png";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function Rust() {
  const status = useStatusStore((state) => state.status);

  const game = {
    backgroundImage: catalog_rust_bg,
    logo: catalog_game,
    amount: 2,
    title: "Rust",
    link: "/catalog/rust",
  };
  return (
    <GameLayout game={game}>
      <AllGames
        link="/rust/slick"
        image={rust_bg_slick}
        title="SLICK"
        logo={catalog_game}
        subtitle="Rust"
        status={<Status status={status.rust_slick} />}
      />
      <AllGames
        link="/rust/collapse"
        image={rust_bg_collapse}
        title="COLLAPSE"
        logo={catalog_game}
        subtitle="Rust"
        status={<Status status={status.rust_collapse} />}
      />
    </GameLayout>
  );
}

export default withHead(Rust);
