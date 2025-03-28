# EPA FACILITY SUMMARY
# Script to tally and visualize EPA-registered environmental facilities by NY County
# Used for Insight #004 on CivHub

import pandas as pd
import matplotlib.pyplot as plt

# --- Load EPA Facility Data ---
epa_url = "https://www.dropbox.com/scl/fi/t7nomgkqe8cnlx3lqvun4/EPA_NY_FACILITY_FILE.CSV?rlkey=zurpc64vvinejloha8ir3xy8v&raw=1"
epa_df = pd.read_csv(epa_url, low_memory=False)
epa_df['COUNTY_NAME'] = epa_df['COUNTY_NAME'].str.replace(' COUNTY', '', case=False).str.title().str.strip()
epa_counts = epa_df['COUNTY_NAME'].value_counts().reset_index()
epa_counts.columns = ['County', 'EPA Facilities']

# --- Load Poverty Data (Census Wide Format) ---
poverty_url = "https://www.dropbox.com/scl/fi/xtcfma0etx3pprt646zk7/census_ny_westchester_ACSST5Y2023.S1701-2025-03-28T155911.csv?rlkey=72ohcsw9u3ktqpjxr77vgk8zt&raw=1"
df = pd.read_csv(poverty_url)

# Extract poverty % for each county from wide-format
poverty_row = df[df['Label (Grouping)'] == 'Population for whom poverty status is determined']
poverty_data = poverty_row.drop(columns=['Label (Grouping)']).T.reset_index()
poverty_data.columns = ['Raw County', 'Poverty %']
poverty_data = poverty_data[poverty_data['Poverty %'].str.contains('%', na=False)]
poverty_data['County'] = poverty_data['Raw County'].str.extract(r'^(.*) County')[0]
poverty_data['Poverty %'] = poverty_data['Poverty %'].str.replace('%','').astype(float)
poverty_data = poverty_data[['County', 'Poverty %']]

# --- Merge & Plot ---
merged = pd.merge(epa_counts, poverty_data, on='County', how='inner')
plt.figure(figsize=(10,6))
plt.scatter(merged['EPA Facilities'], merged['Poverty %'], color='black')
plt.xlabel('Number of EPA Facilities')
plt.ylabel('Poverty Rate (%)')
plt.title('Meta Insight #001: Environmental Burden vs Poverty in NY Counties')
plt.grid(True)
plt.tight_layout()
plt.savefig('images/meta_environment_poverty_scatter.png')  # Save image for site
plt.show()
