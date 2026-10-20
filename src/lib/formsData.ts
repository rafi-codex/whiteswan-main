// Form schemas, questions, options, and transitions for White Swan Advisors
// Exact copy from "WSA After the Button - Build Guide.pdf"

export interface QuestionDefinition {
  id: string; // e.g. "Q1", "Q2"
  title: string;
  type: "radio" | "dropdown" | "multiselect" | "file";
  options?: string[];
  placeholder?: string;
  helperText?: string;
  required?: boolean;
}

export interface PageDefinition {
  pageNumber: number;
  title: string;
  subtitle?: string;
  questions: QuestionDefinition[];
  transitionAfter?: {
    message: string;
    submessage?: string;
  };
}

export interface FormConfig {
  laneKey: "space" | "energy" | "trades-raise" | "trades-sell";
  laneName: string;
  pathName: string;
  title: string;
  badge: string;
  totalPages: number;
  pages: PageDefinition[];
}

const COMMON_TRADES = [
  "HVAC, plumbing and electrical",
  "Roofing and re-roofing",
  "Commercial landscaping",
  "Estate residential landscaping",
  "Tree trimming and vegetation management",
  "Garage doors, gates and access control",
  "Restoration and mitigation",
  "Fire and life safety",
  "Foundation repair and waterproofing",
  "Pest control",
  "Parking lot sweeping and property services",
  "Commercial paving",
  "Water and wastewater services",
  "Low-voltage cabling",
  "Auto repair and tire",
  "Other trade",
];

const RAISE_AMOUNTS = [
  "Under $5M",
  "$5-8M",
  "$9-10M",
  "$11-15M",
  "$16-25M",
  "$26-50M",
  "$51-100M",
  "$100M+",
];

const SOFT_CIRCLED_OPTIONS = [
  "Nothing",
  "Under 25%",
  "25-50%",
  "50-75%",
  "Over 75%",
];

const INVESTOR_CALLS_OPTIONS = ["0", "1-2", "3-5", "6-10", "10+"];

const ANNUAL_REVENUES = [
  "Pre-revenue",
  "Under $1M",
  "$1-5M",
  "$5-20M",
  "$20-50M",
  "$50M+",
];

const EBITDA_OPTIONS = ["Negative", "Break-Even", "Profitable"];

const TARGET_CLOSE_OPTIONS = [
  "1-3 months",
  "3-6 months",
  "6-9 months",
  "9+ months",
];

const YES_NO_OPTIONS = ["Yes", "No"];

