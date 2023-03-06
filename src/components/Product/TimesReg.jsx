import { useTranslation } from "next-i18next";

const rus_flag = "/images/flags/flag__russia.png";
const eu_flag = "/images/flags/flag__eu.png";

import styles from "./Functional.module.css";

function TimesReg(props) {
  return (
    <div style={{ display: "block" }}>
      <div className={styles.sub__wrap}>
        <RegCard {...props} />
      </div>
    </div>
  );
}

// const SingleCard = (props) => {
//   const { t } = useTranslation();

//   return (
//     <a
//       className={styles.sub__link}
//       href={props.link}
//       target="_blank"
//       rel="noreferrer"
//     >
//       <div className={styles.sub__wrapper}>
//         <div className={styles.sub__region_wrap}>
//           <img
//             className={styles.sub__region_logo}
//             src={rus_flag}
//             alt="national flag"
//           />
//           <img
//             className={styles.sub__region_logo}
//             src={eu_flag}
//             alt="national flag"
//           />
//           <p className={styles.sub__region_title}>All regions</p>
//         </div>
//         <div className={styles.sub__price_wrap}>
//           <p className={styles.sub__price_title}>{t("about.price")}</p>
//           <p className={styles.sub__price_subtitle}>
//             {props.price}
//             <span className={styles.span}>₽</span>
//           </p>
//         </div>
//         <button className={styles.sub__purchase}>{t("about.buy")}</button>
//       </div>
//     </a>
//   );
// };

const RegCard = (props) => {
  const { t } = useTranslation();

  return (
    <a
      className={styles.sub__link}
      href={props.link}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.sub__wrapper}>
        <div className={styles.sub__region_wrap}>
          <img
            className={styles.sub__region_logo}
            src={props.reg === "cis" ? rus_flag : eu_flag}
            alt="national flag"
          />
          <p className={styles.sub__region_title}>
            {props.reg === "cis" ? "CIS" : "EU"} region
          </p>
        </div>
        <div className={styles.sub__price_wrap}>
          <p className={styles.sub__price_title}>{t("about.price")}</p>
          <p className={styles.sub__price_subtitle}>
            {props.price}
            <span className={styles.span}>
              {props.reg === "cis" ? "₽" : "$"}
            </span>
          </p>
        </div>
        <button className={styles.sub__purchase}>{t("about.buy")}</button>
      </div>
    </a>
  );
};

export default TimesReg;
