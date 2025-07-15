// AmazCart SPA Main Script
// Uses window.products from products.js

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// --- DOM Elements ---
const app = document.getElementById('app') || document.body;

// Force home page on initial load if no hash
if (!location.hash) {
  location.hash = '#home';
}

// --- Routing ---
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);

function router() {
  let hash = location.hash.replace('#', '');
  console.log("Router hash:", hash);
  const validRoutes = ['home', 'about', 'contact', 'cart', 'all', 'category', 'product'];
  const mainRoute = hash.split('/')[0];
  if (!hash || !validRoutes.includes(mainRoute)) {
    location.hash = '#home';
    return;
  }
  if (hash === 'home') renderHome();
  else if (hash.startsWith('category/')) renderCategory(hash.split('/')[1]);
  else if (hash.startsWith('product/')) renderProduct(hash.split('/')[1]);
  else if (hash === 'all') renderAllProducts();
  else if (hash === 'about') renderAbout();
  else if (hash === 'contact') renderContact();
  else if (hash === 'cart') renderCartPage();
  else renderNotFound();
}

// --- Render Functions ---
function renderCarousel() {
  const featured = window.products.slice(0, 5);
  let current = 0;
  
  function showSlide(idx) {
    const carousel = document.getElementById('carouselSlides');
    if (!carousel) return;
    carousel.innerHTML = `
      <div class="carousel-slide glass">
        <div class="carousel-img-box">
          <img src="${featured[idx].image}" alt="${featured[idx].name}" class="carousel-img" />
        </div>
        <div class="carousel-info">
          <h3>${featured[idx].name}</h3>
          <p>${featured[idx].description}</p>
          <span class="carousel-price">₹${featured[idx].price}</span>
          <button class="carousel-cart-btn" onclick="addToCart('${featured[idx].id}')">Add to Cart</button>
        </div>
      </div>
    `;
    // Attach fallback to dynamically inserted carousel image
    const img = carousel.querySelector('img');
    if (img) {
      img.onerror = function () {
        this.onerror = null;
        this.src = "data:image/svg+xml;utf8," +
          encodeURIComponent(`
            <svg xmlns='http://www.w3.org/2000/svg' width='320' height='280' viewBox='0 0 320 280'>
              <rect width='100%' height='100%' rx='16' fill='#f3f4f6'/>
              <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#999' font-size='16'>
                Image not available
              </text>
            </svg>
          `);
      };
    }
  }

  window.nextCarouselSlide = function() {
    current = (current + 1) % featured.length;
    showSlide(current);
  };
  window.prevCarouselSlide = function() {
    current = (current - 1 + featured.length) % featured.length;
    showSlide(current);
  };

  setTimeout(() => {
    showSlide(current);
    setInterval(() => {
      window.nextCarouselSlide();
    }, 4000);
  }, 100);

  // Attach fallback to all images in the carousel area after initial render
  setTimeout(() => {
    document.querySelectorAll('#carouselSlides img').forEach(img => {
      img.onerror = function () {
        this.onerror = null;
        this.src = "data:image/svg+xml;utf8," +
          encodeURIComponent(`
            <svg xmlns='http://www.w3.org/2000/svg' width='320' height='280' viewBox='0 0 320 280'>
              <rect width='100%' height='100%' rx='16' fill='#f3f4f6'/>
              <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#999' font-size='16'>
                Image not available
              </text>
            </svg>
          `);
      };
    });
  }, 200);

  return `
    <div class="carousel-container">
      <button class="carousel-btn left" onclick="prevCarouselSlide()">&#8592;</button>
      <div id="carouselSlides"></div>
      <button class="carousel-btn right" onclick="nextCarouselSlide()">&#8594;</button>
    </div>
  `;
}

