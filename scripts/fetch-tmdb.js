import fs from 'node:fs/promises';

const API = 'https://api.themoviedb.org/3';
const TOKEN = process.env.TMDB_API_KEY;
if (!TOKEN) {
  console.error('❌ TMDB_API_KEY manquant.');
  process.exit(1);
}

async function getPopular(page=1){
  const r = await fetch(`${API}/movie/popular?language=fr-FR&page=${page}`, {
    headers: { Authorization: `Bearer ${TOKEN}` }
  });
  if (!r.ok) throw new Error(`TMDb error ${r.status}`);
  return r.json();
}

const page1 = await getPopular(1);
await fs.mkdir('docs/data', { recursive: true });
await fs.writeFile('docs/data/movies-popular.json', JSON.stringify(page1, null, 2));
console.log('✅ Écrit: docs/data/movies-popular.json');
