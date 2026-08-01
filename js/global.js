// ========================================
// A-ONE BAKERY - MAIN JAVASCRIPT
// Canada's Finest Bakery Chain
// ========================================

// Download Protection
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
        e.preventDefault();
    }
});

document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
        e.preventDefault();
    }
});

// Product Data
let products = [
    {
        id: 1,
        name: "Veg Samosa",
        category: "snacks",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600",
        description: "Crispy pastry filled with spiced potatoes and peas. A classic Indian snack.",
        badge: "Best Seller",
        rating: 4.9,
        reviews: 234
    },
    {
        id: 2,
        name: "Paneer Pakora",
        category: "snacks",
        price: 4.49,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600",
        description: "Cottage cheese coated in seasoned chickpea flour and deep-fried to golden perfection.",
        badge: "Popular",
        rating: 4.8,
        reviews: 189
    },
    {
        id: 3,
        name: "3 Tier Red Rose Cake",
        category: "cake",
        price: 145.99,
        image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&q=80&w=600",
        description: "Elegant 3-tier cake decorated with beautiful red roses. Perfect for weddings and special occasions.",
        badge: "Top Rated",
        rating: 5.0,
        reviews: 156
    },
    {
        id: 4,
        name: "Ajwain Biscuits",
        category: "biscuits",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600",
        description: "Crispy and savory biscuits infused with carom seeds. Perfect companion for your evening tea.",
        badge: null,
        rating: 4.7,
        reviews: 312
    },
    {
        id: 5,
        name: "Black Forest Pastry",
        category: "pastry",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=600",
        description: "Classic chocolate sponge layered with whipped cream and cherries.",
        badge: "New",
        rating: 4.6,
        reviews: 278
    },
    {
        id: 6,
        name: "Sooji Milk Tea Rusk",
        category: "rusk",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
        description: "Crunchy double-baked semolina toast. The ultimate chai time essential.",
        badge: "Classic",
        rating: 4.8,
        reviews: 145
    },
    {
        id: 7,
        name: "Ras Malai",
        category: "sweets",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600",
        description: "Soft cottage cheese dumplings soaked in sweetened, thickened milk delicately flavored with cardamom.",
        badge: "Chef's Pick",
        rating: 4.9,
        reviews: 198
    },
    {
        id: 8,
        name: "Pani Puri",
        category: "snacks",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600",
        description: "Crispy hollow puris served with tangy tamarind water and spiced potatoes.",
        badge: "Popular",
        rating: 4.9,
        reviews: 167
    },
    {
        id: 9,
        name: "Baby Boss Cake",
        category: "cake",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&q=80&w=600",
        description: "Custom designed Baby Boss themed cake. Sure to bring a smile to your little one's face.",
        badge: "Custom",
        rating: 5.0,
        reviews: 89
    },
    {
        id: 10,
        name: "Namak Para",
        category: "snacks",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600",
        description: "Crunchy, savory diamond-shaped bites seasoned with subtle spices.",
        badge: "Classic",
        rating: 4.8,
        reviews: 234
    }
];

// Cart State
let cart = JSON.parse(localStorage.getItem('a1_cart')) || [];

