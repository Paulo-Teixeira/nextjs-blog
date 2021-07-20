import Image from "next/image";
import styles from "./emblaCarousel.module.scss";

export const Thumb = ({ selected, onClick, imgSrc }) => (
  <div
    className={`embla__slide embla__slide--thumb ${
      selected ? "is-selected" : ""
    }`}
  >
    <button
      onClick={onClick}
      className="embla__slide__inner embla__slide__inner--thumb"
      type="button"
    >
      <Image
        className={styles.embla__slide__thumbnail}
        src={imgSrc}
        alt="A cool cat."
        layout="fill"
      />
    </button>
  </div>
);
