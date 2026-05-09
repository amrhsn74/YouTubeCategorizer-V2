# YouTube Categorizer V2

YouTube Categorizer is a full-stack project that fetches videos from YouTube channels, categorizes them with a **custom-trained ML model** (with optional Google Gemini fallback), stores results in SQL Server, and visualizes them in an Angular dashboard.

## Tech Stack

- Backend: ASP.NET Core 8 Web API
- Frontend: Angular 21 (standalone components)
- Database: SQL Server + Entity Framework Core 8
- Background Jobs: Hangfire
- ML categorization: Python 3, Flask, scikit-learn (TF-IDF + Logistic Regression)
- External APIs:
  - YouTube Data API (fetch channel/video data)
  - Google Generative AI API *(optional — preserved in code but commented out)*

## Current App Features

- 5 main routed screens:
  - Dashboard (`/`)
  - Results (`/results`)
  - Videos (`/videos`)
  - Channels (`/channels`)
  - Reports (`/reports`)
- Sidebar navigation with active route highlighting
- Channel processing in background using Hangfire
- **Local ML-based categorization** — Flask microservice serving a scikit-learn model, called over HTTP from the .NET backend
- **Keyword hashmap boost** — each category has a list of signal keywords that additively boost the ML probability before argmax
- **Confidence threshold** — predictions below 50% are returned as `Uncategorized` instead of a guess
- Categorized result browsing and filtering
- Pagination on data-heavy screens
- CSV export from Results page

## Categories

The ML model outputs one of the following 10 categories (see `ML_Model/models/label_mapping.json`):

`Comedy`, `Education`, `Entertainment`, `Gaming`, `Howto & Style`, `Music`, `News & Politics`, `People & Blogs`, `Science & Technology`, `Sports`

Plus `Uncategorized` when confidence is below the threshold.

## Repository Structure

- `YouTubeCategorizer.API/` - ASP.NET Core API host, controllers, app configuration
- `YouTubeCategorizer.Application/` - services and business logic (including `CategorizationService`)
- `YouTubeCategorizer.Core/` - domain entities and interfaces
- `YouTubeCategorizer.Infrastructure/` - EF Core DbContext, repositories, migrations
- `Frontend/` - Angular 21 frontend (standalone components)
- `ML_Model/` - Python ML notebooks, trained models, and Flask API for categorization
  - `ML_Model/api/app.py` - Flask server (port 5001) exposing `/categorize`
  - `ML_Model/models/` - serialized model + vectorizer + label mapping
  - `ML_Model/notebooks/` - training & preprocessing notebooks
- `Attachements/` - Project attachments (wireframes, SQL scripts, research data)

## Prerequisites

- .NET SDK 8.0+
- Node.js 18+
- Python 3.10+ (for the ML API)
- SQL Server (LocalDB/SQL Server Express/full SQL Server)
- API keys:
  - YouTube Data API key
  - (Optional) Google AI API key, only if you re-enable the Gemini path

## Configuration

Update `YouTubeCategorizer.API/appsettings.json` values:

- `ConnectionStrings:DefaultConnection`
- `YouTube:ApiKey`
- `MLApi:Url` (default: `http://localhost:5001`)
- `MLApi:AutoStart` (default `true` in Development, `false` otherwise)
- `MLApi:PythonExecutable` and `MLApi:WorkingDirectory` if your Python path differs
- `Jwt:Key` / `Jwt:Issuer` / `Jwt:Audience` / `Jwt:ExpiryMinutes` (used by sign-up/sign-in auth)
- `GoogleAI:ApiKey` / `GoogleAI:ModelName` *(only needed if you re-enable the Gemini path — currently dormant)*

Important: avoid committing real secrets to source control.

## Setup and Run

### 1) Restore dependencies

```bash
dotnet restore
```

```bash
cd Frontend
npm install
cd ..
```

### 2) Apply database migration

```bash
dotnet ef database update --project YouTubeCategorizer.Infrastructure --startup-project YouTubeCategorizer.API
```

### 3) One-time ML API setup (Python/Flask)

```powershell
cd ML_Model
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r api/requirements.txt
```

On macOS/Linux replace activation with `source venv/bin/activate`.

You no longer need to run `python api/app.py` manually in development.
When you run the backend API, it auto-starts the Flask ML API using:

- `MLApi:PythonExecutable` (default `..\ML_Model\venv\Scripts\python.exe`)
- `MLApi:WorkingDirectory` (default `..\ML_Model\api`)

Default ML API URL: `http://localhost:5001`

Optional manual run (if needed):

```powershell
cd ML_Model
.\venv\Scripts\Activate.ps1
python api/app.py
```

### 4) Run backend API

```bash
dotnet run --project YouTubeCategorizer.API
```

API default URL: `http://localhost:5010`

Useful dev endpoints:

- Swagger: `http://localhost:5010/swagger`
- Hangfire Dashboard: `http://localhost:5010/hangfire`

### 5) Run Angular frontend

```bash
cd Frontend
npm start
```

Frontend default URL: `http://localhost:4200`

The Angular dev server proxies `/api` and `/hangfire` to `http://localhost:5010` using `Frontend/proxy.conf.json`.

## API Endpoints (Current)

### .NET API — `AuthController`

- `POST /api/Auth/signup` - create account and return JWT token
- `POST /api/Auth/signin` - login and return JWT token

### .NET API — `VideosController`

- `POST /api/Videos/process` - queue channel processing job
- `GET /api/Videos/categorized` - get grouped categorized videos
- `POST /api/Videos/test-categorize` - quick categorization test

### ML API — Flask (`ML_Model/api/app.py`)

- `GET  /` - service info
- `GET  /health` - health check (used to verify model loaded)
- `POST /categorize` - categorize one video: `{ "text": "title + description" }` → `{ "category", "confidence" }`
- `POST /categorize/batch` - categorize a batch of texts
- `GET  /model/info` - model metadata (features, vectorizer config, etc.)

## How Categorization Works

1. Backend combines a video's title + description into one text blob.
2. `CategorizationService` POSTs the text to the Flask `/categorize` endpoint.
3. Flask runs the TF-IDF vectorizer, gets probabilities from the Logistic Regression model, then:
   - Applies an **additive keyword boost** — `CATEGORY_KEYWORDS` maps each category to signal words (e.g. `"quantum"`, `"unboxing"`, `"gameplay"`); each hit adds `KEYWORD_BOOST` (default `0.15`) to that category's score.
   - Picks the category with the highest boosted score.
   - If the final confidence is below `CONFIDENCE_THRESHOLD` (default `0.50`), returns `Uncategorized` instead.
4. Backend retries on transient HTTP/timeout errors and falls back to `Uncategorized` after 3 failed attempts.

Tuning knobs live at the top of `ML_Model/api/app.py`:

```python
KEYWORD_BOOST = 0.15
CONFIDENCE_THRESHOLD = 0.50
CATEGORY_KEYWORDS = { ... }
```

## Notes

- The Gemini-based implementation in `CategorizationService.cs` is preserved as a commented block for easy reference / rollback if you ever want to switch back.
- If you retrain the model, re-run the notebooks in `ML_Model/notebooks/` (01 → 02 → 03) to regenerate `best_model.pkl`, `tfidf_vectorizer.pkl`, and `label_mapping.json`.
- The bundled `.pkl` files were trained with a newer sklearn (1.8+); `app.py` contains a small compatibility shim so they load on sklearn 1.6.x as well.

