import Undetected from "@/components/Status/Undetected/Undetected";
import ProductPageLayout from "@/components/Product/ProductPageLayout";

const wot = "/images/logos/wot_white.svg";
const wot_media_1 = "/images/products/products-wot1.png";
const wot_media_2 = "/images/products/products-wot2.png";

import styles from "@/components/Product/Functional.module.css";

export default function WotSlickLayout({ data, region }) {
  const functional = [
    {
      type: "esp",
      functions: ["Wallhack", "Shader ESP"],
    },
    {
      type: "aim",
      functions: ["Aimbot"],
    },
    {
      type: "misc",
      functions: [
        "Instant spread",
        "High cam",
        "Size tank",
        "Fast cam",
        "Tundra weather",
        "No sky weather",
        "Kill hud",
      ],
    },
  ];
  return (
    <ProductPageLayout
      title="WoT Blitz"
      subtitle="SLICK"
      gameLogo={wot}
      link="/catalog/wot"
      link2={`/wot/slick/${region}`}
      status={<Undetected />}
      functional={functional}
      data={data}
      os={["Windows 10"]}
      region={region}
    >
      <iframe
        style={{ border: 0 }}
        className={styles.functional__media_logo}
        src="https://www.youtube.com/embed/7yrWhcdjMW4"
        title="SLICK WOT BLITZ"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className={styles.functional__media_wot}>
        <img
          className={styles.functional__media_logo_wot}
          src={wot_media_1}
          alt="wot_media_1"
        />
        <img
          className={styles.functional__media_logo_wot}
          src={wot_media_2}
          alt="wot_media_2"
        />
      </div>
    </ProductPageLayout>
  );
}