// DOM Elements
let navbar = document.getElementById('navbar');
let cartBtn = document.getElementById('cartBtn');
let cartSidebar = document.getElementById('cartSidebar');
let cartOverlay = document.getElementById('cartOverlay');
let closeCart = document.getElementById('closeCart');
let cartItems = document.getElementById('cartItems');
let cartCount = document.getElementById('cartCount');
let cartTotal = document.getElementById('cartTotal');
let searchBtn = document.getElementById('searchBtn');
let searchOverlay = document.getElementById('searchOverlay');
let closeSearch = document.getElementById('closeSearch');
let searchInput = document.getElementById('searchInput');
let searchResults = document.getElementById('searchResults');
let mobileMenuBtn = document.getElementById('mobileMenuBtn');
let mobileMenu = document.getElementById('mobileMenu');
let closeMobile = document.getElementById('closeMobile');
let toast = document.getElementById('toast');
let toastMessage = document.getElementById('toastMessage');
let productModal = document.getElementById('productModal');
let modalClose = document.getElementById('modalClose');
let modalBody = document.getElementById('modalBody');
let checkoutBtn = document.getElementById('checkoutBtn');
let placeOrderBtn = document.getElementById('placeOrderBtn');

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    updateCart();
    initEventListeners();
    
    // Page specific initializations
    if (document.getElementById('heroParticles')) initParticles();
    if (document.getElementById('testimonialsSlider')) initTestimonials();
    if (document.querySelector('.stat-num')) initCounters();
    if (document.getElementById('featuredSlider')) renderFeaturedProducts();
    
    if (document.getElementById('menuProducts')) {
        const urlParams = new URLSearchParams(window.location.search);
        const filterParam = urlParams.get('filter');
        if (filterParam) {
            document.querySelectorAll('.menu-filters li').forEach(li => {
                li.classList.toggle('active', li.dataset.filter === filterParam);
            });
        }
        // Only render if menu.js isn't handling it via Supabase
        if (typeof loadProducts === 'undefined') {
            renderMenuProducts(filterParam || 'all');
        }
        initScrollEffects();
    } else {
        initScrollEffects();
    }
    
    if (document.getElementById('orderNumber') && localStorage.getItem('a1_last_order')) {
        document.getElementById('orderNumber').textContent = localStorage.getItem('a1_last_order');
    }
});

// ========================================
// PARTICLES
// ========================================
function initParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 20 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        container.appendChild(particle);
    }
}

// ========================================
// NAVIGATION
// ========================================
function initNavigation() {
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Category links from footer
    document.querySelectorAll('[data-filter]').forEach(link => {
        link.addEventListener('click', (e) => {
            // Only redirect if we're not on menu.html
            if (!window.location.pathname.includes('menu.html')) {
                const filter = link.getAttribute('data-filter');
                window.location.href = 'menu.html?filter=' + filter;
            }
        });
    });
}




// ========================================
// SCROLL EFFECTS
// ========================================
function initScrollEffects() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-header, .category-card, .product-card, .team-card, .location-card').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// ========================================
// TESTIMONIALS SLIDER
// ========================================
function initTestimonials() {
    const cards = document.querySelectorAll('.testimonial-card');
    const dotsContainer = document.getElementById('testimonialDots');
    let current = 0;

    // Create dots
    cards.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
        cards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });
        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        current = index;
    }

    // Auto slide
    setInterval(() => {
        current = (current + 1) % cards.length;
        goToSlide(current);
    }, 5000);
}

// ========================================
// ANIMATED COUNTERS
// ========================================
function initCounters() {
    const counters = document.querySelectorAll('.stat-num');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetVal = entry.target.dataset.target;
                if (!targetVal) return;
                const target = parseInt(targetVal);
                if (isNaN(target)) return;

                const suffix = entry.target.textContent.replace(/[0-9.]/g, '').trim();
                animateCounter(entry.target, target, suffix);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target, suffix = '+') {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 30);
}

