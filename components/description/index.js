import styles from "./description.module.scss";
import { useState, useEffect } from "react";

export default function Description({ description, truncate = false }) {
  const [stateDescription, setStateDescription] = useState(
    description.substring(0, 200) + "..."
  );
  const fullDescription = description;
  const onClickHandler = () => setStateDescription(fullDescription);

  return (
    <p className={styles.description}>
      {stateDescription}
      {stateDescription.length <= 203 && (
        <button className={styles.button} onClick={onClickHandler}>
          Détails
        </button>
      )}
    </p>
  );
}
