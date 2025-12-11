document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initTOC();
});

function initMobileMenu() {
  const toggle = document.querySelector('.header__menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.createElement('div');
  
  overlay.className = 'sidebar-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 35;
    display: none;
    opacity: 0;
    transition: opacity 0.3s;
  `;
  document.body.appendChild(overlay);

  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      const isOpen = sidebar.classList.contains('is-open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    overlay.addEventListener('click', closeMenu);
  }

  function openMenu() {
    sidebar.classList.add('is-open');
    overlay.style.display = 'block';
    // Force reflow
    overlay.offsetHeight;
    overlay.style.opacity = '1';
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    sidebar.classList.remove('is-open');
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 300);
    toggle.setAttribute('aria-expanded', 'false');
  }
}

function initTOC() {
  const tocContainer = document.querySelector('.toc');
  if (!tocContainer) return;

  const content = document.querySelector('.main-content');
  const headings = content.querySelectorAll('h2, h3');
  
  if (headings.length === 0) {
    tocContainer.style.display = 'none';
    return;
  }

  const tocList = document.createElement('div');
  tocList.className = 'toc-list';
  
  const title = document.createElement('div');
  title.className = 'toc__title';
  title.textContent = 'On this page';
  tocContainer.appendChild(title);

  headings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = `heading-${index}`;
    }

    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.className = heading.tagName === 'H3' ? 'toc__link toc__link--h3' : 'toc__link';
    link.textContent = heading.textContent;
    
    link.addEventListener('click', (e) => {
      e.preventDefault();
      heading.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, null, `#${heading.id}`);
    });

    tocList.appendChild(link);
  });

  tocContainer.appendChild(tocList);

  // ScrollSpy
  const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.querySelectorAll('.toc__link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  headings.forEach(heading => observer.observe(heading));
}
