// ========================================
// A-ONE BAKERY - MENU PAGE JAVASCRIPT
// Independent | No Global Dependencies
// ========================================

// Product Data
// ========================================
// SUPABASE CONFIGURATION
// ========================================
const supabaseUrl = 'https://zawspjereggsjcdfyqaa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdWJhc2UiLCJzZWIiOiJlZnl6Inphd3NwamVyZWdnczJjZGZ5cWFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3ODc1OTAsImV4cCI6MjA5NDM2MzU5MH0.dNvPVD3-LwDmmNKBy1hWcx-IXymMsJAjv-E2bLY6tDE';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Mapping and Injecting
const categoryMap = {
    'single_tier': 'cake', '2_tier': 'cake', '3_tier': 'cake', '4_tier': 'cake', '5_tier': 'cake',
    'kids': 'cake', 'regular_cakes': 'cake', 'black_forest': 'cake', 'chocolate': 'cake', 
    'coconut': 'cake', 'fruit_nuts_&amp;_jaggery': 'cake', 'gulab_jamun': 'cake', 
    'lotus_biscoff': 'cake', 'mango': 'cake', 'marble': 'cake', 'oreo': 'cake', 
    'pineapple': 'cake', 'pistachio': 'cake', 'rasmalai': 'cake', 'red_velvet': 'cake', 
    'strawberry': 'cake', 'vanilla': 'cake',
    'cake_slice': 'cake_slice', 'cream_rolls': 'cream_rolls', 'cup_cakes': 'cup_cakes', 
    'cup_cake_clamshell': 'cup_cakes', 'pastries_in_clamshell': 'pastry', 'pudding_cups': 'pudding_cups',
    'round_biscuits': 'biscuits', 'rectangular_biscuits': 'biscuits',
    'biscuits_2.5lbs': 'biscuits', 'biscuits_340gms': 'biscuits', 'biscuits_5lbs': 'biscuits', 
    'biscuits_700g': 'biscuits',
    'sooji_milk_rusk': 'bread', 'tasty_tea_rusk': 'bread', 'whole_wheat_tea_rusk': 'bread',
    'pani_puri': 'pani_puri'
};

async function loadProducts() {
    try {
        const { data, error } = await _supabase
            .from('products')
            .select('*')
            .order('id', { ascending: true });

        if (error) throw error;

        products = data.map(p => {
            const mappedCategory = categoryMap[p.category] || p.category;
            return {
                ...p,
                subCategory: p.sub_category !== mappedCategory ? p.sub_category : null,
                category: mappedCategory
            };
        });

        // Update the Varieties counter dynamically
        const varietyStat = document.querySelector('.stat-num[data-target="493"]');
        if (varietyStat) {
            varietyStat.setAttribute('data-target', products.length);
            varietyStat.textContent = products.length + '+';
        }

        // Trigger initial render
        if (typeof renderProducts === 'function') {
            renderProducts(products);
        }
        
    } catch (err) {
        console.error('Error loading products from Supabase:', err);
    }
}


// Cart State
    cart = JSON.parse(localStorage.getItem('a1_cart')) || [];

// DOM Elements
    navbar = document.getElementById('navbar');
    cartBtn = document.getElementById('cartBtn');
    cartSidebar = document.getElementById('cartSidebar');
    cartOverlay = document.getElementById('cartOverlay');
    closeCart = document.getElementById('closeCart');
    cartItemsContainer = document.getElementById('cartItems');
    cartCount = document.getElementById('cartCount');
    cartTotal = document.getElementById('cartTotal');
    searchBtn = document.getElementById('searchBtn');
    searchOverlay = document.getElementById('searchOverlay');
    closeSearch = document.getElementById('closeSearch');
    searchInput = document.getElementById('searchInput');
    searchResults = document.getElementById('searchResults');
    mobileMenuBtn = document.getElementById('mobileMenuBtn');
    mobileMenu = document.getElementById('mobileMenu');
    closeMobile = document.getElementById('closeMobile');
    toast = document.getElementById('toast');
    toastMessage = document.getElementById('toastMessage');
    productModal = document.getElementById('productModal');
    modalClose = document.getElementById('modalClose');
    modalBody = document.getElementById('modalBody');
    checkoutBtn = document.getElementById('checkoutBtn');

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', async () => {
    initNavigation();
    initEventListeners();
    updateCart();

    const container = document.getElementById('productGrid');
    if (container) {
        container.innerHTML = '<div class="loading-state">Loading fresh bakery items...</div>';
    }
    
    await loadProducts();

    // Check URL params for filter
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');

    if (filterParam) {
        document.querySelectorAll('.cat-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.filter === filterParam);
        });
        renderProducts(filterParam);
    } else {
        renderProducts('all');
    }
});

