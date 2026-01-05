/**
 * Personal Website - Abstract Toggle Handler
 * Manages the display of publication abstracts with smooth transitions
 */

(function() {
  'use strict';

  // Initialize when DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    setupAbstractToggles();
  }

  /**
   * Set up event listeners for all abstract toggle buttons
   */
  function setupAbstractToggles() {
    const toggleButtons = document.querySelectorAll('.abstract-toggle');
    
    toggleButtons.forEach(button => {
      button.addEventListener('click', handleAbstractToggle);
    });
  }

  /**
   * Handle abstract toggle button clicks
   * @param {Event} event - Click event
   */
  function handleAbstractToggle(event) {
    const button = event.currentTarget;
    const abstractId = button.getAttribute('data-abstract');
    const abstractContent = document.getElementById(`abstract-${abstractId}`);
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    if (!abstractContent) {
      console.error(`Abstract content not found for ID: abstract-${abstractId}`);
      return;
    }

    // Toggle the expanded state
    if (isExpanded) {
      collapseAbstract(button, abstractContent);
    } else {
      expandAbstract(button, abstractContent);
    }
  }

  /**
   * Expand an abstract section
   * @param {HTMLElement} button - Toggle button
   * @param {HTMLElement} content - Abstract content element
   */
  function expandAbstract(button, content) {
    // Update button state
    button.setAttribute('aria-expanded', 'true');
    button.textContent = '[Hide Abstract]';

    // Expand content
    content.classList.add('expanded');

    // Smooth scroll to button after a short delay (allows animation to start)
    setTimeout(() => {
      const offset = 100; // Offset from top
      const elementPosition = button.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }, 150);
  }

  /**
   * Collapse an abstract section
   * @param {HTMLElement} button - Toggle button
   * @param {HTMLElement} content - Abstract content element
   */
  function collapseAbstract(button, content) {
    // Update button state
    button.setAttribute('aria-expanded', 'false');
    button.textContent = '[Abstract]';

    // Collapse content
    content.classList.remove('expanded');
  }

  /**
   * Close all expanded abstracts except the specified one (optional enhancement)
   * @param {string} exceptId - ID of abstract to keep open
   */
  function closeOtherAbstracts(exceptId) {
    const allAbstracts = document.querySelectorAll('.abstract-content.expanded');
    const allButtons = document.querySelectorAll('.abstract-toggle[aria-expanded="true"]');

    allAbstracts.forEach(abstract => {
      if (abstract.id !== `abstract-${exceptId}`) {
        abstract.classList.remove('expanded');
      }
    });

    allButtons.forEach(button => {
      if (button.getAttribute('data-abstract') !== exceptId) {
        button.setAttribute('aria-expanded', 'false');
        button.textContent = '[Abstract]';
      }
    });
  }

  // Optional: Add keyboard navigation support
  document.addEventListener('keydown', function(event) {
    // Close abstracts with Escape key
    if (event.key === 'Escape') {
      const expandedButton = document.querySelector('.abstract-toggle[aria-expanded="true"]');
      if (expandedButton) {
        const abstractId = expandedButton.getAttribute('data-abstract');
        const abstractContent = document.getElementById(`abstract-${abstractId}`);
        collapseAbstract(expandedButton, abstractContent);
      }
    }
  });

})();