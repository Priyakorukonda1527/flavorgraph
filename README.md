# 🍲 FlavorGraph: Intelligent Recipe Navigator

**FlavorGraph** is an intelligent recipe suggestion system that recommends recipes based on your available ingredients. It leverages **graph theory**, **greedy algorithms**, and **backtracking** to provide ingredient gap analysis and substitution recommendations.

---

## 🔹 Features

- **Ingredient-based recipe suggestions**  
  Enter your available ingredients and get a ranked list of recipes.  

- **Graph-based modeling**  
  Recipes and ingredients are represented as a graph for efficient traversal and analysis.  

- **Greedy Algorithm**  
  Ranks recipes by maximum ingredient overlap.  

- **Backtracking & Substitutions**  
  Suggests alternative ingredients if some are missing.  

- **Ingredient Gap Analysis**  
  Highlights missing ingredients for each recipe.  

- **Frontend + Backend**  
  - Backend: FastAPI + Python + NetworkX  
  - Frontend: HTML, CSS, JavaScript  

---

## 🔹 Demo

**Frontend Screenshot:**

![FlavorGraph Demo](screenshot.png)  
*(Replace with your actual screenshot of the app)*

---

## 🔹 Installation

### Prerequisites

- Python 3.9+  
- Node.js + npm (if using React frontend)  
- Git  

---

### Backend Setup (Python + FastAPI)

```bash
cd backend
python -m venv venv
# Activate virtual environment
# Windows (PowerShell): venv\Scripts\Activate.ps1
# Linux/Mac: source venv/bin/activate

pip install -r requirements.txt
uvicorn main:app --reload --port 8000
