import styles from "./quantity.module.scss";
import { useState } from "react";

export default function Quantity({ id, name, value = 0 }) {
  const [quantity, setQuantity] = useState(value);
  const onRemoveHandler = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  const onAddHandler = () => setQuantity(quantity + 1);
  const onChangeHandler = (e) => {
    const regex = "^[0-9]*$";
    if (!e.target.value.match(regex)) {
      return;
    }
    setQuantity(e.target.value === "" ? "" : parseInt(e.target.value, 10));
  };
  const onBlurHandler = (e) => {
    if (e.target.value === "") {
      setQuantity(0);
    }
  };
  return (
    <>
      <button onClick={onRemoveHandler} className={styles.button} type="button">
        -
      </button>
      <input
        autoComplete="off"
        className={styles.input}
        type="text"
        id={id}
        name={name}
        value={quantity}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
      <button onClick={onAddHandler} className={styles.button} type="button">
        +
      </button>
    </>
  );
}
