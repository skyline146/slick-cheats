import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import withHead from "@/utils/withHead";
import ProductPageLayout from "@/components/Product/ProductPageLayout";
import getData from "@/utils/getData";
import Status from "@/components/Status";
import useStatusStore from "@/lib/store";

const dayz_cheat = "/images/products/products__dayz_collapse2.png";
const dayz = "/images/logos/dayz_logo.svg";

import styles from "@/components/Product/Functional.module.css";

export async function getServerSideProps({ locale }) {
  const data = await getData("dayz");

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      data,
    },
  };
}

function DayzCollapse({ data }) {
  const { t } = useTranslation();
  const status = useStatusStore((state) => state.status);

  const functional = [
    {
      type: "aim",
      functions: [
        t("dayz.Aim"),
        t("dayz.IgnorZombies"),
        t("dayz.IgnorePlayers"),
        t("dayz.AimbotBone"),
        t("dayz.AimbotBind"),
        t("dayz.AimFOV"),
        t("dayz.DistanceAim"),
      ],
    },
    {
      type: "esp",
      functions: [
        t("dayz.Name"),
        t("dayz.Survivor"),
        t("dayz.Weapon"),
        t("dayz.Distance"),
        t("dayz.Healthbar"),
        t("dayz.Skeleton"),
        t("dayz.Corpse"),
        t("dayz.Zombies"),
        t("dayz.Box"),
        t("dayz.Loot"),
      ],
    },
    {
      type: "misc",
      functions: [
        t("dayz.Crosshair"),
        t("dayz.Settime"),
        t("dayz.RemoveGrass"),
      ],
    },
  ];
  return (
    <ProductPageLayout
      title="DayZ"
      subtitle="COLLAPSE"
      gameLogo={dayz}
      link="/catalog/dayz"
      link2="/dayz/collapse"
      status={<Status status={status.dayz_collapse} />}
      functional={functional}
      data={data}
    >
      <iframe
        style={{ border: 0 }}
        className={styles.functional__media_logo}
        src="https://www.youtube.com/embed/t0hLkUtdDkg"
        title="Collapse DayZ"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <img
        className={styles.functional__media_logo}
        src={dayz_cheat}
        alt="dayzcollapse"
      />
    </ProductPageLayout>
  );
}

export default withHead(DayzCollapse);
