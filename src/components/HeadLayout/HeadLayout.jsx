import Head from "next/head";

export default function HeadLayout({ pathname }) {
  return (
    <Head>
      <link
        rel="alternate"
        //eslint-disable-next-line
        hreflang="en"
        href={`https://slickcheats.com${pathname}`}
      />
      <link
        rel="alternate"
        //eslint-disable-next-line
        hreflang="ru"
        href={`https://slickcheats.com/ru${pathname}`}
      />
    </Head>
  );
}
