import styles from "./select.module.scss";

export default function Select({ options = [], id, name }) {
  return (
    <select className={styles.select} id={id} name={name}>
      <option value="">Choisir une option</option>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
}
