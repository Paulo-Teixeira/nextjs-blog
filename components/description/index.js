import styles from "./description.module.scss";

export default function Description({ description, truncate = false }) {
  return (
    <p className={styles.description}>
      {description} {truncate && <button>Détails</button>}
    </p>
  );
}
