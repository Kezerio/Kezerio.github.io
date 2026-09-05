(function () {
  'use strict';
  var progress = document.querySelector('[data-reading-progress]');
  var backToTop = document.querySelector('[data-back-to-top]');
  var links = Array.from(document.querySelectorAll('[data-legal-index] a'));
  var sections = links.map(function (link) { return document.querySelector(link.getAttribute('href')); }).filter(Boolean);
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function updateScrollState() {
    var available = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    var ratio = Math.min(1, Math.max(0, window.scrollY / available));
    if (progress) progress.style.transform = 'scaleX(' + ratio + ')';
    if (backToTop) backToTop.classList.toggle('is-visible', window.scrollY > 520);

    var activeId = sections.length ? sections[0].id : '';
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= 150) activeId = section.id;
    });
    links.forEach(function (link) {
      var active = link.getAttribute('href') === '#' + activeId;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'true'); else link.removeAttribute('aria-current');
    });
  }

  window.addEventListener('scroll', updateScrollState, { passive: true });
  window.addEventListener('resize', updateScrollState);
  updateScrollState();
  if (backToTop) backToTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' }); });
})();
