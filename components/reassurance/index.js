import styles from "./reassurance.module.scss";

export default function Reassurance({}) {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <i className={styles.icon}>🚚</i>
        <span className={styles.title}>Livraison</span>
        <p className={styles.description}>Sed ut perspicalis unde omnis.</p>
      </li>
      <li className={styles.item}>
        <i className={styles.icon}>🔒</i>
        <span className={styles.title}>Paiement sécurisé</span>
        <p className={styles.description}>Sed ut perspicalis unde omnis.</p>
      </li>
      <li className={styles.item}>
        <i className={styles.icon}>📆</i>
        <span className={styles.title}>Rapidité</span>
        <p className={styles.description}>Sed ut perspicalis unde omnis.</p>
      </li>
    </ul>
  );
}
