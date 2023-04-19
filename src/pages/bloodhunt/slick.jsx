import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import withHead from "@/utils/withHead";
import ProductPageLayout from "@/components/Product/ProductPageLayout";
import getData from "@/utils/getData";
import useStatusStore from "@/lib/store";
import Status from "@/components/Status";

const bloodhunt_media = "/images/products/products__bloodhunt_slick.jpg";
const bloodhunt = "/images/logos/bloodhunt_white.svg";

import styles from "@/components/Product/Functional.module.css";

export async function getServerSideProps({ locale }) {
  const data = await getData("bloodhunt");

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      data,
    },
  };
}

function BloodhuntSlick({ data }) {
  const status = useStatusStore((state) => state.status);

  const functional = [
    {
      type: "esp",
      functions: [
        "Boxes",
        "Rounding of boxes",
        "Thickness of box lines",
        "Skeleton",
        "Distance",
        "Name",
        "Draw FOV",
      ],
    },
    {
      type: "aim",
      functions: [
        "Enable",
        "Only Visible",
        "Lock Target Visible",
        "FOV",
        "Smooth",
        "Priority",
        "AIM HotKey",
      ],
    },
    {
      type: "misc",
      functions: [
        "No spread",
        "No recoil",
        "Reload Speed",
        "Camera Shake",
        "Fire Rate",
      ],
    },
  ];
  return (
    <ProductPageLayout
      title="Bloodhunt"
      subtitle="SLICK"
      gameLogo={bloodhunt}
      link="/catalog/bloodhunt"
      link2="/bloodhunt/slick"
      status={<Status status={status.bloodhunt_slick} />}
      functional={functional}
      data={data}
    >
      <img
        className={styles.functional__media_logo}
        src={bloodhunt_media}
        alt="bloodhunt"
      />
    </ProductPageLayout>
  );
}

export default withHead(BloodhuntSlick);
