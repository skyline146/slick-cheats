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

function WotSlickEU({ data }) {
  return <WotSlickLayout data={data} region="eu" />;
}

export default withHead(WotSlickEU);
