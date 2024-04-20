import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import useStatusStore from "../../lib/store";
import withHead from "@/utils/withHead";
import Status from "@/components/Status";
import ProductPageLayout from "@/components/Product/ProductPageLayout";
import getData from "@/utils/getData";

const apex_media_bcw = "/images/products/apex__media_bcw.jpg";
const apex = "/images/apex.svg";

import styles from "@/components/Product/Functional.module.css";

export async function getServerSideProps({ locale }) {
  const data = await getData("apex");

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      data,
    },
  };
}

function ApexSlick({ data }) {
  const status = useStatusStore((state) => state.status);

  const functional = [
    {
      type: "esp",
      functions: ["Glow"],
    },
    {
      type: "misc",
      functions: ["HWID Spoofer"],
    },
  ];

  return (
    <ProductPageLayout
      page="apex_slick"
      title="Apex Legends"
      subtitle="SLICK"
      gameLogo={apex}
      link="/catalog/apex"
      link2="/apex/slick"
      status={<Status status={status.apex_slick} />}
      functional={functional}
      data={data}
    >
      <img className={styles.functional__media_logo} src={apex_media_bcw} alt="apex" />
    </ProductPageLayout>
  );
}

export default withHead(ApexSlick);
