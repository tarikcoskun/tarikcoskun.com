import type { IconList } from "@/ui/Icon";

interface SocialLink {
  label: string;
  href: string;
  icon: IconList<"mdi">;
}

export const socials: SocialLink[] = [
  {
    label: "Twitter",
    href: "https://twitter.com/tarikcoskunum",
    icon: "twitter",
  },
  {
    label: "GitHub",
    href: "https://github.com/tarikcoskun",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mtarikcoskun",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:tarikcskun@gmail.com",
    icon: "at",
  },
];
