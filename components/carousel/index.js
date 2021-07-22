import { useEffect, useState, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import { Thumbs } from "./emblaCarouselThumbs";
import Image from "next/image";

const MEDIAS = [
  "/images/media-1.webp",
  "/images/media-2.webp",
  "/images/media-3.webp",
  "/images/media-4.webp",
  "/images/media-5.webp",
  "/images/media-6.webp",
];

export default function EmblaCarouse() {
  const [emblaRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
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
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport embla__viewport--main" ref={emblaRef}>
          <div className="embla__container">
            {MEDIAS.map((media) => (
              <div className="embla__slide" key={media}>
                <div className="embla__slide__inner">
                  <Image
                    className="embla__slide__img"
                    src={media}
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
            {MEDIAS.map((media, index) => (
              <Thumbs
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={media}
                key={media}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
