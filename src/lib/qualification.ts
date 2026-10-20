// Qualification and Buyer Matching Logic for White Swan Advisors
// Extracted directly from WSA After the Button - Build Guide and 4 Sell Form - Logic Table.xlsx

export interface BuyerRule {
  id: string;
  firm: string;
  platform: string;
  trade: string;
  states: string[];
  statesAny: boolean;
  revenues: string[];
  revenuesAny: boolean;
  profits: string[];
  profitsAny: boolean;
  recurring: string[];
  recurringAny: boolean;
  customers: string[];
  customersAny: boolean;
  newConstruction: string[];
  newConstructionAny: boolean;
  ownership: string[];
  ownershipAny: boolean;
  union: string[];
  unionAny: boolean;
  removeFirm: string;
  note: string;
}

export const BUYER_RULES: BuyerRule[] = [
  {
    "id": "R01",
    "firm": "CenterOak",
    "platform": "HomeTown",
    "trade": "HVAC, plumbing and electrical",
    "states": [
      "AL",
      "AR",
      "FL",
      "GA",
      "IA",
      "IL",
      "IN",
      "KS",
      "KY",
      "LA",
      "MI",
      "MN",
      "MO",
      "MS",
      "NC",
      "ND",
      "NE",
      "OH",
      "OK",
      "SC",
      "SD",
      "TN",
      "TX",
      "VA",
      "WI"
    ],
    "statesAny": false,
    "revenues": [
      "Any"
    ],
    "revenuesAny": true,
    "profits": [
      "$1-2.5M",
      "$2.5-5M",
      "$5M+"
    ],
    "profitsAny": false,
    "recurring": [
      "Any"
    ],
    "recurringAny": true,
    "customers": [
      "Residential"
    ],
    "customersAny": false,
    "newConstruction": [
      "None"
    ],
    "newConstructionAny": false,
    "ownership": [
      "Any"
    ],
    "ownershipAny": true,
    "union": [
      "Any"
    ],
    "unionAny": true,
    "removeFirm": "CenterOak Partners",
    "note": "Residential; 100% maintenance and repair"
  },
  {
    "id": "R02",
    "firm": "NorthCurrent",
    "platform": "Liberty",
    "trade": "HVAC, plumbing and electrical",
    "states": [
      "AL",
      "AR",
      "CT",
      "DC",
      "DE",
      "FL",
      "GA",
      "IA",
      "IL",
      "IN",
      "KS",
      "KY",
      "LA",
      "MA",
      "MD",
      "ME",
      "MI",
      "MN",
      "MO",
      "MS",
      "NC",
      "ND",
      "NE",
      "NH",
      "NJ",
      "NY",
      "OH",
      "OK",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "VA",
      "VT",
      "WI",
      "WV"
    ],
    "statesAny": false,
    "revenues": [
      "$5-10M",
      "$10-25M",
      "$25M+"
    ],
    "revenuesAny": false,
    "profits": [
      "Any"
    ],
    "profitsAny": true,
    "recurring": [
      "Any"
    ],
    "recurringAny": true,
    "customers": [
      "Residential"
    ],
    "customersAny": false,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Founder or family only",
      "Has outside investors"
    ],
    "ownershipAny": false,
    "union": [
      "No"
    ],
    "unionAny": false,
    "removeFirm": "NorthCurrent Partners",
    "note": "80%+ residential; ServiceTitan preferred"
  },
  {
    "id": "R03",
    "firm": "NorthCurrent",
    "platform": "On Track",
    "trade": "Garage doors, gates and access control",
    "states": [
      "AK",
      "AL",
      "AR",
      "AZ",
      "CO",
      "CT",
      "DC",
      "DE",
      "FL",
      "GA",
      "HI",
      "IA",
      "ID",
      "IL",
      "IN",
      "KS",
      "KY",
      "LA",
      "MA",
      "MD",
      "ME",
      "MI",
      "MN",
      "MO",
      "MS",
      "MT",
      "NC",
      "ND",
      "NE",
      "NH",
      "NJ",
      "NM",
      "NV",
      "NY",
      "OH",
      "OK",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VA",
      "VT",
      "WI",
      "WV",
      "WY"
    ],
    "statesAny": false,
    "revenues": [
      "$4-5M",
      "$5-10M",
      "$10-25M",
      "$25M+"
    ],
    "revenuesAny": false,
    "profits": [
      "Any"
    ],
    "profitsAny": true,
    "recurring": [
      "Any"
    ],
    "recurringAny": true,
    "customers": [
      "Residential",
      "Both"
    ],
    "customersAny": false,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Founder or family only",
      "Has outside investors"
    ],
    "ownershipAny": false,
    "union": [
      "No"
    ],
    "unionAny": false,
    "removeFirm": "NorthCurrent Partners",
    "note": "Garage doors; 50%+ residential"
  },
  {
    "id": "R04",
    "firm": "CenterOak",
    "platform": "Guardian",
    "trade": "Garage doors, gates and access control",
    "states": [
      "Any state"
    ],
    "statesAny": true,
    "revenues": [
      "$2-3M",
      "$3-4M",
      "$4-5M",
      "$5-10M",
      "$10-25M",
      "$25M+"
    ],
    "revenuesAny": false,
    "profits": [
      "Any"
    ],
    "profitsAny": true,
    "recurring": [
      "25-50%",
      "50-75%",
      "75%+"
    ],
    "recurringAny": false,
    "customers": [
      "Commercial",
      "Both"
    ],
    "customersAny": false,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Any"
    ],
    "ownershipAny": true,
    "union": [
      "Any"
    ],
    "unionAny": true,
    "removeFirm": "CenterOak Partners",
    "note": "Gates, access control, overhead doors; mostly commercial"
  },
  {
    "id": "R05",
    "firm": "NorthCurrent",
    "platform": "Peak Alliance",
    "trade": "Restoration and mitigation",
    "states": [
      "AK",
      "AL",
      "AR",
      "AZ",
      "CO",
      "CT",
      "DC",
      "DE",
      "FL",
      "GA",
      "HI",
      "IA",
      "ID",
      "IL",
      "IN",
      "KS",
      "KY",
      "LA",
      "MA",
      "MD",
      "ME",
      "MI",
      "MN",
      "MO",
      "MS",
      "MT",
      "NC",
      "ND",
      "NE",
      "NH",
      "NJ",
      "NM",
      "NV",
      "NY",
      "OH",
      "OK",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VA",
      "VT",
      "WI",
      "WV",
      "WY"
    ],
    "statesAny": false,
    "revenues": [
      "$4-5M",
      "$5-10M",
      "$10-25M",
      "$25M+"
    ],
    "revenuesAny": false,
    "profits": [
      "Any"
    ],
    "profitsAny": true,
    "recurring": [
      "Any"
    ],
    "recurringAny": true,
    "customers": [
      "Residential",
      "Both"
    ],
    "customersAny": false,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Founder or family only",
      "Has outside investors"
    ],
    "ownershipAny": false,
    "union": [
      "No"
    ],
    "unionAny": false,
    "removeFirm": "NorthCurrent Partners",
    "note": "50%+ mitigation, no storm chasing"
  },
  {
    "id": "R06",
    "firm": "NorthCurrent",
    "platform": "Peak Alliance (small, Carolinas/GA/TN)",
    "trade": "Restoration and mitigation",
    "states": [
      "GA",
      "SC",
      "NC",
      "TN"
    ],
    "statesAny": false,
    "revenues": [
      "Any"
    ],
    "revenuesAny": true,
    "profits": [
      "Any"
    ],
    "profitsAny": true,
    "recurring": [
      "Any"
    ],
    "recurringAny": true,
    "customers": [
      "Residential",
      "Both"
    ],
    "customersAny": false,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Founder or family only",
      "Has outside investors"
    ],
    "ownershipAny": false,
    "union": [
      "No"
    ],
    "unionAny": false,
    "removeFirm": "NorthCurrent Partners",
    "note": "Any size in GA, SC, NC, TN"
  },
  {
    "id": "R07",
    "firm": "Agellus",
    "platform": "Titan Restoration",
    "trade": "Restoration and mitigation",
    "states": [
      "TX",
      "CO",
      "WY",
      "MT",
      "NM",
      "AZ",
      "UT",
      "NV",
      "ID",
      "CA",
      "OR",
      "WA"
    ],
    "statesAny": false,
    "revenues": [
      "Any"
    ],
    "revenuesAny": true,
    "profits": [
      "Any"
    ],
    "profitsAny": true,
    "recurring": [
      "Any"
    ],
    "recurringAny": true,
    "customers": [
      "Commercial",
      "Both"
    ],
    "customersAny": false,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Any"
    ],
    "ownershipAny": true,
    "union": [
      "No"
    ],
    "unionAny": false,
    "removeFirm": "Agellus Capital",
    "note": "Commercial restoration; under 50% insurance work"
  },
  {
    "id": "R08",
    "firm": "CenterOak",
    "platform": "Solid Ground",
    "trade": "Foundation repair and waterproofing",
    "states": [
      "AL",
      "AR",
      "CT",
      "DC",
      "DE",
      "FL",
      "GA",
      "IA",
      "IL",
      "IN",
      "KS",
      "KY",
      "LA",
      "MA",
      "MD",
      "ME",
      "MI",
      "MN",
      "MO",
      "MS",
      "NC",
      "ND",
      "NE",
      "NH",
      "NJ",
      "NY",
      "OH",
      "OK",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "VA",
      "VT",
      "WI",
      "WV"
    ],
    "statesAny": false,
    "revenues": [
      "$3-4M",
      "$4-5M",
      "$5-10M",
      "$10-25M",
      "$25M+"
    ],
    "revenuesAny": false,
    "profits": [
      "Any"
    ],
    "profitsAny": true,
    "recurring": [
      "Any"
    ],
    "recurringAny": true,
    "customers": [
      "Any"
    ],
    "customersAny": true,
    "newConstruction": [
      "None",
      "Under 10%"
    ],
    "newConstructionAny": false,
    "ownership": [
      "Any"
    ],
    "ownershipAny": true,
    "union": [
      "Any"
    ],
    "unionAny": true,
    "removeFirm": "CenterOak Partners",
    "note": "Foundation, waterproofing, crawlspace"
  },
  {
    "id": "R09",
    "firm": "CenterOak",
    "platform": "Entomo",
    "trade": "Pest control",
    "states": [
      "AL",
      "AR",
      "DC",
      "DE",
      "FL",
      "GA",
      "KY",
      "LA",
      "MD",
      "MS",
      "NC",
      "NJ",
      "NY",
      "PA",
      "SC",
      "TN",
      "VA",
      "WV"
    ],
    "statesAny": false,
    "revenues": [
      "$3-4M",
      "$4-5M",
      "$5-10M",
      "$10-25M",
      "$25M+"
    ],
    "revenuesAny": false,
    "profits": [
      "Any"
    ],
    "profitsAny": true,
    "recurring": [
      "50-75%",
      "75%+"
    ],
    "recurringAny": false,
    "customers": [
      "Residential",
      "Both"
    ],
    "customersAny": false,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Any"
    ],
    "ownershipAny": true,
    "union": [
      "Any"
    ],
    "unionAny": true,
    "removeFirm": "CenterOak Partners",
    "note": "Recurring pest, termite, mosquito"
  },
  {
    "id": "R10",
    "firm": "CenterOak",
    "platform": "Grismer",
    "trade": "Auto repair and tire",
    "states": [
      "IL",
      "IN",
      "IA",
      "KS",
      "MI",
      "MN",
      "MO",
      "NE",
      "ND",
      "OH",
      "SD",
      "WI"
    ],
    "statesAny": false,
    "revenues": [
      "$3-4M",
      "$4-5M",
      "$5-10M",
      "$10-25M",
      "$25M+"
    ],
    "revenuesAny": false,
    "profits": [
      "Any"
    ],
    "profitsAny": true,
    "recurring": [
      "Any"
    ],
    "recurringAny": true,
    "customers": [
      "Residential",
      "Both"
    ],
    "customersAny": false,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Founder or family only",
      "Has outside investors"
    ],
    "ownershipAny": false,
    "union": [
      "Any"
    ],
    "unionAny": true,
    "removeFirm": "CenterOak Partners",
    "note": "Independent tire and auto"
  },
  {
    "id": "R11",
    "firm": "Kian",
    "platform": "Park Auto (Meineke)",
    "trade": "Auto repair and tire",
    "states": [
      "Any state"
    ],
    "statesAny": true,
    "revenues": [
      "Any"
    ],
    "revenuesAny": true,
    "profits": [
      "$250K-1M",
      "$1-2.5M",
      "$2.5-5M",
      "$5M+"
    ],
    "profitsAny": false,
    "recurring": [
      "Any"
    ],
    "recurringAny": true,
    "customers": [
      "Any"
    ],
    "customersAny": true,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Franchise owner"
    ],
    "ownershipAny": false,
    "union": [
      "Any"
    ],
    "unionAny": true,
    "removeFirm": "Kian Capital Partners",
    "note": "Meineke franchisee, 2+ shops; confirm on call"
  },
  {
    "id": "R12",
    "firm": "CenterOak",
    "platform": "HK Solutions",
    "trade": "Water and wastewater services",
    "states": [
      "AL",
      "AR",
      "FL",
      "GA",
      "IA",
      "IL",
      "IN",
      "KS",
      "KY",
      "LA",
      "MI",
      "MN",
      "MO",
      "MS",
      "NC",
      "ND",
      "NE",
      "OH",
      "OK",
      "SC",
      "SD",
      "TN",
      "TX",
      "VA",
      "WI"
    ],
    "statesAny": false,
    "revenues": [
      "$5-10M",
      "$10-25M",
      "$25M+"
    ],
    "revenuesAny": false,
    "profits": [
      "Any"
    ],
    "profitsAny": true,
    "recurring": [
      "Any"
    ],
    "recurringAny": true,
    "customers": [
      "Commercial",
      "Both"
    ],
    "customersAny": false,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Any"
    ],
    "ownershipAny": true,
    "union": [
      "Any"
    ],
    "unionAny": true,
    "removeFirm": "CenterOak Partners",
    "note": "Municipal, utility, industrial, commercial"
  },
  {
    "id": "R13",
    "firm": "Agellus",
    "platform": "HighGrove",
    "trade": "Commercial landscaping",
    "states": [
      "AL",
      "FL",
      "GA",
      "MS",
      "NC",
      "SC",
      "TN",
      "KY",
      "VA",
      "AR",
      "LA"
    ],
    "statesAny": false,
    "revenues": [
      "Any"
    ],
    "revenuesAny": true,
    "profits": [
      "$1-2.5M",
      "$2.5-5M",
      "$5M+"
    ],
    "profitsAny": false,
    "recurring": [
      "50-75%",
      "75%+"
    ],
    "recurringAny": false,
    "customers": [
      "Commercial"
    ],
    "customersAny": false,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Any"
    ],
    "ownershipAny": true,
    "union": [
      "Any"
    ],
    "unionAny": true,
    "removeFirm": "Agellus Capital",
    "note": "Smaller OK in GA, FL, VA (confirm)"
  },
  {
    "id": "R14",
    "firm": "Unity",
    "platform": "Yardmaster",
    "trade": "Commercial landscaping",
    "states": [
      "OH",
      "MI",
      "PA",
      "IN",
      "IL",
      "KY"
    ],
    "statesAny": false,
    "revenues": [
      "Any"
    ],
    "revenuesAny": true,
    "profits": [
      "Any"
    ],
    "profitsAny": true,
    "recurring": [
      "Any"
    ],
    "recurringAny": true,
    "customers": [
      "Commercial",
      "Both"
    ],
    "customersAny": false,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Any"
    ],
    "ownershipAny": true,
    "union": [
      "Any"
    ],
    "unionAny": true,
    "removeFirm": "Unity Partners",
    "note": "Maintenance and enhancement; employee ownership plan"
  },
  {
    "id": "R15",
    "firm": "Kian",
    "platform": "Integrity Landscape",
    "trade": "Commercial landscaping",
    "states": [
      "CA"
    ],
    "statesAny": false,
    "revenues": [
      "Any"
    ],
    "revenuesAny": true,
    "profits": [
      "Any"
    ],
    "profitsAny": true,
    "recurring": [
      "Any"
    ],
    "recurringAny": true,
    "customers": [
      "Commercial"
    ],
    "customersAny": false,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Any"
    ],
    "ownershipAny": true,
    "union": [
      "Any"
    ],
    "unionAny": true,
    "removeFirm": "Kian Capital Partners",
    "note": "North of the SF Bay only; confirm city on call"
  },
  {
    "id": "R16",
    "firm": "Kian",
    "platform": "Estate Residential Landscape",
    "trade": "Estate residential landscaping",
    "states": [
      "FL",
      "CA",
      "CO",
      "UT",
      "WY",
      "MT",
      "ID"
    ],
    "statesAny": false,
    "revenues": [
      "Any"
    ],
    "revenuesAny": true,
    "profits": [
      "Any"
    ],
    "profitsAny": true,
    "recurring": [
      "Any"
    ],
    "recurringAny": true,
    "customers": [
      "Residential"
    ],
    "customersAny": false,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Any"
    ],
    "ownershipAny": true,
    "union": [
      "Any"
    ],
    "unionAny": true,
    "removeFirm": "Kian Capital Partners",
    "note": "$20M+ homes only; Naples/Palm Beach, SoCal, NorCal, Rocky Mtn resorts"
  },
  {
    "id": "R17",
    "firm": "Unity",
    "platform": "Katsam",
    "trade": "Parking lot sweeping and property services",
    "states": [
      "AL",
      "AK",
      "AZ",
      "AR",
      "CO",
      "CT",
      "DE",
      "DC",
      "FL",
      "GA",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "OH",
      "OK",
      "OR",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY"
    ],
    "statesAny": false,
    "revenues": [
      "Any"
    ],
    "revenuesAny": true,
    "profits": [
      "Any"
    ],
    "profitsAny": true,
    "recurring": [
      "50-75%",
      "75%+"
    ],
    "recurringAny": false,
    "customers": [
      "Any"
    ],
    "customersAny": true,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Any"
    ],
    "ownershipAny": true,
    "union": [
      "Any"
    ],
    "unionAny": true,
    "removeFirm": "Unity Partners",
    "note": "California needs profit $1M+ (see R18)"
  },
  {
    "id": "R18",
    "firm": "Unity",
    "platform": "Katsam (California)",
    "trade": "Parking lot sweeping and property services",
    "states": [
      "CA"
    ],
    "statesAny": false,
    "revenues": [
      "Any"
    ],
    "revenuesAny": true,
    "profits": [
      "$1-2.5M",
      "$2.5-5M",
      "$5M+"
    ],
    "profitsAny": false,
    "recurring": [
      "50-75%",
      "75%+"
    ],
    "recurringAny": false,
    "customers": [
      "Any"
    ],
    "customersAny": true,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Any"
    ],
    "ownershipAny": true,
    "union": [
      "Any"
    ],
    "unionAny": true,
    "removeFirm": "Unity Partners",
    "note": "Replaces R17 for CA"
  },
  {
    "id": "R19",
    "firm": "New State",
    "platform": "ArborWorks",
    "trade": "Tree trimming and vegetation management",
    "states": [
      "AK",
      "AL",
      "AR",
      "AZ",
      "CO",
      "CT",
      "DC",
      "DE",
      "FL",
      "GA",
      "HI",
      "IA",
      "ID",
      "IL",
      "IN",
      "KS",
      "KY",
      "LA",
      "MA",
      "MD",
      "ME",
      "MI",
      "MN",
      "MO",
      "MS",
      "MT",
      "NC",
      "ND",
      "NE",
      "NH",
      "NJ",
      "NM",
      "NV",
      "NY",
      "OH",
      "OK",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VA",
      "VT",
      "WI",
      "WV",
      "WY"
    ],
    "statesAny": false,
    "revenues": [
      "Any"
    ],
    "revenuesAny": true,
    "profits": [
      "Any"
    ],
    "profitsAny": true,
    "recurring": [
      "Any"
    ],
    "recurringAny": true,
    "customers": [
      "Any"
    ],
    "customersAny": true,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Any"
    ],
    "ownershipAny": true,
    "union": [
      "Any"
    ],
    "unionAny": true,
    "removeFirm": "New State Capital Partners",
    "note": "No PG&E customers"
  },
  {
    "id": "R20",
    "firm": "New State",
    "platform": "Harrell-Fish",
    "trade": "HVAC, plumbing and electrical",
    "states": [
      "IN",
      "KY",
      "TN",
      "AL"
    ],
    "statesAny": false,
    "revenues": [
      "Any"
    ],
    "revenuesAny": true,
    "profits": [
      "Any"
    ],
    "profitsAny": true,
    "recurring": [
      "Any"
    ],
    "recurringAny": true,
    "customers": [
      "Commercial",
      "Both"
    ],
    "customersAny": false,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Any"
    ],
    "ownershipAny": true,
    "union": [
      "Yes",
      "Partly",
      "No"
    ],
    "unionAny": false,
    "removeFirm": "New State Capital Partners",
    "note": "Commercial mechanical only; union shop is fine"
  },
  {
    "id": "R21",
    "firm": "New State",
    "platform": "ComNet",
    "trade": "Low-voltage cabling",
    "states": [
      "Any state"
    ],
    "statesAny": true,
    "revenues": [
      "Any"
    ],
    "revenuesAny": true,
    "profits": [
      "Any"
    ],
    "profitsAny": true,
    "recurring": [
      "Any"
    ],
    "recurringAny": true,
    "customers": [
      "Any"
    ],
    "customersAny": true,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Any"
    ],
    "ownershipAny": true,
    "union": [
      "Any"
    ],
    "unionAny": true,
    "removeFirm": "New State Capital Partners",
    "note": ""
  },
  {
    "id": "R22",
    "firm": "New State",
    "platform": "PAX",
    "trade": "Roofing and re-roofing",
    "states": [
      "AL",
      "AR",
      "FL",
      "GA",
      "KY",
      "LA",
      "MS",
      "NC",
      "SC",
      "TN",
      "TX",
      "VA"
    ],
    "statesAny": false,
    "revenues": [
      "Any"
    ],
    "revenuesAny": true,
    "profits": [
      "Any"
    ],
    "profitsAny": true,
    "recurring": [
      "Any"
    ],
    "recurringAny": true,
    "customers": [
      "Commercial",
      "Both"
    ],
    "customersAny": false,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Any"
    ],
    "ownershipAny": true,
    "union": [
      "Any"
    ],
    "unionAny": true,
    "removeFirm": "New State Capital Partners",
    "note": "Commercial re-roofing only"
  },
  {
    "id": "R23",
    "firm": "Agellus",
    "platform": "BlueJack",
    "trade": "Fire and life safety",
    "states": [
      "Any state"
    ],
    "statesAny": true,
    "revenues": [
      "Any"
    ],
    "revenuesAny": true,
    "profits": [
      "$1-2.5M",
      "$2.5-5M",
      "$5M+"
    ],
    "profitsAny": false,
    "recurring": [
      "25-50%",
      "50-75%",
      "75%+"
    ],
    "recurringAny": false,
    "customers": [
      "Any"
    ],
    "customersAny": true,
    "newConstruction": [
      "Any"
    ],
    "newConstructionAny": true,
    "ownership": [
      "Any"
    ],
    "ownershipAny": true,
    "union": [
      "No"
    ],
    "unionAny": false,
    "removeFirm": "Agellus Capital",
    "note": "$2.5M+ profit in new regions"
  }
];

