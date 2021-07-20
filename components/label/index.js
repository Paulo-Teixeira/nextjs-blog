import styles from "./label.module.scss";

export default function Label({ label, id, dummy = false }) {
  const component = dummy ? (
    <span className={styles.label}>{label}</span>
  ) : (
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
  );
  return component;
}
