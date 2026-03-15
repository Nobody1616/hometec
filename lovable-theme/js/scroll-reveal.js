/**
 * Scroll Reveal – fades in elements as they enter the viewport.
 * Add class "reveal" to any element you want to animate on scroll.
 * Optional: data-reveal-delay="200" for staggered animations.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    // If IntersectionObserver is available
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var el = entry.target;
              var delay = el.getAttribute('data-reveal-delay') || 0;
              setTimeout(function () {
                el.classList.add('revealed');
              }, parseInt(delay, 10));
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.15 }
      );

      reveals.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback: show everything
      reveals.forEach(function (el) {
        el.classList.add('revealed');
      });
    }
  });
})();
