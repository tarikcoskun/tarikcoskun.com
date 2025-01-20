import type { IconCollection } from "..";

const lucide = {
  specs: {
    viewBox: "0 0 24 24",
    size: 16,
    props: {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
    },
  },
  icons: {
    "arrow-up-right": <path d="M7 7h10v10M7 17L17 7" />,
    "chevron-left": <path d="m15 18l-6-6l6-6" />,
    "chevron-right": <path d="m9 18l6-6l-6-6" />,
  },
} satisfies IconCollection;

export default lucide;
