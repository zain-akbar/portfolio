// Mobile menu
document.querySelector('.menu-btn')?.addEventListener('click', () => {
  document.getElementById('navlinks')?.classList.toggle('open');
});

// Year
document.getElementById('yr')?.textContent = new Date().getFullYear();

// Scroll reveal (IntersectionObserver)
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('reveal-active');
      io.unobserve(e.target);
    }
  });
}, {rootMargin: '0px 0px -10% 0px', threshold: 0.1});

document.querySelectorAll('[data-animate]').forEach(el => io.observe(el));