// ========================================
// NAVIGATION
// ========================================
function initNavigation() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });
}

// ========================================
// PRODUCT RENDERING
// ========================================
function createProductCard(product, index) {
    const badgeClass = product.badgeType === 'new' ? 'badge-new' : 
                       product.badgeType === 'popular' ? 'badge-popular' : '';
    
    const categoryEmojis = {
        bread: '🥖', pastry: '🥐', cake: '🍰', cookie: '🍪', donut: '🍩', pie: '🥧',
        snacks: '🥟', biscuits: '🍪', pani_puri: '🥙', cakes: '🎂',
        single_tier: '🎂', "2_tier": '🎂', "3_tier": '🎂', "4_tier": '🎂', "5_tier": '🎂',
        cup_cakes: '🧁', round_biscuits: '🍪', rectangular_biscuits: '🍪',
        cake_slice: '🍰', cream_rolls: '🥐', cup_cake_clamshell: '🧁',
        kids: '🎈', pastries_in_clamshell: '🍰', pudding_cups: '🍮',
        "biscuits_2.5lbs": '🍪', biscuits_340gms: '🍪', biscuits_5lbs: '🍪', biscuits_700g: '🍪',
        regular_cakes: '🎂', sooji_milk_rusk: '🥖', tasty_tea_rusk: '🥖', whole_wheat_tea_rusk: '🥖'
    };

    return `
        <div class="product-card" data-id="${product.id}" style="animation-delay: ${index * 0.05}s">
            ${product.badge ? `<span class="product-badge ${badgeClass}">${product.badge}</span>` : ''}
            <div class="product-img">
                <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
                ${product.images.length > 1 ? `<span class="img-count"><i class="fas fa-images"></i> ${product.images.length}</span>` : ''}
                <div class="product-actions">
                    <button class="product-action-btn" onclick="quickView(${product.id})" title="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="product-action-btn" onclick="addToCart(${product.id})" title="Add to Cart">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">
                    <span>${categoryEmojis[product.category] || '🧁'}</span>
                    ${product.category}${product.subCategory ? ` <span class="sub-category">(${product.subCategory.replace(/_/g, ' ')})</span>` : ''}
                </span>
                <h3>${product.name}</h3>
                <p class="product-desc">${product.description.substring(0, 70)}...</p>
                <div class="product-footer">
                    <span class="product-price">
                        <span class="price-currency">$</span>${product.price.toFixed(2)}
                    </span>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderProducts(filter = 'all', maxPrice = 50, sort = 'popular') {
    const container = document.getElementById('menuProducts');
    const emptyState = document.getElementById('emptyProducts');
    const countBadge = document.getElementById('menuCountBadge');

    if (!container) return;

    let filtered = products.filter(p => {
        const matchCategory = filter === 'all' || p.category === filter;
        const matchPrice = p.price <= maxPrice;
        return matchCategory && matchPrice;
    });

    // Sort
    switch(sort) {
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

    // Update count
    const menuCountEl = document.getElementById('menuCount');
    if (menuCountEl) {
        menuCountEl.textContent = filter === 'all' ? 'Showing all items' : `Showing ${filtered.length} ${filter}(s)`;
    }
    if (countBadge) countBadge.textContent = filtered.length;

    if (filtered.length === 0) {
        container.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
    } else {
        if (emptyState) emptyState.style.display = 'none';
        container.innerHTML = filtered.map((p, i) => createProductCard(p, i)).join('');
    }
}

function filterByCategory(category) {
    document.querySelectorAll('.cat-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === category);
    });
    const maxPrice = document.getElementById('priceRange')?.value || 50;
    const sort = document.getElementById('sortSelect')?.value || 'popular';
    renderProducts(category, maxPrice, sort);
    
    // Scroll to products
    document.querySelector('.menu-content-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetFilters() {
    document.querySelectorAll('.cat-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === 'all');
    });
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const sortSelect = document.getElementById('sortSelect');
    
    if (priceRange) priceRange.value = 50;
    if (priceValue) priceValue.textContent = '$50';
    if (sortSelect) sortSelect.value = 'popular';
    
    renderProducts('all');
}

// ========================================
// QUICK VIEW MODAL
// ========================================
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const categoryEmojis = {
        bread: '🥖', pastry: '🥐', cake: '🍰', cookie: '🍪', donut: '🍩', pie: '🥧',
        snacks: '🥟', biscuits: '🍪', pani_puri: '🥙', cakes: '🎂',
        single_tier: '🎂', "2_tier": '🎂', "3_tier": '🎂', "4_tier": '🎂', "5_tier": '🎂',
        cup_cakes: '🧁', round_biscuits: '🍪', rectangular_biscuits: '🍪',
        cake_slice: '🍰', cream_rolls: '🥐', cup_cake_clamshell: '🧁',
        kids: '🎈', pastries_in_clamshell: '🍰', pudding_cups: '🍮',
        "biscuits_2.5lbs": '🍪', biscuits_340gms: '🍪', biscuits_5lbs: '🍪', biscuits_700g: '🍪',
        regular_cakes: '🎂', sooji_milk_rusk: '🥖', tasty_tea_rusk: '🥖', whole_wheat_tea_rusk: '🥖'
    };

    if (modalBody) {
        modalBody.innerHTML = `
            <div class="modal-img">
                <img id="mainModalImg" src="${product.images[0]}" alt="${product.name}">
                ${product.images.length > 1 ? `
                <div class="modal-thumbnails">
                    ${product.images.map((img, i) => `
                        <img src="${img}" alt="${product.name} ${i+1}" onclick="document.getElementById('mainModalImg').src='${img}'" class="${i === 0 ? 'active' : ''}">
                    `).join('')}
                </div>
                ` : ''}
            </div>
            <div class="modal-info">
                <span class="product-category">
                    <span>${categoryEmojis[product.category] || '🧁'}</span>
                    ${product.category}
                </span>
                <h2>${product.name}</h2>
                <div class="modal-price">$${product.price.toFixed(2)}</div>
                <p>${product.description}</p>
                <div class="modal-meta">
                    <div class="modal-meta-item">
                        <i class="fas fa-star"></i>
                        <span>Rating: ${product.rating} (${product.reviews} reviews)</span>
                    </div>
                    <div class="modal-meta-item">
                        <i class="fas fa-truck"></i>
                        <span>Local Pickup & Delivery Available</span>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id}); closeModal();">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    }

    productModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    productModal?.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// CART LOGIC
