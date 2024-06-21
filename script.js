  function showDetails() {
    document.getElementById('details').style.display = 'block';
}

  function hideDetails() {
    document.getElementById('details').style.display = 'none';
}

// SCROLL REVEAL
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.left, heading', { origin: 'top' });
ScrollReveal().reveal('.header img, .products, .about,footer', { origin: 'bottom' });
ScrollReveal().reveal('.left h1, .main', { origin: 'left' });
ScrollReveal().reveal('.left p, .about-text', { origin: 'right' });

// TYPED JS
const typed = new Typed('.multiple-text', {
  strings: ['Baked Foods', 'Breads', 'Fast Foods'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

  window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

// LOADING JS
  window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});