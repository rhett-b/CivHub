import pandas as pd
import matplotlib.pyplot as plt

# Load data
url = 'https://raw.githubusercontent.com/rhett-b/CivHub/main/data/ny_state_budget_raw.csv'
df = pd.read_csv(url)

# Strip whitespace from column names
df.columns = df.columns.str.strip()

# Convert '2023-24  Actuals' column to numeric (strip commas and coerce errors)
df['2023-24  Actuals'] = pd.to_numeric(df['2023-24  Actuals'].str.replace(',', ''), errors='coerce')

# Group by Function and sum
summary = df.groupby('Function')['2023-24  Actuals'].sum().sort_values(ascending=False)

# Display top 10
print("Top 10 Budget Functions by 2023-24 Actuals:\n")
print(summary.head(10))

# Plot
summary.head(10).plot(kind='barh', figsize=(10, 6), title='Top 10 Budget Functions (2023-24 Actuals)', color='black')
plt.xlabel("Amount ($ Millions)")
plt.gca().invert_yaxis()
plt.tight_layout()
plt.show()
