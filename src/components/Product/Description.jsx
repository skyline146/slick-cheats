import { useTranslation } from "next-i18next";
import styles from "./Functional.module.css";

function Description(props) {
  const { t } = useTranslation();

  return (
    <p className={styles.functional__description_subtitle}>
      {props.name}{" "}
      {props.macro
        ? `${t("about.descriptionMacro")} ${props.game}.${t(
            "about.descriptionMacro2"
          )}`
        : `${t("about.descriptionGame")} ${props.game}.${t(
            "about.descriptionGame2"
          )}`}
    </p>
  );
}

export default Description;
