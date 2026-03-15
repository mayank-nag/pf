// ─── GitHub Activity Section Component ───
import { profile } from '../data/profile.js';

export function renderGithub() {
    const section = document.createElement('section');
    section.id = 'github';

    const repoCards = [
        { name: 'women_safety_app', desc: 'Responsive safety-focused web application', lang: 'JavaScript' },
        { name: 'portfolio', desc: 'Modern developer portfolio with animations', lang: 'JavaScript' },
        { name: 'Game_development_py_games', desc: 'Interactive games with PyGame', lang: 'Python' },
        { name: '_Mangoid_', desc: 'Mango variety classification with TensorFlow', lang: 'Python' },
    ];

    const reposHTML = repoCards
        .map(
            (repo) => `
      <a href="https://github.com/${profile.githubUsername}/${repo.name}" target="_blank" class="github-repo-card reveal">
        <div class="repo-icon">📁</div>
        <div class="repo-name">${repo.name}</div>
        <div class="repo-desc">${repo.desc}</div>
        <div class="repo-lang">
          <span class="lang-dot" style="background: ${repo.lang === 'Python' ? '#3572A5' : '#f1e05a'}"></span>
          ${repo.lang}
        </div>
      </a>`
        )
        .join('');

    section.innerHTML = `
    <div class="section-label reveal">05 — GitHub Activity</div>
    <div class="github-content">
      <div class="github-heatmap reveal">
        <h3>Contribution Graph</h3>
        <img
          src="https://ghchart.rshah.org/${profile.githubUsername}"
          alt="GitHub Contribution Graph"
          class="heatmap-img"
          loading="lazy"
        />
      </div>
      <div class="github-repos">
        <h3 class="reveal">Recent Repositories</h3>
        <div class="repos-grid">
          ${reposHTML}
        </div>
      </div>
    </div>
  `;

    document.getElementById('app').appendChild(section);
}
