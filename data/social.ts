import { type Icon, GithubIcon, LinkedinIcon, TwitterIcon } from "@/ui/Icon";

interface SocialLink {
  label: string;
  href: string;
  icon: Icon;
}

export const social: SocialLink[] = [
  {
    label: "Twitter",
    href: "https://twitter.com/tarikcoskunum",
    icon: TwitterIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/tarikcoskun",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mtarikcoskun",
    icon: LinkedinIcon,
  },
];
