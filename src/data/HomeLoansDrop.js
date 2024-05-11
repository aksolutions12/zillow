import logimg from "../assets/images/home-advertise.png";
export const homeloandrop = [
  {
    title: "Started a loan application?",
    logimg: logimg,
    subpartsClass: "grid grid-cols-2 gap-4",
    subparts: [{ name: "Home Loans dashboard", link: "/homeloans" }],
  },
  {
    title: "Touring homes & making offers",
    subpartsClass: "grid grid-cols-2 gap-4",
    subparts: [
      { name: "Discover Zillow Home Loans", link: "/homeloans" },
      { name: "Estimate your monthly payment", link: "#" },
      { name: "See how much you qualify for", link: "#" },
    ],
  },
  {
    title: "Just getting started",
    subpartsClass: "flex flex-col gap-2",
    subparts: [
      { name: "Calculate your budget", link: "#" },
      { name: "Learn about the mortgage process", link: "#" },
    ],
  },
  {
    title: "Explore more options",
    subpartsClass: "flex flex-col gap-2",
    subparts: [
      { name: "See today's rates", link: "#" },
      { name: "Refinance your home", link: "#" },
      { name: "Calculate your refinance savings", link: "#" },
    ],
  },
];
