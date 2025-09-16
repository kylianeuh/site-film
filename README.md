# Site films (statique) — TMDb ➜ JSON + lien Letterboxd

## 🚀 Mise en ligne
1. Uploadez ce repo sur GitHub (`site-film` par ex).
2. Dans *Settings → Secrets and variables → Actions*, ajoutez `TMDB_API_KEY` (votre jeton v4 Bearer TMDb).
3. Dans l’onglet **Actions**, lancez “Update TMDb” ▶️ pour générer `docs/data/movies-popular.json`.
4. Dans **Settings → Pages** : Source = `main`, Folder = `/docs`.  
   → Votre site sera dispo à `https://PSEUDO.github.io/site-film/`

## 📂 Structure
- `docs/` → tout le site servi par GitHub Pages  
  - `index.html` → page statique  
  - `data/movies-popular.json` → rempli automatiquement par l’action  
  - `src/main.js` → affichage films  
- `scripts/fetch-tmdb.js` → script qui interroge TMDb  
- `.github/workflows/update-data.yml` → planificateur quotidien

## 💡 Lien Letterboxd
Chaque film a un lien : `https://letterboxd.com/tmdb/{tmdb_id}/`
