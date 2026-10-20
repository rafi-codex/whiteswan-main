export const TRANSACTIONS = [
   {
    imgSrc:
      "/trackrecords/Solartia.svg",
    title: "Solartia",
    description: "$300M, Advisory - Project Finance & Equity",
  },
  {
    imgSrc:
      "/trackrecords/boom mobile.svg",
    title: "Boom Mobile",
    description: "$10M, Project Debt Refinance + Equity",
  },

  {
    imgSrc:
      "/trackrecords/Rocket Dollar.svg",
    title: "Rocket Dollar",
    description: "$11.4M, Advisor Equity",
  },
  {
    imgSrc:
      "/trackrecords/Orbital Transports.svg",
    title: "Orbital Transports",
    description: "Undisclosed Amount, Advisory – Equity",
  },
  {
    imgSrc:
      "/trackrecords/Stabili Teeth.svg",
    title: "Stabili Teeth",
    description: "Undisclosed Amount, Advisory – Venture Equity",
  },
  {
    imgSrc:
      "/trackrecords/The Aim Organization.svg",
    title: "The AIM Organization",
    description: "Undisclosed Amount, Advisory – Debt Refinance + Equity",
  },
  {
    imgSrc:
      "/trackrecords/Underground Printing.svg",
    title: "Underground Printing",
    description: "$9M, Advisory – Debt",
  },
  {
    imgSrc:
      "/trackrecords/Progenerative.svg",
    title: "Progenerative Medical, Inc.",
    description: "Undisclosed Amount, Advisory – Venture Equity",
  },
  {
    imgSrc:
      "/trackrecords/Endotagss.svg",
    title: "EndoTaggs",
    description: "Undisclosed Amount, Advisory – Venture Equity",
  },
 
  {
    imgSrc:
      "/trackrecords/Sapphire.svg",
    title: "Sapphire Healthcare AI, Inc.",
    description: "Undisclosed Amount, Advisory – Venture Equity & M&A",
  },
  {
    imgSrc:
      "/trackrecords/IX Water.svg",
    title: "IX Water",
    description: "Undisclosed Amount, Advisory – Equity",
  },
];

export const MERCHANT_BANKING = [
  {
    title: "Investment Criteria",
    items: [
      "Proven business model",
      "Emerging cash-flow positive",
      "Strong management team with proven track record",
      "Competitive advantage",
      "Growth oriented industry backdrop",
      "Strong capital structure",
    ],
    icon: "/svgs/investment.svg",
  },
  {
    title: "Service Approach",
    items: ["Equity in lieu of cash", "Direct company investment"],
    icon: "/svgs/service.svg",
  },
];

export const MERCHANT_BANKING_SERVICE = [
  {
    title: "Investment Criteria",
    items: [
      "Proven business model",
      "Emerging cash-flow positive",
      "Strong management team with proven track record",
      "Competitive advantage",
      "Growth oriented industry backdrop",
      "Strong capital structure",
    ],
    icon: "/svgs/investment.svg",
  },
  {
    title: "Advisory Services",
    items: ["Strategic financial planning", "Market positioning and fundraising strategies", "Debt restructuring and optimization", "Investor communication and engagement"],
    icon: "/svgs/service.svg",
  },
];

export const NAV_LINKS = [
  { name: "Services", path: "/service" },
  { name: "Our Profile", path: "/profile" },
  { name: "Transactions", path: "/transactions" },
  { name: "Contact", path: "/contact" },
];

// === NEW APPROVED HOME PAGE V2 CONSTANTS ===
export const LOGO_PATH = "/wsa-logo.svg";

export const SITE_METRICS = {
  transactionVolume: "$1B+",
  transactionVolumeLabel: "Aggregate 2025 transaction volume",
  experienceYears: "31+",
  experienceYearsLabel: "Years of capital markets experience",
  investorNetwork: "2,755",
  investorNetworkLabel: "Investor network",
};

export const HERO_COPY = {
  eyebrow: "Capital Raising and M&A for Space, Energy and the Trades",
  headline: "Ready to Raise Capital?",
  subheadline: "Space founders. Energy developers. Trade business owners.",
  sellingLine:
    "We find the investors and lenders who fit your raise. Selling a trade business instead? We introduce you to private equity buyers, at no cost to you.",
  buttonText: "I'M READY TO RAISE",
  lineUnderButton: "We run the raise, you run your company.",
};

export const WHICH_ONE_TILES = {
  heading: "Which one are you?",
  subheading: "We do three things, and only three. Pick yours.",
  tiles: [
    {
      id: "lane-space",
      title: "I'm a space company",
      subtitle: "Raising seed through Series B",
    },
    {
      id: "lane-energy",
      title: "I'm an energy transition company",
      subtitle: "EV charging, storage, solar, U.S. or international",
    },
    {
      id: "lane-trades",
      title: "I own a trade business",
      subtitle: "Looking to sell or grow",
    },
  ],
};

