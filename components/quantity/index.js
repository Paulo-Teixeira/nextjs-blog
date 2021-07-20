import styles from "./quantity.module.scss";
import { useState } from "react";

export default function Quantity({ id, name, value = 0, minVal, maxVal }) {
  return (
    <>
      <button className={styles.button} type="button">
        -
      </button>
      <input
        autocomplete="false"
        className={styles.input}
        type="text"
        id={id}
        name={name}
        value={value}
        minVal={minVal}
        maxVal={maxVal}
      />
      <button className={styles.button} type="button">
        +
      </button>
    </>
  );
}
