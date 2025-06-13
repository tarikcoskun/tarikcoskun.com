import type { IconList } from "./types/icon-list"

interface SocialLink {
	label: string
	href: string
	icon: IconList
}

interface Work {
	logo: string
	title: string
	description: string
	startDate: string
	endDate: string
	slides?: string[][]
}

interface Project {
	link: string
	title: string
	description: string
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

export const works: Work[] = [
	{
		logo: "/works/voco/logo.png",
		title: "Voco Inc.",
		description:
			"A social platform where users can showcase their creativity in organizing events.",
		startDate: "01 Aug 2023",
		endDate: "01 Oct 2023",
		slides: [
			["/works/voco/slide1.png", "Homepage view of Voco"],
			["/works/voco/slide2.png", "Dashboard view of Voco"],
		],
	},
	{
		logo: "/works/erensibot/logo.png",
		title: "ErensiBot",
		description:
			"A Discord bot that is trusted by more than half a million Discord servers to manage their community.",
		startDate: "01 Apr 2023",
		endDate: "01 Sep 2023",
		slides: [
			["/works/erensibot/slide1.png", "Dashboard view of ErensiBot"],
			["/works/erensibot/slide2.png", "ErensiBot features"],
			["/works/erensibot/slide3.png", "ErensiBot reaction role"],
		],
	},
	{
		logo: "/works/playpad/logo.png",
		title: "PlayPad",
		description: "A crypto investing website.",
		startDate: "01 Oct 2022",
		endDate: "01 Apr 2023",
		slides: [["/works/playpad/slide1.png", "Homepage view of PlayPad"]],
	},
]

export const projects: Project[] = [
	{
		link: "https://tarikcoskun.github.io/tagstudio-website",
		title: "TagStudio Website",
		description: "Website concept for TagStudio, a document management system.",
	},
]
