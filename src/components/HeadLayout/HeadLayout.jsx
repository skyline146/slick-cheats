import Head from "next/head";

export default function HeadLayout({ pathname }) {
  return (
    <Head>
      <link
        rel="alternate"
        hrefLang="en"
        href={`https://slickcheats.com${pathname}`}
      />
      <link
        rel="alternate"
        hrefLang="ru"
        href={`https://slickcheats.com/ru${pathname}`}
      />
    </Head>
  );
}