// 1. SPACE FORM (Form 1A)
export const SPACE_FORM: FormConfig = {
  laneKey: "space",
  laneName: "Space",
  pathName: "",
  title: "Form 1A: Space",
  badge: "Space Founder / Operator",
  totalPages: 4,
  pages: [
    {
      pageNumber: 1,
      title: "Where your raise stands",
      questions: [
        {
          id: "Q1",
          title: "Space sector",
          type: "radio",
          options: [
            "Launch",
            "Satellites and spacecraft",
            "In-space services",
            "Earth observation and data",
            "Communications",
            "Defense and national security",
            "Ground systems and infrastructure",
            "Other space",
          ],
          required: true,
        },
        {
          id: "Q2",
          title: "What's the biggest thing slowing your raise right now?",
          type: "radio",
          options: [
            "Investors say they love it, then go quiet",
            "Investors want to see a lead before they commit",
            "Investors say we're too early, come back next round",
            "Investors pass without asking us their questions",
            "Intros that never turn into real meetings",
            "Valuation pushback",
            "Other",
          ],
          required: true,
        },
        {
          id: "Q3",
          title: "Do you currently have a lead investor with a term sheet?",
          type: "radio",
          options: ["Yes", "Verbal only", "No"],
          required: true,
        },
        {
          id: "Q4",
          title: "How much of your round is currently soft-circled?",
          type: "radio",
          options: SOFT_CIRCLED_OPTIONS,
          required: true,
        },
        {
          id: "Q5",
          title: "How many calls with interested investors are you taking per month?",
          type: "radio",
          options: INVESTOR_CALLS_OPTIONS,
          required: true,
        },
      ],
      transitionAfter: {
        message:
          "Thanks. Now that we know what's slowing your raise, a few quick questions about the round. You're minutes away from seeing if you qualify for a free 45-minute session with a FINRA-licensed investment banker who raises capital in your industry.",
      },
    },
    {
      pageNumber: 2,
      title: "Your round",
      questions: [
        {
          id: "Q6",
          title: "How much are you raising?",
          type: "radio",
          options: RAISE_AMOUNTS,
          required: true,
        },
        {
          id: "Q7",
          title: "What is your role?",
          type: "radio",
          options: [
            "Founder or CEO",
            "Co-founder",
            "CFO",
            "Other executive",
            "Advisor or consultant",
          ],
          required: true,
        },
        {
          id: "Q8",
          title:
            "Are you responsible for overseeing terms, investor materials, and communications throughout the capital raise?",
          type: "radio",
          options: YES_NO_OPTIONS,
          required: true,
        },
        {
          id: "Q9",
          title: "Round stage",
          type: "radio",
          options: [
            "Pre-seed",
            "Seed",
            "Seed extension",
            "Series A",
            "Series B or later",
          ],
          required: true,
        },
      ],
      transitionAfter: {
        message:
          "Almost there. 9 questions left. A few details about the company, so your session is built around you, not something generic.",
      },
    },
    {
      pageNumber: 3,
      title: "Your company",
      questions: [
        {
          id: "Q10",
          title: "Are you based in the U.S.?",
          type: "radio",
          options: YES_NO_OPTIONS,
          required: true,
        },
        {
          id: "Q11",
          title: "Are you doing business in the U.S.?",
          type: "radio",
          options: YES_NO_OPTIONS,
          required: true,
        },
        {
          id: "Q12",
          title: "What is your annual revenue?",
          type: "radio",
          options: ANNUAL_REVENUES,
          required: true,
        },
        {
          id: "Q13",
          title: "What is your EBITDA?",
          type: "radio",
          options: EBITDA_OPTIONS,
          required: true,
        },
        {
          id: "Q14",
          title: "Is your management team working full-time on this business?",
          type: "radio",
          options: YES_NO_OPTIONS,
          required: true,
        },
        {
          id: "Q15",
          title: "Have you previously raised outside capital for this company?",
          type: "radio",
          options: YES_NO_OPTIONS,
          required: true,
        },
      ],
      transitionAfter: {
        message: "Last step before you pick a time.",
      },
    },
    {
      pageNumber: 4,
      title: "Final step",
      questions: [
        {
          id: "Q16",
          title:
            "Do you have the ability to pay $30K to $60K USD in transaction costs (including attorney fees, filing fees, accountant fees, investment banking fees, SEC and state filing fees) associated with raising capital before the raise is completed?",
          type: "radio",
          options: YES_NO_OPTIONS,
          required: true,
        },
        {
          id: "Q17",
          title: "Target close",
          type: "radio",
          options: TARGET_CLOSE_OPTIONS,
          required: true,
        },
        {
          id: "Q18",
          title: "Pitch deck (Optional)",
          type: "file",
          helperText: "Upload your pitch deck or investor presentation (PDF, PPTX)",
          required: false,
        },
      ],
    },
  ],
};