export const US_STATES = [
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "DC", name: "District of Columbia" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
  { code: "OUTSIDE", name: "Outside the U.S." },
];

export interface QualificationResult {
  qualified: boolean;
  failReason?: string;
  matchedRules?: string[];
  matchedBuyers?: string[];
  matchCount?: number;
  excludedFirms?: string[];
}

export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
}

export interface HiddenFields {
  source: string;
  campaign: string;
  lane: string;
  path: string;
  sell_result?: string;
  sell_fail_reason?: string;
  matched_rules?: string;
  matched_buyers?: string;
  match_count?: number;
  excluded_firms?: string;
}

export type FormAnswerValue = string | string[] | number | boolean | undefined;
export type FormAnswers = Record<string, FormAnswerValue>;

export interface LeadSubmission {
  lane: "space" | "energy" | "trades-raise" | "trades-sell";
  answers: FormAnswers;
  contact: ContactInfo;
  hidden: HiddenFields;
  result: QualificationResult;
  pitchDeckName?: string;
  submittedAt: string;
}

/**
 * Gate check for Form 1A: Space
 * 4 gates, ALL must pass:
 * 1. Q6 = $5-8M or higher (not Under $5M)
 * 2. Q16 = Yes
 * 3. Q10 = Yes OR Q11 = Yes
 * 4. Q12 != Pre-revenue
 */
