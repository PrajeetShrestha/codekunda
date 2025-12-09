const offers = [
  {
    partner: 'Island Energy',
    value: '$6,500',
    duration: '6 months',
    extras: 'Performance bonus + media rights',
    verified: true,
    risk: 'Low',
  },
  {
    partner: 'Port FC',
    value: '$5,000',
    duration: '4 months',
    extras: 'Housing + transport',
    verified: true,
    risk: 'Low',
  },
  {
    partner: 'Health+ Haiti',
    value: '$4,200',
    duration: '5 months',
    extras: 'Content package',
    verified: true,
    risk: 'Medium',
  },
];

const chatHistory = [
  { from: 'ai', text: 'I suggest countering with $6,500 and a 10% bonus on brand posts.' },
  { from: 'user', text: 'Ask for travel included for away matches.' },
  { from: 'ai', text: 'Added: travel stipend estimated at $600 over 6 months.' },
];

const riskAlerts = [
  { type: 'warning', text: 'New partner requires KYC. Pending verification badge.' },
  { type: 'success', text: 'Stripe escrow enabled for all signed offers.' },
];

const notifications = [
  { text: 'New verified offer from Port FC', icon: 'fa-briefcase', time: '2m' },
  { text: 'AI raised your value to $12,000', icon: 'fa-robot', time: '15m' },
  { text: 'SMS delivered to +509 • Reply ACCEPT to sign', icon: 'fa-message', time: '1h' },
];

const translations = {
  en: 'Reply ACCEPT to sign',
  fr: 'Répondez ACCEPT pour signer',
  ht: 'Reponn ACCEPT pou siyen',
  es: 'Responde ACEPTAR para firmar',
};

// DOM Elements
const offersContainer = document.getElementById('offers');
const chatWindow = document.getElementById('chat-window');
const comparisonList = document.getElementById('comparison-list');
const riskContainer = document.getElementById('risk-alerts');
const notificationsContainer = document.getElementById('notifications');
const litePreview = document.getElementById('lite-preview');
const languageSelect = document.getElementById('language-select');
const themeToggle = document.getElementById('theme-toggle');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const navLinkBtns = document.querySelectorAll('.nav-link-btn');

// Mobile specific elements
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileSideMenu = document.getElementById('mobile-side-menu');
const languageSelectMobile = document.getElementById('language-select-mobile');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const sections = document.querySelectorAll('.page-section');
const marketChartEl = document.getElementById('marketChart');
let marketChart;

const marketChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  values: [8500, 9000, 9400, 9800, 10300, 11000, 12000],
};

// Render Functions

function renderOffers() {
  if (!offersContainer) return;
  offersContainer.innerHTML = '';
  offers.forEach((offer) => {
    const div = document.createElement('div');
    div.className = 'col-md-6';
    div.innerHTML = `
      <div class="offer-card h-100">
        <div class="d-flex justify-content-between align-items-start">
          <div class="d-flex gap-2 align-items-center">
            <div class="offer-logo">${offer.partner[0]}</div>
            <div>
              <div class="fw-semibold">${offer.partner}</div>
              <div class="text-muted small">${offer.duration}</div>
            </div>
          </div>
          ${offer.verified ? '<span class="badge bg-success">Verified</span>' : ''}
        </div>
        <div class="fw-bold mt-2">${offer.value}</div>
        <div class="text-muted small">${offer.extras}</div>
        <div class="d-flex gap-2 mt-3">
          <span class="pill">${offer.risk} risk</span>
          <button class="btn btn-outline-primary btn-sm flex-grow-1">Open negotiation</button>
        </div>
      </div>
    `;
    offersContainer.appendChild(div);
  });
}

