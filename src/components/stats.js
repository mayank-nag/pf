// ─── Stats Section Component ───
import { profile } from '../data/profile.js';

export function renderStats() {
    const section = document.createElement('section');
    section.id = 'stats';

    const statsHTML = profile.about.stats
        .map(
            (s) => `
      <div class="stats-card reveal">
        <div class="stats-number" data-count="${s.value}">0</div>
        <div class="stats-suffix">+</div>
        <div class="stats-label">${s.label}</div>
      </div>`
        )
        .join('');

    section.innerHTML = `
    <div class="section-label reveal">04 — Numbers</div>
    <div class="stats-grid">
      ${statsHTML}
    </div>
  `;

    document.getElementById('app').appendChild(section);
}
