(function () {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initPublications();
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

})();
