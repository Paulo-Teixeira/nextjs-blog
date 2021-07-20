import Link from "next/link";
import styles from "./breadcrumb.module.scss";

export default function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <Link href="/">
        <a className={styles.link}>Home</a>
      </Link>
      <Link href="/products">
        <a className={styles.link}>Products</a>
      </Link>
      <Link href="/products/product">
        <a className={styles.link}>Product</a>
      </Link>
    </div>
  );
}