// ========================================
// PRODUCT RENDERING
// ========================================
function createProductCard(product) {
    return `
        <div class="product-card" data-id="${product.id}">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <div class="product-img">
                <img src="${(product.images && product.images.length > 0) ? product.images[0] : (product.img || product.image || 'assets/placeholder.jpg')}" alt="${product.name}" loading="lazy">
                <div class="product-actions">
                    <button class="product-action-btn" onclick="quickView(${product.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="product-action-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3>${product.name}</h3>
                <p class="product-desc">${product.description ? product.description.substring(0, 60) + '...' : ''}</p>
                <div class="product-footer">
                    <span class="product-price">$${(parseFloat(product.price) || 0).toFixed(2)}</span>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

function renderFeaturedProducts() {
    const container = document.getElementById('featuredSlider');
    if (!container) return;

    const featured = products.slice(0, 20);
    container.innerHTML = featured.map(createProductCard).join('');
}

function renderMenuProducts(filter = 'all', maxPrice = 50, sort = 'popular') {
    const container = document.getElementById('menuProducts');
    if (!container) return;

    let filtered = products.filter(p => {
        if (p.category === 'ignore') return false;
        const matchCategory = filter === 'all' || p.category === filter;
        const matchPrice = p.price <= maxPrice;
        return matchCategory && matchPrice;
    });

    // Sort
    switch (sort) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filtered.sort((a, b) => b.id - a.id);
            break;
        default:
            filtered.sort((a, b) => b.reviews - a.reviews);
    }

    document.getElementById('menuCount').textContent = `Showing ${filtered.length} items`;
    container.innerHTML = filtered.map(createProductCard).join('');
}

// ========================================
// MENU FILTERS
// ========================================
function filterMenuProducts() {
    const activeFilter = document.querySelector('.menu-filters li.active')?.dataset.filter || 'all';
    const maxPrice = document.getElementById('priceRange')?.value || 50;
    const sort = document.getElementById('sortSelect')?.value || 'popular';
    renderMenuProducts(activeFilter, maxPrice, sort);
}

// ========================================
// QUICK VIEW MODAL
// ========================================
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let weightsHtml = '';
    let currentPrice = product.price || 0;
    let selectedWeightStr = 'null';
    
    if (product.weights && product.weights.length > 0) {
        currentPrice = product.weights[0].price;
        selectedWeightStr = `'${product.weights[0].weight}'`;
        if (product.weights.length > 1) {
            weightsHtml = `
                <div class="modal-weights" style="margin-bottom: 1rem;">
                    <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-dim);">Select Option:</label>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;" id="quickViewWeights">
                        ${product.weights.map((w, i) => `
                            <button class="btn btn-outline ${i === 0 ? 'active' : ''}" style="padding: 0.5rem 1rem; border-radius: 20px; ${i === 0 ? 'background: var(--primary); color: black;' : 'background: transparent; color: white;'}" onclick="selectQuickViewWeight(this, ${w.price}, '${w.weight}')">${w.weight}</button>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    }

    let thumbnailsHtml = '';
    if (product.images && product.images.length > 1) {
        thumbnailsHtml = `
            <div style="display: flex; gap: 0.5rem; margin-top: 1rem; overflow-x: auto; padding-bottom: 0.5rem;">
                ${product.images.map((img, i) => `
                    <img src="${img}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px; cursor: pointer; border: 2px solid ${i === 0 ? 'var(--primary)' : 'transparent'};" onclick="document.getElementById('modalMainImg').src=this.src; this.parentElement.querySelectorAll('img').forEach(el=>el.style.borderColor='transparent'); this.style.borderColor='var(--primary)';">
                `).join('')}
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="modal-img" style="flex: 1; min-width: 300px;">
            <img id="modalMainImg" src="${(product.images && product.images.length > 0) ? product.images[0] : (product.img || product.image || 'assets/placeholder.jpg')}" alt="${product.name}" style="width: 100%; border-radius: 12px; object-fit: cover;">
            ${thumbnailsHtml}
        </div>
        <div class="modal-info" style="flex: 1; padding: 1rem;">
            <span class="product-category">${product.category}</span>
            <h2 style="margin: 0.5rem 0;">${product.name}</h2>
            <div class="modal-price" id="modalPrice" style="font-size: 1.5rem; color: var(--primary); font-weight: bold; margin-bottom: 1rem;">$${(parseFloat(currentPrice) || 0).toFixed(2)}</div>
            ${weightsHtml}
            <p style="color: var(--text-dim); line-height: 1.6; margin-bottom: 1rem;">${product.description}</p>
            <div class="modal-meta" style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem;">
                <div class="modal-meta-item">
                    <i class="fas fa-star" style="color: #fbbf24;"></i>
                    <span>${product.rating || '4.9'} (${product.reviews || '100+'} reviews)</span>
                </div>
                ${product.allergens ? `
                <div class="modal-meta-item" style="grid-column: span 2; margin-top: 0.5rem; color: #ef4444;">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span><strong>Allergens:</strong> ${product.allergens}</span>
                </div>
                ` : ''}
            </div>
            <div class="modal-qty" style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                <label style="font-weight: 600;">Quantity:</label>
                <div class="cart-item-actions" style="display: flex; align-items: center; background: rgba(255,255,255,0.05); border-radius: 8px; padding: 0.25rem;">
                    <button class="qty-btn" style="width: 30px; height: 30px; border-radius: 6px; border: none; background: rgba(255,255,255,0.1); color: white; cursor: pointer;" onclick="this.nextElementSibling.value = Math.max(1, parseInt(this.nextElementSibling.value) - 1)">-</button>
                    <input type="number" value="1" min="1" id="modalQty" style="width: 50px; text-align: center; border: none; background: transparent; color: white; font-weight: 600;">
                    <button class="qty-btn" style="width: 30px; height: 30px; border-radius: 6px; border: none; background: rgba(255,255,255,0.1); color: white; cursor: pointer;" onclick="this.previousElementSibling.value = parseInt(this.previousElementSibling.value) + 1">+</button>
                </div>
            </div>
            <div class="modal-actions">
                <button class="btn btn-primary" style="width: 100%; justify-content: center;" onclick="addToCart(${product.id}, parseInt(document.getElementById('modalQty').value), window.currentQuickViewWeight !== undefined ? window.currentQuickViewWeight : ${selectedWeightStr}); closeModal();">
                    <i class="fas fa-shopping-bag"></i>
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    `;

    window.currentQuickViewWeight = selectedWeightStr === 'null' ? null : selectedWeightStr.replace(/'/g, "");
    
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

window.selectQuickViewWeight = function(btn, price, weight) {
    document.querySelectorAll('#quickViewWeights button').forEach(b => {
        b.classList.remove('active');
        b.style.background = 'transparent';
        b.style.color = 'white';
    });
    btn.classList.add('active');
    btn.style.background = 'var(--primary)';
    btn.style.color = 'black';
    document.getElementById('modalPrice').textContent = '$' + (parseFloat(price) || 0).toFixed(2);
    window.currentQuickViewWeight = weight;
};

function closeModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// CART FUNCTIONS
// ========================================
function addToCart(productId, quantity = 1, selectedWeight = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let weight = selectedWeight;
    if (product.weights && product.weights.length > 0) {
        if (!weight) {
            if (product.weights.length === 1) {
                weight = product.weights[0].weight;
            } else {
                quickView(productId);
                return;
            }
        }
    }

    const existingItem = cart.find(item => item.id === productId && item.selectedWeight === weight);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        const itemPrice = weight && product.weights ? (product.weights.find(w => w.weight === weight)?.price || product.price) : product.price;
        cart.push({ ...product, quantity, selectedWeight: weight, price: itemPrice });
    }

    saveCart();
    updateCart();
    const weightText = weight && weight !== 'Standard' ? ` (${weight})` : '';
    showToast(`${product.name}${weightText} added to cart!`);
}

function removeFromCart(productId, selectedWeight = null) {
    cart = cart.filter(item => !(item.id === productId && item.selectedWeight === selectedWeight));
    saveCart();
    updateCart();
}

function updateQuantity(productId, change, selectedWeight = null) {
    const item = cart.find(item => item.id === productId && item.selectedWeight === selectedWeight);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId, selectedWeight);
        } else {
            saveCart();
            updateCart();
        }
    }
}

function saveCart() {
    localStorage.setItem('a1_cart', JSON.stringify(cart));
}

function updateCart() {
    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"></i>
                <p>Your cart is empty</p>
                <span>Add some delicious items!</span>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${(item.images && item.images.length > 0) ? item.images[0] : (item.img || item.image || 'assets/placeholder.jpg')}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    ${item.selectedWeight && item.selectedWeight !== 'Standard' ? `<p style="font-size: 0.8rem; color: var(--primary); margin: -4px 0 4px;">${item.selectedWeight}</p>` : ''}
                    <p>$${(parseFloat(item.price) || 0).toFixed(2)}</p>
                    <div class="cart-item-actions">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1, ${item.selectedWeight ? `'${item.selectedWeight}'` : 'null'})">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1, ${item.selectedWeight ? `'${item.selectedWeight}'` : 'null'})">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id}, ${item.selectedWeight ? `'${item.selectedWeight}'` : 'null'})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;

    // Update checkout
    updateCheckout();
}

function updateCheckout() {
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutSubtotal = document.getElementById('checkoutSubtotal');
    const checkoutTax = document.getElementById('checkoutTax');
    const checkoutTotal = document.getElementById('checkoutTotal');

    if (!checkoutItems) return;

    if (cart.length === 0) {
        checkoutItems.innerHTML = '<p style="color: var(--gray); text-align: center;">Your cart is empty</p>';
    } else {
        checkoutItems.innerHTML = cart.map(item => `
            <div class="checkout-item">
                <span>${item.name}${item.selectedWeight && item.selectedWeight !== 'Standard' ? ` (${item.selectedWeight})` : ''} x${item.quantity}</span>
                <span>$${((parseFloat(item.price) || 0) * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.13;
    const total = subtotal + tax;

    if (checkoutSubtotal) checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    if (checkoutTax) checkoutTax.textContent = `$${tax.toFixed(2)}`;
    if (checkoutTotal) checkoutTotal.textContent = `$${total.toFixed(2)}`;
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
function initEventListeners() {
    // Cart sidebar
    cartBtn?.addEventListener('click', () => {
        cartSidebar?.classList.add('active');
        cartOverlay?.classList.add('active');
    });

    closeCart?.addEventListener('click', closeCartSidebar);
    cartOverlay?.addEventListener('click', closeCartSidebar);

    function closeCartSidebar() {
        cartSidebar?.classList.remove('active');
        cartOverlay?.classList.remove('active');
    }

    // Search
    searchBtn?.addEventListener('click', () => {
        searchOverlay?.classList.add('active');
        searchInput?.focus();
    });

    closeSearch?.addEventListener('click', () => {
        searchOverlay?.classList.remove('active');
        if (searchResults) searchResults.innerHTML = '';
        if (searchInput) searchInput.value = '';
    });

    searchInput?.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) {
            if (searchResults) searchResults.innerHTML = '';
            return;
        }

        const matches = products.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );

        searchResults.innerHTML = matches.map(p => `
            <div class="search-result-item" onclick="quickView(${p.id}); document.getElementById('searchOverlay').classList.remove('active');">
                <img src="${p.image}" alt="${p.name}">
                <div>
                    <h4 style="color: white; margin-bottom: 4px;">${p.name}</h4>
                    <p style="color: var(--primary); font-weight: 600;">$${(parseFloat(p.price) || 0).toFixed(2)}</p>
                </div>
            </div>
        `).join('');
    });

    // Mobile menu
    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenu?.classList.add('active');
    });

    closeMobile?.addEventListener('click', () => {
        mobileMenu?.classList.remove('active');
    });

    // Modal
    modalClose?.addEventListener('click', closeModal);
    productModal?.addEventListener('click', (e) => {
        if (e.target === productModal) closeModal();
    });

    // Menu filters
    document.querySelectorAll('.menu-filters li').forEach(li => {
        li.addEventListener('click', () => {
            document.querySelectorAll('.menu-filters li').forEach(l => l.classList.remove('active'));
            li.classList.add('active');
            filterMenuProducts();
        });
    });

    // Price range
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            document.getElementById('priceValue').textContent = `$${e.target.value}`;
            filterMenuProducts();
        });
    }

    // Sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', filterMenuProducts);
    }

    // Checkout
    checkoutBtn?.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Your cart is empty!');
            return;
        }
        closeCartSidebar();
        window.location.href = 'checkout.html';
    });

        placeOrderBtn?.addEventListener('click', async () => {
        if (cart.length === 0) {
            showToast('Your cart is empty!');
            return;
        }

        const orderNum = '#A1-' + Date.now().toString().slice(-6);
        const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 1.13; // with tax
        
        try {
            placeOrderBtn.textContent = 'Processing...';
            placeOrderBtn.disabled = true;

            const nameInput = document.getElementById('checkoutName');
            const emailInput = document.getElementById('checkoutEmail');
            const phoneInput = document.getElementById('checkoutPhone');
            const addressInput = document.getElementById('checkoutAddress');
            
            const customerName = nameInput ? nameInput.value : 'Walk-in Customer';
            const customerEmail = emailInput ? emailInput.value : null;
            const customerPhone = phoneInput ? phoneInput.value : null;
            const shippingAddress = addressInput ? addressInput.value : null;

            let customerId = null;
            if (customerEmail && typeof _supabase !== 'undefined') {
                const { data: custData } = await _supabase.from('customers').select('id').eq('email', customerEmail).single();
                if (custData) {
                    customerId = custData.id;
                } else {
                    const { data: newCust, error: custErr } = await _supabase.from('customers').insert([{
                        name: customerName,
                        email: customerEmail,
                        phone: customerPhone,
                        address: shippingAddress
                    }]).select('id').single();
                    if (!custErr && newCust) customerId = newCust.id;
                }
            }

            if (typeof _supabase !== 'undefined') {
                const { data: orderData, error: orderErr } = await _supabase.from('orders').insert([{
                    order_number: orderNum,
                    customer_id: customerId,
                    customer_name: customerName,
                    customer_email: customerEmail,
                    customer_phone: customerPhone,
                    total_amount: totalAmount.toFixed(2),
                    shipping_address: shippingAddress
                }]).select('id').single();

                if (orderErr) throw orderErr;

                const orderItems = cart.map(item => ({
                    order_id: orderData.id,
                    product_id: item.id,
                    product_name: `${item.name}${item.selectedWeight && item.selectedWeight !== 'Standard' ? ` (${item.selectedWeight})` : ''}`,
                    quantity: item.quantity,
                    price_at_time: item.price
                }));

                await _supabase.from('order_items').insert(orderItems);
            }

            localStorage.setItem('a1_last_order', orderNum);
            cart = [];
            saveCart();
            updateCart();
            window.location.href = 'success.html';

        } catch (err) {
            console.error('Error placing order:', err);
            showToast('Error placing order. Please try again.');
            placeOrderBtn.textContent = 'Place Order';
            placeOrderBtn.disabled = false;
        }
    });

    // Payment methods
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', () => {
            document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
            method.classList.add('active');
        });
    });

    // Forms
    document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Thank you for subscribing!');
        e.target.reset();
    });

    document.getElementById('contactForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Message sent successfully!');
        e.target.reset();
    });

    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            navigateToPage('menu');
            setTimeout(() => {
                document.querySelectorAll('.menu-filters li').forEach(li => {
                    li.classList.toggle('active', li.dataset.filter === category);
                });
                filterMenuProducts();
            }, 100);
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            searchOverlay.classList.remove('active');
            cartSidebar.classList.remove('active');
            cartOverlay.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========================================