export function evaluateSpace(answers: FormAnswers): QualificationResult {
  const q6 = answers["Q6"];
  const q16 = answers["Q16"];
  const q10 = answers["Q10"];
  const q11 = answers["Q11"];
  const q12 = answers["Q12"];

  if (q6 === "Under $5M") {
    return { qualified: false, failReason: "Raise amount under $5M" };
  }
  if (q16 !== "Yes") {
    return { qualified: false, failReason: "Unable to pay transaction costs" };
  }
  if (q10 !== "Yes" && q11 !== "Yes") {
    return { qualified: false, failReason: "Not based in or doing business in the U.S." };
  }
  if (q12 === "Pre-revenue") {
    return { qualified: false, failReason: "Company is pre-revenue" };
  }

  return { qualified: true };
}

/**
 * Gate check for Form 2A: Energy
 * 4 gates, ALL must pass:
 * 1. Q6 = $5-8M or higher (not Under $5M)
 * 2. Q16 = Yes
 * 3. Q10 = Yes OR Q11 = Yes
 * 4. Q12 != Pre-revenue
 */
export function evaluateEnergy(answers: FormAnswers): QualificationResult {
  const q6 = answers["Q6"];
  const q16 = answers["Q16"];
  const q10 = answers["Q10"];
  const q11 = answers["Q11"];
  const q12 = answers["Q12"];

  if (q6 === "Under $5M") {
    return { qualified: false, failReason: "Raise amount under $5M" };
  }
  if (q16 !== "Yes") {
    return { qualified: false, failReason: "Unable to pay transaction costs" };
  }
  if (q10 !== "Yes" && q11 !== "Yes") {
    return { qualified: false, failReason: "Not based in or doing business in the U.S." };
  }
  if (q12 === "Pre-revenue") {
    return { qualified: false, failReason: "Company is pre-revenue" };
  }

  return { qualified: true };
}

