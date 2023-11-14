import clsx from "clsx";
import { clamp } from "@/util/helpers";
import { useRef, useState } from "react";
import { type PanInfo, motion } from "framer-motion";

// Components
import { ArrowLeftIcon, ArrowRightIcon } from "@/ui/Icon";
import Image from "next/image";

type SliderProps = {
  slides: string[][];
  containerClassName?: string;
};

export default function Slider({ slides, containerClassName }: SliderProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const width = (trackRef.current && trackRef.current.offsetWidth) || 640;

  const [active, setActive] = useState(0);

  const handleDragEnd = (_event: MouseEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 1) {
      const amount = Math.trunc((info.offset.x / width) * -1);
      const direction = info.offset.x < 0 ? amount + 1 : amount - 1;
      setActive((active) => clamp(active + direction, 0, slides.length - 1));
    }
  };

  return (
    <div className={containerClassName}>
      <motion.ul
        ref={trackRef}
        drag="x"
        animate={{ x: -1 * active * width }}
        dragConstraints={{ left: (slides.length - 1) * width * -1, right: 0 }}
        transition={{ type: "spring", damping: 20 }}
        onDragEnd={handleDragEnd}
        className="mt-4 flex"
      >
        {slides.map(([src, alt], idx) => (
          <motion.li
            key={idx}
            aria-label={`Jump to image #${idx + 1}`}
            className={clsx("w-full shrink-0 transition duration-500", {
              "scale-95 cursor-pointer opacity-50": active !== idx,
            })}
            onTap={() => {
              setActive(idx);
            }}
          >
            <Image
              fill
              src={src}
              alt={alt}
              loading="lazy"
              draggable="false"
              className={clsx(
                "!static aspect-video h-[360px] w-[640px] rounded-xl object-cover",
                active === idx && "ring-1 ring-theme-outline ring-offset-2 ring-offset-theme-background",
              )}
            />
          </motion.li>
        ))}
      </motion.ul>
      {slides.length > 1 && (
        <footer className="mt-4 flex items-center justify-between">
          <div className="flex gap-x-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Jump to image #${idx + 1}`}
                className={clsx(
                  "h-1.5 w-1.5 cursor-pointer rounded-full transition-colors",
                  active === idx ? "bg-color-neutral-800" : "bg-color-neutral-100",
                )}
                onClick={() => {
                  setActive(idx);
                }}
              />
            ))}
          </div>
          <div className="flex gap-x-1.5">
            <button
              type="button"
              aria-label="Previous image"
              disabled={active === 0}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-theme-surface transition hover:bg-color-neutral-800 hover:text-color-neutral-100 disabled:pointer-events-none disabled:opacity-50"
              onClick={() => {
                setActive((active) => Math.max(active - 1, 0));
              }}
            >
              <ArrowLeftIcon />
            </button>
            <button
              type="button"
              aria-label="Next image"
              disabled={active === slides.length - 1}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-theme-surface transition hover:bg-color-neutral-800 hover:text-color-neutral-100 disabled:pointer-events-none disabled:opacity-50"
              onClick={() => {
                setActive((active) => Math.min(active + 1, slides.length - 1));
              }}
            >
              <ArrowRightIcon />
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}
