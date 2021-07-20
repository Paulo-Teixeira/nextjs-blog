import styles from "./range.module.scss";
import { useState } from "react";

export default function Range({ id, name, min, max, value }) {
  const [stateValue, setStateValue] = useState(value);

  const onChangeHandler = (e) => {
    setStateValue(e.target.value);
  };

  return (
    <>
      <input
        className={styles.range}
        type="range"
        id={id}
        name={name}
        min={min}
        max={max}
        value={stateValue}
        onChange={onChangeHandler}
      />
      <div className={styles.controls}>
        <span className={styles.value}>{min}</span>
        <span className={styles.value}>{stateValue}</span>
        <span className={styles.value}>{max}</span>
      </div>
    </>
  );
}
