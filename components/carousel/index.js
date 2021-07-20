import { useEffect, useState, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import { Thumb } from "./emblaCarouselThumb";
import { mediaByIndex } from "../../lib/mediaGenerator";
import Image from "next/image";
import styles from "./emblaCarousel.module.scss";

const MEDIAS = [
  "/../public/images/media-1.webp",
  "/../public/images/media-2.webp",
  "/../public/images/media-3.webp",
  "/../public/images/media-4.webp",
  "/../public/images/media-5.webp",
];

export const EmblaCarousel = ({ slides }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    selectedClass: "",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={mainViewportRef}>
          <div className={styles.embla__container}>
            {slides.map((index) => (
              <div className={styles.embla__slide} key={index}>
                <div className={styles.embla__slide__inner}>
                  <Image
                    className={styles.embla__slide__img}
                    src={MEDIAS[index]}
                    alt="A cool cat."
                    layout="fill"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embla embla--thumb">
        <div className="embla__viewport" ref={thumbViewportRef}>
          <div className="embla__container embla__container--thumb">
            {slides.map((index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={MEDIAS[index]}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
