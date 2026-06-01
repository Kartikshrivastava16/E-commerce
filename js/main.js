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
  showToast(`🛒 "${product.name}" added to cart!`);
}

function removeFromCart(id) {
  let cart = getCart().filter(i => i.id !== id);
  localStorage.setItem('shopnest_cart', JSON.stringify(cart));
  updateCartCount();
  if (typeof renderCart === 'function') renderCart();
}

// ======== WISHLIST ========
function getWishlist() {
  return JSON.parse(localStorage.getItem('shopnest_wish') || '[]');
}

function toggleWishlist(id, btn) {
  let wish = getWishlist();
  if (wish.includes(id)) {
    wish = wish.filter(i => i !== id);
    if (btn) btn.textContent = '🤍';
    showToast('Removed from wishlist');
  } else {
    wish.push(id);
    if (btn) btn.textContent = '❤️';
    showToast('❤️ Added to wishlist!');
  }
  localStorage.setItem('shopnest_wish', JSON.stringify(wish));
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
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ======== STAR RATING ========
function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

// ======== PRODUCT CARD ========
function createProductCard(p) {
  const wish = getWishlist().includes(p.id);
  return `
    <div class="product-card fade-in" data-id="${p.id}">
      ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
      <button class="product-wish" onclick="toggleWishlist(${p.id}, this)" title="Wishlist">
        ${wish ? '❤️' : '🤍'}
      </button>
      <div class="product-img-wrap">
        ${p.image
          ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'" /><div class="product-emoji" style="display:none">${p.emoji}</div>`
          : `<div class="product-emoji">${p.emoji}</div>`
        }
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <div class="product-rating-row">
          <span class="product-stars">${renderStars(p.rating)}</span>
          <span class="product-rating">${p.rating}</span>
          <span class="product-reviews">(${Math.floor(p.rating * 120)} reviews)</span>
        </div>
        <div class="product-footer">
          <span class="product-price">₹${p.price.toLocaleString()}</span>
          <button class="add-to-cart" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

// ======== NEWSLETTER ========
function subscribeNewsletter(e) {
  e.preventDefault();
  const msg = document.getElementById('newsletter-msg');
  if (msg) msg.textContent = '✅ Subscribed! Welcome to ShopNest.';
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
  const ham   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (ham && links) {
    ham.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      ham.textContent = open ? '✕' : '☰';
    });
    // close on link click (mobile)
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        ham.textContent = '☰';
      });
    });
  }

  const toggle = document.getElementById('themeToggle');
  if (toggle) toggle.addEventListener('click', toggleTheme);
}

// ======== SCROLL ANIMATION ========
function initScrollAnim() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ======== INIT ========
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  updateCartCount();
  // slight delay so cards render first
  setTimeout(initScrollAnim, 100);
});
