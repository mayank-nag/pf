// ─── Custom Cursor Component ───

export function initCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.id = 'cursor';

    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    ring.id = 'cursorRing';

    document.body.prepend(ring);
    document.body.prepend(cursor);

    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', (e) => {
        mx = e.clientX;
        my = e.clientY;
        cursor.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    });

    function animateRing() {
        rx += (mx - rx - 18) * 0.12;
        ry += (my - ry - 18) * 0.12;
        ring.style.transform = `translate(${rx}px, ${ry}px)`;
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Attach hover detection to interactive elements
    function attachHover() {
        document.querySelectorAll('a, button, .skill-card, .project-card, .blog-card, .github-repo-card, .security-btn, .contact-social, .resume-download, .terminal-toggle').forEach((el) => {
            el.addEventListener('mouseenter', () => ring.classList.add('hover'));
            el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
        });
    }

    // Run once DOM is ready, and expose for re-binding after dynamic renders
    attachHover();
    return { attachHover };
}
