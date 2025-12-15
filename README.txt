# YouTube Categorizer V2 - Machine Learning Module

This project implements a custom-trained Supervised Machine Learning model to automatically categorize YouTube videos based on their titles and descriptions. It is designed as a Python microservice that integrates with a larger .NET ecosystem.

## 🧠 ML Features
- **Custom Supervised Learning**: Trained specifically on YouTube metadata rather than using generic zero-shot approaches.
- **TF-IDF Vectorization**: Converts text into meaningful feature vectors, highlighting important keywords for categorization.
- **Confidence Scoring**: Returns a probability score alongside the prediction, allowing the UI to filter low-confidence results.
- **Microservice Architecture**: Runs as an independent Flask API, ensuring modularity and scalability.

## 📂 Project Structure
- `api/app.py`: The Flask application serving the model.
- `notebooks/`: Jupyter notebooks covering the full ML lifecycle:
  - `01_data_exploration.ipynb`: Initial dataset analysis.
  - `02_preprocessing.ipynb`: Text cleaning and preparation.
  - `03_model_training.ipynb`: Training multiple classifiers and selecting the best one.
  - `04_test_model.ipynb`: Evaluation and testing of the final model.
- `models/`: Stores the serialized artifacts (`best_model.pkl`, `tfidf_vectorizer.pkl`, `label_mapping.json`).

## 🛠️ Technology Stack
- **Python 3.8+**
- **Scikit-Learn**: Classification algorithms and vectorizers.
- **Flask**: Web API framework.
- **Pandas & NumPy**: Data handling.
- **Joblib**: Model persistence.

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have Python installed. It is recommended to use a virtual environment.

### 2. Installation
Navigate to the API directory and install dependencies:
```bash
cd ML_Model/api
pip install -r requirements.txt