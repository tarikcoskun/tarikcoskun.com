import React from "react";
import clsx from "clsx";
import { clamp } from "@/util/clamp";
import { motion, type PanInfo } from "framer-motion";

// Components
import { Icon } from "./Icon";

interface SliderProps {
  slides: string[][];
}

export function Slider({ slides }: SliderProps) {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const width = (trackRef.current && trackRef.current.offsetWidth) || 640;

  const [active, setActive] = React.useState(0);

  const handleDragEnd = (_event: MouseEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 1) {
      const amount = Math.trunc((info.offset.x / width) * -1);
      const direction = info.offset.x < 0 ? amount + 1 : amount - 1;
      setActive((active) => clamp(active + direction, 0, slides.length - 1));
    }
  };

  return (
    <>
      <motion.div
        ref={trackRef}
        drag="x"
        animate={{ x: active * width * -1 }}
        dragConstraints={{ left: (slides.length - 1) * width * -1, right: 0 }}
        transition={{ type: "spring", damping: 20 }}
        onDragEnd={handleDragEnd}
        className="flex"
      >
        {slides.map(([src, alt], idx) => (
          <motion.div
            key={idx}
            aria-label={`Jump to slide ${idx + 1}`}
            className={clsx("w-full shrink-0 transition duration-500 relative", {
              "scale-95 cursor-pointer opacity-50": active !== idx,
            })}
            onTap={() => {
              setActive(idx);
            }}
          >
            <img
              src={src}
              alt={alt}
              width={640}
              height={360}
              loading="lazy"
              draggable="false"
              className="aspect-video w-[var(--content-width)] rounded-xl bg-theme-surface object-cover shadow-lg"
            />
            <div aria-hidden className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>

      {slides.length > 1 && (
        <footer className="mt-4 flex items-center justify-between">
          <div className="flex gap-x-1.5">
            {Array.from({ length: slides.length }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Jump to slide ${idx + 1}`}
                className={clsx(
                  "h-1.5 w-1.5 cursor-pointer rounded-full transition-colors",
                  active === idx ? "bg-neutral-800" : "bg-neutral-100",
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
              aria-label="Previous slide"
              disabled={active === 0}
              className="button p-2"
              onClick={() => {
                setActive((active) => Math.max(active - 1, 0));
              }}
            >
              <Icon icon="chevron-left" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              disabled={active === slides.length - 1}
              className="button p-2"
              onClick={() => {
                setActive((active) => Math.min(active + 1, slides.length - 1));
              }}
            >
              <Icon icon="chevron-right" />
            </button>
          </div>
        </footer>
      )}
    </>
  );
}
