import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Main from "../components/Main/Main";
import Games from "../components/Games/Games";
import Products from "../components/Products/Products";
import Place from "../components/Place/Place";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <link rel="alternate" hreflang="en" href="https://slickcheats.com" />
        <link rel="alternate" hreflang="ru" href="https://slickcheats.com/ru" />
      </Head>
      <Main />
      <Games />
      <Products />
      <Place />
    </>
  );
}
