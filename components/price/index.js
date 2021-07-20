import styles from "./price.module.scss";

export default function Price({ value }) {
  return <div className={styles.price}>{value}</div>;
}
