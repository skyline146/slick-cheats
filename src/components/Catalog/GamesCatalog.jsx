import GamesCatalogTitle from "./GamesCatalogTitle";

const tarkov = "/images/games/games__tarkov.jpg";
const tarkov_logo = "/images/logos/tarkov_white.svg";

const apex = "/images/games/games__apex.jpg";
const apex_logo = "/images/logos/apex_white.svg";

const rust = "/images/games/games__rust.jpg";
const rust_logo = "/images/logos/rust_logo.png";

const dayz = "/images/games/games__dayz.png";
const dayz_logo = "/images/logos/dayz_logo.svg";

const bloodhunt = "/images/games/games__bloodhunt.jpg";
const bloodhunt_logo = "/images/logos/bloodhunt_white.svg";

const wot = "/images/games/games__wot.jpg";
const wot_logo = "/images/logos/wot_white.svg";

import styles from "./Catalog.module.css";

function GamesCatalog() {
  return (
    <div className={styles.select__games_width}>
      <div className={styles.select__games}>
        <GamesCatalogTitle
          link="/catalog/apex"
          image={apex}
          logo={apex_logo}
          title="Apex Legends"
          product="1"
          price="289"
        />
        <GamesCatalogTitle
          link="/catalog/eft"
          image={tarkov}
          logo={tarkov_logo}
          title="Escape From Tarkov"
          product="1"
          price="249"
        />
        <GamesCatalogTitle
          link="/catalog/bloodhunt"
          image={bloodhunt}
          logo={bloodhunt_logo}
          title="Bloodhunt"
          product="1"
          price="249"
        />
        <GamesCatalogTitle
          link="/catalog/wot"
          image={wot}
          logo={wot_logo}
          title="WoT Blitz"
          product="2"
          price="119"
        />
        <GamesCatalogTitle
          link="/catalog/dayz"
          image={dayz}
          logo={dayz_logo}
          title="DayZ"
          product="1"
          price="99"
        />
        <GamesCatalogTitle
          link="/catalog/rust"
          image={rust}
          logo={rust_logo}
          title="Rust"
          product="2"
          price="99"
        />
      </div>
    </div>
  );
}

export default GamesCatalog;
