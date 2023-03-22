import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import withHead from "@/utils/withHead";
import Undetected from "@/components/Status/Undetected/Undetected";
import ProductPageLayout from "@/components/Product/ProductPageLayout";
import getData from "@/utils/getData";

const rust = "/images/logos/rust.svg";
const rust_media = "/images/products/products__rust_slick.png";
const rust_cheat_console = "/images/products/products__rust_slick_console.png";

import styles from "@/components/Product/Functional.module.css";

export async function getServerSideProps({ locale }) {
  const data = await getData("rust_slick");

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      data,
    },
  };
}

function RustSlick({ data }) {
  const { t } = useTranslation();

  const functional = [
    {
      type: "misc",
      functions: [
        t("rust.slick.settingSensivity"),
        t("rust.slick.settingFOV"),
        t("rust.slick.settingSights"),
        t("rust.slick.settingAddons"),
      ],
    },
    {
      type: "weapons",
      functions: ["AK-47", "LR-300", "MP5", "SMG", "Thompson"],
    },
  ];
  return (
    <ProductPageLayout
      title="Rust"
      subtitle="SLICK"
      gameLogo={rust}
      link="/catalog/rust"
      link2="/rust/slick"
      status={<Undetected />}
      functional={functional}
      data={data}
      macro
    >
      <img
        className={styles.functional__media_logo}
        src={rust_media}
        alt="rust_slick"
      />
      <img
        className={styles.functional__media_logo}
        src={rust_cheat_console}
        alt="rust_slick"
      />
    </ProductPageLayout>
  );
}

export default withHead(RustSlick);
