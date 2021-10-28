import * as Icons from "@/icons";

export interface IFavouriteTech {
  name: string;
  since: number;
  icon: JSX.Element;
}

export interface IWork {
  img: string;
  href: string;
  name: string;
  role: string;
  description: string;
}

export const config = {
  name: "Tarık Coşkun",
  title: "Full-stack Developer",
  email: "tarikcskun@gmail.com",
  github: "tarikcoskun",
  twitter: "tarikcskun",
  bio: "My name is Tarık and I'm a full-stack developer from Turkey<br />I like working on front-end more",
  about:
    "I've been in web development since 2018. Since then, I've been learning more and more technologies. I mainly use Node.js based technologies.",
  favouriteTech: [
    {
      icon: <Icons.VueFav />,
      name: "Vue",
      since: 2021,
    },
    {
      icon: <Icons.ReactFav />,
      name: "React",
      since: 2021,
    },
    {
      icon: <Icons.TailwindFav />,
      name: "Tailwind",
      since: 2020,
    },
    {
      icon: <Icons.SassFav />,
      name: "Sass",
      since: 2018,
    },
  ] as IFavouriteTech[],
  techStack: [
    { icon: <Icons.HTML />, name: "HTML" },
    { icon: <Icons.CSS />, name: "CSS" },
    { icon: <Icons.JavaScript />, name: "JavaScript" },
    { icon: <Icons.TypeScript />, name: "TypeScript" },
    { icon: <Icons.Node />, name: "Node.js" },
    { icon: <Icons.Vue />, name: "Vue.js" },
    { icon: <Icons.Nuxt />, name: "Nuxt.js" },
    { icon: <Icons.React />, name: "React.js" },
    { icon: <Icons.Next />, name: "Next.js" },
    { icon: <Icons.Svelte />, name: "Svelte" },
    { icon: <Icons.Sass />, name: "Sass" },
    { icon: <Icons.Tailwind />, name: "Tailwind CSS" },
    { icon: <Icons.VSCode />, name: "VS Code" },
    { icon: <Icons.Git />, name: "Git" },
    { icon: <Icons.Netlify />, name: "Netlify" },
    { icon: <Icons.Vercel />, name: "Vercel" },
  ],
  works: [
    {
      href: "https://discords.com/templates",
      img: "/projects/discord-templates.png",
      name: "Discord Templates",
      role: "Moderator",
      description:
        "A template library that helps you create your own kingdom with a diverse range of templates",
    },
    {
      href: "https://premid.app",
      img: "/projects/premid.png",
      name: "PreMiD",
      role: "Translator",
      description:
        "A utility that allows you to show what you're doing on the web in your Discord status",
    },
    {
      href: "https://unicorns.software",
      img: "/projects/unicorns-software.png",
      name: "Unicorn's Software",
      role: "Lead Developer",
      description:
        "An editor tool for Will You Snail? that allows you to change your save content with a friendly UI",
    },
    {
      href: "https://crumblingstatue.github.io/FloweysTimeMachine",
      img: "/projects/floweys-time-machine.png",
      name: "Flowey's Time Machine",
      role: "Designer",
      description:
        "An editor tool for Undertale that allows you to change your save content with a friendly UI",
    },
    {
      href: "https://store.steampowered.com/app/1115050",
      img: "/projects/will-you-snail.png",
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
