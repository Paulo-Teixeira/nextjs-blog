import styles from "./tabs.module.scss";
import { useState, useEffect } from "react";

export default function Tabs({ data }) {
  const [selected, setSelected] = useState(0);
  const [tabItems, setTabItems] = useState(data[selected].content);
  const [tabSize, setTabSize] = useState(100 / data.length);

  const onClickHandler = (e) => {
    const dataId = parseInt(e.target.dataset.id, 10);
    setSelected(dataId);
    setTabItems(data[dataId].content);
  };

  return (
    <div>
      <div className={styles.tabContainer}>
        {data.map((tab, index) => (
          <button
            style={{ flexBasis: tabSize }}
            className={`${styles.tab} ${
              selected === index ? styles.selected : null
            }`}
            key={tab.id}
            data-id={index}
            type="button"
            onClick={onClickHandler}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <ul className={styles.list}>
        {tabItems.map((item) => (
          <li className={styles.item} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
