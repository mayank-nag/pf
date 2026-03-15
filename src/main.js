// ─── App Entry Point ───
// Styles
import './styles/index.css';

// Components
import { initCursor } from './components/cursor.js';
import { renderNav } from './components/nav.js';
import { renderHero } from './components/hero.js';
import { renderAbout } from './components/about.js';
import { renderSkills } from './components/skills.js';
import { renderPortfolio } from './components/portfolio.js';
import { renderStats } from './components/stats.js';
import { renderGithub } from './components/github.js';
import { renderSecurity } from './components/security.js';
import { renderBlog } from './components/blog.js';
import { renderContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';
import { renderTerminal } from './components/terminal.js';

// Animations
import { playHeroEntrance } from './animations/heroEntrance.js';
import { initScrollReveal } from './animations/scrollReveal.js';
import { initCounterAnimation } from './animations/counterAnimation.js';
import { initSkillHover } from './animations/skillHover.js';

// ─── Initialize Theme ───
function initTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
}

// ─── Bootstrap ───
function init() {
  initTheme();

  // Render all sections in order
  renderNav();
  renderHero();
  renderAbout();
  renderSkills();
  renderPortfolio();
  renderStats();
  renderGithub();
  renderSecurity();
  renderBlog();
  renderContact();
  renderFooter();

  // Terminal is a floating overlay, rendered to body
  renderTerminal();

  // Initialize interactions
  const { attachHover } = initCursor();

  // Re-bind cursor hover after all DOM is rendered
  attachHover();

  // Fire animations
  playHeroEntrance();
  initScrollReveal();
  initCounterAnimation();
  initSkillHover();
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
