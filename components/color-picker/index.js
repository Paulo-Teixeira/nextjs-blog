import styles from "./color-picker.module.scss";

export default function ColorPicker({ id, name, value, tooltip }) {
  return (
    <div className={styles.container}>
      <input
        className={`${styles.radio} ${styles[value]}`}
        type="radio"
        id={id}
        name={name}
        value={value}
      />
      <label className={styles.label} htmlFor={id} title={tooltip} />
    </div>
  );
}
