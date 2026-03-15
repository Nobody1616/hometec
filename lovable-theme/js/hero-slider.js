/**
 * Hero Background Slider with Ken Burns zoom effect
 * Cycles through hero slides every 6 seconds with crossfade and zoom.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('.hero-slide');
    var dots = document.querySelectorAll('.hero-dot');
    if (!slides.length) return;

    var current = 0;
    var total = slides.length;
    var interval = 6000;
    var timer;

    function goTo(index) {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');

      current = index % total;

      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
    }

    function next() {
      goTo(current + 1);
    }

    function startTimer() {
      timer = setInterval(next, interval);
    }

    function resetTimer() {
      clearInterval(timer);
      startTimer();
    }

    // Dot click handlers
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goTo(i);
        resetTimer();
      });
    });

    // Initialize first slide
    slides[0].classList.add('active');
    if (dots[0]) dots[0].classList.add('active');
    startTimer();
  });
})();