// FOOTER INTERACTIVE ICONS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const footerGrid = document.getElementById('footerInteractiveGrid');
    const icons = document.querySelectorAll('.interactive-icon-wrapper');
    
    if (!footerGrid || icons.length === 0) return;

    // 1. Pop out when scrolled into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Staggered pop-in animation
                icons.forEach((icon, index) => {
                    setTimeout(() => {
                        icon.classList.add('popped');
                    }, index * 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(footerGrid);

    // 2. Dodge the cursor
    footerGrid.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        icons.forEach(icon => {
            if (!icon.classList.contains('popped')) return;

            const rect = icon.getBoundingClientRect();
            // Calculate center of the icon
            const iconX = rect.left + rect.width / 2;
            const iconY = rect.top + rect.height / 2;

            const distX = mouseX - iconX;
            const distY = mouseY - iconY;
            const distance = Math.sqrt(distX * distX + distY * distY);

            // If mouse is within 150px, dodge away
            const interactionRadius = 150;
            if (distance < interactionRadius && distance > 0) {
                const force = (interactionRadius - distance) / interactionRadius; 
                const maxPush = 100;
                
                const pushX = -(distX / distance) * maxPush * force;
                const pushY = -(distY / distance) * maxPush * force;

                icon.style.setProperty('--tx', `${pushX}px`);
                icon.style.setProperty('--ty', `${pushY}px`);
            } else {
                icon.style.setProperty('--tx', `0px`);
                icon.style.setProperty('--ty', `0px`);
            }
        });
    });

    // Reset when mouse leaves grid
    footerGrid.addEventListener('mouseleave', () => {
        icons.forEach(icon => {
            icon.style.setProperty('--tx', `0px`);
            icon.style.setProperty('--ty', `0px`);
        });
    });
});

