// ======== CART ========
function getCart() {
  return JSON.parse(localStorage.getItem('shopnest_cart') || '[]');
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = count);
}

function addToCart(id) {
  const product = productsData.find(p => p.id === id);
  if (!product) return;
  let cart = getCart();
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  localStorage.setItem('shopnest_cart', JSON.stringify(cart));
  updateCartCount();
  showToast(`"${product.name}" added to cart!`);
}

function removeFromCart(id) {
  let cart = getCart().filter(i => i.id !== id);
  localStorage.setItem('shopnest_cart', JSON.stringify(cart));
  updateCartCount();
  if (typeof renderCart === 'function') renderCart();
}

// ======== TOAST ========
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ======== PRODUCT CARD ========
function formatReviews(n) {
  if (n >= 100000) return (n / 100000).toFixed(1).replace(/\.0$/, '') + 'L+';
  if (n >= 1000)   return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K+';
  return n + '+';
}

function createProductCard(p) {
  const discount = p.originalPrice
    ? Math.round((1 - p.price / p.originalPrice) * 100)
    : 0;

  return `
    <div class="product-card" data-id="${p.id}">
      ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
      ${discount >= 10 ? `<div class="product-discount">-${discount}%</div>` : ''}
      <div class="product-image">
        ${p.image ? `<img src="${p.image}" alt="${p.name}" />` : `<div class="product-emoji">${p.emoji}</div>`}
      </div>
      <div class="product-info">
        ${p.brand ? `<span class="product-brand">${p.brand}</span>` : ''}
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <div class="product-rating-row">
          <span class="product-rating">★ ${p.rating}</span>
          ${p.reviews ? `<span class="product-reviews">(${formatReviews(p.reviews)} reviews)</span>` : ''}
        </div>
        <div class="product-footer">
          <div class="product-price-block">
            <span class="product-price">₹${p.price.toLocaleString()}</span>
            ${p.originalPrice ? `<span class="product-original-price">₹${p.originalPrice.toLocaleString()}</span>` : ''}
          </div>
          <button class="add-to-cart" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

// ======== NEWSLETTER ========
function subscribeNewsletter(e) {
  e.preventDefault();
  document.getElementById('newsletter-msg').textContent = '✅ Subscribed! Welcome to ShopNest.';
  e.target.reset();
}

// ======== THEME TOGGLE ========
function initTheme() {
  const saved = localStorage.getItem('shopnest_theme') || 'light';
  document.body.classList.toggle('dark', saved === 'dark');
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = saved === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('shopnest_theme', isDark ? 'dark' : 'light');
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = isDark ? '☀️' : '🌙';
}

// ======== HAMBURGER ========
function initNav() {
  const ham = document.getElementById('hamburger');
  const links = document.querySelector('.nav-links');
  if (ham && links) {
    ham.addEventListener('click', () => links.classList.toggle('open'));
  }
  const toggle = document.getElementById('themeToggle');
  if (toggle) toggle.addEventListener('click', toggleTheme);
}

// ======== SCROLL ANIMATION ========
function initScrollAnim() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.product-card, .feature-card, .team-card, .about-stats .stat').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

// ======== INIT ========
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  updateCartCount();
  initScrollAnim();
});
