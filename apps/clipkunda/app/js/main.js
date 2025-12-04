document.addEventListener('DOMContentLoaded', () => {
  initCodeBlocks();
  initTabs();
});

function initCodeBlocks() {
  document.querySelectorAll('pre code').forEach((block) => {
    // Wrap pre in code-block div if not already
    const pre = block.parentElement;
    if (!pre.parentElement.classList.contains('code-block')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block';
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
      
      // Add header
      const header = document.createElement('div');
      header.className = 'code-block__header';
      
      // Detect language
      let lang = 'Text';
      block.classList.forEach(cls => {
        if (cls.startsWith('language-')) {
          lang = cls.replace('language-', '');
        }
      });
      
      header.innerHTML = `
        <span class="code-block__lang">${lang}</span>
        <button class="code-block__copy" aria-label="Copy code">
          <i class="fa-regular fa-copy"></i> Copy
        </button>
      `;
      
      wrapper.insertBefore(header, pre);
    }
  });

  // Copy functionality
  document.addEventListener('click', async (e) => {
    if (e.target.closest('.code-block__copy')) {
      const button = e.target.closest('.code-block__copy');
      const code = button.closest('.code-block').querySelector('code').innerText;
      
      try {
        await navigator.clipboard.writeText(code);
        const originalHtml = button.innerHTML;
        button.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        button.classList.add('success');
        
        setTimeout(() => {
          button.innerHTML = originalHtml;
          button.classList.remove('success');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
        button.innerHTML = 'Error';
      }
    }
  });
}

function initTabs() {
  // Logic for tabbed interfaces if any
  const tabContainers = document.querySelectorAll('.tab-container');
  
  tabContainers.forEach(container => {
    const headers = container.querySelector('.tab-headers');
    const panels = container.querySelectorAll('.tab-panel');
    
    headers.addEventListener('click', (e) => {
      if (e.target.classList.contains('tab-btn')) {
        const targetId = e.target.dataset.target;
        
        // Update buttons
        headers.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // Update panels
        panels.forEach(panel => {
          panel.classList.remove('active');
          if (panel.id === targetId) {
            panel.classList.add('active');
          }
        });
      }
    });
  });
}
