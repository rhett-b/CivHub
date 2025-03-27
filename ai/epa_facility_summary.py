# 🌍 CivHub EPA Facility Density Insight Generator
# Analyzes EPA Facility Registry data to identify concentration of environmental sites

import pandas as pd
import matplotlib.pyplot as plt
import zipfile
import io
import requests

# Load EPA facility zip file from Dropbox
url = "https://www.dropbox.com/scl/fi/example-epa-url/EPA_NY_FACILITY_FILE.CSV.zip?rlkey=placeholder&raw=1"
r = requests.get(url)
z = zipfile.ZipFile(io.BytesIO(r.content))
filename = z.namelist()[0]
df = pd.read_csv(z.open(filename), low_memory=False)

# 🧠 Insight: Top 10 NY Counties by EPA-Registered Facilities
county_counts = df['COUNTY_NAME'].value_counts().head(10)

# Plot bar chart
plt.figure(figsize=(10,6))
county_counts.sort_values().plot(kind='barh', color='black')
plt.title('Top 10 NY Counties by EPA-Registered Facilities')
plt.xlabel('Number of Facilities')
plt.ylabel('County')
plt.grid(True)
plt.tight_layout()
plt.show()

# Preview table output
print("🔎 Facility counts by county:")
print(county_counts)