function renderChat() {
  if (!chatWindow) return;
  chatWindow.innerHTML = '';
  chatHistory.forEach((msg) => {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${msg.from}`;
    bubble.innerText = msg.text;
    chatWindow.appendChild(bubble);
  });
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function renderComparisonList() {
  if (!comparisonList) return;
  comparisonList.innerHTML = '';

  offers.forEach((offer) => {
    // Skip if it's the active one (Mock logic: assume port FC is active)
    if (offer.partner === 'Port FC') return;

    const a = document.createElement('a');
    a.href = '#';
    a.className = 'list-group-item list-group-item-action d-flex justify-content-between align-items-center';
    a.innerHTML = `
      <div>
        <div class="fw-semibold small">${offer.partner}</div>
        <div class="text-muted" style="font-size: 11px;">${offer.duration} • ${offer.extras}</div>
      </div>
      <div class="text-end">
        <div class="fw-bold text-dark small">${offer.value}</div>
        <span class="badge bg-${offer.risk === 'Low' ? 'success' : 'warning'} rounded-pill" style="font-size: 9px;">${offer.risk}</span>
      </div>
    `;
    comparisonList.appendChild(a);
  });
}

function renderRiskAlerts() {
  if (!riskContainer) return;
  riskContainer.innerHTML = '';
  riskAlerts.forEach((alert) => {
    const div = document.createElement('div');
    div.className = 'risk-alert';
    const icon = alert.type === 'warning' ? 'fa-triangle-exclamation text-warning' : 'fa-shield-halved text-success';
    div.innerHTML = `<i class="fa-solid ${icon}"></i><div class="small">${alert.text}</div>`;
    riskContainer.appendChild(div);
  });
}

function renderNotifications() {
  if (!notificationsContainer) return;
  notificationsContainer.innerHTML = '';
  notifications.forEach((note) => {
    // Generate distinct styles based on content
    let iconClass = 'bg-light text-muted';
    if (note.icon.includes('briefcase')) iconClass = 'bg-primary-subtle text-primary';
    if (note.icon.includes('robot')) iconClass = 'bg-success-subtle text-success';
    if (note.icon.includes('message')) iconClass = 'bg-warning-subtle text-warning';

    const item = document.createElement('a');
    item.href = '#';
    item.className = 'list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 border-0 border-bottom';

    item.innerHTML = `
      <div class="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 ${iconClass}" style="width: 40px; height: 40px;">
        <i class="fa-solid ${note.icon}"></i>
      </div>
      <div class="flex-grow-1">
        <div class="small fw-semibold text-dark mb-0">${note.text}</div>
        <div class="text-muted" style="font-size: 11px;">${note.time} ago</div>
      </div>
      <i class="fa-solid fa-chevron-right text-muted" style="font-size: 10px;"></i>
    `;
    notificationsContainer.appendChild(item);
  });
}

function updateLitePreview() {
  if (!litePreview) return;
  const lang = languageSelect ? languageSelect.value : 'en';
  const line = translations[lang] || translations.en;

  litePreview.innerHTML = `
     <div class="fw-semibold">Offer: $5,000 · 6 mo · Port FC</div>
     <div class="small text-success mt-1"><i class="fa-solid fa-reply me-1"></i>${line}</div>
  `;
}

function renderMarketChart() {
  if (!marketChartEl) return;
  if (marketChart) marketChart.destroy();
  marketChart = new Chart(marketChartEl, {
    type: 'line',
    data: {
      labels: marketChartData.labels,
      datasets: [
        {
          label: 'Market Value',
          data: marketChartData.values,
          borderColor: '#e63946',
          backgroundColor: 'rgba(230, 57, 70, 0.12)',
          tension: 0.3,
          fill: true,
          pointRadius: 3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => `$${ctx.parsed.y.toLocaleString()}`,
          },
        },
      },
      scales: {
        x: {
          ticks: { color: '#4b5563' },
          grid: { display: false },
        },
        y: {
          ticks: {
            color: '#4b5563',
            callback: (value) => `$${value / 1000}k`,
          },
          grid: { color: 'rgba(15,23,42,0.06)' },
        },
      },
    },
  });
}

// Initialize
renderOffers();
renderChat();
renderComparisonList();
renderRiskAlerts();
renderNotifications();
updateLitePreview();
renderMarketChart();

// Event Listeners

if (chatSend) {
  chatSend.addEventListener('click', () => {
    const value = chatInput.value.trim();
    if (!value) return;
    chatHistory.push({ from: 'user', text: value });
    chatHistory.push({ from: 'ai', text: 'Counter sent. AI recommends adding appearance bonus.' });
    chatInput.value = '';
    renderChat();
  });
}

// Mobile Menu functions
function toggleMobileMenu(show) {
  if (!mobileSideMenu || !mobileMenuOverlay) return;
  if (show) {
    mobileSideMenu.classList.add('open');
    mobileMenuOverlay.classList.add('open');
  } else {
    mobileSideMenu.classList.remove('open');
    mobileMenuOverlay.classList.remove('open');
  }
}

if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', () => toggleMobileMenu(true));
if (mobileMenuClose) mobileMenuClose.addEventListener('click', () => toggleMobileMenu(false));
if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', () => toggleMobileMenu(false));

const handleLanguageChange = (e) => {
  const val = e.target.value;
  if (languageSelect) languageSelect.value = val;
  if (languageSelectMobile) languageSelectMobile.value = val;
  const accessSelect = document.getElementById('access-lang-select');
  if (accessSelect) accessSelect.value = val;
  updateLitePreview();
};

if (languageSelect) languageSelect.addEventListener('change', handleLanguageChange);
if (languageSelectMobile) languageSelectMobile.addEventListener('change', handleLanguageChange);
const accessLangSelect = document.getElementById('access-lang-select');
if (accessLangSelect) accessLangSelect.addEventListener('change', handleLanguageChange);

const toggleTheme = () => {
  const isDark = document.body.classList.toggle('dark-mode');
  const icon = isDark ? '<i class="fa-solid fa-sun me-1"></i>' : '<i class="fa-solid fa-moon me-1"></i>';

  if (themeToggle) themeToggle.innerHTML = icon;
  if (themeToggleMobile) themeToggleMobile.innerHTML = isDark ? '<i class="fa-solid fa-sun me-2"></i>Light mode' : '<i class="fa-solid fa-moon me-2"></i>Dark mode';

  // Re-render chart to pick up new colors if needed (simplified here)
  setTimeout(renderMarketChart, 100);
};

if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

// Navigation Logic
navLinkBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    navLinkBtns.forEach((b) => b.classList.remove('active'));

    const targetSection = btn.getAttribute('data-section');
    const sameSectionBtns = document.querySelectorAll(`.nav-link-btn[data-section="${targetSection}"]`);
    sameSectionBtns.forEach(b => b.classList.add('active'));

    sections.forEach((sec) => sec.classList.add('d-none'));
    document.querySelector(`.page-section[data-section="${targetSection}"]`)?.classList.remove('d-none');

    toggleMobileMenu(false);
  });
});
