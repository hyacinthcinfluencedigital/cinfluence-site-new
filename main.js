/* ── NAV SCROLL ─────────────────────────────────────── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

/* ── MOBILE MENU ────────────────────────────────────── */
function openMenu() {
  const m = document.getElementById('mobileMenu');
  if (m) { m.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeMenu() {
  const m = document.getElementById('mobileMenu');
  if (m) { m.classList.remove('open'); document.body.style.overflow = ''; }
}

/* ── ACTIVE NAV LINK ────────────────────────────────── */
(function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* ── FADE UP OBSERVER ───────────────────────────────── */
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 90);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
fadeEls.forEach(el => observer.observe(el));

/* ── FAQ ACCORDION ──────────────────────────────────── */
function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ── SCROLL STRIP TOUCH PAUSE ───────────────────────── */
document.querySelectorAll('.scroll-track, .client-strip-inner').forEach(track => {
  if (!track) return;
  track.addEventListener('touchstart', () => track.style.animationPlayState = 'paused',  { passive: true });
  track.addEventListener('touchend',   () => track.style.animationPlayState = 'running', { passive: true });
});
