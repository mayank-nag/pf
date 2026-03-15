// ─── Portfolio / Projects Section Component ───
import { profile } from '../data/profile.js';

function buildPattern(type, index) {
  switch (type) {
    case 'grid':
      return `
        <svg class="project-pattern" viewBox="0 0 400 250" preserveAspectRatio="none">
          <defs><pattern id="grid${index}" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.5"/></pattern></defs>
          <rect width="400" height="250" fill="url(#grid${index})"/>
        </svg>`;
    case 'dots':
      return `
        <svg class="project-pattern" viewBox="0 0 400 250" preserveAspectRatio="none">
          <defs><pattern id="dots${index}" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="white"/></pattern></defs>
          <rect width="400" height="250" fill="url(#dots${index})"/>
        </svg>`;
    case 'lines':
      return `
        <svg class="project-pattern" viewBox="0 0 400 250" preserveAspectRatio="none">
          <defs><pattern id="lines${index}" width="30" height="30" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="30" y2="30" stroke="white" stroke-width="0.5"/></pattern></defs>
          <rect width="400" height="250" fill="url(#lines${index})"/>
        </svg>`;
    default:
      return '';
  }
}

function openModal(project) {
  // Remove existing modal if any
  const existing = document.getElementById('projectModal');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay active';
  overlay.id = 'projectModal';

  const featuresHTML = project.features
    ? `<div class="modal-section">
        <div class="modal-section-label">Features</div>
        <ul class="modal-features">
          ${project.features.map((f) => `<li>${f}</li>`).join('')}
        </ul>
      </div>`
    : '';

  const caseStudyHTML = project.caseStudy
    ? `
      <div class="modal-section">
        <div class="modal-section-label">Problem</div>
        <p>${project.caseStudy.problem}</p>
      </div>
      <div class="modal-section">
        <div class="modal-section-label">Approach</div>
        <p>${project.caseStudy.approach}</p>
      </div>
      <div class="modal-section">
        <div class="modal-section-label">Challenges</div>
        <p>${project.caseStudy.challenges}</p>
      </div>
      <div class="modal-section">
        <div class="modal-section-label">Outcome</div>
        <p>${project.caseStudy.outcome}</p>
      </div>`
    : '';

  overlay.innerHTML = `
    <div class="modal-content" style="position: relative;">
      <button class="modal-close" id="modalClose">✕</button>
      <div class="modal-title">${project.title}</div>
      <div class="modal-tech">${project.tech.join(' · ')}</div>
      ${featuresHTML}
      ${caseStudyHTML}
      <a href="${project.github}" target="_blank" class="modal-github-link">
        View on GitHub ↗
      </a>
    </div>
  `;

  document.body.appendChild(overlay);

  // Close handlers
  document.getElementById('modalClose').addEventListener('click', () => closeModal());
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', escHandler);
    }
  });
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
  }
}

export function renderPortfolio() {
  const section = document.createElement('section');
  section.id = 'portfolio';

  const total = profile.projects.length;

  const cardsHTML = profile.projects
    .map(
      (proj, i) => `
      <div class="project-card reveal" data-project-index="${i}" style="cursor: pointer;">
        <div class="project-bg" style="background: ${proj.gradient};">
          ${buildPattern(proj.pattern, i)}
        </div>
        <div class="project-info">
          <div class="project-num">${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}</div>
          <div class="project-name">${proj.title}</div>
          <div class="project-desc">${proj.description}</div>
          <div class="project-tech">${proj.tech.join(' · ')}</div>
        </div>
        <div class="project-arrow">↗</div>
      </div>`
    )
    .join('');

  section.innerHTML = `
    <div class="section-label reveal" style="color: #555;">03 — Work</div>
    <div class="portfolio-grid">
      ${cardsHTML}
    </div>
  `;

  document.getElementById('app').appendChild(section);

  // Attach modal open on card click
  section.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', () => {
      const index = parseInt(card.dataset.projectIndex);
      openModal(profile.projects[index]);
    });
  });
}
