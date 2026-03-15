// ─── Blog / Technical Writeups Section Component ───
import { profile } from '../data/profile.js';

export function renderBlog() {
    const section = document.createElement('section');
    section.id = 'blog';

    const cardsHTML = profile.blog
        .map(
            (post) => `
      <div class="blog-card reveal">
        <div class="blog-tag">${post.tag}</div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-summary">${post.summary}</p>
        <span class="blog-read">Read More →</span>
      </div>`
        )
        .join('');

    section.innerHTML = `
    <div class="section-label reveal">07 — Technical Writeups</div>
    <div class="blog-grid">
      ${cardsHTML}
    </div>
  `;

    document.getElementById('app').appendChild(section);
}
