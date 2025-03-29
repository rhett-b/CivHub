import pandas as pd

# Load EPA facility data
epa_url = "https://www.dropbox.com/scl/fi/t7nomgkqe8cnlx3lqvun4/EPA_NY_FACILITY_FILE.CSV?rlkey=zurpc64vvinejloha8ir3xy8v&raw=1"
epa_df = pd.read_csv(epa_url, low_memory=False)

# Normalize and summarize
epa_df['COUNTY_NAME'] = epa_df['COUNTY_NAME'].str.replace(' COUNTY', '', case=False).str.title().str.strip()
summary = epa_df['COUNTY_NAME'].value_counts().reset_index()
summary.columns = ['County', 'EPA Facilities']

# Preview
print(summary.head(10))