function renderHome() {
  app.innerHTML = `
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Welcome to AmazCart</h1>
        <p class="hero-subtitle">Discover premium categories with cutting-edge technology and unmatched quality</p>
        <button class="cta-button" id="shopNowBtn">Shop Now</button>
      </div>
    </section>
    <section class="featured-section glass">
      <h2 class="featured-heading">Featured Products</h2>
      ${renderCarousel()}
    </section>
    <section class="categories-section">
      <div class="categories-container">
        <h2>Shop by Category</h2>
        <div class="category-grid">
          <div class="category-card glass" onclick="location.hash='category/Health'">
            <div class="category-icon">💊</div>
            <div class="category-title">Health</div>
          </div>
          <div class="category-card glass" onclick="location.hash='category/Fashion'">
            <div class="category-icon">👗</div>
            <div class="category-title">Fashion</div>
          </div>
          <div class="category-card glass" onclick="location.hash='category/Mobile'">
            <div class="category-icon">📱</div>
            <div class="category-title">Mobile</div>
          </div>
          <div class="category-card glass" onclick="location.hash='category/Luxury'">
            <div class="category-icon">💎</div>
            <div class="category-title">Luxury</div>
          </div>
          <div class="category-card glass" onclick="location.hash='all'">
            <div class="category-icon">🛒</div>
            <div class="category-title">All</div>
          </div>
        </div>
      </div>
    </section>
    <section class="features">
      <div class="features-container">
        <h2>Why Choose AmazCart?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>Premium Quality</h3>
            <p>All our products are carefully selected for quality and reliability.</p>
          </div>
          <div class="feature-card">
            <h3>Fast Shipping</h3>
            <p>Get your orders delivered quickly and safely to your doorstep.</p>
          </div>
          <div class="feature-card">
            <h3>Secure Payments</h3>
            <p>Enjoy safe and secure checkout with multiple payment options.</p>
          </div>
          <div class="feature-card">
            <h3>24/7 Support</h3>
            <p>Our support team is here to help you anytime, anywhere.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCategory(category) {
  const filtered = window.products.filter(p => p.category === category);
  app.innerHTML = `
    <section class="products-section">
      <div class="products-container">
        <h2>${category} Products</h2>
        <div class="product-grid">
          ${filtered.length > 0 ? filtered.map(productCard).join('') : `<div class='empty-state'><h3>No products found in this category.</h3></div>`}
        </div>
        <button class="back-btn" onclick="location.hash='home'">← Back to Categories</button>
      </div>
    </section>
  `;
}

function renderAllProducts() {
  app.innerHTML = `
    <section class="products-section">
      <div class="products-container">
        <h2>All Products</h2>
        <div class="product-grid">
          ${window.products.map(productCard).join('')}
        </div>
        <button class="back-btn" onclick="location.hash='home'">← Back to Categories</button>
      </div>
    </section>
  `;
}

function renderProduct(id) {
  const p = window.products.find(p => p.id === id);
  if (!p) return renderNotFound();
  app.innerHTML = `
    <section class="product-detail-section">
      <div class="product-detail-card glass">
        <img src="${p.image}" alt="${p.name}" class="product-detail-img" />
        <div class="product-detail-info">
          <h2>${p.name}</h2>
          <p>${p.description}</p>
          <div class="product-detail-meta">
            <span class="product-detail-price">₹${p.price}</span>
            <span class="product-detail-rating">⭐ ${p.rating}</span>
          </div>
          <button class="add-to-cart" onclick="addToCart('${p.id}')">Add to Cart</button>
          <button class="back-btn" onclick="history.back()">← Back</button>
        </div>
      </div>
    </section>
  `;
}

function renderAbout() {
  app.innerHTML = `
    <section class="about-section glass">
      <h2>About AmazCart</h2>
      <p>AmazCart is your premium destination for Health, Fashion, Mobile, and Luxury products. Enjoy a glassmorphic, modern shopping experience with a fully functional cart and seamless navigation.</p>
    </section>
  `;
}

function renderContact() {
  app.innerHTML = `
    <section class="contact-section glass">
      <h2>Contact Us</h2>
      <p>Email: support@amazcart.com</p>
      <p>Phone: +1-800-AMAZCART</p>
      <form class="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  `;
}

