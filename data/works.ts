interface Work {
  link: string;
  image: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

export const works: Work[] = [
  {
    link: "https://vocoapp.com",
    image: "/works/voco.png",
    title: "Voco Inc.",
    description:
      "Voco is a unique mobile platform where users can freely showcase their creativity in organizing events. Thanks to this platform, individuals and institutions can plan and participate in events that suit their interests.",
    startDate: "01 Aug 2023",
    endDate: "01 Oct 2023",
  },
  {
    link: "https://eren.si/en",
    image: "/works/erensibot.png",
    title: "ErensiBOT",
    description:
      "ErensiBot is an easy-to-use advanced Discord bot that is trusted by half a million Discord servers to manage their community.",
    startDate: "01 Apr 2023",
    endDate: "01 Sep 2023",
  },
  {
    link: "https://playpad.app",
    image: "/works/playpad.png",
    title: "PlayPad",
    description:
      "The ultimate choice of crypto investors to invest in high quality blockchain projects. The fastest and the most cost effective way of investing in crypto.",
    startDate: "01 Oct 2022",
    endDate: "01 Apr 2023",
  },
];
