# 📊 CivHub AI Budget Insights Generator
# This script analyzes cleaned NY State budget data to identify trends

import pandas as pd
import matplotlib.pyplot as plt

# Load cleaned budget data (externalized now)
url = "https://www.dropbox.com/scl/fi/example-budget-url/ny_state_budget_cleaned.csv?rlkey=placeholder&raw=1"
df = pd.read_csv(url)

# Clean column names
years = ['2020-21  Actuals', '2021-22  Actuals', '2022-23  Actuals', '2023-24  Actuals', '2024-25  Estimates']
for year in years:
    df[year] = pd.to_numeric(df[year].astype(str).str.replace(',', ''), errors='coerce')

# 🧠 Insight 001: Largest single-year increase (Function level)
df['Change'] = df['2023-24  Actuals'] - df['2022-23  Actuals']
top_change = df.groupby('Function')['Change'].sum().sort_values(ascending=False).head(1)
print("🔎 Largest increase from 2022–23 to 2023–24:")
print(top_change)

# 🧠 Insight 002: Top 5 budgeted functions over 5 years
function_totals = df.groupby('Function')[years].sum()
top5 = function_totals.sum(axis=1).sort_values(ascending=False).head(5).index
plot_df = function_totals.loc[top5].T

plot_df.plot(kind='line', figsize=(10,6), marker='o')
plt.title('Top 5 Budget Functions (2020–2024)')
plt.ylabel('Budget Amount')
plt.xticks(rotation=45)
plt.grid(True)
plt.tight_layout()
plt.show()

# 🧠 Insight 003: Extreme single-year spikes
df['Pct Change'] = (df['2023-24  Actuals'] - df['2022-23  Actuals']) / df['2022-23  Actuals'] * 100
top_spikes = df[['Function', '2023-24  Actuals', '2022-23  Actuals', 'Pct Change']].sort_values(by='Pct Change', ascending=False).head(5)
print("\n🚨 Top 5 budget spikes by percentage:")
print(top_spikes)
