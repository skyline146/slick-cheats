import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import withHead from "@/utils/withHead";
import Undetected from "@/components/Status/Undetected/Undetected";
import ProductPageLayout from "@/components/Product/ProductPageLayout";
import getData from "@/utils/getData";

const rust = "/images/logos/rust.svg";
const rust_gameplay = "/images/products/products__rust_collapse2.png";

import styles from "@/components/Product/Functional.module.css";

export async function getServerSideProps({ locale }) {
  const data = await getData("rust_collapse");

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      data,
    },
  };
}

function RustCollapse({ data }) {
  const { t } = useTranslation();

  const functional = [
    {
      type: "aim",
      functions: [
        t("rust.collapse.Aim"),
        t("rust.collapse.VisibleCheck"),
        t("rust.collapse.AimFOV"),
        t("rust.collapse.AimbotBone"),
        t("rust.collapse.IgnoreTeam"),
        t("rust.collapse.AimbotBind"),
        t("rust.collapse.DistanceAim"),
      ],
    },
    {
      type: "esp",
      functions: [
        t("rust.collapse.Name"),
        t("rust.collapse.Weapon"),
        t("rust.collapse.Distance"),
        t("rust.collapse.Healthbar"),
        t("rust.collapse.Skeleton"),
        t("rust.collapse.Corpse"),
        t("rust.collapse.Hotbar"),
        t("rust.collapse.Bots"),
        t("rust.collapse.Box"),
        t("rust.collapse.World"),
        t("rust.collapse.Resourses"),
      ],
    },
    {
      type: "weapons",
      functions: [
        t("rust.collapse.ThickBullet"),
        t("rust.collapse.BetterFishing"),
        t("rust.collapse.MinimizeRecoil"),
        t("rust.collapse.MinimizeSpread"),
        t("rust.collapse.NoSway"),
        t("rust.collapse.Automatic"),
        t("rust.collapse.LongMelee"),
        t("rust.collapse.SilentMelee"),
      ],
    },
    {
      type: "misc",
      functions: [
        t("rust.collapse.RollBuilding"),
        t("rust.collapse.MountRoll"),
        t("rust.collapse.AntiAim"),
        t("rust.collapse.Spiderman"),
        t("rust.collapse.LongNeck"),
        t("rust.collapse.SwimLand"),
        t("rust.collapse.Flyhack"),
        t("rust.collapse.DebugCamera"),
        t("rust.collapse.Speed"),
        t("rust.collapse.DrawCrosshair"),
        t("rust.collapse.BrightWorld"),
        t("rust.collapse.Settime"),
      ],
    },
  ];
  return (
    <ProductPageLayout
      title="Rust"
      subtitle="COLLAPSE"
      gameLogo={rust}
      link="/catalog/rust"
      link2="/rust/collapse"
      status={<Undetected />}
      functional={functional}
      data={data}
    >
      <iframe
        style={{ border: 0 }}
        className={styles.functional__media_logo}
        src="https://www.youtube.com/embed/Me2nTeDWx-M"
        title="Collapse RUST"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <img
        className={styles.functional__media_logo}
        src={rust_gameplay}
        alt="rust_collapse"
      />
    </ProductPageLayout>
  );
}

export default withHead(RustCollapse);
