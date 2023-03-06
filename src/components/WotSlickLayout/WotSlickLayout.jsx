import Undetected from "@/components/Status/Undetected/Undetected";
import ProductPageLayout from "@/components/Product/ProductPageLayout";

const wot = "/images/logos/wot_white.svg";
const wot_media_1 = "/images/products/products-wot1.png";
const wot_media_2 = "/images/products/products-wot2.png";
const cheatDemoVideo = "/images/videos/slick_wot_demo.mp4";

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
      link2={`/wot/slick/${region === "ru" ? "cis" : "eu"}`}
      status={<Undetected />}
      functional={functional}
      data={data}
      region={region}
    >
      <video className={styles.functional__media_logo} controls muted>
        <source src={cheatDemoVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
