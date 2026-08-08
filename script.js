/* ==========================================================================
   JUTEBERRY — script.js
   Header scroll state, mobile menu, preloader, scroll reveals,
   FAQ accordion, WhatsApp link building, scroll-to-top.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Preloader ---- */
  const preloader = document.querySelector('.preloader');
  window.addEventListener('load', () => {
    if (preloader) preloader.classList.add('is-hidden');
  });
  // Fallback in case 'load' already fired
  setTimeout(() => { if (preloader) preloader.classList.add('is-hidden'); }, 1200);

  /* ---- Header scroll state ---- */
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 50);
    if (scrollTopBtn) scrollTopBtn.classList.toggle('show', window.scrollY > 500);
  });

  /* ---- Mobile menu ---- */
  const burger = document.querySelector('.nav-burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.querySelector('.mobile-menu__close');
  const openMenu = () => mobileMenu && mobileMenu.classList.add('is-open');
  const closeMenu = () => mobileMenu && mobileMenu.classList.remove('is-open');
  if (burger) burger.addEventListener('click', openMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMenu);
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  }

  /* ---- Scroll reveal (IntersectionObserver) ---- */
  const revealEls = document.querySelectorAll('.reveal-up, [data-stagger]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-inview');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-inview'));
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach(el => el.classList.remove('is-open'));
      if (!isOpen) item.classList.add('is-open');
    });
  });

  /* ---- WhatsApp link builder ----
     Any element with [data-wa] gets its href built from the phone number
     and an optional [data-wa-product] value. */
  const WA_PHONE = '918262977784';
  document.querySelectorAll('[data-wa]').forEach(el => {
    const product = el.getAttribute('data-wa-product');
    const message = product
      ? `Hi Juteberry! I'm interested in ${product} — could you share samples and pricing?`
      : `Hi Juteberry! I'm interested in custom jute bags with samples and pricing.`;
    el.setAttribute('href', `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });

});