/**
 * Gate check for Form 3A: Trades, Raise
 * 5 gates, ALL must pass:
 * 1. Q6 = $5-8M or higher (not Under $5M)
 * 2. Q16 = Yes
 * 3. Q10 is a U.S. state OR Q11 = Yes
 * 4. Q12 != Pre-revenue
 * 5. Q19 = No
 */
export function evaluateTradesRaise(answers: FormAnswers): QualificationResult {
  const q6 = answers["Q6"];
  const q16 = answers["Q16"];
  const q10 = answers["Q10"] as string | undefined; // state code or name
  const q11 = answers["Q11"];
  const q12 = answers["Q12"];
  const q19 = answers["Q19"];

  if (q6 === "Under $5M") {
    return { qualified: false, failReason: "Raise amount under $5M" };
  }
  if (q16 !== "Yes") {
    return { qualified: false, failReason: "Unable to pay transaction costs" };
  }
  const isUSState = q10 && q10 !== "OUTSIDE" && q10 !== "Outside the U.S.";
  if (!isUSState && q11 !== "Yes") {
    return { qualified: false, failReason: "Not based in or doing business in the U.S." };
  }
  if (q12 === "Pre-revenue") {
    return { qualified: false, failReason: "Company is pre-revenue" };
  }
  if (q19 !== "No") {
    return { qualified: false, failReason: "Represented by another broker" };
  }

  return { qualified: true };
}

