
// mobile nav
document.querySelector('.menu-btn')?.addEventListener('click', () => {
  document.getElementById('navLinks')?.classList.toggle('open');
});

// year
document.getElementById('yr').textContent = new Date().getFullYear();
