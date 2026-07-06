document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('demoButton');
  const messageArea = document.getElementById('messageDisplay');
  const sectionLinks = Array.from(document.querySelectorAll('.section-rail a'));
  const sections = Array.from(document.querySelectorAll('[data-section]'));

  const labels = [
    'spectator',
    'worker',
    'consumer',
    'newcomer',
    'unknown subject',
    'professional'
  ];

  function setActiveSection(id) {
    sectionLinks.forEach(function(link) {
      const isActive = link.getAttribute('href') === '#' + id;
      link.classList.toggle('active', isActive);

      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-34% 0px -54% 0px',
      threshold: 0
    });

    sections.forEach(function(section) {
      observer.observe(section);
    });
  }

  if (!button || !messageArea) {
    return;
  }

  button.addEventListener('click', function() {
    const label = labels[Math.floor(Math.random() * labels.length)];
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });

    messageArea.textContent = 'The classifier labels the sample "' + label + '" at ' + currentTime + '. The point is not the label itself, but the reduction: a whole person gets collapsed into one administrative category.';

    button.textContent = 'Classified';
    button.setAttribute('aria-label', 'Sample classified');

    setTimeout(function() {
      button.innerHTML = '<span aria-hidden="true">&#10022;</span>Classify sample';
      button.removeAttribute('aria-label');
    }, 1800);
  });
});
