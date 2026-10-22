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
  { name: "Transactions", path: "/transactions" },
  { name: "Our Profile", path: "/profile" },
];

// === NEW APPROVED HOME PAGE V2 CONSTANTS ===
export const LOGO_PATH = "/wsa-logo.png";
export const LOGO_GOLD_PATH = "/wsa-logo-gold.png";

export const SITE_METRICS = {
  transactionVolume: "$1B+",
  transactionVolumeLabel: "Aggregate transaction volume",
  experienceYears: "31+",
  experienceYearsLabel: "Years of capital markets experience",
  investorNetwork: "5,000+",
  investorNetworkLabel: "Investor network",
};

export const HERO_COPY = {
  eyebrow: "Capital Raising and M&A for Space, Energy and the Trades",
  headline: "Ready to Raise Capital?",
  subheadline: "Space founders. Energy developers. Trade business owners.",
  sellingLine:
    "You take the investor calls. We do everything else. Selling a trade business instead? We introduce you to private equity buyers, at no cost to you.",
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
      title: "I'm in energy or infrastructure",
      subtitle: "U.S. or international",
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
      body: "You have projects ready to build, but deposits, engineering and interconnection are coming off your own balance sheet. Lenders want equity first. Investors want proof first. Big funds say you don’t fit the box. And the tax-credit clock keeps ticking. You might want capital early, before the banks will look, and you need that first 30% so the debt follows. Or maybe you want to close deals actually knowing you’ll be able to fund them, and the whole time the team wants to keep as much equity as possible. These are some of the problems we have solved for our partners. We raise the equity and debt that gets projects built for EV and fleet charging, battery storage, solar, distributed generation, EV fleet leasing, vehicle conversions, hydropower, oil and gas, sustainable infrastructure, water and waste developers, etc. Our team is FINRA-licensed. Every raise runs under the SEC rules, compliant, clean, and prepared for the next stage of development.",
    },
    rightColumn: {
      title: "U.S. Capital for International Energy Platforms",
      body: "Capital at home is exhausted or expensive. Your banks don't cover U.S. investors. And the big funds tell you: “Great platform. Too small for our minimum check.” Private equity will buy you tomorrow, but not for a minority stake, and you're not giving up control. We have even been told, “We need some advice on how to approach American investors.” Or, “We’re not professional fundraisers. We’re company operators.” We have solved all those problems for our partners, and many more. We raise equity from U.S. family offices, wealth managers and institutions, etc. We help structure the deal so they can and want to invest. We get you in the door with the right U.S. families and funds. We shape the deck and make sure the data room has everything needed. You show up to calls with us and the investors and talk about what makes you great. We do the rest. And the truth is, you probably only need three or four families with $10 million each, not 100 meetings. Our focus is efficiency and outcome, all operated through a licensed and compliant framework with FINRA and the SEC. We’ve also worked with cross-border FINRA organizations.",
    },
  },
  {
    id: "lane-trades",
    title: "For Trade Business Owners",
    teaser:
      "Growth capital for founder-led businesses & selling your business to private equity.",
    type: "double" as const,
    leftColumn: {
      title: "Growth Capital for Founder-Led Businesses",
      body: "The bank capped you out, or told you that you don't fit the box. Maybe there's another company you want to buy. Maybe a big contract landed faster than your cash can keep up, or you're slow-playing a backlog you can't fund yet. Maybe the SBA is tapped out. Maybe you're paying interest rates that hurt. And every investor or lender says, \"Sounds great,\" on the first call. Then, \"This is not a fit,\" on the second. Or maybe at this point you'd rather not even bring in equity partners? You just want flexible debt. And like so many owners tell us, \"We're not professional fundraisers. We're company operators.\" At White Swan, you just give us the info. We take care of it from there. We raise growth equity and financing structured around how you want to grow, not what the bank will allow. You're not just looking for a better rate. You want better terms, and lenders who keep funding your deal flow, including your next acquisition. We package the business, build the raise and take you to the allocators. All you do is show up and tell them why your company wins. Every deal runs through a FINRA-regulated process, start to finish.",
    },
    rightColumn: {
      title: "Selling Your Business to Private Equity",
      body: "Buyers send letters. Brokers call. You still don't know which buyers are serious, and you're not giving it away for pennies. We have agreements with private equity firms that want to buy companies like yours. The buyer pays our fee, so finding out costs you NOTHING. No listing, no auction, no word to your employees or customers. Only serious buyers, matched for fit with your team, not just the biggest check, unless that's what you're after. There's no obligation. If the number's wrong, walk away. You'll hear directly from serious buyers before you decide anything.",
      smallPrint:
        "Introductions to private equity buyers are provided by White Swan Advisors LLC and are not offered through Finalis Securities LLC.",
    },
  },
];

