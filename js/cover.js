/**
 * 封面页：Bootstrap Carousel 轮播（可选配置）
 */
(function () {
  'use strict';

  function initCoverCarousel() {
    var el = document.getElementById('coverCarousel');
    if (!el || typeof window.bootstrap === 'undefined') return;
    var Carousel = window.bootstrap.Carousel;
    if (!Carousel) return;
    var carousel = new Carousel(el, {
      interval: 5000,
      pause: 'hover',
      wrap: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCoverCarousel);
  } else {
    initCoverCarousel();
  }
})();
