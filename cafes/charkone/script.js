/* ════════════════════════════════════════════
   CHARKONE RESTOCAFE — script.js
   Interactions: Nav, Hero Parallax, Particles,
   Duality, Slider, Menu Filter, Scroll Reveal
   ════════════════════════════════════════════ */

'use strict';

// ──────────────── NAV ────────────────
const nav = document.getElementById('main-nav');
const hamburger = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');

let lastScroll = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;

  // Scrolled style
  if (y > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  lastScroll = y;
}, { passive: true });

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ──────────────── PARTICLES ────────────────
(function spawnParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;

  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.setProperty('--dur', (3 + Math.random() * 5) + 's');
    p.style.setProperty('--delay', (Math.random() * 6) + 's');
    p.style.left = (Math.random() * 100) + '%';
    p.style.top = (40 + Math.random() * 55) + '%';
    p.style.width = (2 + Math.random() * 3) + 'px';
    p.style.height = p.style.width;
    container.appendChild(p);
  }
})();

// ──────────────── HERO PARALLAX ────────────────
const heroBg = document.getElementById('hero-bg');

window.addEventListener('scroll', () => {
  if (!heroBg) return;
  const y = window.scrollY;
  if (y < window.innerHeight) {
    heroBg.style.transform = `scale(1.06) translateY(${y * 0.18}px)`;
  }
}, { passive: true });

// ──────────────── SCROLL REVEAL ────────────────
const revealTargets = document.querySelectorAll(
  '.duality-header, .duality-col, .seating-header, .vibe-card, ' +
  '.menu-header, .menu-category, .instagram-header, .instagram-embed-wrap, ' +
  '.footer-left, .footer-map'
);

revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

revealTargets.forEach(el => revealObserver.observe(el));

// ──────────────── MENU FILTER ────────────────
const filterBtns = document.querySelectorAll('.filter-tab');
const menuCategories = document.querySelectorAll('.menu-category');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    // Update active tab
    filterBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    // Show / hide categories
    menuCategories.forEach(cat => {
      const catType = cat.dataset.category;
      if (filter === 'all' || catType === filter) {
        cat.classList.remove('hidden');
        cat.style.opacity = '0';
        cat.style.transform = 'translateY(16px)';
        requestAnimationFrame(() => {
          setTimeout(() => {
            cat.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
            cat.style.opacity = '1';
            cat.style.transform = 'translateY(0)';
          }, 50);
        });
      } else {
        cat.classList.add('hidden');
      }
    });
  });
});

// ──────────────── VIBE SLIDER DOTS ────────────────
const sliderTrack = document.getElementById('vibe-slider');
const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const slideIndex = parseInt(dot.dataset.slide);
    const cards = sliderTrack.querySelectorAll('.vibe-card');
    const card = cards[slideIndex];

    if (card) {
      sliderTrack.scrollTo({
        left: card.offsetLeft - parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--section-px') || 24),
        behavior: 'smooth'
      });
    }

    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});

// Update dots on scroll
let dotScrollTimer;
sliderTrack.addEventListener('scroll', () => {
  clearTimeout(dotScrollTimer);
  dotScrollTimer = setTimeout(() => {
    const cards = sliderTrack.querySelectorAll('.vibe-card');
    let closestIndex = 0;
    let minDist = Infinity;

    cards.forEach((card, i) => {
      const dist = Math.abs(card.getBoundingClientRect().left - sliderTrack.getBoundingClientRect().left);
      if (dist < minDist) {
        minDist = dist;
        closestIndex = i;
      }
    });

    dots.forEach(d => d.classList.remove('active'));
    if (dots[closestIndex]) dots[closestIndex].classList.add('active');
  }, 80);
}, { passive: true });

// ──────────────── MAGNETIC HERO CTA ────────────────
const heroCta = document.getElementById('hero-reserve-btn');

if (heroCta) {
  heroCta.addEventListener('mousemove', (e) => {
    const rect = heroCta.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    heroCta.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
  });

  heroCta.addEventListener('mouseleave', () => {
    heroCta.style.transform = 'translate(0, 0)';
    heroCta.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  });
}

// ──────────────── SMOOTH ANCHOR SCROLL ────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ──────────────── CURSOR GLOW (DESKTOP ONLY) ────────────────
if (window.matchMedia('(pointer: fine)').matches) {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed;
    pointer-events: none;
    width: 300px; height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(217,160,91,0.04) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    z-index: 0;
    transition: opacity 0.3s;
    top: -150px; left: -150px;
  `;
  document.body.appendChild(glow);

  window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }, { passive: true });
}

// ──────────────── INSTAGRAM EMBED RELOAD ────────────────
if (window.instgrm) {
  window.instgrm.Embeds.process();
}

window.addEventListener('load', () => {
  if (window.instgrm) {
    window.instgrm.Embeds.process();
  }
});