export const LANE_BOXES = [
  {
    id: "lane-space",
    title: "Raising Capital for Space Companies",
    teaser:
      'Investors love the tech and take the meeting. Then you hear it, or it just shows up in an email: "Love what you\'re doing. Not the right stage. Come back when you have a lead."',
    type: "single" as const,
    body: 'Investors love the tech and take the meeting. Then you hear it, or it just shows up in an email: "Love what you\'re doing. Not the right stage. Come back when you have a lead." Plenty of interest, but no checks. That\'s one of the gaps we close. Every investor has a buy box. We\'ve spoken with 500+ who back space, and we only bring you to the ones who fit. Our team is FINRA-licensed, so investors and founders know the process is clean and protected. Where debt fits better, we arrange that too. White-glove service from an experienced team.',
  },
  {
    id: "lane-energy",
    title: "Energy Transition Infrastructure",
    teaser:
      "Raising Capital for U.S. Energy Developers & U.S. Capital for International Energy Platforms.",
    type: "double" as const,
    leftColumn: {
      title: "Raising Capital for U.S. Energy Developers",
      body: "You have projects ready to build, but deposits, engineering and interconnection are coming off your own balance sheet. Lenders want equity first. Investors want proof first. We raise equity for EV and fleet charging, battery storage and solar developers, then line up debt to stretch it further. We're licensed and regulated, so investors and developers are protected at every step.",
    },
    rightColumn: {
      title: "U.S. Capital for International Energy Platforms",
      body: 'Capital at home is exhausted or expensive. Your banks don\'t cover U.S. investors. And the big funds tell you: "Great platform. Too small for our minimum check." We solve that. We raise equity from U.S. family offices, wealth managers and institutions, and structure the deal so they can invest. Every raise runs under SEC rules and FINRA oversight, and we work through the cross-border regulatory complexity so the deal stays clean.',
    },
  },
  {
    id: "lane-trades",
    title: "For Trade Business Owners",
    teaser:
      "Selling Your Business to Private Equity & Growth Capital for Founder-Led Businesses.",
    type: "double" as const,
    leftColumn: {
      title: "Selling Your Business to Private Equity",
      body: "Buyers send letters. Brokers call. You still don't know which buyers are serious, and you're not giving it away for pennies. We have signed agreements with private equity firms that want to buy companies like yours. The buyer pays our fee, so finding out costs you NOTHING. No listing, no auction, no word to your employees or customers. Only serious buyers, chosen for fit with your team, not just the biggest check, unless that's what you're after. There's no obligation. If the number's wrong, walk away. You'll hear directly from serious buyers before you decide anything.",
      smallPrint:
        "Introductions to private equity buyers are provided by White Swan Advisors LLC and are not offered through Finalis Securities LLC.",
    },
    rightColumn: {
      title: "Growth Capital for Founder-Led Businesses",
      body: "The bank capped you out, or told you that you don't fit the box. Maybe there's another company you want to buy. Maybe a big contract landed faster than your cash can keep up, or you're slow-playing a backlog you can't fund yet. We raise growth equity and financing structured around how you want to grow, not what the bank will allow. Every deal runs through a FINRA-regulated process, start to finish.",
    },
  },
];

export const TRACK_RECORD = {
  heading: "Recent Track Record",
  subheading:
    "Equity and debt advisory across space, energy transition and growth companies.",
  deals: [
    {
      company: "Solartia",
      type: "Advisory – Project finance & equity",
      amount: "$300M",
      isDisclosed: true,
    },
    {
      company: "ExLabs",
      type: "Advisory – Venture equity",
      amount: "$7M",
      isDisclosed: true,
    },
    {
      company: "Athon Energia",
      type: "Advisory – Equity",
      amount: "$50M",
      isDisclosed: true,
    },
    {
      company: "Orbital Transports",
      type: "Advisory – Equity",
      amount: "Undisclosed",
      isDisclosed: false,
    },
    {
      company: "The AIM Organization",
      type: "Advisory – Debt refinance + equity",
      amount: "Undisclosed",
      isDisclosed: false,
    },
    {
      company: "EndoTaggs",
      type: "Advisory – Venture equity",
      amount: "Undisclosed",
      isDisclosed: false,
    },
    {
      company: "Boom Mobile",
      type: "Project debt refinance + equity",
      amount: "Undisclosed",
      isDisclosed: false,
    },
    {
      company: "Underground Printing",
      type: "Advisory – Debt",
      amount: "Undisclosed",
      isDisclosed: false,
    },
  ],
};

export const HOW_IT_WORKS = {
  heading: "You Take the Investor Calls. We Do Everything Else.",
  buttonText: "I'M READY TO RAISE",
  smallLineUnderButton: "We run the raise, you run your company.",
  smallLineBottomLeft:
    "On our fastest equity raise, we went from launch to a term sheet with a lead in 60 days. On debt, it took just 16.",
  card1: {
    title: "You",
    bullets: ["Approve the investor materials", "Take the investor calls"],
  },
  card2: {
    title: "Us: Everything Else",
    bullets: [
      "The data room",
      "The deck",
      "Preparation for investor questions",
      "A curated investor list",
      "Every introduction and follow-up",
      "Scheduling",
      "Closing",
      "SEC filings",
      "A report every two weeks",
    ],
    boldBottomLine:
      "The goal: a compliant, fully closed round with preparation for the next.",
  },
};

export const FORM_1A_TRANSITION_ENDING =
  "a FINRA-licensed investment banker who raises capital in your industry.";
