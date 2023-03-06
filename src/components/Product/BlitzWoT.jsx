import React from "react";

import wot from "../../images/logos/wot_white.svg";
import Undetected from "../Status/Undetected/Undetected";
import esp from "../../images/icons/esp.svg";
import aim from "../../images/icons/aim.svg";
import misc from "../../images/icons/misc.svg";
import wot_media_1 from "../../images/products/products-wot1.png";
import wot_media_2 from "../../images/products/products-wot2.png";

import cheatDemoVideo from "../../images/videos/slick_wot_demo.mp4";


import Navigation from "./Navigation";
import SubscriptionPlans from "./SubscriptionPlans";
import Description from "./Description";
import System from "./System";

import { useTranslation } from "react-i18next";
import "../../i18next";

import "./Functional.css";

function BlitzWot(props) {

  const { t } = useTranslation();

  return (
    <section className="functional">
      <div className="functional__container">
        <Navigation
          link="/catalog/wot"
          title="WoT Blitz"
          link2="/wot/blitz/ru"
          subtitle="WoT Blitz Cheat"
        />

        <div className="functional__name_wrap">
          <h2 className="functional__title">World of Tanks Blitz Cheat</h2>
          <div className="functional__name_wrapper">
            <div className="functional__name_wrapper_title">
              <img className="functional__image" src={wot} alt="WoT" />
              <p className="functional__text">World of Tanks Blitz</p>
            </div>
            <Undetected />
          </div>
          <p className="functional__description_title">{t("about.description")}</p>
          <p className="functional__description_title only_ru_server">{props.region === 'ru' ? t("about.onlyRU") : t("about.onlyEU")}</p>
          <Description name="WoT Blitz Cheat" game="Wot" />
        </div>
      </div>
      {/* Info */}
      <div className="functional__info">
        <div className="functional__info_wrap">
          <h3 className="functional__info_title">{t("about.functional")}</h3>
          {/* Functionals */}
          <div className="functional__info_wrapper">
          <div className="functional__function_wrap">
              <div className="functional__function_wrapper">
                <img
                  className="functional__function_image"
                  src={esp}
                  alt="esp"
                />
                <h4 className="functional__function_title">ESP</h4>
              </div>
              <div className="functional__functions">
                <button className="functional_function">Wallhack</button>
                <button className="functional_function">Shader ESP</button>
              </div>
            </div>
          <div className="functional__function_wrap">
              <div className="functional__function_wrapper">
                <img
                  className="functional__function_image"
                  src={aim}
                  alt="aim"
                />
                <h4 className="functional__function_title">AIM</h4>
              </div>
              <div className="functional__functions">
                <button className="functional_function">Aimbot</button>
               
              </div>
            </div>
            <div className="functional__function_wrap">
              <div className="functional__function_wrapper">
                <img
                  className="functional__function_image"
                  src={misc}
                  alt="misc"
                />
                <h4 className="functional__function_title">MISC</h4>
              </div>
              <div className="functional__functions">
                <button className="functional_function">Instant spread</button>
                <button className="functional_function">High cam</button>
                <button className="functional_function">Size tank</button>
                <button className="functional_function">Fast cam</button>
                <button className="functional_function">Tundra weather</button>
                <button className="functional_function">No sky weather</button>
                <button className="functional_function">Kill hud</button>
              </div>
            </div>
          </div>
        </div>
        {/* Media */}
        <div className="functional__media">
          <p className="functional__media_title">{t("about.media")}</p>
          <video className="functional__media_logo" controls muted autoPlay loop>
            <source src={cheatDemoVideo} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <div className="functional__media_wot">
            <img
              className="functional__media_logo_wot"

              src={wot_media_1}
              alt="wot"
            />
            <img
            className="functional__media_logo_wot"
            src={wot_media_2}
            alt="wot"
            />
          </div>
        </div>
      </div>
      {/* System */}
      <System win="Windows 10" win2="Windows 11" proc="Intel" proc2="AMD" />
      {/* Subscription plans */}
      <div className="sub__container">
        {props.data ? <SubscriptionPlans region={props.region} data={props.data.wot}/> : null}
      </div>
    </section>
  );
}

export default BlitzWot;