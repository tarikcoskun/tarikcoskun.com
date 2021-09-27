import * as Icons from "@/icons";

export interface IWork {
  img: string;
  href: string;
  name: string;
  role: string;
  description: string;
}

export const config = {
  name: "Tarık Coşkun",
  title: "Full-stack developer",
  email: "tarikcskun@gmail.com",
  github: "tarikcoskun",
  twitter: "tarikcskun",
  bio: "My name is Tarık and I'm a full-stack developer from Turkey<br />I like working on front-end more",
  about:
    "I've been in web development since 2018. Since then, I've been learning more and more technologies. I mainly use Node.js based technologies.",
  recentTech: [
    {
      icon: Icons.TypeScriptInline,
      name: "TypeScript",
    },
    {
      icon: Icons.VueInline,
      name: "Vue",
    },
    {
      icon: Icons.ReactInline,
      name: "React",
    },
    {
      icon: Icons.SvelteInline,
      name: "Svelte",
    },
    {
      icon: Icons.TailwindInline,
      name: "Tailwind",
    },
  ],
  favouriteTech: [
    {
      icon: Icons.Vue,
      name: "Vue",
      since: 2021,
    },
    {
      icon: Icons.React,
      name: "React",
      since: 2021,
    },
    {
      icon: Icons.Tailwind,
      name: "Tailwind",
      since: 2020,
    },
    {
      icon: Icons.Sass,
      name: "Sass",
      since: 2018,
    },
  ],
  works: [
    {
      href: "https://discords.com/templates",
      img: "/projects/templates.png",
      name: "Discord Templates",
      role: "Moderator",
      description:
        "A template library that helps you create your own kingdom with a diverse range of templates",
    },
    {
      href: "https://premid.app",
      img: "/projects/premid.png",
      name: "PreMiD",
      role: "Moderator",
      description:
        "A utility that allows you to show what you're doing on the web in your Discord status",
    },
    {
      href: "https://unicorns.software",
      img: "/projects/unicornssoftware.png",
      name: "Unicorn's Software",
      role: "Lead Developer",
      description:
        "An editor tool for Will You Snail? that allows you to change your save content with a friendly UI",
    },
    {
      href: "https://crumblingstatue.github.io/FloweysTimeMachine",
      img: "/projects/floweystimemachine.png",
      name: "Flowey's Time Machine",
      role: "Designer",
      description:
        "An editor tool for Undertale that allows you to change your save content with a friendly UI",
    },
    {
      href: "https://store.steampowered.com/app/1115050",
      img: "/projects/willyousnail.png",
      name: "Will You Snail?",
      role: "Translator & Tester",
      description:
        "A fast paced platformer where an evil AI tries to kill you by predicting your movement",
    },
  ] as IWork[],
  meta: {
    title: "Tarık Coşkun",
    color: "#f9f5f6",
    description: "My personal website, portfolio and playground!",
    keywords: "tarık, coşkun, portfolio, website, developer, github",
  },
};