/**
 * Gate check & Buyer Matching for Sell Form: Trades, Sell
 * Follows exact flowchart and logic table
 */
export function evaluateTradesSell(answers: FormAnswers): QualificationResult {
  // Step 1: Has a broker, banker or advisor?
  if (answers["Q16"] === "Yes") {
    return {
      qualified: false,
      failReason: "BROKER",
      matchCount: 0,
      matchedRules: [],
      matchedBuyers: [],
      excludedFirms: [],
    };
  }

  // Step 2: Selling All or Majority?
  const q4 = answers["Q4"];
  if (q4 !== "All" && q4 !== "Majority") {
    return {
      qualified: false,
      failReason: "MINORITY",
      matchCount: 0,
      matchedRules: [],
      matchedBuyers: [],
      excludedFirms: [],
    };
  }

  // Step 3, 4, 5: Check rules and exclude firms
  let q15Firms: string[] = [];
  if (Array.isArray(answers["Q15"])) {
    q15Firms = answers["Q15"];
  } else if (typeof answers["Q15"] === "string") {
    q15Firms = answers["Q15"].split(";").map((s) => s.trim()).filter(Boolean);
  }

  // Normalise state (if full name or code given)
  let state = typeof answers["Q5"] === "string" ? answers["Q5"] : "";
  if (state.length > 2) {
    const found = US_STATES.find(
      (s) => s.name.toLowerCase() === state.toLowerCase() || s.code.toLowerCase() === state.toLowerCase()
    );
    if (found) state = found.code;
  }

  const matchedRules: string[] = [];
  const matchedBuyers: string[] = [];
  const excludedFirms: string[] = [];

  const q1 = typeof answers["Q1"] === "string" ? answers["Q1"] : "";
  const q6 = typeof answers["Q6"] === "string" ? answers["Q6"] : "";
  const q7 = typeof answers["Q7"] === "string" ? answers["Q7"] : "";
  const q8 = typeof answers["Q8"] === "string" ? answers["Q8"] : "";
  const q9 = typeof answers["Q9"] === "string" ? answers["Q9"] : "";
  const q10 = typeof answers["Q10"] === "string" ? answers["Q10"] : "";
  const q11 = typeof answers["Q11"] === "string" ? answers["Q11"] : "";
  const q12 = typeof answers["Q12"] === "string" ? answers["Q12"] : "";

  for (const rule of BUYER_RULES) {
    if (rule.trade !== q1) continue;
    if (!rule.statesAny && !rule.states.includes(state)) continue;
    if (!rule.revenuesAny && !rule.revenues.includes(q6)) continue;
    if (!rule.profitsAny && !rule.profits.includes(q7)) continue;
    if (!rule.recurringAny && !rule.recurring.includes(q8)) continue;
    if (!rule.customersAny && !rule.customers.includes(q9)) continue;
    if (!rule.newConstructionAny && !rule.newConstruction.includes(q10)) continue;
    if (!rule.ownershipAny && !rule.ownership.includes(q11)) continue;
    if (!rule.unionAny && !rule.union.includes(q12)) continue;

    // Check if firm excluded in Q15
    if (q15Firms.includes(rule.removeFirm)) {
      if (!excludedFirms.includes(rule.removeFirm)) {
        excludedFirms.push(rule.removeFirm);
      }
      continue;
    }

    matchedRules.push(rule.id);
    matchedBuyers.push(`${rule.firm} ${rule.platform}`);
  }

  if (matchedRules.length >= 1) {
    return {
      qualified: true,
      matchedRules,
      matchedBuyers,
      matchCount: matchedRules.length,
      excludedFirms,
    };
  } else {
    return {
      qualified: false,
      failReason: "NO_MATCH",
      matchCount: 0,
      matchedRules: [],
      matchedBuyers: [],
      excludedFirms,
    };
  }
}

