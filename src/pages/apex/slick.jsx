import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import withHead from "@/utils/withHead";
import Update from "@/components/Status/Update/Update";
import ProductPageLayout from "@/components/Product/ProductPageLayout";
import getData from "@/utils/getData";

const apex_media_bcw = "/images/products/apex__media_bcw.jpg";
const apex = "/images/apex.svg";

import styles from "@/components/Product/Functional.module.css";

export async function getStaticProps({ locale }) {
  const data = await getData("apex");

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      data,
    },
  };
}

function ApexSlick({ data }) {
  const functional = [
    {
      type: "esp",
      functions: [
        "Enable",
        "Visible only",
        "Draw box",
        "Draw skeleton",
        "Draw health",
        "Draw armor",
        "Draw weapon",
        "Draw distance",
        "Draw snapline",
        "Range",
      ],
    },
    {
      type: "aim",
      functions: [
        "pSilent",
        "Nearest bone",
        "Ignore kicked",
        "FOV",
        "Smooth",
        "Remove sway",
        "Remove recoil",
        "Aim key",
        "Auto-pistol",
      ],
    },
    {
      type: "loot",
      functions: ["Ammo", "Weapon", "Backpack", "Armor", "Helmet", "Item glow"],
    },
    {
      type: "misc",
      functions: [
        "Enable",
        "Draw fov",
        "Draw crosshair",
        "Name",
        "Health bar",
        "Skeleton",
        "Glow",
        "Spectators",
        "Bhop",
        "Skin changer",
        "Fake duck",
        "Fake lag",
      ],
    },
  ];
  return (
    <ProductPageLayout
      title="Apex Legends"
      subtitle="SLICK"
      gameLogo={apex}
      link="/catalog/apex"
      link2="/apex/slick"
      status={<Update />}
      functional={functional}
      data={data}
    >
      <img
        className={styles.functional__media_logo}
        src={apex_media_bcw}
        alt="apex"
      />
    </ProductPageLayout>
  );
}

export default withHead(ApexSlick);
