# Mini site films (statique) — TMDb ➜ JSON + lien Letterboxd

## 🚀 Utilisation rapide
1) **Fork/Clone** ce repo sur GitHub.
2) Dans *Settings → Secrets and variables → Actions → New repository secret*, créez `TMDB_API_KEY` (copiez votre token Bearer TMDb).
3) Ouvrez l’onglet **Actions** et lancez “Update TMDb” (▶ Run workflow) pour générer `public/data/movies-popular.json`.
4) Activez **GitHub Pages** pour servir le dossier `public` (ou déployez sur Netlify/Vercel).

## 🧩 Structure
- `public/` — site statique (aucun Node à lancer)  
  - `index.html` — simple page qui lit `data/movies-popular.json`
  - `data/movies-popular.json` — généré automatiquement par l’action GitHub
- `src/main.js` — fetch + rendu minimal
- `scripts/fetch-tmdb.js` — script qui interroge TMDb (tourne dans GitHub Actions)
- `.github/workflows/update-data.yml` — planificateur quotidien

## 💡 Lien Letterboxd
Chaque film a un lien : `https://letterboxd.com/tmdb/{tmdb_id}/`

## 📦 Dev local (optionnel)
Servez `public/` (ex: `npx http-server public -p 5173`) puis ouvrez http://localhost:5173
