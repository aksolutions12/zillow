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
      {
        name: "Estimate your monthly payment",
        link: "/mortgages/mortgagescalculator",
      },
      { name: "See how much you qualify for", link: "/homeloans/eligibility" },
    ],
  },
  {
    title: "Just getting started",
    subpartsClass: "flex flex-col gap-2",
    subparts: [
      {
        name: "Calculate your budget",
        link: "/mortgages/affordabilitycalculator",
      },
      { name: "Refinance calculator", link: "/financing" },
    ],
  },
  {
    title: "Explore more options",
    subpartsClass: "flex flex-col gap-2",
    subparts: [
      { name: "See today's rates", link: "#" },
      { name: "Refinance your home", link: "/homeloans/refinance" },
      {
        name: "Calculate your refinance savings",
        link: "/mortgages/refinancecalculator",
      },
      {
        name: "Browse lenders in your area",
        link: "/mortgages/lenderdirectory",
      },
    ],
  },
];
