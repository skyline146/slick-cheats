import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content="чит, хак, апекс, Apex Legends, апекс читы, апекс чит, приватный, купить, чит, вх, аим, wallhack, aimbot, aim, читы для apex legends, макросы, private hack, hacksчит раст,аим раст,купить чит раст,приватный чит раст,рабочий чит раст,аим раст,вх раст,aim rust,wallhack rust,esp rust,купить чит rust,валорант чит, валорант аим, валорант вх, купить чит валорант, приватный чит валорант, чит valorant, valorant hack, valorant cheat, aim valorant, esp valorant, чит, хак, тарков, Escape from tarkov, тарков читы, ефт чит, приватный, купить, чит, вх, аим, wallhack, aimbot, aim, читы для eft, макросы, private hack, hacks"
        />
        <meta
          name="description"
          content="На нашем сайте вы можете приобрести приватные читы на все популярные игры, такие как: Escape from Tarkov, Apex, Rust, World of Tanks Blitz и многие другие"
        />
        <meta name="og-title" content="Лучшие приватные читы от SLICK.COM" />
        <meta
          name="og-description"
          content="На нашем сайте вы можете приобрести приватные читы на все популярные игры, такие как: Escape from Tarkov, Apex, Rust, World of Tanks Blitz и многие другие"
        />
        <meta
          property="og-title"
          content="Лучшие приватные читы от SLICK.COM"
        />
        <meta
          property="og-description"
          content="На нашем сайте вы можете приобрести приватные читы на все популярные игры, такие как: Escape from Tarkov, Apex, Rust, World of Tanks Blitz и многие другие"
        />
        <link rel="icon" href="/logo192.png" type="image/png" />

        <link rel="manifest" href="/manifest.json" />

        <title>Slick - лучший магазин приватных читов</title>
      </Head>
      <NextNProgress color="#CAAC0E" options={{ showSpinner: false }} />
      <div className="page">
        <Header />
        <Component router={router} {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default appWithTranslation(App);