function renderCartPage() {
  const cartTotal = getCartTotal();
  const cartItems = cart.length > 0 ? 
    cart.map(item => cartItemCard(item)).join('') :
    '<div class="empty-cart">'+
      '<p>Your cart is empty.</p>'+
      '<button class="cta-button" onclick="location.hash=\'home\'">Browse Products</button>'+
    '</div>';
    
  app.innerHTML = `
    <section class="cart-section">
      <div class="cart-container glass">
        <h2>Your Shopping Cart</h2>
        <div class="cart-items" id="cartItems">
          ${cartItems}
        </div>
        ${cart.length > 0 ? `
          <div class="cart-summary glass">
            <h3>Order Summary</h3>
            <div class="summary-row">
              <span>Subtotal (${getCartItemCount()} items):</span>
              <span>$${cartTotal}</span>
            </div>
            <div class="summary-row">
              <span>Shipping:</span>
              <span>${parseFloat(cartTotal) > 50 ? 'FREE' : '$5.00'}</span>
            </div>
            <div class="summary-row total">
              <span>Total:</span>
              <span>$${parseFloat(cartTotal) > 50 ? cartTotal : (parseFloat(cartTotal) + 5).toFixed(2)}</span>
            </div>
            <button class="checkout-btn" onclick="handleCheckout()">Pay Now</button>
          </div>
        ` : ''}
        ${cart.length > 0 ? `
          <button class="back-btn" onclick="location.hash='home'">← Continue Shopping</button>
        ` : ''}
      </div>
    </section>
  `;
}

function handleCheckout() {
  if (cart.length === 0) return;
  
  // In a real app, you would redirect to a payment processor
  alert('Thank you for your order! This is a demo, so no real transaction will be processed.');
  
  // Clear cart after successful checkout
  cart = [];
  saveCart();
  location.hash = 'home';
  showNotification('Order placed successfully!');
}

function cartItemCard(item) {
  const subtotal = (parseFloat(item.price) * item.quantity).toFixed(2);
  
  return `
    <div class="cart-item glass">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p class="price">$${item.price} each</p>
        <div class="cart-item-actions">
          <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">−</button>
          <span class="qty">${item.quantity}</span>
          <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
          <button class="remove-btn" onclick="removeFromCart('${item.id}')">
            <i class="fas fa-trash"></i> Remove
          </button>
        </div>
      </div>
      <div class="cart-item-subtotal">
        <span>$${subtotal}</span>
      </div>
    </div>
  `;
}

// Render a single product card for category and all products pages
function productCard(product) {
  return `
    <div class="product-card glass">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" onclick="location.hash='product/${product.id}'" />
      </div>
      <div class="product-info">
    <p class="product-category"><b>Category:</b> ${product.category}</p>
    <p class="product-instock">${product.inStock ? '<span style=\'color:green\'>In Stock</span>' : '<span style=\'color:red\'>Out of Stock</span>'}</p>
    <p class="product-desc">${product.description.slice(0,60)}${product.description.length > 60 ? '...' : ''}</p>
        <h3 class="product-title" onclick="location.hash='product/${product.id}'">${product.name}</h3>
<p class="product-full-desc">${product.description}</p>
        <p class="product-price">₹${product.price}</p>
        <p class="product-rating">⭐ ${product.rating}</p>
        <button class="add-to-cart" onclick="addToCart('${product.id}')">Add to Cart</button>
      </div>
    </div>
  `;
}

// --- Enhanced Cart Logic ---
function addToCart(id) {
  const product = window.products.find(p => p.id === id);
  if (!product || !product.inStock) return;
  
  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  // Show add to cart notification
  showNotification(`Added ${product.name} to cart!`);
  updateCartUI();
  saveCart();
}

function updateCartQty(id, delta) {
  const item = cart.find(item => item.id === id);
  if (!item) return;
  
  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(item => item.id !== id);
  }
  
  updateCartUI();
  saveCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
  saveCart();
}

function getCartTotal() {
  return cart.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0).toFixed(2);
}

function getCartItemCount() {
  return cart.reduce((count, item) => count + item.quantity, 0);
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    cartCount.textContent = getCartItemCount();
  }
}

function showNotification(message, duration = 3000) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerHTML = `<span class="notification-message">${message}</span>`;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, duration);
  }, 10);
}

// Initialize cart from localStorage
function initCart() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCount();
  }
}

