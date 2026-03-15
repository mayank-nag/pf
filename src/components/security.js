// ─── Security Playground Section Component ───

export function renderSecurity() {
    const section = document.createElement('section');
    section.id = 'security';

    section.innerHTML = `
    <div class="section-label reveal">06 — Security Mini Projects</div>
    <p class="security-intro reveal">A small interactive space to demonstrate curiosity and technical exploration in cybersecurity.</p>
    <div class="security-grid">

      <div class="security-card reveal">
        <h3>🔑 Password Strength Checker</h3>
        <p>Test how strong your password is.</p>
        <input type="text" id="passwordInput" class="security-input" placeholder="Enter a password..." autocomplete="off" />
        <div class="strength-bar">
          <div class="strength-fill" id="strengthFill"></div>
        </div>
        <div class="strength-label" id="strengthLabel">Enter a password to check</div>
      </div>

      <div class="security-card reveal">
        <h3>🔐 Caesar Cipher</h3>
        <p>Encrypt and decrypt text using a classic substitution cipher.</p>
        <input type="text" id="cipherInput" class="security-input" placeholder="Enter text..." />
        <div class="cipher-controls">
          <label>Shift: <input type="number" id="cipherShift" value="3" min="1" max="25" class="security-input shift-input" /></label>
          <button id="encryptBtn" class="security-btn">Encrypt</button>
          <button id="decryptBtn" class="security-btn">Decrypt</button>
        </div>
        <div class="cipher-output" id="cipherOutput">Result will appear here</div>
      </div>

    </div>
  `;

    document.getElementById('app').appendChild(section);
    initPasswordChecker();
    initCaesarCipher();
}

function initPasswordChecker() {
    const input = document.getElementById('passwordInput');
    const fill = document.getElementById('strengthFill');
    const label = document.getElementById('strengthLabel');

    if (!input) return;

    input.addEventListener('input', () => {
        const val = input.value;
        let score = 0;
        if (val.length >= 8) score++;
        if (val.length >= 12) score++;
        if (/[A-Z]/.test(val)) score++;
        if (/[0-9]/.test(val)) score++;
        if (/[^A-Za-z0-9]/.test(val)) score++;

        const levels = [
            { text: 'Very Weak', color: '#ef4444', width: '20%' },
            { text: 'Weak', color: '#f97316', width: '40%' },
            { text: 'Fair', color: '#eab308', width: '60%' },
            { text: 'Strong', color: '#22c55e', width: '80%' },
            { text: 'Very Strong', color: '#10b981', width: '100%' },
        ];

        if (val.length === 0) {
            fill.style.width = '0%';
            fill.style.background = '#333';
            label.textContent = 'Enter a password to check';
            return;
        }

        const level = levels[Math.min(score, 4)];
        fill.style.width = level.width;
        fill.style.background = level.color;
        label.textContent = level.text;
    });
}

function initCaesarCipher() {
    const input = document.getElementById('cipherInput');
    const shift = document.getElementById('cipherShift');
    const output = document.getElementById('cipherOutput');
    const encBtn = document.getElementById('encryptBtn');
    const decBtn = document.getElementById('decryptBtn');

    if (!encBtn || !decBtn) return;

    function caesarShift(text, shiftVal) {
        return text
            .split('')
            .map((ch) => {
                if (ch.match(/[a-z]/)) {
                    return String.fromCharCode(((ch.charCodeAt(0) - 97 + shiftVal) % 26 + 26) % 26 + 97);
                }
                if (ch.match(/[A-Z]/)) {
                    return String.fromCharCode(((ch.charCodeAt(0) - 65 + shiftVal) % 26 + 26) % 26 + 65);
                }
                return ch;
            })
            .join('');
    }

    encBtn.addEventListener('click', () => {
        const s = parseInt(shift.value) || 3;
        output.textContent = caesarShift(input.value, s) || 'Result will appear here';
    });

    decBtn.addEventListener('click', () => {
        const s = parseInt(shift.value) || 3;
        output.textContent = caesarShift(input.value, -s) || 'Result will appear here';
    });
}
