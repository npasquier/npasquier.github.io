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
    initEmail();
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
      body.offsetHeight;
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
     EMAIL — anti-spam obfuscation
     Split into parts so bots can't scrape it.
     Edit the 3 variables below with your email.
     ======================================== */
  function initEmail() {
    var link = document.getElementById('emailLink');
    var tooltip = document.getElementById('emailTooltip');
    if (!link || !tooltip) return;

    // ---- EDIT THESE ----
    var user = 'nicolas.pasquier';
    var domain = 'inrae';
    var tld = 'fr';
    // --------------------

    var revealed = false;

    link.addEventListener('click', function (e) {
      e.preventDefault();

      if (!revealed) {
        // First click: show the address in a tooltip
        var addr = user + '@' + domain + '.' + tld;
        tooltip.innerHTML = '<a href="mailto:' + addr + '">' + addr + '</a>';
        tooltip.classList.add('visible');
        link.setAttribute('title', addr);
        revealed = true;
      } else {
        // Subsequent clicks: open mail client
        var addr = user + '@' + domain + '.' + tld;
        window.location.href = 'mailto:' + addr;
      }
    });

    // Close tooltip when clicking elsewhere
    document.addEventListener('click', function (e) {
      if (revealed && !link.contains(e.target)) {
        tooltip.classList.remove('visible');
      }
    });

    // Re-show tooltip on hover after first reveal
    link.addEventListener('mouseenter', function () {
      if (revealed) tooltip.classList.add('visible');
    });

    link.addEventListener('mouseleave', function () {
      if (revealed) tooltip.classList.remove('visible');
    });
  }

  /* ========================================
     PHOTO — clean pivot with pendulum
     Tape stays fixed on the wall.
     Photo card swings beneath it, pivoting
     from top center. Drift-back overshoots
     then settles like a pendulum.
     ======================================== */
  function initPhotoStraighten() {
    var frame = document.getElementById('profileFrame');
    if (!frame) return;

    var card = frame.querySelector('.profile-photo-card');
    var tapeW = frame.querySelector('.tape-wrapper');
    var thumbEl = tapeW.querySelector('.tape-fx-thumb');
    var shadowEl = tapeW.querySelector('.tape-fx-thumb-shadow');

    var isStraight = false;
    var driftTimer = null;
    var driftCount = 0;
    var maxDrifts =  Math.round(Math.random()); // 2 or 3

    // Random tilt: 2–3.8°, random direction
    function randomDroop() {
      var dir = Math.random() > 0.5 ? 1 : -1;
      return dir * (2 + Math.random() * 1.8);
    }

    // Drift delay: 3–6 seconds
    function randomDelay() {
      return 3000 + Math.random() * 3000;
    }

    // Restart a CSS animation
    function resetAnim(el, cls) {
      if (!el) return;
      el.classList.remove(cls);
      void el.offsetWidth;
      el.classList.add(cls);
    }

    // Apply angle to photo card + shift shadow
    function applyAngle(angle) {
      card.style.transform = 'rotate(' + angle + 'deg)';
      var sx = angle * 0.8;
      var blur = 8 + Math.abs(angle) * 1.5;
      card.style.boxShadow =
        sx + 'px 3px ' + blur + 'px rgba(0,0,0,0.1), ' +
        '0 1px 3px rgba(0,0,0,0.08)';
    }

    // Reset card to straight
    function resetCard() {
      card.style.transform = 'rotate(0deg)';
      card.style.boxShadow =
        '0 2px 8px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08), 1px 2px 12px rgba(0,0,0,0.06)';
    }

    // Set card transition speed
    function setCardTransition(duration, easing) {
      card.style.transition =
        'transform ' + duration + ' ' + easing + ', ' +
        'box-shadow ' + duration + ' ease';
    }

    // Initial droop — no transition on load
    var currentAngle = randomDroop();
    card.style.transition = 'none';
    applyAngle(currentAngle);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        setCardTransition('0.7s', 'cubic-bezier(0.34, 1.56, 0.64, 1)');
      });
    });

    function straighten() {
      if (isStraight) return;
      isStraight = true;
      driftCount++;

      // Snap card straight — spring easing
      setCardTransition('0.7s', 'cubic-bezier(0.34, 1.56, 0.64, 1)');
      resetCard();

      // Thumb press on tape
      resetAnim(thumbEl, 'press');
      resetAnim(shadowEl, 'press');
      resetAnim(tapeW, 'do-thumb');

      // If we've hit the limit, stay straight for good
      if (driftCount > maxDrifts) {
        frame.style.cursor = 'default';
        return;
      }

      // Schedule drift-back with pendulum
      clearTimeout(driftTimer);
      driftTimer = setTimeout(function () {
        currentAngle = randomDroop();

        // Phase 1: overshoot past the target
        var overshoot = currentAngle * 1.25;
        setCardTransition('1.1s', 'cubic-bezier(0.25, 0.1, 0.25, 1)');
        applyAngle(overshoot);

        // Phase 2: settle back to target
        setTimeout(function () {
          setCardTransition('0.9s', 'cubic-bezier(0.25, 0.46, 0.45, 0.94)');
          applyAngle(currentAngle);

          // Restore snappy transition for next click
          setTimeout(function () {
            setCardTransition('0.7s', 'cubic-bezier(0.34, 1.56, 0.64, 1)');
            isStraight = false;
          }, 1000);
        }, 1100);

      }, randomDelay());
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