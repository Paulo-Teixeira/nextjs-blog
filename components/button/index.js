import styles from "./button.module.scss";

export default function Button({
  children,
  type = "button",
  btnStyle,
  onClick,
  icon,
}) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[btnStyle]}`}
      type={type}
    >
      {children} {icon && <i className={styles.icon}>{icon}</i>}
    </button>
  );
}
