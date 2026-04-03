(function () {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initPublications();
    initPhotoStraighten();
  }

  /* ========================================
     PUBLICATIONS — accordion toggle
     ======================================== */
  function initPublications() {
    document
      .querySelectorAll('.publication-item[data-has-abstract="true"]')
      .forEach(function (item) {
        var header = item.querySelector('.publication-header');
        if (!header) return;

        header.addEventListener('click', function (e) {
          if (e.target.closest('a')) return;
          toggleItem(item);
        });

        header.addEventListener('keydown', function (e) {
          if (
            (e.key === 'Enter' || e.key === ' ') &&
            !e.target.closest('a')
          ) {
            e.preventDefault();
            toggleItem(item);
          }
        });
      });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        var ex = document.querySelector('.publication-item.expanded');
        if (ex) toggleItem(ex);
      }
    });
  }

  function toggleItem(item) {
    var body = item.querySelector('.publication-body');
    var header = item.querySelector('.publication-header');
    if (!body) return;

    if (item.classList.contains('expanded')) {
      body.style.maxHeight = body.scrollHeight + 'px';
      body.offsetHeight; // force reflow
      body.style.maxHeight = '0';
      item.classList.remove('expanded');
      header.setAttribute('aria-expanded', 'false');
    } else {
      item.classList.add('expanded');
      header.setAttribute('aria-expanded', 'true');
      body.style.maxHeight = body.scrollHeight + 'px';
      body.addEventListener('transitionend', function handler() {
        if (item.classList.contains('expanded'))
          body.style.maxHeight = 'none';
        body.removeEventListener('transitionend', handler);
      });
    }
  }

  /* ========================================
     PHOTO — click-to-straighten with
     thumb-press tape animation & drift-back
     ======================================== */
  function initPhotoStraighten() {
    var frame = document.getElementById('profileFrame');
    if (!frame) return;

    var thumbEl = frame.querySelector('.tape-fx-thumb');
    var shadowEl = frame.querySelector('.tape-fx-thumb-shadow');
    var wrapperEl = frame.querySelector('.tape-wrapper');

    var isStraight = false;
    var driftTimer = null;

    // Random tilt: magnitude 1.8–3.5°, random direction
    function randomTilt() {
      var dir = Math.random() > 0.5 ? 1 : -1;
      return dir * (1.8 + Math.random() * 1.7);
    }

    // Random drift delay: 3–6 seconds
    function randomDriftDelay() {
      return 3000 + Math.random() * 3000;
    }

    // Helper: restart a CSS animation by removing and re-adding a class
    function resetAnim(el, className) {
      if (!el) return;
      el.classList.remove(className);
      void el.offsetWidth; // force reflow
      el.classList.add(className);
    }

    // Set initial crooked angle
    var currentTilt = -2.8;
    frame.style.transform = 'rotate(' + currentTilt + 'deg)';

    function playThumbPress() {
      resetAnim(thumbEl, 'press');
      resetAnim(shadowEl, 'press');
      resetAnim(wrapperEl, 'do-thumb');
    }

    function straighten() {
      if (isStraight) return;
      isStraight = true;

      // Snap straight with spring easing
      frame.classList.add('is-straight');
      frame.style.transition =
        'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)';
      frame.style.transform = 'rotate(0deg)';

      // Play thumb press on tape
      playThumbPress();

      // Schedule drift back to crooked
      clearTimeout(driftTimer);
      driftTimer = setTimeout(function () {
        frame.classList.remove('is-straight');
        currentTilt = randomTilt();

        // Slow gentle easing for the drift
        frame.style.transition =
          'transform 1.8s cubic-bezier(0.25, 0.1, 0.25, 1)';
        frame.style.transform = 'rotate(' + currentTilt + 'deg)';

        isStraight = false;

        // Restore snappy transition for next click
        setTimeout(function () {
          frame.style.transition =
            'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)';
        }, 1900);
      }, randomDriftDelay());
    }

    frame.addEventListener('click', straighten);
    frame.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        straighten();
      }
    });
  }
})();