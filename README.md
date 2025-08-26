# Timetable Generator (React + Vite + Tailwind v4)

Generate and view simple timetables. Includes data entry for Teachers, Subjects, Classes, Groups, Constraints; a Generate page; and a View Timetable grid.

## Requirements
- Node.js 18+

## Run locally
```bash
npm install
npm run dev
```
Open the URL printed by Vite (e.g., http://localhost:5173).

## Build
```bash
npm run build
npm run preview   # optional local preview of dist/
```

## Deploy to Vercel (recommended)
1. Push this folder to GitHub (create a new repo first):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
2. Go to https://vercel.com → Add New Project → Import your repo.
3. Framework preset: "Vite".
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deploy.

Notes:
- `vercel.json` is included to rewrite all routes to `index.html` for React Router.
- Tailwind v4 uses `@tailwindcss/postcss` in `postcss.config.js`.

## Folder structure
- `src/pages/` → app pages (Dashboard, ManageData, GenerateSchedule, ViewTimetable, Reports)
- `src/components/` → UI components
- `src/context/AppContext.jsx` → global state (teachers, subjects, classes, groups, constraints, timetable)

Images 
<img width="1677" height="641" alt="1" src="https://github.com/user-attachments/assets/01d9242d-a719-428a-9f8f-12cabf13c2af" />

<img width="1582" height="543" alt="2" src="https://github.com/user-attachments/assets/479515a6-a998-40c2-9a3a-7112d7da8297" />

<img width="1555" height="507" alt="3" src="https://github.com/user-attachments/assets/5e7c48d7-0186-4172-8326-a04d3f527620" />



