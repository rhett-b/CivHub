# CivHub Analysis Scripts

This folder contains all Python scripts used to generate automated insights from public datasets for CivHub. These scripts power the charts and findings featured in our [Insights](https://civhub.us/insights) page.

Each script is built for transparency and replicability.

## Scripts Included

- `budget_function_summary.py`  
  ➤ Generates historical budget visualizations by function across NY State.

- `epa_facility_summary.py`  
  ➤ Tallies EPA-registered facilities by NY County.

- `epa_poverty_meta.py`  
  ➤ Cross-analyzes county-level poverty data and EPA facility distribution to explore correlations in environmental burden and socioeconomic hardship.

## How to Use

1. Clone the CivHub GitHub repo.
2. Ensure you have Python 3 and required packages (`pandas`, `matplotlib`) installed.
3. Run any script using:
   ```bash
   python scriptname.py
