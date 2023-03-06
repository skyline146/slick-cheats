import { useState } from "react";
import { useTranslation } from "next-i18next";

import Times from "./Times";
import TimesReg from "./TimesReg";

import styles from "./Functional.module.css";

const SubscriptionPlans = (props) => {
  const { t } = useTranslation();

  // let plans = <></>;
  // plans = <AccessPlan data={props.data} />;
  // <Times free={true} linkFREE={props[0]} />
  // props.access ? t("about.buyAccess")

  return (
    <div>
      <p className={styles.sub__title}>{t("about.plans")}</p>
      <CheatPlans region={props.region} data={props.data} />
    </div>
  );
};

// const AccessPlan = (props) => {
//   // const { t } = useTranslation();

//   const { data } = props;

//   return (
//     <div>
//       <div className={styles.sub__wrap_buttons}>
//         <div className={styles.sub__inner_buttons}>
//           <button className={styles["sub__button-active"]}>Access</button>
//         </div>
//       </div>
//       <TimesReg reg="all" link={data.buy} price={data[1]} />
//     </div>
//   );
// };

const CheatPlans = (props) => {
  const { t } = useTranslation();

  const { data, region } = props;

  const { dayCIS, dayEU, weekCIS, weekEU, monthCIS, monthEU } = data;

  let day = "",
    week = "",
    month = "";
  if (region) {
    day = region === "cis" ? dayCIS : dayEU;
    week = region === "cis" ? weekCIS : weekEU;
    month = region === "cis" ? monthCIS : monthEU;
  }

  const [show, setShow] = useState("day");

  const [subPeriodPrice, setSubPeriodPrice] = useState(
    region ? (
      <TimesReg reg={region} link={day[0]} price={day[1]} />
    ) : (
      <Times
        linkCIS={dayCIS[0]}
        linkEU={dayEU[0]}
        price={dayCIS[1]}
        price2={dayEU[1]}
      />
    )
  );

  const handlePeriodChange = (value) => {
    setShow(value);
    switch (value) {
      case "week": {
        setSubPeriodPrice(
          region ? (
            <TimesReg reg={region} link={week[0]} price={week[1]} />
          ) : (
            <Times
              linkCIS={weekCIS[0]}
              linkEU={weekEU[0]}
              price={weekCIS[1]}
              price2={weekEU[1]}
            />
          )
        );
        break;
      }

      case "month": {
        setSubPeriodPrice(
          region ? (
            <TimesReg reg={region} link={month[0]} price={month[1]} />
          ) : (
            <Times
              linkCIS={monthCIS[0]}
              linkEU={monthEU[0]}
              price={monthCIS[1]}
              price2={monthEU[1]}
            />
          )
        );
        break;
      }

      default: {
        setSubPeriodPrice(
          region ? (
            <TimesReg reg={region} link={day[0]} price={day[1]} />
          ) : (
            <Times
              linkCIS={dayCIS[0]}
              linkEU={dayEU[0]}
              price={dayCIS[1]}
              price2={dayEU[1]}
            />
          )
        );
        break;
      }
    }
  };

  const activeColor = styles["sub__button-active"];

  const inactiveColor = styles.sub__button;
  return (
    <div>
      <div className={styles.sub__wrap_buttons}>
        <div className={styles.sub__inner_buttons}>
          <button
            className={show === "day" ? activeColor : inactiveColor}
            onClick={show === "day" ? null : () => handlePeriodChange("day")}
          >
            1 {t("about.day")}
          </button>
          <button
            className={show === "week" ? activeColor : inactiveColor}
            onClick={show === "week" ? null : () => handlePeriodChange("week")}
          >
            7 {t("about.days")}
          </button>
          <button
            className={show === "month" ? activeColor : inactiveColor}
            onClick={
              show === "month" ? null : () => handlePeriodChange("month")
            }
          >
            30 {t("about.days")}
          </button>
        </div>
      </div>
      {subPeriodPrice}
    </div>
  );
};

export default SubscriptionPlans;
