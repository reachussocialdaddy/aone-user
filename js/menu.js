// ========================================
// A One Bakery - MENU PAGE JAVASCRIPT
// ========================================

// SUPABASE CONFIGURATION
const supabaseUrl = 'https://zawspjereggsjcdfyqaa.supabase.co';
const supabaseKey = 'sb_publishable_acXhrX9ErLJDunYp91rODQ_8HpYi6kH';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Global category mapping
const categoryMap = {
    'Cookies': 'Cookies',
    'Breads': 'Breads',
    'Creamrolls': 'Creamrolls',
    'Bhujiya and others': 'Bhujiya and others',
    // Ignore cakes and cupcakes if any exist
    'single_tier': 'ignore', '2_tier': 'ignore', '3_tier': 'ignore', '4_tier': 'ignore', '5_tier': 'ignore',
    'kids': 'ignore', 'regular_cakes': 'ignore', 'black_forest': 'ignore', 'chocolate': 'ignore', 
    'coconut': 'ignore', 'fruit_nuts_&amp;_jaggery': 'ignore', 'gulab_jamun': 'ignore', 
    'lotus_biscoff': 'ignore', 'mango': 'ignore', 'marble': 'ignore', 'oreo': 'ignore', 
    'pineapple': 'ignore', 'pistachio': 'ignore', 'rasmalai': 'ignore', 'red_velvet': 'ignore', 
    'strawberry': 'ignore', 'vanilla': 'ignore', 'cup_cakes': 'ignore', 'cup_cake_clamshell': 'ignore', 'cake': 'ignore'
};

async function loadProducts() {
    try {
        const { data, error } = await _supabase
            .from('products')
            .select('*')
            .order('id', { ascending: true });

        if (error) throw error;

        // Populate the global products array (declared in global.js)
        if (typeof products !== 'undefined') {
            products = data.map(p => {
                const mappedCategory = categoryMap[p.category] || p.category;
                return {
                    ...p,
                    subCategory: p.sub_category !== mappedCategory ? p.sub_category : null,
                    category: mappedCategory
                };
            });
        }

        // Update the Varieties counter dynamically
        const varietyStat = document.getElementById('totalVarieties') || document.querySelector('.stat-num[data-target="493"]');
        if (varietyStat) {
            varietyStat.setAttribute('data-target', products.length);
            if (typeof animateCounter === 'function') {
                animateCounter(varietyStat, products.length, '+');
            } else {
                varietyStat.textContent = products.length + '+';
            }
        }

        // Trigger initial render
        if (typeof renderProducts === 'function') {
            renderProducts('all');
        }
        
    } catch (err) {
        console.warn('Using local product catalog for menu page:', err);
        const varietyStat = document.getElementById('totalVarieties') || document.querySelector('.stat-num[data-target="493"]');
        if (varietyStat && typeof products !== 'undefined') {
            varietyStat.setAttribute('data-target', products.length);
            if (typeof animateCounter === 'function') {
                animateCounter(varietyStat, products.length, '+');
            } else {
                varietyStat.textContent = products.length + '+';
            }
        }
        if (typeof renderProducts === 'function') {
            renderProducts('all');
        }
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
                <img src="${(product.images && product.images.length > 0) ? product.images[0] : 'assets/placeholder.jpg'}" alt="${product.name}" loading="lazy">
                ${(product.images && product.images.length > 1) ? `<span class="img-count"><i class="fas fa-images"></i> ${product.images.length}</span>` : ''}
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
                <p class="product-desc">${product.description ? product.description.substring(0, 70) + '...' : ''}</p>
                <div class="product-footer">
                    <span class="product-price">
                        <span class="price-currency">$</span>${(parseFloat(product.price) || 0).toFixed(2)}
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
        if (p.category === 'ignore') return false;
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
            const categoryOrder = {
                'Cookies': 1,
                'Creamrolls': 2,
                'Cake Rusk': 3,
                'Breads': 3,
                'Bhujiya and others': 4,
                'snacks': 5
            };
            filtered.sort((a, b) => {
                const orderA = categoryOrder[a.category] || 99;
                const orderB = categoryOrder[b.category] || 99;
                if (orderA !== orderB) {
                    return orderA - orderB;
                }
                return (b.reviews || 0) - (a.reviews || 0);
            });
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

    if (modalBody) {
        modalBody.innerHTML = `
            <div class="modal-img">
                <img id="mainModalImg" src="${(product.images && product.images.length > 0) ? product.images[0] : 'assets/placeholder.jpg'}" alt="${product.name}">
                ${(product.images && product.images.length > 1) ? `
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
                <div class="modal-price" id="modalPrice">$${(parseFloat(currentPrice) || 0).toFixed(2)}</div>
                ${weightsHtml}
                <p>${product.description}</p>
                <div class="modal-meta">
                    <div class="modal-meta-item">
                        <i class="fas fa-star"></i>
                        <span>Rating: ${product.rating || '4.9'} (${product.reviews || '100+'} reviews)</span>
                    </div>
                    <div class="modal-meta-item">
                        <i class="fas fa-truck"></i>
                        <span>Local Pickup & Delivery Available</span>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id}, 1, window.currentQuickViewWeight !== undefined ? window.currentQuickViewWeight : ${selectedWeightStr}); closeModal();">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    }

    window.currentQuickViewWeight = selectedWeightStr === 'null' ? null : selectedWeightStr.replace(/'/g, "");

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

function updateQuantity(productId, delta, selectedWeight = null) {
    const item = cart.find(item => item.id === productId && item.selectedWeight === selectedWeight);
    if (item) {
        item.quantity += delta;
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
                <img src="${(item.images && item.images.length > 0) ? item.images[0] : item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    ${item.selectedWeight && item.selectedWeight !== 'Standard' ? `<p style="font-size: 0.8rem; color: var(--primary); margin: -4px 0 4px;">${item.selectedWeight}</p>` : ''}
                    <p>$${((parseFloat(item.price) || 0) * item.quantity).toFixed(2)}</p>
                    <div class="cart-item-actions">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1, '${item.selectedWeight || ''}')">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1, '${item.selectedWeight || ''}')">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id}, '${item.selectedWeight || ''}')">
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
                        <p>$${(parseFloat(p.price) || 0).toFixed(2)}</p>
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
