async function run(){
  try {
    const res = await fetch('/data/movies-popular.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP '+res.status);
    const data = await res.json();
    const list = Array.isArray(data.results) ? data.results : [];
    render(list);
  } catch (e) {
    document.querySelector('#app').innerHTML = `<p class="empty">Erreur de chargement des données 😵 (${e.message})</p>`;
  }
}

function render(list){
  const root = document.querySelector('#app');
  if (!list.length){
    root.innerHTML = '<p class="empty">Aucune donnée (remplissez <code>public/data/movies-popular.json</code>)</p>';
    return;
  }
  root.innerHTML = list.map(m => {
    const y = (m.release_date || '').slice(0,4) || '—';
    const poster = m.poster_path ? `https://image.tmdb.org/t/p/w342${m.poster_path}` : '';
    const rating = (m.vote_average ?? '').toFixed ? m.vote_average.toFixed(1) : (m.vote_average ?? '—');
    const votes = m.vote_count ?? 0;
    const query = encodeURIComponent(m.title).replace(/%20/g, "+");
    return `<article>
      ${poster ? `<img alt="${escapeHtml(m.title)}" src="${poster}">` : ''}
      <h3>${escapeHtml(m.title)} <span class="meta">(${y})</span></h3>
      <p class="meta">⭐ ${rating} (${votes})</p>
      <a href="https://letterboxd.com/tmdb/${m.id}/" target="_blank" rel="noreferrer">Voir sur Letterboxd ↗</a>
      <a href="https://thepibay.online/search/${encodeURIComponent(m.title)}" target="_blank" rel="noreferrer">Télécharger Le film ↗</a>
      <a href="https://www.opensubtitles.com/fr/fr/search-all/q-${query}/hearing_impaired-include/machine_translated-/trusted_sources-" target="_blank" rel="noreferrer">Télécharger Les sous-titre ↗</a>
    </article>`;
  }).join('');
}

function escapeHtml(str=''){
  return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}

run();
