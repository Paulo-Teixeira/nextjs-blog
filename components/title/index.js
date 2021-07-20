import styles from "./title.module.scss";

export default function Title({ marque, modele, reference }) {
  return (
    <h2 className={styles.title}>
      {marque} {modele} {reference}
    </h2>
  );
}
