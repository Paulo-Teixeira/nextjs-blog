import styles from "./quantity.module.scss";
import { useState } from "react";

export default function Quantity({ id, name, value = 0 }) {
  const [quantity, setQuantity] = useState(value);
  const onRemoveHandler = () => setQuantity(quantity - 1);
  const onAddHandler = () => setQuantity(quantity + 1);
  const onChangeHandler = (e) => setQuantity(parseInt(e.target.value, 10));
  return (
    <>
      <button onClick={onRemoveHandler} className={styles.button} type="button">
        -
      </button>
      <input
        autoComplete="false"
        className={styles.input}
        type="text"
        id={id}
        name={name}
        value={quantity}
        onChange={onChangeHandler}
      />
      <button onClick={onAddHandler} className={styles.button} type="button">
        +
      </button>
    </>
  );
}
