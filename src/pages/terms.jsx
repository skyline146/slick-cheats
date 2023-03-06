import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";
import Link from "next/link";

import withHead from "@/utils/withHead";
import TermsTitle from "@/components/Terms/TermsTitle";
const reviews_logo = "/images/terms__logo.svg";

import styles from "@/components/Terms/Terms.module.css";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function Terms() {
  const { t } = useTranslation();

  return (
    <section>
      <TermsTitle
        backgroundImage={reviews_logo}
        title={t("about.terms")}
        subtitle={t("about.terms")}
        nav={t("about.terms")}
        link="/catalog"
      />

      <div className={styles.terms__wrapper_width}>
        <Trans i18nKey="termsFullText">
          <div className="terms__header-item">
            {t("about.termsFirstHeader")}
          </div>
          <div className="terms__text-block">
            {t("about.termsFirstPreLinkText")}
            <Link className={styles.terms__link} href="/">
              www.slickcheats.com
            </Link>
            {t("about.termsFirstPostLinkText")}
            <br />
            {t("about.termsText1")}
            <br />
            {t("about.termsText2")}
            <br />
            {t("about.termsText3")}
            <br />
            {t("about.termsText4")}
          </div>

          <div className={styles["terms__header-item"]}>
            {t("about.termsSecondHeader")}
          </div>
          <div className={styles["terms__text-block"]}>
            {t("about.termsText5")}
            <br />
            {t("about.termsText6")}
            <br />
            {t("about.termsText7")}
            <br />
            {t("about.termsText8")}
            <br />
          </div>

          <div className={styles["terms__header-item"]}>
            {t("about.termsThirdHeader")}
          </div>
          <div className={styles["terms__text-block"]}>
            {t("about.termsThirdPreLinkText")}
            <Link className={styles.terms__link} href="/">
              www.slickcheats.com
            </Link>
            {t("about.termsThirdPostLinkText")}
            <br />
            {t("about.termsText9")}
            <br />
            {t("about.termsText10")}
            <br />
            {t("about.termsText11")}
            <br />
            {t("about.termsText12")}
            <br />
            {t("about.termsText13")}
            <br />
            {t("about.termsText14")}
            <br />
            {t("about.termsText15")}
            <br />
            {t("about.termsText16")}
            <br />
            {t("about.termsText17")}
            <br />
            {t("about.termsText18")}
            <br />
            {t("about.termsText19")}
            <br />
            {t("about.termsText20")}
            <br />
            {t("about.termsText21")}
            <br />
            {t("about.termsText22")}
            <br />
            {t("about.termsText23")}
            <br />
            {t("about.termsText24")}
            <br />
            {t("about.termsText25")}
            <br />
            {t("about.termsText26")}
            <br />
            {t("about.termsText27")}
            <br />
            {t("about.termsText28")}
            <br />
            {t("about.termsText29")}
            <br />
            {t("about.termsText30")}
            <br />
            {t("about.termsText31")}
            <br />
          </div>
        </Trans>
      </div>
    </section>
  );
}

export default withHead(Terms);
