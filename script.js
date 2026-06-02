/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ===== HAMBURGER MENU ===== */
const hamburger = document.getElementById('nav-hamburger');
const navLinks = document.getElementById('nav-links-list');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') navLinks.classList.toggle('open');
});
// Close on nav link click (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ===== TICKER ===== */
const tickerData = [
  { name: 'BTC', price: '$67,412', change: '+2.4%', up: true },
  { name: 'ETH', price: '$3,521', change: '+1.8%', up: true },
  { name: 'AAPL', price: '$189.30', change: '+0.7%', up: true },
  { name: 'NVDA', price: '$875.40', change: '+3.2%', up: true },
  { name: 'MSFT', price: '$412.60', change: '-0.3%', up: false },
  { name: 'TSLA', price: '$248.90', change: '-1.1%', up: false },
  { name: 'THYAO', price: '₺285.40', change: '+4.6%', up: true },
  { name: 'GARAN', price: '₺145.20', change: '+2.1%', up: true },
  { name: 'BNB', price: '$572.10', change: '+1.4%', up: true },
  { name: 'SOL', price: '$178.35', change: '+5.2%', up: true },
  { name: 'AMZN', price: '$182.70', change: '+0.9%', up: true },
  { name: 'JPM', price: '$198.50', change: '-0.5%', up: false },
  { name: 'META', price: '$512.30', change: '+2.7%', up: true },
  { name: 'GOOGL', price: '$175.80', change: '+1.3%', up: true },
];

function buildTicker() {
  const ticker = document.getElementById('ticker');
  // Build items twice for seamless loop
  const allItems = [...tickerData, ...tickerData];
  ticker.innerHTML = allItems.map(item => `
    <div class="ticker-item">
      <span class="ticker-name">${item.name}</span>
      <span class="ticker-price">${item.price}</span>
      <span class="ticker-change ${item.up ? 'ticker-up' : 'ticker-down'}">${item.change}</span>
    </div>
  `).join('');
}
buildTicker();

/* ===== SMOOTH SCROLL FOR ANCHOR LINKS ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ===== FOOTER YEAR ===== */
const yearEl = document.querySelector('.footer-bottom span:first-child');
if (yearEl) {
  yearEl.textContent = yearEl.textContent.replace('2025', new Date().getFullYear());
}
