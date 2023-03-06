import { useTranslation } from "next-i18next";
import styles from "./Functional.module.css";

function Description2(props) {
  const { t } = useTranslation();

  return (
    <p className={styles.functional__description_subtitle}>
      {props.name} {t("about.descriptionGame3")} {props.game}.
      {t("about.descriptionGame4")}
    </p>
  );
}

export default Description2;
