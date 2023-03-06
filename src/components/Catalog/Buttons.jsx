import Link from "next/link";
// Buttons
const eft_button = "/images/logos/tarkov_logo_min.svg";
const apex_button = "/images/logos/apex_white.svg";
const bloodhunt_button = "/images/logos/bloodhunt_white.svg";
const wot_button = "/images/logos/wot_white.svg";
// import genshin_button from "../../images/logos/genshin_white.svg";
// import roblox_button from "../../images/logos/roblox_white.svg";
const rust_button = "/images/logos/rust_logo.png";
const dayz_button = "/images/logos/dayz_logo.svg";

import styles from "./Catalog.module.css";

function Buttons() {
  return (
    <section className={styles.select}>
      <div className={styles.select__wrapper_width}>
        <div className={styles.select__wrapper}>
          <div className={styles.select__type}>
            <Link className={styles.select__link} href={`/catalog/eft`}>
              <button className={styles.select__button}>
                <img
                  className={styles.select__logo}
                  src={eft_button}
                  alt="eft"
                />
                <p className={styles.select__text}>EFT</p>
              </button>
            </Link>

            <Link className={styles.select__link} href={`/catalog/apex`}>
              <button className={styles.select__button}>
                <img
                  className={styles.select__logo}
                  src={apex_button}
                  alt="apex"
                />
                <p className={styles.select__text}>Apex</p>
              </button>
            </Link>

            <Link className={styles.select__link} href={`/catalog/rust`}>
              <button className={styles.select__button}>
                <img
                  className={styles.select__logo}
                  src={rust_button}
                  alt="rust"
                />
                <p className={styles.select__text}>Rust</p>
              </button>
            </Link>

            <Link className={styles.select__link} href={`/catalog/dayz`}>
              <button className={styles.select__button}>
                <img
                  className={styles.select__logo}
                  src={dayz_button}
                  alt="dayz"
                />
                <p className={styles.select__text}>DayZ</p>
              </button>
            </Link>

            <Link className={styles.select__link} href={`/catalog/bloodhunt`}>
              <button className={styles.select__button}>
                <img
                  className={styles.select__logo}
                  src={bloodhunt_button}
                  alt="bloodhunt"
                />
                <p className={styles.select__text}>Bloodhunt</p>
              </button>
            </Link>
            <Link className={styles.select__link} href={`/catalog/wot`}>
              <button className={styles.select__button}>
                <img
                  className={styles.select__logo}
                  src={wot_button}
                  alt="wot"
                />
                <p className={styles.select__text}>WoT Blitz</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Buttons;
