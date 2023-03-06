import stylesJoin from "@/utils/stylesJoin";

import styles from "./Reviews.module.css";

const renderStars = (starsCount) => {
  let stars = [];
  for (let i = 1; i <= starsCount; i++) {
    stars.push(
      <div
        key={"active_star_" + i}
        className={stylesJoin([
          styles.review__item_star,
          styles["review_item_star--active"],
        ])}
      ></div>
    );
  }
  for (let i = 1; i <= 5 - starsCount; i++) {
    stars.push(
      <div
        key={"disabled_star_" + i}
        className={styles.review__item_star}
      ></div>
    );
  }
  return stars;
};

function Review(props) {
  return (
    <div className={styles.review__item}>
      {props.logo ? (
        <img
          className={styles.review__item_logo}
          src={props.logo}
          alt={props.name}
        />
      ) : null}
      <div className={styles.review__item_inner}>
        <div
          className={stylesJoin([
            styles.review__item_line,
            styles["review__item_line-header"],
          ])}
        >
          <div className={styles.review__item_name}>{props.name}</div>
          <div className={styles.review__item_game}>
            <img
              className={styles["review__item_game-logo"]}
              src={props.gameLogo}
              alt={props.gameName}
            />
            <div className={styles["review__item_game-title"]}>
              {props.gameName}
            </div>
          </div>
        </div>
        <div className={styles.review__item_line}>
          <div className={styles.review__item_comment}>{props.comment}</div>
        </div>
      </div>

      <div className={styles.review__item_stars}>
        {renderStars(props.starsCount)}
      </div>
    </div>
  );
}

export default Review;