// --- Navigation Bar SPA Links ---
document.addEventListener('DOMContentLoaded', () => {
  // Update nav links to use hashes
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href').replace('#', '');
      location.hash = target;
    });
  });
  
  // Initialize cart
  initCart();
  
  // Add cart icon click handler
  const cartIcon = document.getElementById('cartIcon');
  if (cartIcon) {
    cartIcon.onclick = (e) => {
      e.preventDefault();
      location.hash = 'cart';
    };
    // Make cart icon visually prominent
    cartIcon.classList.add('cart-icon-prominent');
  }
  
  // --- Enhanced Search Functionality ---
  const searchBtn = document.querySelector('.search-btn');
  const searchInput = document.getElementById('searchInput');
  const navActions = document.querySelector('.nav-actions');

  

  // Live suggestions dropdown
  let suggestionsDropdown = document.getElementById('suggestionsDropdown');
  if (!suggestionsDropdown) {
    suggestionsDropdown = document.createElement('div');
    suggestionsDropdown.id = 'suggestionsDropdown';
    suggestionsDropdown.className = 'suggestions-dropdown';
    searchInput.parentNode.appendChild(suggestionsDropdown);
  }

  function filterProducts(query, cat, minP, maxP, rating) {
    return window.products.filter(product => {
      let match = (!query || product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query));
      if (cat) match = match && (product.category === cat);
      if (minP) match = match && (parseFloat(product.price) >= minP);
      if (maxP) match = match && (parseFloat(product.price) <= maxP);
      if (rating) match = match && (parseFloat(product.rating) >= rating);
      return match;
    });
  }

  function showSuggestions() {
    const query = searchInput.value.trim().toLowerCase();
    const cat = document.getElementById('filterCategory')?.value;
    const minP = parseFloat(document.getElementById('filterMinPrice')?.value) || 0;
    const maxP = parseFloat(document.getElementById('filterMaxPrice')?.value) || Infinity;
    const rating = parseFloat(document.getElementById('filterRating')?.value) || 0;
    if (!query) { suggestionsDropdown.style.display = 'none'; return; }
    const results = filterProducts(query, cat, minP, maxP, rating).slice(0,5);
    if (results.length === 0) { suggestionsDropdown.style.display = 'none'; return; }
    suggestionsDropdown.innerHTML = results.map(p => `<div class='suggestion-item' data-id='${p.id}'>${p.name} <span class='suggestion-cat'>${p.category}</span></div>`).join('');
    suggestionsDropdown.style.display = 'block';
    // Click handler
    Array.from(suggestionsDropdown.children).forEach(item => {
      item.onclick = () => {
        location.hash = `product/${item.dataset.id}`;
        suggestionsDropdown.style.display = 'none';
      };
    });
  }

  searchInput.addEventListener('input', showSuggestions);
  ['filterCategory','filterRating','filterMinPrice','filterMaxPrice'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', showSuggestions);
  });
  document.addEventListener('click', e => {
    if (!suggestionsDropdown.contains(e.target) && e.target !== searchInput) {
      suggestionsDropdown.style.display = 'none';
    }
  });

  // Search button and Enter key
  if (searchBtn && searchInput) {
    const handleSearch = () => {
      const query = searchInput.value.trim().toLowerCase();
      if (query) {
        const results = window.products.filter(product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query)
        );
        
        app.innerHTML = `
          <section class="search-results">
            <div class="search-results-header">
              <h2>Search Results for "${query}"</h2>
              <button class="back-btn" onclick="location.hash='home'">← Back to Home</button>
            </div>
            ${results.length > 0 ? `
              <div class="product-grid">
                ${results.map(productCard).join('')}
              </div>
            ` : `
              <div class="no-results">
                <p>No products found matching your search.</p>
                <button class="cta-button" onclick="location.hash='home'">View All Products</button>
              </div>
            `}
          </section>
        `;
      }
    };
    
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleSearch();
    });
  }
});

// --- Theme Color Update (Slightly different palette) ---
document.documentElement.style.setProperty('--primary', '#ff7e5f');
document.documentElement.style.setProperty('--secondary', '#feb47b');
document.documentElement.style.setProperty('--accent', '#43cea2');
document.documentElement.style.setProperty('--gradient', 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)');
document.documentElement.style.setProperty('--gradient-3', 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)');
// --- End SPA Script ---

document.addEventListener('DOMContentLoaded', () => {
  // Global image fallback for all images
  const fallbackSVG = encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='320' height='280' viewBox='0 0 320 280'>
      <rect width='100%' height='100%' rx='16' fill='#f3f4f6'/>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#999' font-size='16'>
        Image not available
      </text>
    </svg>
  `);
  document.querySelectorAll('#app img, .product-image img, .cart-item-img, .product-detail-img').forEach(img => {
    img.onerror = function () {
      this.onerror = null;
      this.src = "data:image/svg+xml;utf8," + fallbackSVG;
    };
  });

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
      }
    });
  }
});

