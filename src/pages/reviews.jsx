import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import withHead from "@/utils/withHead";
import ReviewsTitle from "@/components/Reviews/ReviewsTitle";
import Review from "@/components/Reviews/Review";

// import userLogo from "../../images/reviews/omore.png"

const reviews_logo = "/images/review__logo.svg";
const apex_logo = "/images/logos/apex_gray.svg";
const wot_logo = "/images/logos/wot_gray.svg";
const bloodhunt_logo = "/images/logos/bloodhunt_gray.svg";
// import genshin_logo from "../../images/logos/genshin_gray.svg";
// const roblox_logo = "/images/logos/roblox_gray.svg";
const tarkov_logo = "/images/logos/tarkov_gray.svg";
const rust_logo = "/images/logos/rust_white.svg";

import styles from "@/components/Reviews/Reviews.module.css";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function Reviews() {
  const { t } = useTranslation();

  return (
    <section>
      <ReviewsTitle
        backgroundImage={reviews_logo}
        title={t("about.reviews")}
        subtitle={t("about.reviewsDesc")}
        nav={t("about.reviews")}
        link="/terms"
      />

      <div className={styles.review__wrapper_width}>
        <Review
          name="Пажилой Пупс"
          gameLogo={wot_logo}
          gameName="World of Tanks"
          comment="Купил ключ, думал, что вирусы или стиллеры, какой день играю и данные не улетели никуда, в общем это не обман, я проверил)"
          starsCount={5}
        />
        <Review
          name="Кирилл"
          gameLogo={bloodhunt_logo}
          gameName="Bloodhunt"
          comment="Приветствую! Очень нравится софт. Скоро буду приобретать навсегда"
          starsCount={4}
        />
        <Review
          name="Unnamed"
          gameLogo={wot_logo}
          gameName="World of Tanks"
          comment="Купил приватку для wot, были конфликты системы при установке, в суппорте быстро помогли, респект"
          starsCount={5}
        />
        <Review
          name="SniperMonkey12"
          gameLogo={rust_logo}
          gameName="Rust"
          comment="все отлично"
          starsCount={4}
        />
        <Review
          name="qr1x"
          gameLogo={wot_logo}
          gameName="World of Tanks"
          comment="отвал седалища"
          starsCount={5}
        />
        <Review
          name="Luis Angel"
          gameLogo={wot_logo}
          gameName="World of Tanks"
          comment="excellent service both in purchase and customer service I recommend the page"
          starsCount={5}
        />
        <Review
          name="COLDBLACK"
          gameLogo={wot_logo}
          gameName="World of Tanks"
          comment="Спасибо большое за помощь! была проблема устранили, бонусом накинули пару часов сабки)"
          starsCount={5}
        />
        <Review
          name="BillyTheKnight"
          gameLogo={apex_logo}
          gameName="Apex Legends"
          comment="I used APEX when it worked and liked everything. Now waiting for the new version"
          starsCount={4}
        />
        <Review
          name="DavidKaufmann"
          gameLogo={wot_logo}
          gameName="World of Tanks"
          comment="Everything works. I contacted the seller and he solved my problem. Thanks!"
          starsCount={5}
        />
        <Review
          name=".Nothing"
          gameLogo={rust_logo}
          gameName="Rust"
          comment="зачётный макрос, на проверке не спалили, буду брать на месяц"
          starsCount={5}
        />
      </div>
    </section>
  );
}

export default withHead(Reviews);
