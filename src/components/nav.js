// ─── Navigation Component ───
import { profile } from '../data/profile.js';

export function renderNav() {
  const nav = document.createElement('nav');

  // Determine saved theme or default to 'dark'
  const saved = localStorage.getItem('theme') || 'dark';
  const isDark = saved === 'dark';

  nav.innerHTML = `
    <div class="logo" id="logo">${profile.logo}</div>
    <ul class="nav-links" id="navLinks">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#portfolio">Projects</a></li>
      <li><a href="#blog">Writeups</a></li>
      <li>
        <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
          ${isDark ? '☀️' : '🌙'}
        </button>
      </li>
      <li><a href="#contact" class="nav-cta">CONTACT</a></li>
    </ul>
  `;

  document.getElementById('app').prepend(nav);
  initThemeToggle();
  initScrollTracking();
}

function initThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

function initScrollTracking() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach((l) => {
      l.style.opacity = l.getAttribute('href') === '#' + current ? '1' : '0.55';
    });
  });
}
