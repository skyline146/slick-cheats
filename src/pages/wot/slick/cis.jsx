import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import withHead from "@/utils/withHead";
import WotSlickLayout from "@/components/WotSlickLayout/WotSlickLayout";
import getData from "@/utils/getData";

export async function getServerSideProps({ locale }) {
  const data = await getData("wot");

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      data,
    },
  };
}

function WotSlickCIS({ data }) {
  return <WotSlickLayout data={data} region="cis" />;
}

export default withHead(WotSlickCIS);
