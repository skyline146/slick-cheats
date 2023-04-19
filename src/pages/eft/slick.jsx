import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import withHead from "@/utils/withHead";
import ProductPageLayout from "@/components/Product/ProductPageLayout";
import getData from "@/utils/getData";
import Status from "@/components/Status";
import useStatusStore from "@/lib/store";

const tarkov_media = "/images/products/products__tarkov_slick.jpg";
const tarkov = "/images/logos/tarkov_logo_min.svg";

import styles from "@/components/Product/Functional.module.css";

export async function getServerSideProps({ locale }) {
  const data = await getData("eft");

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      data,
    },
  };
}

function EftSlick({ data }) {
  const status = useStatusStore((state) => state.status);

  const functional = [
    {
      type: "esp",
      functions: [
        "Player/Scav ESP",
        "Name",
        "2D esp dynamic box",
        "Distance",
        "Weapon",
        "Health",
        "Items Containers",
        "Container price",
        "Loot ESP",
        "Loot Price",
      ],
    },
    {
      type: "misc",
      functions: ["No recoil", "Infinity Stamina", "Radar"],
    },
  ];
  return (
    <ProductPageLayout
      title="Escape From Tarkov"
      subtitle="SLICK EXTERNAL"
      gameLogo={tarkov}
      link="/catalog/eft"
      link2="/eft/slick"
      status={<Status status={status.eft_slick} />}
      functional={functional}
      os={["Windows 10"]}
      data={data}
    >
      <iframe
        style={{ border: 0 }}
        className={styles.functional__media_logo}
        src="https://www.youtube.com/embed/QIpTVzZ4Juw"
        title="SLICK EXTERNAL EFT"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <img
        className={styles.functional__media_logo}
        src={tarkov_media}
        alt="warzone"
      />
    </ProductPageLayout>
  );
}

export default withHead(EftSlick);
