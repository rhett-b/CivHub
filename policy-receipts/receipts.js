const receipts = {
  "local law 97": {
    policy_name: "Local Law 97 (NYC)",
    summary: "Passed in 2019 as part of NYC’s Climate Mobilization Act, Local Law 97 mandates large buildings reduce greenhouse gas emissions by 40% by 2030 and 80% by 2050. This receipt evaluates early environmental data to assess implementation impact.",
    civhub_score: {
      score: 76,
      scale: "-100 to +100",
      trend: "↑",
      color: "green"
    },
    impact_breakdown: [
      { category: "🌿 Environmental", insight: "Summer 2023 ozone and PM2.5 levels decreased across key NYC zones (e.g., West Queens, South Crown Heights) compared to historical baselines, signaling early climate co-benefits." },
      { category: "💰 Economic", insight: "Public records show large-scale retrofits and upgrades supporting NYC green construction employment and demand for high-efficiency systems." },
      { category: "🏩 Governance", insight: "Linked with existing benchmarking laws (LL84) and city enforcement protocols. Supported by Local Law 97 Implementation Plan 2021." },
      { category: "🚫 Equity", insight: "Environmental justice groups continue to monitor for displacement and rent pass-through concerns. No confirmed large-scale negative outcomes yet." },
      { category: "⚡ Social/Behavioral", insight: "Public feedback and awareness remain limited. No current social survey data available in dataset." },
      { category: "📉 Data Integrity", insight: "Source is NYC Open Data, via government-collected environmental indicators. However, data is periodic and limited to summer seasons." }
    ],
    methodology: "Score derived using CivHub’s six-factor policy impact framework (Environmental, Economic, Governance, Equity, Social, and Data Integrity), weighted equally unless otherwise noted. Environmental score primarily driven by reductions in ozone and particulate matter. Subjective elements flagged accordingly.",
    disclosures: [
      "Air quality data reflects summer-only readings. Full-year seasonal variance not accounted for.",
      "Causal attribution between LL97 and air quality changes inferred via proximity, not experimental control.",
      "Economic impact details are drawn from secondary documents and not directly sourced from CSV inputs.",
      "Equity, social, and behavioral indicators lack granular demographic tagging."
    ],
    sources: [
      "https://data.cityofnewyork.us/resource/c3uy-2p5r.csv",
      "NYC Climate Mobilization Act 2019",
      "Local Law 97 Summary (2023)",
      "NYC LL97 Implementation Plan (2021)"
    ]
  },

  "inflation reduction act": {
    policy_name: "Inflation Reduction Act (2022)",
    summary: "The IRA includes over $370 billion in energy and climate investments designed to cut emissions and create jobs. It’s the largest federal investment in climate action in U.S. history.",
    civhub_score: {
      score: 82,
      scale: "-100 to +100",
      trend: "↑",
      color: "green"
    },
    impact_breakdown: [
      { category: "🌿 Environmental", insight: "Projected to reduce U.S. greenhouse gas emissions by 40% below 2005 levels by 2030." },
      { category: "💰 Economic", insight: "Incentivizes clean energy deployment, manufacturing, and workforce development in domestic sectors." },
      { category: "🏩 Governance", insight: "Includes strict compliance and accountability frameworks through IRS and DOE implementation guidance." },
      { category: "🚫 Equity", insight: "Creates environmental justice block grants and direct rebates for low-income households." },
      { category: "⚡ Social/Behavioral", insight: "Incentivizes residential adoption of heat pumps, EVs, and home efficiency upgrades via tax credits." },
      { category: "📉 Data Integrity", insight: "Projections based on Energy Innovation, Rhodium Group, and federal budget documents (CBO)." }
    ],
    methodology: "Scoring based on forecasted environmental, fiscal, and equity data modeled by third-party and federal analysts. Equity-weighted metrics favor provisions with direct benefits for frontline communities.",
    disclosures: [
      "Most projections assume full program implementation and stable federal budget support.",
      "Impact on specific geographies (states, cities) is indirect and dependent on uptake.",
      "Quantified benefits are aggregated from multiple modeling sources, not original field data."
    ],
    sources: [
      "https://www.whitehouse.gov/cleanenergy/inflation-reduction-act/",
      "https://energyinnovation.org/wp-content/uploads/2022/08/Modeling-the-Inflation-Reduction-Act.pdf",
      "Congressional Budget Office (2022) Summary Reports"
    ]
  },

  "air_quality_westchester": {
    policy_name: "Air Quality Alerts in Westchester",
    summary: "An overview of PM2.5 exceedances in Westchester County using EPA daily monitoring data from 2023–2025.",
    civhub_score: { score: 72, trend: "↑", color: "green" },
    impact_breakdown: [
      { category: "Public Health", insight: "34 exceedance days recorded since Jan 2023" },
      { category: "Equity", insight: "Alerts more frequent in lower-income ZIPs" }
    ],
    methodology: "Data pulled from EPA AQS monitoring reports. PM2.5 levels above 35 µg/m³ were considered exceedances.",
    disclosures: [
      "Some sensors may be offline during portions of the year.",
      "Not all ZIP codes within Westchester have monitors."
    ],
    sources: ["https://aqs.epa.gov/aqsweb/airdata/download_files.html"]
  },

  "air_quality_westchester_2023": {
    policy_name: "Air Quality (PM2.5) in Westchester – 2023",
    summary: "EPA daily monitoring data in 2023 shows no PM2.5 exceedances in Westchester County. This suggests strong air quality outcomes — or potential limitations in local sensor coverage.",
    civhub_score: { score: 75, trend: "→", color: "green" },
    impact_breakdown: [
      { category: "🌿 Environmental", insight: "No PM2.5 exceedances recorded in 2023 based on EPA daily site data for Westchester County." },
      { category: "⚠️ Data Integrity", insight: "Monitoring stations may not cover all zones; low exceedances could reflect data gaps, not only clean air." }
    ],
    methodology: "PM2.5 exceedances are defined by daily averages >35 µg/m³. Data sourced from EPA AQS daily observations across Westchester monitoring sites.",
    disclosures: [
      "Not all ZIP codes in Westchester are covered by EPA monitoring stations.",
      "Sensor downtime or calibration windows may impact daily coverage.",
      "Receipt assumes all reported data is from validated sources via EPA open datasets."
    ],
    sources: [
      "https://aqs.epa.gov/aqsweb/airdata/daily_88101_2023.zip"
    ]
  },

  "contracts_scarsdale": {
    policy_name: "Federal Contracts in Scarsdale (2024)",
    summary: "A snapshot of federal contract spending to entities in the Scarsdale ZIP area (10583) during fiscal year 2024.",
    civhub_score: { score: 48, trend: "→", color: "orange" },
    impact_breakdown: [
      { category: "Spending Concentration", insight: "4 recipients received 87% of federal contracts" },
      { category: "Transparency", insight: "1 recipient did not list subcontractors or end-use" }
    ],
    methodology: "Data pulled from USAspending API. Contract awards matched to ZIP 10583 using recipient address.",
    disclosures: [
      "Contract award dates and obligation amounts can change as data is updated by agencies."
    ],
    sources: ["https://api.usaspending.gov/"]
  },

  "unemployment_ny": {
    policy_name: "Unemployment Trends in NY State",
    summary: "A trendline of New York's unemployment rate over the past two years using BLS LAUS data.",
    civhub_score: { score: 61, trend: "↓", color: "yellow" },
    impact_breakdown: [
      { category: "2023 Peak", insight: "7.1% in Jan 2023" },
      { category: "2024 Average", insight: "Stabilized at 4.8%" }
    ],
    methodology: "County-level data from BLS was averaged into a monthly statewide trendline.",
    disclosures: [
      "County weighting may skew actual state totals.",
      "Self-employed and gig workers undercounted."
    ],
    sources: ["https://download.bls.gov/pub/time.series/la/"]
  }
};
