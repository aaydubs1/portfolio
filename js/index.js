'use strict';

window.addEventListener('load', function() {
  const container = document.querySelector('.horizontal-scroll-container');
  
  
  // Prevenir scroll vertical en toda la página
  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  }, { passive: false });
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.Header-link').forEach(link => {
    link.addEventListener('mousemove', e => {
      const rect = link.getBoundingClientRect();
      link.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      link.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });
});

