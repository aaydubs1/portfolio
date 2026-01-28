'use strict';

document.addEventListener('DOMContentLoaded', () => {

  gsap.registerPlugin(ScrollTrigger);

  const container = document.querySelector(".horizontal-scroll-container");
  const sections = gsap.utils.toArray(".horizontal-scroll-container > div");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: container,
    pin: true,
    scrub: true,  // sigue el scroll sin retraso
    // snap eliminado
    end: () => "+=" + (window.innerWidth * (sections.length - 1))
  }
});

  document.querySelectorAll('.Header-link').forEach(link => {
    link.addEventListener('mousemove', e => {
      const rect = link.getBoundingClientRect();
      link.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      link.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });

});

gsap.from(".item2 .Presentacion-name", {
opacity: 0,
y: 40,
duration: 0.8,
ease: "power3.out",
scrollTrigger: {
trigger: ".item2",
start: "left center"
}
});

