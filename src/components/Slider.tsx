import React from "react"
import { clamp } from "@/utils/clamp"
import { motion, type PanInfo } from "motion/react"
import { Icon } from "./Icon"
import clsx from "clsx"

interface SliderProps {
	slides: string[][]
}

export function Slider({ slides }: SliderProps) {
	const trackRef = React.useRef<HTMLDivElement>(null)
	const width = trackRef.current?.offsetWidth || 640

	const [activeIdx, setActiveIdx] = React.useState(0)

	function handleDragEnd(_event: MouseEvent, info: PanInfo) {
		if (Math.abs(info.offset.x) < 1) return

		const amount = Math.trunc((info.offset.x / width) * -1)
		const direction = info.offset.x < 0 ? amount + 1 : amount - 1
		setActiveIdx((active) => clamp(active + direction, 0, slides.length - 1))
	}

	return (
		<>
			<motion.div
				ref={trackRef}
				drag="x"
				animate={{ x: activeIdx * width * -1 }}
				transition={{ type: "spring", damping: 20 }}
				dragConstraints={{ left: (slides.length - 1) * width * -1, right: 0 }}
				onDragEnd={handleDragEnd}
				className="flex"
			>
				{slides.map(([fileName, alt], idx) => (
					<motion.div
						key={idx}
						aria-label={`Jump to slide ${idx + 1}`}
						className={clsx("relative w-full shrink-0 transition duration-500", {
							"scale-95 cursor-pointer opacity-50": activeIdx !== idx,
						})}
						onClick={() => {
							setActiveIdx(idx)
						}}
					>
						<picture>
							<source type="image/webp" srcSet={`${fileName}.webp`} />
							<img
								src={`${fileName}.png`}
								alt={alt}
								width={640}
								height={360}
								loading="lazy"
								draggable="false"
								className="bg-surface aspect-video w-(--content-width) rounded-xl object-cover shadow-lg"
							/>
						</picture>
						<div
							aria-hidden
							className="pointer-events-none absolute inset-0 rounded-xl border border-white/10"
						/>
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
									activeIdx === idx ? "bg-surface-800" : "bg-surface-100",
								)}
								onClick={() => {
									setActiveIdx(idx)
								}}
							/>
						))}
					</div>
					<div className="flex gap-x-1.5">
						<button
							type="button"
							aria-label="Previous slide"
							disabled={activeIdx === 0}
							className="button p-2"
							onClick={() => {
								setActiveIdx((active) => Math.max(active - 1, 0))
							}}
						>
							<Icon icon="lucide:chevron-left" />
						</button>
						<button
							type="button"
							aria-label="Next slide"
							disabled={activeIdx === slides.length - 1}
							className="button p-2"
							onClick={() => {
								setActiveIdx((active) => Math.min(active + 1, slides.length - 1))
							}}
						>
							<Icon icon="lucide:chevron-right" />
						</button>
					</div>
				</footer>
			)}
		</>
	)
}
