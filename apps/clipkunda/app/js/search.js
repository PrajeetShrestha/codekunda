class SearchSystem {
  constructor() {
    this.searchInput = document.querySelector('.search-input');
    this.resultsContainer = null;
    this.searchData = [];
    
    if (this.searchInput) {
      this.init();
    }
  }

  async init() {
    // Create results container
    this.resultsContainer = document.createElement('div');
    this.resultsContainer.className = 'search-results';
    this.searchInput.parentNode.appendChild(this.resultsContainer);

    // Load data
    try {
      // In a real app, fetch this. For now we expect it to be loaded via script tag
      if (window.SEARCH_DATA) {
        this.searchData = window.SEARCH_DATA;
      }
    } catch (e) {
      console.error('Failed to load search data', e);
    }

    // Event listeners
    this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
    
    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!this.searchInput.contains(e.target) && !this.resultsContainer.contains(e.target)) {
        this.resultsContainer.classList.remove('has-results');
      }
    });
  }

  handleSearch(query) {
    if (!query || query.length < 2) {
      this.resultsContainer.classList.remove('has-results');
      this.resultsContainer.innerHTML = '';
      return;
    }

    const results = this.performSearch(query.toLowerCase());
    this.displayResults(results, query);
  }

  performSearch(query) {
    return this.searchData.filter(item => {
      return item.title.toLowerCase().includes(query) || 
             item.content.toLowerCase().includes(query) ||
             item.keywords.some(k => k.toLowerCase().includes(query));
    }).slice(0, 10); // Limit to 10 results
  }

  displayResults(results, query) {
    this.resultsContainer.innerHTML = '';
    
    if (results.length === 0) {
      const noResults = document.createElement('div');
      noResults.className = 'search-result-item';
      noResults.innerHTML = `<div class="search-result-context">No results found for "${query}"</div>`;
      this.resultsContainer.appendChild(noResults);
    } else {
      results.forEach(result => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        
        // Highlight matches in title
        const titleHtml = this.highlightText(result.title, query);
        // Create snippet
        const snippet = this.createSnippet(result.content, query);
        
        item.innerHTML = `
          <div class="search-result-title">${titleHtml}</div>
          <div class="search-result-context">${snippet}</div>
        `;
        
        item.addEventListener('click', () => {
          window.location.href = result.url;
        });
        
        this.resultsContainer.appendChild(item);
      });
    }
    
    this.resultsContainer.classList.add('has-results');
  }

  highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  }

  createSnippet(content, query) {
    const index = content.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return content.substring(0, 60) + '...';
    
    const start = Math.max(0, index - 20);
    const end = Math.min(content.length, index + 40);
    
    let snippet = content.substring(start, end);
    if (start > 0) snippet = '...' + snippet;
    if (end < content.length) snippet = snippet + '...';
    
    return this.highlightText(snippet, query);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new SearchSystem();
});