export const TEST_CASES = [
  {
    "id": "1",
    "scenario": "Residential HVAC, Georgia, $3-4M revenue, $1-2.5M profit",
    "rawAnswers": "Q4=All; Q8=0-25%; Q9=Residential; Q10=None; Q11=Founder or family only; Q12=No; Q15=None; Q16=No; Q7=$1-2.5M; Q6=$3-4M; Q1=HVAC, plumbing and electrical; Q5=GA",
    "expectedResult": "QUALIFIED: calendar",
    "expectedRules": [
      "R01"
    ]
  },
  {
    "id": "2",
    "scenario": "Residential HVAC, Georgia, $6M revenue, $1-2.5M profit",
    "rawAnswers": "Q4=All; Q8=0-25%; Q9=Residential; Q10=None; Q11=Founder or family only; Q12=No; Q15=None; Q16=No; Q7=$1-2.5M; Q6=$5-10M; Q1=HVAC, plumbing and electrical; Q5=GA",
    "expectedResult": "QUALIFIED: calendar",
    "expectedRules": [
      "R01",
      "R02"
    ]
  },
  {
    "id": "3",
    "scenario": "Residential HVAC, Arizona, $6M revenue (west of the Rockies)",
    "rawAnswers": "Q4=All; Q8=0-25%; Q9=Residential; Q10=None; Q11=Founder or family only; Q12=No; Q15=None; Q16=No; Q7=$1-2.5M; Q6=$5-10M; Q1=HVAC, plumbing and electrical; Q5=AZ",
    "expectedResult": "NOT QUALIFIED: No buyer match",
    "expectedRules": []
  },
  {
    "id": "4",
    "scenario": "Same Georgia HVAC, but has a broker",
    "rawAnswers": "Q4=All; Q8=0-25%; Q9=Residential; Q10=None; Q11=Founder or family only; Q12=No; Q15=None; Q16=Yes; Q7=$1-2.5M; Q6=$5-10M; Q1=HVAC, plumbing and electrical; Q5=GA",
    "expectedResult": "NOT QUALIFIED: Q16 broker/advisor = Yes",
    "expectedRules": []
  },
  {
    "id": "5",
    "scenario": "Same Georgia HVAC, only selling a minority",
    "rawAnswers": "Q4=Minority; Q8=0-25%; Q9=Residential; Q10=None; Q11=Founder or family only; Q12=No; Q15=None; Q16=No; Q7=$1-2.5M; Q6=$5-10M; Q1=HVAC, plumbing and electrical; Q5=GA",
    "expectedResult": "NOT QUALIFIED: Q4 not All or Majority",
    "expectedRules": []
  },
  {
    "id": "6",
    "scenario": "Pest control, NC, $3-4M, 50-75% recurring",
    "rawAnswers": "Q4=All; Q8=50-75%; Q9=Residential; Q10=None; Q11=Founder or family only; Q12=No; Q15=None; Q16=No; Q7=$250K-1M; Q6=$3-4M; Q1=Pest control; Q5=NC",
    "expectedResult": "QUALIFIED: calendar",
    "expectedRules": [
      "R09"
    ]
  },
  {
    "id": "7",
    "scenario": "Pest control, NC, $3-4M, 25-50% recurring",
    "rawAnswers": "Q4=All; Q8=25-50%; Q9=Residential; Q10=None; Q11=Founder or family only; Q12=No; Q15=None; Q16=No; Q7=$250K-1M; Q6=$3-4M; Q1=Pest control; Q5=NC",
    "expectedResult": "NOT QUALIFIED: No buyer match",
    "expectedRules": []
  },
  {
    "id": "8",
    "scenario": "Restoration, South Carolina, $2-3M, residential",
    "rawAnswers": "Q4=All; Q8=0-25%; Q9=Residential; Q10=None; Q11=Founder or family only; Q12=No; Q15=None; Q16=No; Q7=$250K-1M; Q6=$2-3M; Q1=Restoration and mitigation; Q5=SC",
    "expectedResult": "QUALIFIED: calendar",
    "expectedRules": [
      "R06"
    ]
  },
  {
    "id": "9",
    "scenario": "Restoration, Ohio, $2-3M, residential",
    "rawAnswers": "Q4=All; Q8=0-25%; Q9=Residential; Q10=None; Q11=Founder or family only; Q12=No; Q15=None; Q16=No; Q7=$250K-1M; Q6=$2-3M; Q1=Restoration and mitigation; Q5=OH",
    "expectedResult": "NOT QUALIFIED: No buyer match",
    "expectedRules": []
  },
  {
    "id": "10",
    "scenario": "Restoration, Texas, commercial, non-union",
    "rawAnswers": "Q4=All; Q8=0-25%; Q9=Commercial; Q10=None; Q11=Founder or family only; Q12=No; Q15=None; Q16=No; Q7=$250K-1M; Q6=$2-3M; Q1=Restoration and mitigation; Q5=TX",
    "expectedResult": "QUALIFIED: calendar",
    "expectedRules": [
      "R07"
    ]
  },
  {
    "id": "11",
    "scenario": "Commercial landscaping, Ohio, commercial",
    "rawAnswers": "Q4=All; Q8=0-25%; Q9=Commercial; Q10=None; Q11=Founder or family only; Q12=No; Q15=None; Q16=No; Q7=$250K-1M; Q6=$2-3M; Q1=Commercial landscaping; Q5=OH",
    "expectedResult": "QUALIFIED: calendar",
    "expectedRules": [
      "R14"
    ]
  },
  {
    "id": "12",
    "scenario": "Commercial landscaping, Ohio, already spoke with Unity",
    "rawAnswers": "Q4=All; Q8=0-25%; Q9=Commercial; Q10=None; Q11=Founder or family only; Q12=No; Q15=Unity Partners; Q16=No; Q7=$250K-1M; Q6=$2-3M; Q1=Commercial landscaping; Q5=OH",
    "expectedResult": "NOT QUALIFIED: No buyer match",
    "expectedRules": []
  },
  {
    "id": "13",
    "scenario": "Parking lot sweeping, California, $250K-1M profit",
    "rawAnswers": "Q4=All; Q8=75%+; Q9=Both; Q10=None; Q11=Founder or family only; Q12=No; Q15=None; Q16=No; Q7=$250K-1M; Q6=$2-3M; Q1=Parking lot sweeping and property services; Q5=CA",
    "expectedResult": "NOT QUALIFIED: No buyer match",
    "expectedRules": []
  },
  {
    "id": "14",
    "scenario": "Parking lot sweeping, California, $1-2.5M profit",
    "rawAnswers": "Q4=All; Q8=75%+; Q9=Both; Q10=None; Q11=Founder or family only; Q12=No; Q15=None; Q16=No; Q7=$1-2.5M; Q6=$2-3M; Q1=Parking lot sweeping and property services; Q5=CA",
    "expectedResult": "QUALIFIED: calendar",
    "expectedRules": [
      "R18"
    ]
  },
  {
    "id": "15",
    "scenario": "Garage doors, Florida, $4-5M, both, 25-50% recurring",
    "rawAnswers": "Q4=All; Q8=25-50%; Q9=Both; Q10=None; Q11=Founder or family only; Q12=No; Q15=None; Q16=No; Q7=$250K-1M; Q6=$4-5M; Q1=Garage doors, gates and access control; Q5=FL",
    "expectedResult": "QUALIFIED: calendar",
    "expectedRules": [
      "R03",
      "R04"
    ]
  },
  {
    "id": "16",
    "scenario": "Foundation repair, Missouri, $3-4M, 10-25% new construction",
    "rawAnswers": "Q4=All; Q8=0-25%; Q9=Both; Q10=10-25%; Q11=Founder or family only; Q12=No; Q15=None; Q16=No; Q7=$250K-1M; Q6=$3-4M; Q1=Foundation repair and waterproofing; Q5=MO",
    "expectedResult": "NOT QUALIFIED: No buyer match",
    "expectedRules": []
  },
  {
    "id": "17",
    "scenario": "Meineke franchisee, Ohio, $250K-1M profit",
    "rawAnswers": "Q4=All; Q8=0-25%; Q9=Both; Q10=None; Q11=Franchise owner; Q12=No; Q15=None; Q16=No; Q7=$250K-1M; Q6=$2-3M; Q1=Auto repair and tire; Q5=OH",
    "expectedResult": "QUALIFIED: calendar",
    "expectedRules": [
      "R11"
    ]
  },
  {
    "id": "18",
    "scenario": "Fire and life safety, Texas, $1-2.5M profit, 25-50% recurring, union",
    "rawAnswers": "Q4=All; Q8=25-50%; Q9=Both; Q10=None; Q11=Founder or family only; Q12=Yes; Q15=None; Q16=No; Q7=$1-2.5M; Q6=$2-3M; Q1=Fire and life safety; Q5=TX",
    "expectedResult": "NOT QUALIFIED: No buyer match",
    "expectedRules": []
  },
  {
    "id": "19",
    "scenario": "Other trade",
    "rawAnswers": "Q4=All; Q8=0-25%; Q9=Both; Q10=None; Q11=Founder or family only; Q12=No; Q15=None; Q16=No; Q7=$250K-1M; Q6=$2-3M; Q1=Other trade; Q5=TX",
    "expectedResult": "NOT QUALIFIED: No buyer match",
    "expectedRules": []
  },
  {
    "id": "20",
    "scenario": "Commercial HVAC, Indiana, union shop",
    "rawAnswers": "Q4=All; Q8=0-25%; Q9=Commercial; Q10=None; Q11=Founder or family only; Q12=Yes; Q15=None; Q16=No; Q7=$250K-1M; Q6=$2-3M; Q1=HVAC, plumbing and electrical; Q5=IN",
    "expectedResult": "QUALIFIED: calendar",
    "expectedRules": [
      "R20"
    ]
  },
  {
    "id": "21",
    "scenario": "Commercial roofing, Florida",
    "rawAnswers": "Q4=All; Q8=0-25%; Q9=Commercial; Q10=None; Q11=Founder or family only; Q12=No; Q15=None; Q16=No; Q7=$250K-1M; Q6=$2-3M; Q1=Roofing and re-roofing; Q5=FL",
    "expectedResult": "QUALIFIED: calendar",
    "expectedRules": [
      "R22"
    ]
  },
  {
    "id": "22",
    "scenario": "Commercial paving, Texas (no buyer yet)",
    "rawAnswers": "Q4=All; Q8=0-25%; Q9=Both; Q10=None; Q11=Founder or family only; Q12=No; Q15=None; Q16=No; Q7=$250K-1M; Q6=$2-3M; Q1=Commercial paving; Q5=TX",
    "expectedResult": "NOT QUALIFIED: No buyer match",
    "expectedRules": []
  }
];
