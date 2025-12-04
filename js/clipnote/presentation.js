document.addEventListener('DOMContentLoaded', () => {
    const presentationRoot = document.getElementById('presentation-embed');
    if (!presentationRoot) return;

    const deck = presentationRoot.querySelector('.deck');
    const slides = Array.from(presentationRoot.querySelectorAll('.slide'));
    const dotsContainer = presentationRoot.querySelector('.dots'); // Changed from getElementById to querySelector for safety if I change IDs to classes
    const prevBtn = presentationRoot.querySelector('#prev');
    const nextBtn = presentationRoot.querySelector('#next');
    const fullscreenBtn = presentationRoot.querySelector('#fullscreen-toggle');
    
    if (!deck || !slides.length || !dotsContainer || !prevBtn || !nextBtn || !fullscreenBtn) return;

    let index = 0;

    const renderDots = () => {
      dotsContainer.innerHTML = '';
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'dot' + (i === index ? ' active' : '');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      });
    };

    const goTo = (i) => {
      slides[index].classList.remove('active');
      index = (i + slides.length) % slides.length;
      slides[index].classList.add('active');
      renderDots();
    };

    prevBtn.addEventListener('click', () => goTo(index - 1));
    nextBtn.addEventListener('click', () => goTo(index + 1));
    
    // Scope keydown to when deck is focused or just globally if user interacts? 
    // Global keydown for a section in a doc page might be annoying.
    // I'll limit it to when the mouse is over the deck or it has focus.
    // Or maybe just remove keyboard nav to avoid conflict with page scrolling?
    // The user guide has scrolling. Arrow keys scroll.
    // I will KEEP keyboard nav but maybe guard it?
    // The original script had global keydown.
    // Let's keep it but check if document.activeElement is within the deck or if the deck is fullscreen.
    
    document.addEventListener('keydown', (e) => {
      if (document.fullscreenElement === deck) {
         if (e.key === 'ArrowRight') goTo(index + 1);
         if (e.key === 'ArrowLeft') goTo(index - 1);
      }
    });

    const updateFullscreenButton = () => {
      const active = document.fullscreenElement === deck;
      fullscreenBtn.innerHTML = `<i class="fa-solid ${active ? 'fa-compress' : 'fa-expand'}"></i>`;
      fullscreenBtn.setAttribute('aria-label', active ? 'Exit fullscreen' : 'Enter fullscreen');
    };

    fullscreenBtn.addEventListener('click', async () => {
      try {
        if (document.fullscreenElement === deck) {
          await document.exitFullscreen();
        } else {
          await deck.requestFullscreen();
        }
      } catch (err) {
        console.error('Fullscreen toggle failed', err);
      }
    });

    document.addEventListener('fullscreenchange', updateFullscreenButton);

    renderDots();
    updateFullscreenButton();
});
