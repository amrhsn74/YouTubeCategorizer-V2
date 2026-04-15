# YouTube Categorizer V2

YouTube Categorizer is a full-stack project that fetches videos from YouTube channels, categorizes them, stores results in SQL Server, and visualizes them in an Angular dashboard.

## Tech Stack

- Backend: ASP.NET Core 8 Web API
- Frontend: Angular 21 (standalone components)
- Database: SQL Server + Entity Framework Core 8
- Background Jobs: Hangfire
- External APIs:
  - YouTube Data API (fetch channel/video data)
  - Google Generative AI API (content categorization)

## Current App Features

- 5 main routed screens:
  - Dashboard (`/`)
  - Results (`/results`)
  - Videos (`/videos`)
  - Channels (`/channels`)
  - Reports (`/reports`)
- Sidebar navigation with active route highlighting
- Channel processing in background using Hangfire
- Categorized result browsing and filtering
- Pagination on data-heavy screens
- CSV export from Results page

## Repository Structure

- `YouTubeCategorizer.API/` - ASP.NET Core API host, controllers, app configuration
- `YouTubeCategorizer.Application/` - services and business logic
- `YouTubeCategorizer.Core/` - domain entities and interfaces
- `YouTubeCategorizer.Infrastructure/` - EF Core DbContext, repositories, migrations
- `yt-categorizer/` - Angular frontend
- `ML_Model/` - Python ML artifacts and API experiments (optional/standalone)

## Prerequisites

- .NET SDK 8.0+
- Node.js 18+
- SQL Server (LocalDB/SQL Server Express/full SQL Server)
- API keys:
  - YouTube Data API key
  - Google AI API key

## Configuration

Update `YouTubeCategorizer.API/appsettings.json` values:

- `ConnectionStrings:DefaultConnection`
- `YouTube:ApiKey`
- `GoogleAI:ApiKey`
- `GoogleAI:ModelName` (default: `gemini-2.5-flash-lite`)

Important: avoid committing real secrets to source control.

## Setup and Run

### 1) Restore dependencies

```bash
dotnet restore
```

```bash
cd yt-categorizer
npm install
cd ..
```

### 2) Apply database migration

```bash
dotnet ef database update --project YouTubeCategorizer.Infrastructure --startup-project YouTubeCategorizer.API
```

### 3) Run backend API

```bash
dotnet run --project YouTubeCategorizer.API
```

API default URL: `http://localhost:5010`

Useful dev endpoints:

- Swagger: `http://localhost:5010/swagger`
- Hangfire Dashboard: `http://localhost:5010/hangfire`

### 4) Run Angular frontend

```bash
cd yt-categorizer
npm start
```

Frontend default URL: `http://localhost:4200`

The Angular dev server proxies `/api` and `/hangfire` to `http://localhost:5010` using `yt-categorizer/proxy.conf.json`.

## API Endpoints (Current)

From `VideosController`:

- `POST /api/Videos/process` - queue channel processing job
- `GET /api/Videos/categorized` - get grouped categorized videos
- `POST /api/Videos/test-categorize` - quick categorization test

## Notes

- The project includes an `ML_Model` Python folder. Current .NET backend categorization is implemented through `CategorizationService` using Google AI.
- If you need offline/local-only categorization, you can wire the backend to the Python ML API in `ML_Model/api`.
