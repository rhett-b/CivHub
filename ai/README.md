# CivHub AI

This folder contains AI-assisted scripts and data analysis tools for CivHub.

## Overview

CivHub is designed to uncover insights from public government datasets—starting with New York State budget data. These scripts help process, summarize, and visualize raw data so citizens can better understand how money is spent, what trends emerge, and where action is needed.

## Scripts

### `budget_function_summary.py`
- Parses the raw NY State budget CSV
- Cleans and converts 2023-24 actual budget values
- Groups totals by "Function" (e.g., Education, Health, Infrastructure)
- Outputs a sorted bar chart of the top 10 funding areas

## How to Run
This script can be run in [Google Colab](https://colab.research.google.com/), a free browser-based Python environment.

1. Open a new notebook
2. Paste the full script
3. Run each cell
4. View chart and data summary

## Future Plans
- Compare trends over multiple years
- Add outlier detection and alert logic
- Develop more robust visual dashboards
- Integrate insights directly into CivHub’s public-facing site