// 2. ENERGY FORM (Form 2A)
export const ENERGY_FORM: FormConfig = {
  laneKey: "energy",
  laneName: "Energy",
  pathName: "",
  title: "Form 2A: Energy",
  badge: "Energy Developer",
  totalPages: 4,
  pages: [
    {
      pageNumber: 1,
      title: "Where your raise stands",
      questions: [
        {
          id: "Q1",
          title: "Energy sector",
          type: "radio",
          options: [
            "EV and fleet charging",
            "Battery storage",
            "Commercial solar",
            "Utility-scale solar or wind",
            "Infrastructure fund or platform",
            "Other energy transition",
          ],
          required: true,
        },
        {
          id: "Q2",
          title: "What's the biggest thing slowing your raise right now?",
          type: "radio",
          options: [
            "Too small for big funds, too early for banks",
            "Investors want to see a lead before they commit",
            "Investors say they love it, then go quiet",
            "Lenders want more operating history",
            "Valuation pushback",
            "Other",
          ],
          required: true,
        },
        {
          id: "Q3",
          title: "Do you currently have a lead investor or lender with a term sheet?",
          type: "radio",
          options: ["Yes", "Verbal only", "No"],
          required: true,
        },
        {
          id: "Q4",
          title: "How much of your round is currently soft-circled?",
          type: "radio",
          options: SOFT_CIRCLED_OPTIONS,
          required: true,
        },
        {
          id: "Q5",
          title:
            "How many calls with interested investors or lenders are you taking per month?",
          type: "radio",
          options: INVESTOR_CALLS_OPTIONS,
          required: true,
        },
      ],
      transitionAfter: {
        message:
          "Thanks. Now that we know what's slowing your raise, a few quick questions about the round. You're minutes away from seeing if you qualify for a free 45-minute session with a FINRA-licensed investment banker who raises capital in your industry.",
      },
    },
    {
      pageNumber: 2,
      title: "Your round",
      questions: [
        {
          id: "Q6",
          title: "How much are you raising?",
          type: "radio",
          options: RAISE_AMOUNTS,
          required: true,
        },
        {
          id: "Q7",
          title: "What is your role?",
          type: "radio",
          options: [
            "Founder or CEO",
            "Co-founder",
            "CFO",
            "Other executive",
            "Advisor or consultant",
          ],
          required: true,
        },
        {
          id: "Q8",
          title:
            "Are you responsible for overseeing terms, investor materials, and communications throughout the capital raise?",
          type: "radio",
          options: YES_NO_OPTIONS,
          required: true,
        },
        {
          id: "Q9",
          title: "Round stage",
          type: "radio",
          options: [
            "Pre-seed",
            "Seed",
            "Seed extension",
            "Series A",
            "Series B or later",
            "Project or asset-level financing",
          ],
          required: true,
        },
      ],
      transitionAfter: {
        message:
          "Almost there. 9 questions left. A few details about the company, so your session is built around you, not something generic.",
      },
    },
    {
      pageNumber: 3,
      title: "Your company",
      questions: [
        {
          id: "Q10",
          title: "Are you based in the U.S.?",
          type: "radio",
          options: YES_NO_OPTIONS,
          required: true,
        },
        {
          id: "Q11",
          title: "Are you doing business in the U.S.?",
          type: "radio",
          options: YES_NO_OPTIONS,
          required: true,
        },
        {
          id: "Q12",
          title: "What is your annual revenue?",
          type: "radio",
          options: ANNUAL_REVENUES,
          required: true,
        },
        {
          id: "Q13",
          title: "What is your EBITDA?",
          type: "radio",
          options: EBITDA_OPTIONS,
          required: true,
        },
        {
          id: "Q14",
          title: "Is your management team working full-time on this business?",
          type: "radio",
          options: YES_NO_OPTIONS,
          required: true,
        },
        {
          id: "Q15",
          title: "Have you previously raised outside capital for this company?",
          type: "radio",
          options: YES_NO_OPTIONS,
          required: true,
        },
      ],
      transitionAfter: {
        message: "Last step before you pick a time.",
      },
    },
    {
      pageNumber: 4,
      title: "Final step",
      questions: [
        {
          id: "Q16",
          title:
            "Do you have the ability to pay $30K to $60K USD in transaction costs (including attorney fees, filing fees, accountant fees, investment banking fees, SEC and state filing fees) associated with raising capital before the raise is completed?",
          type: "radio",
          options: YES_NO_OPTIONS,
          required: true,
        },
        {
          id: "Q17",
          title: "Target close",
          type: "radio",
          options: TARGET_CLOSE_OPTIONS,
          required: true,
        },
        {
          id: "Q18",
          title: "Pitch deck (Optional)",
          type: "file",
          helperText: "Upload your pitch deck or investor presentation (PDF, PPTX)",
          required: false,
        },
      ],
    },
  ],
};

