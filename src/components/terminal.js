// ─── Terminal Mode Component ───
import { profile } from '../data/profile.js';

const COMMANDS = {
    help: () =>
        `Available commands:
  help      — Show this help message
  whoami    — About the developer
  about     — Short bio
  skills    — List skill domains
  projects  — List projects
  contact   — Contact information
  clear     — Clear terminal`,
    whoami: () =>
        `${profile.name.first} ${profile.name.last}
Computer Science Student
${profile.tagline}`,
    about: () => profile.about.paragraphs[0],
    skills: () =>
        profile.skillGroups.map((g) => `  ${g.icon} ${g.title}: ${g.skills.join(', ')}`).join('\n'),
    projects: () =>
        profile.projects.map((p, i) => `  ${i + 1}. ${p.title} — ${p.tech.join(', ')}`).join('\n'),
    contact: () =>
        `  Email:    ${profile.email}
  GitHub:   ${profile.social.github}
  LinkedIn: ${profile.social.linkedin}`,
};

export function renderTerminal() {
    const wrapper = document.createElement('div');
    wrapper.id = 'terminalWrapper';

    wrapper.innerHTML = `
    <button class="terminal-toggle" id="terminalToggle" title="Toggle Terminal Mode">
      <span class="terminal-icon">❯_</span>
    </button>
    <div class="terminal-overlay" id="terminalOverlay">
      <div class="terminal-window">
        <div class="terminal-header">
          <div class="terminal-dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <span class="terminal-title">mayank@portfolio:~</span>
          <button class="terminal-close" id="terminalClose">✕</button>
        </div>
        <div class="terminal-body" id="terminalBody">
          <div class="terminal-line">Welcome to Mayank's terminal. Type <span class="cmd-highlight">help</span> for commands.</div>
        </div>
        <div class="terminal-input-row">
          <span class="terminal-prompt">❯</span>
          <input type="text" id="terminalInput" class="terminal-input" placeholder="Type a command..." autocomplete="off" spellcheck="false" />
        </div>
      </div>
    </div>
  `;

    document.body.appendChild(wrapper);
    initTerminal();
}

function initTerminal() {
    const toggle = document.getElementById('terminalToggle');
    const overlay = document.getElementById('terminalOverlay');
    const close = document.getElementById('terminalClose');
    const input = document.getElementById('terminalInput');
    const body = document.getElementById('terminalBody');

    if (!toggle || !overlay) return;

    toggle.addEventListener('click', () => {
        overlay.classList.add('active');
        setTimeout(() => input?.focus(), 100);
    });

    close.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') overlay.classList.remove('active');
    });

    input.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter') return;
        const cmd = input.value.trim().toLowerCase();
        input.value = '';

        // Add user command line
        const cmdLine = document.createElement('div');
        cmdLine.className = 'terminal-line';
        cmdLine.innerHTML = `<span class="terminal-prompt">❯</span> <span class="cmd-text">${cmd}</span>`;
        body.appendChild(cmdLine);

        if (cmd === 'clear') {
            body.innerHTML = '';
        } else if (COMMANDS[cmd]) {
            const output = document.createElement('div');
            output.className = 'terminal-line terminal-output';
            output.textContent = COMMANDS[cmd]();
            body.appendChild(output);
        } else if (cmd) {
            const output = document.createElement('div');
            output.className = 'terminal-line terminal-error';
            output.textContent = `command not found: ${cmd}. Type "help" for available commands.`;
            body.appendChild(output);
        }

        body.scrollTop = body.scrollHeight;
    });
}