export interface TrackRecordDeal {
  company: string;
  type: string;
  amount: string;
  logo?: string;
  link?: string;
  isDisclosed?: boolean;
}

export const TRACK_RECORD = {
  heading: "Recent Track Record",
  subheading:
    "Equity and debt advisory across space, energy transition and growth companies.",
  deals: [
    {
      company: "Athon",
      type: "Advisory – Equity",
      amount: "$50.0M",
      logo: "/trackrecords/Athon.png",
      link: "https://www.athonenergia.com.br",
      isDisclosed: true,
    },
    {
      company: "Solartia",
      type: "Advisory – Project Finance & Equity",
      amount: "$300.0M",
      logo: "/trackrecords/Solartia.svg",
      link: "https://www.solartia.com",
      isDisclosed: true,
    },
    {
      company: "Zero Waste Inc.",
      type: "Advisory – Project Finance & Equity",
      amount: "$75.0M",
      logo: "/trackrecords/Zero Waste Inc.png",
      link: "https://zerowastellc.com/",
      isDisclosed: true,
    },
    {
      company: "Oil & Gas Operator (GOM)*",
      type: "Financial Advisory",
      amount: "$200.0M",
      isDisclosed: true,
    },
    {
      company: "IX Water",
      type: "Advisory – Equity",
      amount: "Undisclosed",
      logo: "/trackrecords/IX Water.svg",
      link: "https://www.ixpower.com",
      isDisclosed: false,
    },
    {
      company: "ExLabs",
      type: "Advisory – Venture Equity",
      amount: "Undisclosed",
      logo: "/trackrecords/ExLabs.png",
      link: "https://exlabs.space/",
      isDisclosed: false,
    },
    {
      company: "Orbital Transports",
      type: "Advisory – Equity",
      amount: "Undisclosed",
      logo: "/trackrecords/Orbital Transports.svg",
      link: "https://www.orbitaltransports.com",
      isDisclosed: false,
    },
    {
      company: "Alphalete Plumbing & Drain",
      type: "Advisory – Debt Restructuring",
      amount: "Undisclosed",
      logo: "/trackrecords/Alphalete.png",
      link: "https://www.alphaleteplumbing.com",
      isDisclosed: false,
    },
    {
      company: "Consumer Products Platform*",
      type: "Capital Raise",
      amount: "$42.0M",
      isDisclosed: true,
    },
    {
      company: "Manufacturing Company*",
      type: "Capital Raise & Financial Advisory",
      amount: "$20.0M",
      isDisclosed: true,
    },
    {
      company: "Underground Printing",
      type: "Advisory – Debt",
      amount: "$9.0M",
      logo: "/trackrecords/Underground Printing.svg",
      link: "https://www.undergroundshirts.com",
      isDisclosed: true,
    },
    {
      company: "Boom Mobile",
      type: "Advisory – Equity & Debt",
      amount: "$7.0M",
      logo: "/trackrecords/boom mobile.svg",
      link: "https://boom.us/",
      isDisclosed: true,
    },
    {
      company: "The AIM Organization",
      type: "Advisory – Debt Restructuring + Venture Equity",
      amount: "Undisclosed",
      logo: "/trackrecords/The Aim Organization.svg",
      link: "https://www.theaimorganization.com",
      isDisclosed: false,
    },
  ],
};

export const HOME_TRACK_RECORD = TRACK_RECORD.deals;

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