// 3. TRADES RAISE FORM (Form 3A)
export const TRADES_RAISE_FORM: FormConfig = {
  laneKey: "trades-raise",
  laneName: "Trades",
  pathName: "Raise",
  title: "Form 3A: Trades, Raise",
  badge: "Trade Business Owner • Growth Capital",
  totalPages: 4,
  pages: [
    {
      pageNumber: 1,
      title: "Where your raise stands",
      questions: [
        {
          id: "Q1",
          title: "What trade are you in?",
          type: "radio",
          options: COMMON_TRADES,
          required: true,
        },
        {
          id: "Q2",
          title: "What's the biggest thing slowing your raise right now?",
          type: "radio",
          options: [
            "The bank says no",
            "Profits can't fund the next step on their own",
            "Lenders keep coming back with 'not a fit'",
            "Raising money myself on top of running the business",
            "Other",
          ],
          required: true,
        },
        {
          id: "Q3",
          title: "Do you currently have a lender or investor with a term sheet?",
          type: "radio",
          options: ["Yes", "Verbal only", "No"],
          required: true,
        },
        {
          id: "Q4",
          title: "How much of your raise is currently committed?",
          type: "radio",
          options: SOFT_CIRCLED_OPTIONS,
          required: true,
        },
        {
          id: "Q5",
          title:
            "How many calls with interested lenders or investors are you taking per month?",
          type: "radio",
          options: INVESTOR_CALLS_OPTIONS,
          required: true,
        },
      ],
      transitionAfter: {
        message:
          "Thanks. Now that we know what's slowing your raise, a few quick questions about the round. You're minutes away from seeing if you qualify for a free 45-minute session with a FINRA-licensed investment banker who raises capital in your industry.",
      },
    },
    {
      pageNumber: 2,
      title: "Your round",
      questions: [
        {
          id: "Q6",
          title: "How much are you raising?",
          type: "radio",
          options: RAISE_AMOUNTS,
          required: true,
        },
        {
          id: "Q7",
          title: "What is your role?",
          type: "radio",
          options: [
            "Owner",
            "Co-owner",
            "CFO",
            "Other executive",
            "Advisor or consultant",
          ],
          required: true,
        },
        {
          id: "Q8",
          title:
            "Are you responsible for overseeing terms, investor materials, and communications throughout the capital raise?",
          type: "radio",
          options: YES_NO_OPTIONS,
          required: true,
        },
        {
          id: "Q9",
          title: "What type of capital are you looking for?",
          type: "radio",
          options: ["Debt", "Equity", "Both", "Not sure"],
          required: true,
        },
      ],
      transitionAfter: {
        message:
          "Almost there. 10 questions left. A few details about the company, so your session is built around you, not something generic.",
      },
    },
    {
      pageNumber: 3,
      title: "Your company",
      questions: [
        {
          id: "Q10",
          title: "What state is your business in?",
          type: "dropdown",
          required: true,
        },
        {
          id: "Q11",
          title: "Are you doing business in the U.S.?",
          type: "radio",
          options: YES_NO_OPTIONS,
          required: true,
        },
        {
          id: "Q12",
          title: "What is your annual revenue?",
          type: "radio",
          options: ANNUAL_REVENUES,
          required: true,
        },
        {
          id: "Q13",
          title: "What is your EBITDA?",
          type: "radio",
          options: EBITDA_OPTIONS,
          required: true,
        },
        {
          id: "Q14",
          title: "Is your management team working full-time on this business?",
          type: "radio",
          options: YES_NO_OPTIONS,
          required: true,
        },
        {
          id: "Q15",
          title: "Have you previously raised outside capital for this company?",
          type: "radio",
          options: YES_NO_OPTIONS,
          required: true,
        },
      ],
      transitionAfter: {
        message: "Last step before you pick a time.",
      },
    },
    {
      pageNumber: 4,
      title: "Final step",
      questions: [
        {
          id: "Q16",
          title:
            "Do you have the ability to pay $30K to $60K USD in transaction costs (including attorney fees, filing fees, accountant fees, investment banking fees, SEC and state filing fees) associated with raising capital before the raise is completed?",
          type: "radio",
          options: YES_NO_OPTIONS,
          required: true,
        },
        {
          id: "Q17",
          title: "Target close",
          type: "radio",
          options: TARGET_CLOSE_OPTIONS,
          required: true,
        },
        {
          id: "Q18",
          title: "Pitch deck (Optional)",
          type: "file",
          helperText: "Upload your deck or company summary (PDF, PPTX)",
          required: false,
        },
        {
          id: "Q19",
          title: "Are you currently being advised or represented by another broker?",
          type: "radio",
          options: YES_NO_OPTIONS,
          required: true,
        },
      ],
    },
  ],
};

