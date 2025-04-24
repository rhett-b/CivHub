// receipts.js

const receipts = {
  "local-law-97": {
    policy_name: "Local Law 97 (NYC)",
    summary: "Passed in 2019 as part of NYC’s Climate Mobilization Act...",
    civhub_score: { score: 76, scale: "-100 to +100", trend: "↑", color: "green" },
    impact_breakdown: [
      { category: "🌿 Environmental", insight: "Summer 2023 ozone and PM2.5 levels decreased..." },
      // ...more impact points
    ],
    methodology: "Score derived using CivHub’s six-factor policy impact framework...",
    disclosures: [
      "Air quality data reflects summer-only readings...",
      // ...
    ],
    sources: [
      "https://data.cityofnewyork.us/resource/c3uy-2p5r.csv",
      // ...
    ]
  },

  "inflation-reduction-act": {
    policy_name: "Inflation Reduction Act (2022)",
    summary: "This federal legislation allocates historic investments in clean energy, health care subsidies, and corporate tax reforms...",
    civhub_score: { score: 68, scale: "-100 to +100", trend: "↑", color: "green" },
    impact_breakdown: [
      { category: "🌿 Environmental", insight: "Projected to reduce U.S. emissions by 40% by 2030." },
      { category: "💰 Economic", insight: "Includes $369B in clean energy investments." },
      { category: "🚫 Equity", insight: "Concerns remain around fossil fuel lease concessions to gain support." }
    ],
    methodology: "Federal policy scored on long-term projections, fiscal breakdown, and early implementation tracking.",
    disclosures: [
      "Environmental projections not yet confirmed via annual GHG data.",
      "Tax credit uptake varies by state and income bracket."
    ],
    sources: [
      "https://www.whitehouse.gov/briefing-room/statements-releases/2022/08/16/fact-sheet-inflation-reduction-act/",
      "https://www.congress.gov/bill/117th-congress/house-bill/5376"
    ]
  }
};