// ========================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCart();
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCart();
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
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
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-emoji">🧺</div>
                <p>Your cart is empty</p>
                <span>Add some delicious items!</span>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.images[0]}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>$${(item.price * item.quantity).toFixed(2)}</p>
                    <div class="cart-item-actions">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = `$${total.toFixed(2)}`;
    
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = count;
}

// ========================================
// UTILS
// ========================================
function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

function initEventListeners() {
    // Tabs
    document.querySelectorAll('.cat-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            filterByCategory(tab.dataset.filter);
        });
    });

    // Price Range
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    if (priceRange && priceValue) {
        priceRange.addEventListener('input', (e) => {
            priceValue.textContent = `$${e.target.value}`;
            const activeFilter = document.querySelector('.cat-tab.active')?.dataset.filter || 'all';
            const sort = document.getElementById('sortSelect')?.value || 'popular';
            renderProducts(activeFilter, e.target.value, sort);
        });
    }

    // Sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const activeFilter = document.querySelector('.cat-tab.active')?.dataset.filter || 'all';
            const maxPrice = document.getElementById('priceRange')?.value || 50;
            renderProducts(activeFilter, maxPrice, e.target.value);
        });
    }

    // Search
    searchBtn?.addEventListener('click', () => searchOverlay?.classList.add('active'));
    closeSearch?.addEventListener('click', () => searchOverlay?.classList.remove('active'));
    
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

        if (searchResults) {
            searchResults.innerHTML = matches.map(p => `
                <div class="search-result-item" onclick="quickView(${p.id}); document.getElementById('searchOverlay').classList.remove('active');">
                    <img src="${p.images[0]}" alt="${p.name}">
                    <div>
                        <h4>${p.name}</h4>
                        <p>$${p.price.toFixed(2)}</p>
                    </div>
                </div>
            `).join('');
        }
    });

    // Cart
    cartBtn?.addEventListener('click', () => {
        cartSidebar?.classList.add('active');
        cartOverlay?.classList.add('active');
    });

    const closeCartElements = [closeCart, cartOverlay];
    closeCartElements.forEach(el => {
        el?.addEventListener('click', () => {
            cartSidebar?.classList.remove('active');
            cartOverlay?.classList.remove('active');
        });
    });

    // Modal
    modalClose?.addEventListener('click', closeModal);
    productModal?.addEventListener('click', (e) => {
        if (e.target === productModal) closeModal();
    });

    // Mobile Menu
    mobileMenuBtn?.addEventListener('click', () => mobileMenu?.classList.add('active'));
    closeMobile?.addEventListener('click', () => mobileMenu?.classList.remove('active'));

    // Newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('🧁 Welcome to the family! Check your inbox soon.');
        e.target.reset();
    });

    // Checkout
    checkoutBtn?.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Your cart is empty!');
            return;
        }
        window.location.href = 'checkout.html';
    });
}
