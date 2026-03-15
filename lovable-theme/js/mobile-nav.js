/**
 * Mobile Navigation Toggle
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.mobile-toggle');
    var nav = document.querySelector('.mobile-nav');
    var iconOpen = document.querySelector('.mobile-toggle .icon-menu');
    var iconClose = document.querySelector('.mobile-toggle .icon-close');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      if (iconOpen) iconOpen.style.display = isOpen ? 'none' : 'block';
      if (iconClose) iconClose.style.display = isOpen ? 'block' : 'none';
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        if (iconOpen) iconOpen.style.display = 'block';
        if (iconClose) iconClose.style.display = 'none';
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  });
})();
