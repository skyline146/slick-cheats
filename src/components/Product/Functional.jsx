import styles from "./Functional.module.css";

export default function Functional({ type, functions }) {
  const logoTypes = {
    weapons: "aim",
  };

  return (
    <div className={styles.functional__function_wrap}>
      <div className={styles.functional__function_wrapper}>
        <img
          className={styles.functional__function_image}
          src={`/images/icons/${logoTypes[type] || type}.svg`}
          alt={type}
        />
        <h4 className={styles.functional__function_title}>{type}</h4>
      </div>
      <div className={styles.functional__functions}>
        {functions.map((text) => (
          <button
            key={`${Math.random()}`}
            className={styles.functional_function}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}
