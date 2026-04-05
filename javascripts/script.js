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
          if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('a')) {
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
      // Closing: kill opacity first, then collapse height
      body.style.opacity = '0';
      body.style.maxHeight = body.scrollHeight + 'px';
      body.offsetHeight; // force reflow
      body.style.maxHeight = '0';
      item.classList.remove('expanded');
      header.setAttribute('aria-expanded', 'false');
    } else {
      // Opening: expand height, opacity follows via CSS
      item.classList.add('expanded');
      header.setAttribute('aria-expanded', 'true');
      body.style.opacity = '1';
      body.style.maxHeight = body.scrollHeight + 'px';
      body.addEventListener('transitionend', function handler(e) {
        if (e.propertyName !== 'max-height') return;
        if (item.classList.contains('expanded')) body.style.maxHeight = 'none';
        body.removeEventListener('transitionend', handler);
      });
    }
  }

  /* ========================================
     EMAIL — anti-spam obfuscation
     ======================================== */
  function initEmail() {
    var link = document.getElementById('emailLink');
    var tooltip = document.getElementById('emailTooltip');
    if (!link || !tooltip) return;

    var user = 'nicolas.pasquier';
    var domain = 'inrae';
    var tld = 'fr';

    var revealed = false;

    link.addEventListener('click', function (e) {
      e.preventDefault();

      if (!revealed) {
        var addr = user + '@' + domain + '.' + tld;
        tooltip.innerHTML = '<a href="mailto:' + addr + '">' + addr + '</a>';
        tooltip.classList.add('visible');
        link.setAttribute('title', addr);
        revealed = true;
      } else {
        var addr = user + '@' + domain + '.' + tld;
        window.location.href = 'mailto:' + addr;
      }
    });

    document.addEventListener('click', function (e) {
      if (revealed && !link.contains(e.target)) {
        tooltip.classList.remove('visible');
      }
    });

    link.addEventListener('mouseenter', function () {
      if (revealed) tooltip.classList.add('visible');
    });

    link.addEventListener('mouseleave', function () {
      if (revealed) tooltip.classList.remove('visible');
    });
  }

  /* ========================================
     PHOTO — 3-layer interaction
     1) Quick hover pass  → small nudge
     2) Sustained hover   → ease to straight
     3) Click             → tape press + lock
     ======================================== */
  function initPhotoStraighten() {
    var frame = document.getElementById('profileFrame');
    if (!frame) return;

    var card = frame.querySelector('.profile-photo-card');
    var tapeW = frame.querySelector('.tape-wrapper');
    var thumbEl = tapeW.querySelector('.tape-fx-thumb');
    var shadowEl = tapeW.querySelector('.tape-fx-thumb-shadow');

    var locked = false;
    var heldStraight = false;
    var driftTimer = null;
    var straightenTimer = null;
    var wobbleTimer = null;
    var driftCount = 0;
    var maxDrifts = Math.round(Math.random()); // 0 or 1

    var STRAIGHTEN_DELAY = 500; // ms before sustained hover straightens

    function randomDroop() {
      var dir = Math.random() > 0.5 ? 1 : -1;
      return dir * (2 + Math.random() * 1.8);
    }

    function randomDelay() {
      return 3000 + Math.random() * 3000;
    }

    function resetAnim(el, cls) {
      if (!el) return;
      el.classList.remove(cls);
      void el.offsetWidth;
      el.classList.add(cls);
    }

    function applyAngle(angle) {
      card.style.transform = 'rotate(' + angle + 'deg)';
      var sx = angle * 0.8;
      var blur = 8 + Math.abs(angle) * 1.5;
      card.style.boxShadow =
        sx +
        'px 3px ' +
        blur +
        'px rgba(0,0,0,0.1), ' +
        '0 1px 3px rgba(0,0,0,0.08)';
    }

    function goStraight() {
      card.style.transform = 'rotate(0deg)';
      card.style.boxShadow =
        '0 2px 8px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08), 1px 2px 12px rgba(0,0,0,0.06)';
    }

    function setTrans(duration, easing) {
      card.style.transition =
        'transform ' +
        duration +
        ' ' +
        easing +
        ', ' +
        'box-shadow ' +
        duration +
        ' ease';
    }

    // --- Initial droop ---
    var currentAngle = randomDroop();
    card.style.transition = 'none';
    applyAngle(currentAngle);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        setTrans('0.7s', 'cubic-bezier(0.34, 1.56, 0.64, 1)');
      });
    });

    // --- HOVER ENTER ---
    frame.addEventListener('mouseenter', function () {
      if (locked) return;

      // Immediate nudge: small kick opposite to the tilt
      var nudge = currentAngle > 0 ? currentAngle - 1.2 : currentAngle + 1.2;

      setTrans('0.18s', 'ease-out');
      applyAngle(nudge);

      // Bounce back to resting angle after the nudge
      clearTimeout(wobbleTimer);
      wobbleTimer = setTimeout(function () {
        setTrans('0.15s', 'ease-in-out');
        applyAngle(currentAngle);
      }, 180);

      // If mouse stays: smoothly straighten
      clearTimeout(straightenTimer);
      straightenTimer = setTimeout(function () {
        heldStraight = true;
        setTrans('0.6s', 'cubic-bezier(0.25, 0.46, 0.45, 0.94)');
        goStraight();
      }, STRAIGHTEN_DELAY);
    });

    // --- HOVER LEAVE ---
    frame.addEventListener('mouseleave', function () {
      if (locked) return;

      clearTimeout(straightenTimer);
      clearTimeout(wobbleTimer);

      // Drift back to tilted resting angle
      heldStraight = false;
      setTrans('0.9s', 'cubic-bezier(0.25, 0.46, 0.45, 0.94)');
      applyAngle(currentAngle);

      setTimeout(function () {
        setTrans('0.7s', 'cubic-bezier(0.34, 1.56, 0.64, 1)');
      }, 900);
    });

    // --- CLICK ---
    frame.addEventListener('click', function () {
      if (locked) return;

      driftCount++;
      clearTimeout(straightenTimer);
      clearTimeout(wobbleTimer);
      clearTimeout(driftTimer);

      // Snap straight with spring
      heldStraight = false;
      setTrans('0.7s', 'cubic-bezier(0.34, 1.56, 0.64, 1)');
      goStraight();

      // Tape press effect
      resetAnim(thumbEl, 'press');
      resetAnim(shadowEl, 'press');
      resetAnim(tapeW, 'do-thumb');

      // Lock if max drifts reached
      if (driftCount > maxDrifts) {
        locked = true;
        frame.style.cursor = 'default';
        return;
      }

      // Schedule drift-back with pendulum overshoot
      driftTimer = setTimeout(function () {
        currentAngle = randomDroop();

        var overshoot = currentAngle * 1.25;
        setTrans('1.1s', 'cubic-bezier(0.25, 0.1, 0.25, 1)');
        applyAngle(overshoot);

        setTimeout(function () {
          setTrans('0.9s', 'cubic-bezier(0.25, 0.46, 0.45, 0.94)');
          applyAngle(currentAngle);

          setTimeout(function () {
            setTrans('0.7s', 'cubic-bezier(0.34, 1.56, 0.64, 1)');
          }, 1000);
        }, 1100);
      }, randomDelay());
    });

    frame.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        frame.click();
      }
    });
  }
})();
