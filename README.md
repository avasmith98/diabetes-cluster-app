# DiaClue: Diabetes Cluster Prediction Tool

A web application that classifies patients into one of five diabetes clusters using clinical measurements at diagnosis to help inform personalized treatment decisions.

**Try it:** [https://diaclue.com](https://diaclue.com)

## Publication

Lu, B., Li, P., Crouse, A. B., Grimes, T., Smith, A. N., Might, M., Ovalle, F., & Shalev, A. (2026). Validation of a Diabetes Subtype Classification Model Using Data from U.S. Adults Before and After the COVID-19 Pandemic. *Metabolites*, 16(3), 204. [https://doi.org/10.3390/metabo16030204](https://doi.org/10.3390/metabo16030204)

## Features

- Classifies patients into 5 diabetes clusters: SAID, SIDD, SIRD, MOD, MARD
- Uses clinical inputs: GAD antibodies, HbA1c, BMI, Age, C-peptide, Glucose
- Provides probability distribution across all clusters
- Displays SHAP feature importance analysis for each prediction
- Model performance: 93% sensitivity, 98% specificity

