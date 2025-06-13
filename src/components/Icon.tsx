import type { IconList } from "@/types/icon-list"
import React from "react"

interface IconProps extends React.ComponentProps<"svg"> {
	icon: IconList
	size?: number
}

export function Icon({ icon, size, width, height, ...props }: IconProps) {
	return (
		<svg {...props} width={size ?? width ?? 16} height={size ?? height ?? 16}>
			<use href={`/sprite.svg#${icon}`} />
		</svg>
	)
}
