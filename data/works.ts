interface Work {
  link: string;
  logo: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  slides?: string[][];
}

export const works: Work[] = [
  {
    link: "https://vocoapp.com",
    logo: "/works/voco/logo.png",
    title: "Voco Inc.",
    description: "A mobile platform where users can freely showcase their creativity in organizing events.",
    startDate: "01 Aug 2023",
    endDate: "01 Oct 2023",
  },
  {
    link: "https://eren.si/en",
    logo: "/works/erensibot/logo.png",
    title: "ErensiBot",
    description: "A Discord bot that is trusted by half a million Discord servers to manage their community.",
    startDate: "01 Apr 2023",
    endDate: "01 Sep 2023",
    slides: [
      ["/works/erensibot/slide1.png", "ErensiBot dashboard view"],
      ["/works/erensibot/slide2.png", "ErensiBot features"],
      ["/works/erensibot/slide3.png", "ErensiBot reaction role"],
    ],
  },
  {
    link: "https://playpad.app",
    logo: "/works/playpad/logo.png",
    title: "PlayPad",
    description: "The fastest and the most cost effective way of investing in crypto.",
    startDate: "01 Oct 2022",
    endDate: "01 Apr 2023",
  },
];
