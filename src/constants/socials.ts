import type { IconList } from "@/components/Icon"

interface SocialLink {
	label: string
	href: string
	icon: IconList
}

export const socials: SocialLink[] = [
	{
		label: "Twitter",
		href: "https://twitter.com/tarikcoskunum",
		icon: "mdi:twitter",
	},
	{
		label: "GitHub",
		href: "https://github.com/tarikcoskun",
		icon: "mdi:github",
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/mtarikcoskun",
		icon: "mdi:linkedin",
	},
	{
		label: "Email",
		href: "mailto:tarikcskun@gmail.com",
		icon: "mdi:at",
	},
]