// 4. TRADES SELL FORM (Sell Form)
export const TRADES_SELL_FORM: FormConfig = {
  laneKey: "trades-sell",
  laneName: "Trades",
  pathName: "Sell",
  title: "Sell Form: Trades, Sell",
  badge: "Trade Business Owner • Selling Your Business",
  totalPages: 3,
  pages: [
    {
      pageNumber: 1,
      title: "Where you stand",
      questions: [
        {
          id: "Q1",
          title: "What trade are you in?",
          type: "radio",
          options: COMMON_TRADES,
          required: true,
        },
        {
          id: "Q2",
          title: "What's the biggest thing holding you back from selling?",
          type: "radio",
          options: [
            "Buyers send letters, but I don't know which ones are serious",
            "I don't know what my company is worth",
            "I don't want employees or customers to find out",
            "I don't want a listing or an auction",
            "I don't want to pay big fees up front to sell",
            "I'm not sure my business is set up to sell yet",
            "I want my team and company to keep going after I leave",
            "Buyers only look at profit, not what I've really built",
            "Other",
          ],
          required: true,
        },
        {
          id: "Q3",
          title: "When are you thinking about selling?",
          type: "radio",
          options: ["Now", "Within a year", "1 to 3 years", "Just exploring"],
          required: true,
        },
        {
          id: "Q4",
          title: "Are you looking to sell all or part of the business?",
          type: "radio",
          options: ["All", "Majority", "Minority", "Not sure"],
          required: true,
        },
      ],
      transitionAfter: {
        message: "Selling through us costs you nothing: the buyer pays our fee.",
      },
    },
    {
      pageNumber: 2,
      title: "Your company",
      questions: [
        {
          id: "Q5",
          title: "What state is your business in?",
          type: "dropdown",
          required: true,
        },
        {
          id: "Q6",
          title: "Annual revenue",
          type: "radio",
          options: [
            "Under $2M",
            "$2-3M",
            "$3-4M",
            "$4-5M",
            "$5-10M",
            "$10-25M",
            "$25M+",
          ],
          required: true,
        },
        {
          id: "Q7",
          title: "Annual profit (EBITDA)",
          type: "radio",
          options: [
            "Loss or break-even",
            "Under $250K",
            "$250K-1M",
            "$1-2.5M",
            "$2.5-5M",
            "$5M+",
          ],
          required: true,
        },
        {
          id: "Q8",
          title:
            "Recurring revenue structure: what share of your revenue is recurring (contracts, maintenance) vs one-time?",
          type: "radio",
          options: ["0-25%", "25-50%", "50-75%", "75%+"],
          required: true,
        },
        {
          id: "Q9",
          title: "Are your customers mostly commercial or residential?",
          type: "radio",
          options: ["Commercial", "Residential", "Both"],
          required: true,
        },
        {
          id: "Q10",
          title: "How much of your work is new construction?",
          type: "radio",
          options: ["None", "Under 10%", "10-25%", "Over 25%"],
          required: true,
        },
      ],
      transitionAfter: {
        message:
          "Last step. These questions make sure we only introduce you to buyers who are actually looking for a business like yours, so nobody wastes your time.",
      },
    },
    {
      pageNumber: 3,
      title: "Last step",
      questions: [
        {
          id: "Q11",
          title: "Who owns the business?",
          type: "radio",
          options: [
            "Founder or family only",
            "Has outside investors",
            "Franchise owner",
          ],
          required: true,
        },
        {
          id: "Q12",
          title: "Is your workforce unionized?",
          type: "radio",
          options: ["Yes", "No", "Partly"],
          required: true,
        },
        {
          id: "Q13",
          title: "After a sale, what do you want?",
          type: "radio",
          options: ["Stay and run it", "Stay 1-2 years", "Leave at closing"],
          required: true,
        },
        {
          id: "Q14",
          title: "Would you be open to keeping some ownership after the sale?",
          type: "radio",
          options: ["Yes", "No", "Maybe"],
          required: true,
        },
        {
          id: "Q15",
          title:
            "Which of these private equity firms have you spoken with in the last 18 months? (select all)",
          type: "multiselect",
          options: [
            "Agellus Capital",
            "CenterOak Partners",
            "Kian Capital Partners",
            "New State Capital Partners",
            "NorthCurrent Partners",
            "Unity Partners",
            "Another firm",
            "None",
          ],
          required: true,
        },
        {
          id: "Q16",
          title:
            "Are you currently being advised or represented by a broker, banker or advisor, to sell or to raise capital?",
          type: "radio",
          options: YES_NO_OPTIONS,
          required: true,
        },
      ],
    },
  ],
};

export const FORMS_MAP: Record<string, FormConfig> = {
  space: SPACE_FORM,
  energy: ENERGY_FORM,
  "trades-raise": TRADES_RAISE_FORM,
  "trades-sell": TRADES_SELL_FORM,
};
